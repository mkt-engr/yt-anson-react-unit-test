import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home Page - Rendering", () => {
  it("ホームページのテキストがあること", () => {
    render(<Home />);
    //<Home>コンポーネントに"Home Page"という文字列が表示されることのアサーショ
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });

  it("Click Meと書かれたボタンがあること", () => {
    render(<Home />);
    expect(
      screen.getByRole("button", { name: "Click Me" })
    ).toBeInTheDocument();
  });

  //テキストエリアがあることのテスト
  it("テキストエリアがあること", () => {
    render(<Home />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
