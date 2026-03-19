import { NextResponse } from "next/server";
import {
  createDashboardSessionToken,
  isValidDashboardLogin,
} from "@/lib/dashboard-auth";

export async function POST(req: Request) {
  const body = await req.json();
  const { username, password } = body || {};

  if (!isValidDashboardLogin(username, password)) {
    return NextResponse.json(
      { error: "Username atau password salah." },
      { status: 401 }
    );
  }

  const token = await createDashboardSessionToken(); // 👈 ini dia kuncinya

  const res = NextResponse.json({ ok: true });

  res.cookies.set("dashboard_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  return res;
}