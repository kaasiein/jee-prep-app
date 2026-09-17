// A small, real backend for JEE Prep.
//
// - Signup/login: accounts are stored in server/data/users.txt, one per
//   line as "email,salt,passwordHash", appended (never overwritten) each
//   time someone signs up. Passwords are never stored in plain text — each
//   is salted and hashed with Node's built-in scrypt.
//
// This is intentionally simple (a text file instead of a database) to match
// what was asked for. For anything beyond a small personal/class deployment,
// swap this text file for a real database — see the README.

import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "data");
const USERS_FILE = path.join(DATA_DIR, "users.txt");

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, "");

const app = express();
app.use(cors());
app.use(express.json());

function hashPassword(password, salt) {
  return crypto.scryptSync(password, salt, 64).toString("hex");
}

function readUsers() {
  return fs
    .readFileSync(USERS_FILE, "utf8")
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [email, salt, hash] = line.split(",");
      return { email, salt, hash };
    });
}

function isValidEmail(e) {
  return typeof e === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

// ---- Sign up ----
app.post("/api/signup", (req, res) => {
  const { email, password } = req.body || {};
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }
  if (typeof password !== "string" || password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters." });
  }
  const users = readUsers();
  if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    return res.status(409).json({ error: "An account with that email already exists." });
  }
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = hashPassword(password, salt);
  // Appended, not overwritten — every signup adds one new line to the file.
  fs.appendFileSync(USERS_FILE, `${email},${salt},${hash}\n`);
  res.json({ success: true, email });
});

// ---- Log in ----
app.post("/api/login", (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }
  const users = readUsers();
  const user = users.find((u) => u.email.toLowerCase() === String(email).toLowerCase());
  if (!user) return res.status(401).json({ error: "Incorrect email or password." });
  const hash = hashPassword(password, user.salt);
  if (hash !== user.hash) return res.status(401).json({ error: "Incorrect email or password." });
  res.json({ success: true, email: user.email });
});

// ---- Serve the built frontend (npm run build output) from this same server ----
const distPath = path.join(__dirname, "..", "dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get(/^(?!\/api\/).*/, (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
} else {
  console.log("No dist/ folder found yet — run `npm run build` first if you want this server to also serve the frontend.");
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`JEE Prep server running on http://localhost:${PORT}`);
});