/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
      'ts-jest': {
          tsconfig: '<rootDir>/tsconfig.json',
      },
  },
  testMatch: [ "<rootDir>/src/e2e.spec.ts" ],
  transformIgnorePatterns: [ "<rootDir>/node_mdoules/*" ],
};