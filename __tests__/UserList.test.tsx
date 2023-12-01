import { UserList } from "@/components/UserList";
import { render, screen, waitFor } from "@testing-library/react";
import { server } from "../mocks/server";
import { HttpResponse, http } from "msw";

describe("UserList - Rendering", () => {
  it("makitoというテキストが表示されること", async () => {
    render(<UserList />);

    expect(await screen.findByText("makito")).toBeInTheDocument();
    expect(screen.queryByText("No Users")).not.toBeInTheDocument();
    //こっちの書き方でもOK
    // await waitFor(() => {
    //   expect(screen.getByText("makito")).toBeInTheDocument();
    // });
  });

  it("mikeというユーザーが表示されること", async () => {
    server.use(
      http.get(
        "https://localhost:3000/api/users",
        ({ request, params, cookies }) => {
          return HttpResponse.json([{ id: 2, username: "mike" }]);
        }
      )
    );

    render(<UserList />);
    expect(await screen.findByText("mike")).toBeInTheDocument();
  });

  it("mikeというユーザーが表示されること", async () => {
    render(<UserList />);
    expect(await screen.findByText("mike")).toBeInTheDocument();
  });
});
