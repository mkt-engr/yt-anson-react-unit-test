// import "@testing-library/jest-dom/extend-expect";

//https://stackoverflow.com/questions/77328459/cannot-find-module-testing-library-jest-dom-extend-expect-from-jest-setup-js
//下のimportに切り替えるとエラーがなくなった。v6でBreaking Changeがあったみたい
import "@testing-library/jest-dom";
import { server } from "./mocks/server";
beforeAll(() => {
  server.listen();
});

beforeEach(() => {});
afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
