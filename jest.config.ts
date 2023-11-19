import nextJest from "next/jest.js";
import type { Config } from "jest";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

//ここに設定についてのドキュメントがある：https://jestjs.io/docs/configuration
// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config: Config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest", //JestはTypeScriptのテストを実行するための設定を自動的に処理できる
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
