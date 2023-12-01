import { LoginForm } from "@/components/LoginForm";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { server } from "../mocks/server";
import { HttpResponse, http } from "msw";

describe("LoginForm ", () => {
  it("usernameとpasswordを入力してログインボタンがクリックできること", async () => {
    render(<LoginForm />);

    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeDisabled();
    const inputUsername = screen.getByLabelText(/Username/);
    await userEvent.type(inputUsername, "makito");

    const passwordUsername = screen.getByLabelText(/Password/);
    await userEvent.type(passwordUsername, "password");

    expect(loginButton).toBeEnabled();

    await userEvent.click(loginButton);

    await waitFor(() => {
      expect(screen.getByText("Success Logging in")).toBeInTheDocument();
    });
    // expect(await screen.findByText("Success Logging in")).toBeInTheDocument();
  });

  it("ログインエラーメッセージが表示されること", async () => {
    server.use(
      http.post("http://localhost:3000/api/auth", () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    render(<LoginForm />);

    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeDisabled();
    const inputUsername = screen.getByLabelText(/Username/);
    await userEvent.type(inputUsername, "makito");

    const passwordUsername = screen.getByLabelText(/Password/);
    await userEvent.type(passwordUsername, "password");

    expect(loginButton).toBeEnabled();

    await userEvent.click(loginButton);

    // await waitFor(() => {
    //   expect(screen.getByText("Error Logging In")).toBeInTheDocument();
    // });
    expect(await screen.findByText("Error Logging In")).toBeInTheDocument();
  });
});
