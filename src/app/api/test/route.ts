import { db } from "../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT 1 + 1 AS result");
    return NextResponse.json({ success: true, db: "connected", result: rows });
  } catch (error) {
    console.error("DB connection failed:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
