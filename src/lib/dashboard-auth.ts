async function sha256(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

// Constant-time compare (string version, Edge-safe)
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export function getDashboardCookieSecret(): string {
  return process.env.DASHBOARD_SESSION_SECRET || "change-this-secret";
}

// tetap async biar konsisten
export async function createDashboardSessionToken(): Promise<string> {
  return await sha256(getDashboardCookieSecret());
}

export async function isValidDashboardSession(token?: string | null): Promise<boolean> {
  if (!token) return false;

  const expected = await createDashboardSessionToken();
  return safeEqual(token, expected);
}

export function isValidDashboardLogin(username?: string, password?: string): boolean {
  const user = process.env.DASHBOARD_USERNAME;
  const pass = process.env.DASHBOARD_PASSWORD;

  return Boolean(user && pass && username === user && password === pass);
}