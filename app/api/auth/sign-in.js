import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  const res = await fetch("url here", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
