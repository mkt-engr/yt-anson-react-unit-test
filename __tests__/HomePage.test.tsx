import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("Home Page", () => {
  describe("Rendering", () => {
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

    it("This is the textというテキストがないこと", () => {
      render(<Home />);
      expect(screen.queryByText("This is the text")).not.toBeInTheDocument();
    });
  });

  //ボタンをクリックして1秒後にThis is the textというテキストが表示されること
  describe("Behavior", () => {
    it("ボタンをクリックしてThis is the textというテキストが表示されること", async () => {
      render(<Home />);
      expect(screen.queryByText("This is the text")).not.toBeInTheDocument();

      const showTextButton = screen.getByRole("button", { name: "Show text" });
      await userEvent.click(showTextButton);
      expect(
        await screen.findByText("This is the text", {}, { timeout: 5000 })
      ).toBeInTheDocument();

      //findByTextの代わりにwaitForも使える
      // await waitFor(
      //   () => {
      //     expect(screen.getByText("This is the text")).toBeInTheDocument();
      //   },
      //   { timeout: 5000 }
      // );
    });
  });
});
