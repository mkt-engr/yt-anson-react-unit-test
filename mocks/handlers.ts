import { HttpResponse, http } from "msw";

export const handlers = [
  http.get(
    "http://localhost:3000/api/users",
    ({ request, params, cookies }) => {
      return HttpResponse.json([{ id: 1, username: "makito" }]);
    }
  ),
  http.post("http://localhost:3000/api/auth", () => {
    //ステータスコードを200で返す
    // return new HttpResponse(null, { status: 200 });
    return HttpResponse.json({});
  }),
];
