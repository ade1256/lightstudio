import { NextResponse } from "next/server";
import { assertCmsAccess, sanityReadClient, sanityWriteClient } from "@/lib/sanity";

const SETTINGS_ID = "business-settings";

export async function GET() {
  const data = await sanityReadClient.fetch(`*[_type == "businessSettings" && _id == "${SETTINGS_ID}"][0]`);
  return NextResponse.json(data || null);
}

export async function PUT(req: Request) {
  if (!assertCmsAccess(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();

  const saved = await sanityWriteClient.createOrReplace({
    _id: SETTINGS_ID,
    _type: "businessSettings",
    whatsappUrl: body.whatsappUrl || "",
    email: body.email || "",
    phone: body.phone || "",
    instagramUrl: body.instagramUrl || "",
    instagramHandle: body.instagramHandle || "",
    address: body.address || "",
    openHours: body.openHours || "",
  });

  return NextResponse.json(saved);
}
