import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";


dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "*", // later restrict to your frontend domain
  methods: ["GET", "POST"],
}));
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

    // Email to YOU+++++
    await resend.emails.send({
      from: "Fluxo <onboarding@resend.dev>",
      to: "fluxo.digital.co@gmail.com",
      subject: `New Contact Message from ${name}`,
      html: `
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                            New Contact Form Submission
                        </h2>
                        <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
                            <p><strong style="color: #555;">Name:</strong> ${name}</p>
                            <p><strong style="color: #555;">Email:</strong> ${email}</p>
                            <p><strong style="color: #555;">Message:</strong></p>
                            <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #2563eb; margin-top: 10px;">
                                ${message}
                            </div>
                        </div>
                        <div style="margin-top: 20px; padding: 15px; background-color: #e0f2fe; border-radius: 8px;">
                            <p style="margin: 0; font-size: 12px; color: #0369a1;">
                                This email was sent from the Fluxo website contact form.
                            </p>
                        </div>
                    </div>
                </body>
      `,
    });

    // 2️⃣ Auto-reply to USER
    await resend.emails.send({
      from: "Fluxo <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for contacting Fluxo",
      html: `
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                        <h2 style="color: #2563eb;">Thank You for Reaching Out!</h2>
                        <p>Hi ${name},</p>
                        <p>We have received your message and appreciate you contacting Fluxo.</p>
                        <p>Our team will review your inquiry and get back to you as soon as possible, typically within 24 hours.</p>
                        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <p style="margin: 0; font-weight: bold; color: #0369a1;">In the meantime, feel free to:</p>
                            <ul style="margin-top: 10px;">
                                <li>Connect with us on WhatsApp for immediate assistance</li>
                                <li>Explore our services on our website</li>
                            </ul>
                        </div>
                        <p>Best regards,<br><strong>The Fluxo Team</strong></p>
                        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;">
                        <p style="font-size: 12px; color: #888;">This is an automated confirmation email from Fluxo.</p>
                    </div>
                </body>
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
