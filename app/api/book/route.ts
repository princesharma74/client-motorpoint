import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { google } from "googleapis";
import { NextResponse } from "next/server";
import { generateEmailTemplate } from "./emailTemplate";

const SMTP_HOST = process.env.SMTP_HOST!;
const CLIENT_ID = process.env.CLIENT_ID!;
const CLIENT_SECRET = process.env.CLIENT_SECRET!;
const REDIRECT_URI = process.env.REDIRECT_URI!;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN!;
const GMAILID=process.env.GMAILID!;

export async function POST(req: Request) {
  const body = await req.json();
  console.log("Request body:", body);
  const {
    bookingType,
    selectedVanType,
    name,
    email,
    phoneNumber,
    pickupDate,
    returnDate,
    message
  } = body;

  try {
    // OAuth2 client setup
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    // Get a fresh access token
    const accessToken = await oAuth2Client.getAccessToken();

    // Nodemailer transporter (Explicitly using SMTPTransport.Options)
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: 465, // Use 587 if you prefer STARTTLS instead of SSL
      secure: true, // Use `false` for port 587
      auth: {
        type: "OAuth2",
        user: GMAILID,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token!,
      },
    } as SMTPTransport.Options);

    // Email HTML Template
    const emailTemplate = generateEmailTemplate(
      bookingType,
      selectedVanType,
      name,
      email,
      phoneNumber,
      pickupDate,
      returnDate,
      message
    );

    // Define mail options
    const mailOptions = {
      from: `"Motorpoint Van Rentals" <${GMAILID}>`,
      to: email,
      cc: GMAILID,
      subject: "We’ve Received Your Submission",
      html: emailTemplate,
      replyTo: email,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
