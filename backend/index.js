import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";


dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Fluxo backend is running 🚀");
});

// Contact form route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Email to YOU
    await resend.emails.send({
      from: "Fluxo <onboarding@resend.dev>",
      to: "fluxo.digital.co@gmail.com",
      subject: `New Contact Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    // Auto reply to USER
    await resend.emails.send({
      from: "Fluxo <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for contacting Fluxo",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out to Fluxo. We’ll get back to you within 24 hours.</p>
        <p>– Team Fluxo</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({
      success: false,
      message: "Email failed to send",
    });
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
