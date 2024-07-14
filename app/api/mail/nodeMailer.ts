"use server";
// utils/sendEmail.ts
import nodemailer from "nodemailer";
// Configure your email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com
  port: 587, // or 465 for secure
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // your email address
    pass: process.env.EMAIL_PASS, // your email password
  },
});

interface EmailOptions {
  text: string;
}

export async function sendEmail({ text }: EmailOptions): Promise<void> {
  const mailOptions = {
    from: `no-reply@yin-d.com`,
    to: `${process.env.EMAIL_USER}`,
    subject: `[User Feedback] from Yin - D`,
    text,
    html: `
    <p><strong>[User Feedback] from Yin - D</strong></p>
    <p>The Message: ${text}</p>
    <p>Best Regards</p>
    <p>Yin - D</p>
    `,
  };

  try {
    const mail = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully: ", mail);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email sending failed");
  }
}
