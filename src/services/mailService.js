import nodemailer from "nodemailer";

export async function sendContactEmail(fromEmail, messageText) {
  
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter.sendMail({
    from: fromEmail,
    to: process.env.CONTACT_RECEIVER_EMAIL,
    subject: "New Contact Form Message",
    text: messageText,
  });
}
