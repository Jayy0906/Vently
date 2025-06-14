import { NextResponse } from "next/server";
import { db } from "../../lib/db";
import { sendMail } from "../../lib/mailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Save to DB
    await db.query(
      "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)",
      [name, email, message],
    );

    // Send email
    await sendMail(name, email, message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
