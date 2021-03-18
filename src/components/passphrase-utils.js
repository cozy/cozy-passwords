const w = window

function randomBytes(length) {
  const arr = new Uint8Array(length)
  w.crypto.getRandomValues(arr)
  return arr.buffer
}

function fromBufferToB64(buffer) {
  let binary = ''
  const bytes = new Uint8Array(buffer)
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return w.btoa(binary)
}

// Resolves to a new encryption key, encrypted with
// the masterKey and ready to be sent to the server on onboarding.
async function makeEncKey(masterKey) {
  const subtle = w.crypto.subtle
  const encKey = randomBytes(64)
  const iv = randomBytes(16)
  const impKey = await subtle.importKey(
    'raw',
    masterKey,
    { name: 'AES-CBC' },
    false,
    ['encrypt']
  )
  const encrypted = await subtle.encrypt(
    { name: 'AES-CBC', iv: iv },
    impKey,
    encKey
  )
  const iv64 = fromBufferToB64(iv)
  const data = fromBufferToB64(encrypted)
  return {
    // 0 means AesCbc256_B64
    cipherString: `0.${iv64}|${data}`,
    key: encKey
  }
}

export const forceSetVaultPassphrase = async (
  client,
  vaultClient,
  passphrase
) => {
  const {
    Kdf: kdf,
    KdfIterations: kdfIterations
  } = await client.stackClient.fetchJSON(
    'POST',
    '/bitwarden/api/accounts/prelogin'
  )

  const masterKey = await vaultClient.computeMasterKey(
    passphrase,
    kdfIterations,
    kdf
  )
  const passwordHash = await vaultClient.computeHashedPassword(
    passphrase,
    masterKey
  )

  const encryptionKey = await makeEncKey(masterKey.encKey)

  await client.stackClient.fetchJSON('PUT', '/settings/passphrase', {
    new_passphrase: passwordHash,
    key: encryptionKey.cipherString,
    iterations: kdfIterations,
    force: true
  })
}
