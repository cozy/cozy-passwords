import flag from 'cozy-flags'

const fetchHint = async client => {
  if (flag('passwords.force-no-hint')) {
    return false
  }
  try {
    const hint = await client
      .getStackClient()
      .collection('io.cozy.settings')
      .get('hint')
    return hint
  } catch (e) {
    return null
  }
}

export { fetchHint }
