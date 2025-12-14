import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Twilio client
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
}));
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Fluxo backend is running 🚀");
});

// Contact form route (WhatsApp only)
app.post("/api/contact", async (req, res) => {
  try {
    const { name, number, email, message } = req.body;

    if (!name || !number || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const clientNumber = `whatsapp:${number}`;

    // 1️⃣ WhatsApp message to YOU (Owner)
    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM,
      to: process.env.OWNER_WHATSAPP,
      body: `
📩 New Contact Form Lead

👤 Name: ${name}
📞 Phone: ${number}
📧 Email: ${email}

💬 Message:
${message}
      `,
    });

    // 2️⃣ Auto-reply to CLIENT
    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM,
      to: clientNumber,
      body: `
Hi ${name} 👋

Thanks for contacting *Fluxo* 🚀  
We’ve received your message and will get back to you within 24 hours.

Meanwhile, feel free to reply here if you have more details 😊
      `,
    });

    return res.status(200).json({
      success: true,
      message: "WhatsApp messages sent successfully",
    });

  } catch (error) {
    console.error("WhatsApp Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send WhatsApp messages",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
