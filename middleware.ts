import {NextRequest, NextResponse} from "next/server";
import {isValidDashboardSession} from "@/lib/dashboard-auth";

export function middleware(req: NextRequest) {
  const {pathname} = req.nextUrl;

  if (!pathname.startsWith("/dashboard")) return NextResponse.next();
  if (pathname === "/dashboard/login") return NextResponse.next();

  const token = req.cookies.get("dashboard_session")?.value;
  if (!isValidDashboardSession(token)) {
    const url = req.nextUrl.clone();
    url.pathname = "/dashboard/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
