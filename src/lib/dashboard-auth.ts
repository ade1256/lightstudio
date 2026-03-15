import {createHash, timingSafeEqual} from "crypto";

function sha256(input: string) {
  return createHash("sha256").update(input).digest("hex");
}

export function getDashboardCookieSecret() {
  return process.env.DASHBOARD_SESSION_SECRET || "change-this-secret";
}

export function createDashboardSessionToken() {
  return sha256(getDashboardCookieSecret());
}

export function isValidDashboardSession(token?: string | null) {
  if (!token) return false;
  const expected = createDashboardSessionToken();
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function isValidDashboardLogin(username?: string, password?: string) {
  const user = process.env.DASHBOARD_USERNAME;
  const pass = process.env.DASHBOARD_PASSWORD;
  return Boolean(user && pass && username === user && password === pass);
}
