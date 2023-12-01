import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("/api/users", ({ request, params, cookies }) => {
    return HttpResponse.json([{ id: 1, username: "makito" }]);
  }),
];
