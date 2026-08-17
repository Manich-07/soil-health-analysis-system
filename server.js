import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import app from "./api_index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static frontend files from project root
app.use(express.static(__dirname));

// Serve index.html on root or fallback
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api/")) {
    return next();
  }
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌿 MittiSeva Server running at http://localhost:${PORT}`);
});
