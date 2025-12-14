import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

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

    // 🔹 TEMP: Just log message (no email yet)
    console.log("📩 New Contact Message");
    console.log({ name, email, message });

    return res.status(200).json({
      success: true,
      message: "Message received successfully",
    });

  } catch (error) {
    console.error("❌ Contact API Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
