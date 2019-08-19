module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  setupFiles: [
    '<rootDir>/unit-test/setup.js',
  ],
  moduleNameMapper: {
    '^.+\\.(css|svg|png)$': '<rootDir>/unit-test/jest-mock.js',
    '^modules(.*)$': '<rootDir>/src/modules$1',
    '^core(.*)$': '<rootDir>/src/core$1',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    }
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{ts,tsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{ts,tsx}'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
    'json',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/unit-test/',
  ],
}
