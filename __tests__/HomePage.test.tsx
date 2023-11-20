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
  it("Enter Random Textのラベルがあるテキストエリアがあること", () => {
    render(<Home />);
    // expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByLabelText(/Enter Random Text/)).toBeInTheDocument();
  });

  it("Enter Specific Textのラベルがあるテキストエリアがあること", () => {
    render(<Home />);
    // expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByLabelText(/Specific/)).toBeInTheDocument();
  });

  it("Search...というプレースホルダーがあるテキストエリアがあること", () => {
    render(<Home />);
    // expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument();
  });

  it("AUDI Q5という文字列があるテキストエリアがあること", () => {
    render(<Home />);
    // expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByDisplayValue(/AUDI Q5/)).toBeInTheDocument();
  });
});
