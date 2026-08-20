import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const client = new MongoClient(process.env.MONGODB_URI);

let db;

async function connectDB() {
  await client.connect();
  db = client.db("SivaPortfolio");
  console.log("Connected to MongoDB Atlas");
}

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "portfolio-api"
  });
});

app.get("/api/projects", async (req, res) => {
  try {
    const projects = await db
      .collection("projects")
      .find({})
      .sort({ id: 1 })
      .toArray();

    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Name, email and message are required."
    });
  }

  try {
    await db.collection("messages").insertOne({
      name,
      email,
      message,
      createdAt: new Date()
    });

    res.status(201).json({
      message: "Message received."
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Unable to save message."
    });
  }
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Portfolio API running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  });