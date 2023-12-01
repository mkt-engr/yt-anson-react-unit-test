import { HttpResponse, http } from "msw";

export const handlers = [
  http.get(
    "https://localhost:3000/api/users",
    ({ request, params, cookies }) => {
      return HttpResponse.json([{ id: 1, username: "makito" }]);
    }
  ),
];
