// A small, real backend for JEE Prep.
//
// - Signup/login: credentials are stored in server/data/users.txt (one user
//   per line, as "username,salt,passwordHash"). Passwords are never stored
//   in plain text — each is salted and hashed with Node's built-in scrypt.
// - Page views: server/data/views.txt holds a single number that this
//   server increments on every call to GET /api/views. Because the count
//   lives in a real file on this server's disk, it survives restarts and
//   is genuinely shared across every visitor — not a random or per-browser
//   number.
//
// This is intentionally simple (a text file instead of a database) to match
// what was asked for. For anything beyond a small personal/class deployment,
// swap these text files for a real database — see the README.

import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "data");
const USERS_FILE = path.join(DATA_DIR, "users.txt");
const VIEWS_FILE = path.join(DATA_DIR, "views.txt");

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, "");
if (!fs.existsSync(VIEWS_FILE)) fs.writeFileSync(VIEWS_FILE, "0");

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
      const [username, salt, hash] = line.split(",");
      return { username, salt, hash };
    });
}

function isValidUsername(u) {
  return typeof u === "string" && /^[a-zA-Z0-9_.-]{3,20}$/.test(u);
}

// ---- Sign up ----
app.post("/api/signup", (req, res) => {
  const { username, password } = req.body || {};
  if (!isValidUsername(username)) {
    return res.status(400).json({ error: "Username must be 3-20 characters (letters, numbers, . _ -)." });
  }
  if (typeof password !== "string" || password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters." });
  }
  const users = readUsers();
  if (users.some((u) => u.username.toLowerCase() === username.toLowerCase())) {
    return res.status(409).json({ error: "That username is already taken." });
  }
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = hashPassword(password, salt);
  fs.appendFileSync(USERS_FILE, `${username},${salt},${hash}\n`);
  res.json({ success: true, username });
});

// ---- Log in ----
app.post("/api/login", (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required." });
  }
  const users = readUsers();
  const user = users.find((u) => u.username.toLowerCase() === String(username).toLowerCase());
  if (!user) return res.status(401).json({ error: "Incorrect username or password." });
  const hash = hashPassword(password, user.salt);
  if (hash !== user.hash) return res.status(401).json({ error: "Incorrect username or password." });
  res.json({ success: true, username: user.username });
});

// ---- Real, persistent page-view counter ----
app.get("/api/views", (req, res) => {
  let count = parseInt(fs.readFileSync(VIEWS_FILE, "utf8").trim(), 10);
  if (!Number.isFinite(count)) count = 0;
  count += 1;
  fs.writeFileSync(VIEWS_FILE, String(count));
  res.json({ count });
});

// ---- Serve the built frontend (npm run build output) from this same server ----
// This lets the whole app — frontend and backend — run as a single deployable
// service with one URL, which is the simplest setup for most hosts (Render,
// Railway, Fly.io, a VPS, etc.). In local development, run `npm run dev:all`
// instead, which runs the Vite dev server separately with hot-reload and
// proxies /api calls here — this static-serving block is skipped then.
const distPath = path.join(__dirname, "..", "dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  // Any route that isn't /api/... falls back to index.html, so React Router-
  // style client-side navigation (and simple page refreshes) keep working.
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
