import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "./nodeMailer";

export async function POST(request: NextRequest) {
  const data = await request.json();

  const text = data.msg;

  try {
    await sendEmail({ text });
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.log("Error: ", error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
