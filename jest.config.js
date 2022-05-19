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
  testPathIgnorePatterns: [ "src/e2e.spec.ts" ],
  collectCoverageFrom: [
    "src/**/*ts",
    "!(src/*.spec.ts)",
    "!(src/*.d.ts"
  ],
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: [ "html", "text", "text-summary" ]
};