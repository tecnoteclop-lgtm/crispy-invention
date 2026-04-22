const nextJest = require("next/jest")

const createJestConfig = nextJest({ dir: "./" })

/** @type {import("jest").Config} */
const config = {
  testEnvironment: "node",
  setupFilesAfterFramework: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: { "^@/(.*)$": "<rootDir>/$1" },
  testPathPattern: ["<rootDir>/__tests__/**/*.test.ts", "<rootDir>/__tests__/**/*.test.tsx"],
  collectCoverageFrom: [
    "lib/**/*.ts",
    "app/api/**/*.ts",
    "components/**/*.tsx",
    "!**/*.d.ts",
  ],
}

module.exports = createJestConfig(config)
