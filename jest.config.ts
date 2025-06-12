import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
};

export default config;
