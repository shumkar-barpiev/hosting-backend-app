import { sendContactEmail } from "../services/mailService.js";

export async function handleContact(req, res) {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "Missing email or message" });
  }

  try {
    await sendContactEmail(email, message);
    res.status(200).json({
      status: 0,
      data: {
        message: "Email sent successfully",
      },
    });
  } catch (error) {
    console.error("Email send error:", error);
    
    res.status(500).json({
      status: -1,
      data: {
        message: "Internal Server Error",
      },
    });
  }
}
