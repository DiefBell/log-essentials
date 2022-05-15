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
  transformIgnorePatterns: [ "<rootDir>/node_mdoules/*" ],
  collectCoverageFrom: [
    "src/**/{!(e2e),}.spec.ts"
  ]
};