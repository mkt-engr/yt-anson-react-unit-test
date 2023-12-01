import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json([
    {
      id: 1,
      username: "makito",
    },
    {
      id: 2,
      username: "makito2",
    },
    {
      id: 3,
      username: "makito3",
    },
  ]);
}
