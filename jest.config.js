module.exports = {
  testURL: 'http://localhost/',
  moduleFileExtensions: ['js', 'jsx', 'json', 'styl'],
  setupFiles: ['<rootDir>/test/jestLib/setup.js'],
  moduleDirectories: ['src', 'node_modules'],
  moduleNameMapper: {
    '\\.(png|gif|jpe?g|svg)$': '<rootDir>/test/__mocks__/fileMock.js',
    // identity-obj-proxy module is installed by cozy-scripts
    '\\.(css|styl)$': 'identity-obj-proxy'
  },
  transformIgnorePatterns: ['node_modules/(?!cozy-ui|cozy-keys-lib)'],
  transform: {
    // babel-jest module is installed by cozy-scripts
    '^.+\\.jsx?$': 'babel-jest'
  },
  globals: {
    __ALLOW_HTTP__: false,
    __TARGET__: 'browser',
    cozy: {}
  },
  browser: true
}
