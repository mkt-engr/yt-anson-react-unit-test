// import "@testing-library/jest-dom/extend-expect";

//https://stackoverflow.com/questions/77328459/cannot-find-module-testing-library-jest-dom-extend-expect-from-jest-setup-js
//下のimportに切り替えるとエラーがなくなった。v6でBreaking Changeがあったみたい
import "@testing-library/jest-dom";
import { server } from "./mocks/server";
// import "whatwg-fetch";

beforeAll(() => {
  server.listen();
});

beforeEach(() => {});
afterEach(() => {
  //UserList.test.tsx内のテストでserver.useを用いてレスポンスをモックしたものをリセットする
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
