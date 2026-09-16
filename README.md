# JEE Prep — Exam System
### by Urani Software

Link to the App: https://jee-prep-app-1.onrender.com/

A real, runnable React app implementing the JEE Prep UI/UX design document:
global navigation, chapter selection, Syllabus, Documentation, and four
practice categories — all four now question-based:

1. **Ask & Answer** — speak/type answers for Claude to evaluate (placeholder, wired later)
2. **Key Concept Questions** — short, one-fact-at-a-time checks
3. **Complete Concept Questions** — deeper questions on how ideas connect
4. **Real JEE Questions** — full exam-style problems

All three question categories (2, 3, 4) share one exam engine: sequential
section unlocking, a graphical answered/correct progress bar, per-attempt answer
shuffling, and a Practice/Test mode toggle.

The header also shows a **real page-view counter** and **real sign up / login**
— both backed by a small Node/Express server (`server/index.js`) included in
this project. The view count lives in a plain text file on the server's disk
and increments on every page load; user accounts are stored the same way,
with passwords salted and hashed (never stored in plain text).

Built with **Vite + React + Tailwind CSS** on the frontend, and a small
**Express** server on the backend for accounts and the view counter.

## Project structure

```
jee-prep-app/
├── server/
│   ├── index.js                       # Express API: signup, login, page-view counter
│   └── data/                            # Created automatically — users.txt, views.txt
├── src/
│   ├── main.jsx                  # React entry point
│   ├── App.jsx                    # Root component — wires shell + views + chapter state + auth
│   ├── theme.js                    # Design tokens (colors) + shuffle() helper
│   ├── components/
│   │   ├── Shell.jsx                # Utility bar, Practice bar, AuthModal (login/signup), Footer
│   │   ├── UI.jsx                   # Shared buttons/pills
│   │   ├── Home.jsx                 # Dashboard / quick-start cards
│   │   ├── Syllabus.jsx             # Syllabus tab — Physics, Chemistry & Mathematics, subject tabs
│   │   ├── Documentation.jsx        # Documentation tab — renders the design doc with a sticky TOC
│   │   ├── AskAndAnswer.jsx         # Category 1 — placeholder
│   │   └── QuestionEngine.jsx       # Shared engine for Categories 2, 3 and 4
│   ├── lib/
│   │   └── parseDoc.js               # Splits a markdown doc into TOC-linked sections
│   └── data/
│       ├── chapters.js               # List of chapters/units for navigation
│       ├── content.js                 # Full JEE Main syllabus (Physics/Chemistry/Maths), keyed by subject
│       ├── documentation.md           # Source content for the Documentation tab
│       └── questionBanks.js           # All questions, keyed by chapter id
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Run it locally

You need **Node.js 18+** installed. This app now has two parts that both
need to be running at once: the Vite frontend and the Express backend
(for accounts and the view counter).

**Easiest way — one command:**

```bash
npm install
npm run dev:all
```

This starts both the frontend (usually **http://localhost:5173**) and the
backend (**http://localhost:4000**) together, with colored `WEB`/`API` logs
in one terminal. Open the frontend URL in your browser.

**Or run them separately (two terminals), if you prefer:**

```bash
# Terminal 1
npm run server

# Terminal 2
npm run dev
```

Either way, sign up for an account, log in, and refresh the page a few
times — you'll see the page-view count go up for real, and your account
will still be logged in after a refresh (it's remembered in your browser
until you log out).

## Build for production / try it exactly as it'll run on a server

```bash
npm run build
npm start
```

`npm run build` creates an optimized frontend in `dist/`. `npm start` then
runs `server/index.js`, which serves that built frontend **and** the API
from one process on one port (**http://localhost:4000** by default) — this
is exactly what happens when you deploy it, so it's a good way to sanity-check
everything before publishing (see the next section).

(`npm run preview` still works too, if you just want to preview the built
frontend on its own without the backend, e.g. to check styling.)

## Publishing the app to a real server

The app is already wired to run as **one single service** — `server/index.js`
serves both the API and the built frontend from the same process and port.
That makes deployment simple: build once, start one process, get one URL.

### Recommended: Render (free tier available, persistent disk)

1. **Put the code in a Git repo.** If you haven't already:
   ```bash
   cd jee-prep-app
   git init
   git add .
   git commit -m "JEE Prep app"
   ```
   Then create a new repository on [github.com](https://github.com) and push
   this folder to it (GitHub's "Create repository" page shows the exact
   `git remote add` / `git push` commands to run).

2. **Create a Render account** at [render.com](https://render.com) (free,
   sign in with GitHub is easiest).

3. **New → Web Service**, and connect the GitHub repo you just pushed.

4. Fill in these settings:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Instance Type:** the free tier is fine to start.

5. **Add a persistent disk** (important — without this, accounts and the
   view count reset every time Render restarts your app): in the service's
   *Settings → Disks*, add a disk, mount it at `/opt/render/project/src/server/data`
   (adjust the path if Render shows a different project root), size 1 GB is
   plenty.

6. Click **Create Web Service**. Render will build and start it — after a
   minute or two you'll get a live URL like `https://jee-prep.onrender.com`.

That's it — that URL is your published app: frontend, sign up/login, and the
real page-view counter, all running from that one service.

### Alternatives

- **Railway** ([railway.app](https://railway.app)) and **Fly.io**
  ([fly.io](https://fly.io)) work almost identically to the Render steps
  above — connect the repo, same build/start commands, add a persistent
  volume for `server/data/`.
- **Your own VPS** (e.g., a DigitalOcean droplet or similar): clone the repo,
  run `npm install && npm run build`, then keep it running with a process
  manager like `pm2` (`npm install -g pm2` then `pm2 start server/index.js
  --name jee-prep`) so it survives reboots and crashes. Put it behind Nginx
  or Caddy if you want a custom domain and HTTPS.
- **Split hosting** (frontend on Vercel/Netlify, backend elsewhere) is also
  possible, but adds complexity — you'd need to update the frontend's `/api/...`
  calls to point at the backend's separate URL and adjust CORS. Not
  recommended unless you have a specific reason to split them.

Either way, remember that `server/data/users.txt` and `server/data/views.txt`
need to live on **persistent** disk — some hosts (especially serverless
platforms like plain Vercel functions) reset the filesystem on every
request, which would wipe accounts and reset the view count. If you outgrow
text files entirely, swapping in a real database (SQLite is a very easy
first step) removes this concern for good.

## Accounts & the page-view counter

Three endpoints live in `server/index.js`:

| Endpoint | Method | What it does |
|---|---|---|
| `/api/signup` | POST | Creates a user. Body: `{ username, password }`. Rejects duplicate usernames and passwords under 6 characters. |
| `/api/login` | POST | Verifies credentials against `server/data/users.txt`. Body: `{ username, password }`. |
| `/api/views` | GET | Increments and returns the number in `server/data/views.txt`. Called once per page load from `App.jsx`. |

**How passwords are stored:** never in plain text. Each password is combined
with a random salt and hashed with Node's built-in `crypto.scryptSync`
before being written to `users.txt`, as `username,salt,hash` per line. Even
if someone reads that file directly, they can't recover the original
password.

**Session handling on the frontend** is intentionally simple: after a
successful login or signup, the username is saved to the browser's
`localStorage` so refreshing the page keeps you logged in. This is not a
secure session token system (there's no expiry, and it doesn't survive a
switch to a different browser) — fine for this stage of the project, but
worth replacing with real sessions or JWTs before handling anything sensitive.

## The Syllabus tab

`src/data/content.js` holds the **complete official JEE Main Paper 1 syllabus**
— all 20 Physics units, 20 Chemistry units, and 14 Mathematics units — keyed
by subject. The Syllabus tab shows subject tabs (Physics / Chemistry /
Mathematics) and an expandable list of every unit and its topics, so it's
useful as a reference even for units that have no practice questions yet.

A unit only gets a **"Start practicing this unit"** button if it has a
matching, `available: true` entry in `chapters.js` — otherwise it shows
"Practice questions coming soon for this unit". Today that means only
Physics Unit 1 is clickable; add more chapters (see "Adding a new chapter"
below) to unlock the rest without touching `Syllabus.jsx` at all.

## Updating the Documentation tab

The Documentation tab renders **`src/data/documentation.md`** directly — a
real markdown file, not a hardcoded list of articles. `src/lib/parseDoc.js`
splits it into sections by `##` heading, builds the sticky table of contents
from those headings automatically, and renders each section's markdown
(including tables, blockquote "Example" callouts, and special characters
like superscripts/subscripts) as real HTML — not as a code block.

Currently it holds the Unit 1 "Units and Measurements" training material
(converted from the uploaded Word document, with headings, tables and worked
examples preserved). To update what's on the Documentation tab, just edit
`documentation.md` — add, remove, or reword `##` sections and the TOC updates
itself, no component code to touch. Swap in an entirely different markdown
file by changing the import path in `Documentation.jsx`.

## Feeding in real questions

Everything renders from plain JavaScript objects in `src/data/`. There's one
place to add content:

- **`src/data/questionBanks.js`** — add or edit questions here, keyed by
  chapter id, split into `keyConceptQuestions`, `completeConceptQuestions`,
  and `realJeeQuestions`. Each is an array of *sections*, and each section is
  `{ name, questions: [...] }`. A question looks like:

```js
{
  id: "unique-id",
  topic: "Short topic label",
  question: "The question text...",
  options: [
    { id: "a", text: "...", isCorrect: false, explanation: "Why this is wrong." },
    { id: "b", text: "...", isCorrect: true,  explanation: "Why this is right." },
    // ...
  ],
}
```

Options don't need to be pre-ordered in any particular A/B/C/D pattern — the
app shuffles them itself on every attempt.

## Adding a new chapter

1. Add an entry to **`src/data/chapters.js`**:
   ```js
   { id: "unit2", subject: "Physics", title: "Unit 2: Kinematics", available: true }
   ```
2. Add a matching key in **`src/data/questionBanks.js`**:
   ```js
   unit2: {
     keyConceptQuestions: [ ... ],
     completeConceptQuestions: [ ... ],
     realJeeQuestions: [ ... ],
   }
   ```
3. That's it — the chapter dropdown, Home dashboard, and all three question
   categories pick it up automatically. Until you add a `questionBanks` entry
   for a chapter, its categories show a calm "coming soon" message instead of
   an error or a blank screen.

## What's a placeholder vs. what's real here

- **Real & working:** navigation, chapter switching, Syllabus, Documentation,
  the full question engine for all three question categories (per-attempt
  answer shuffling, sequential section locking, a graphical answered/correct
  progress bar, and Practice vs. Test mode), **sign up and login** (accounts
  stored with salted, hashed passwords in `server/data/users.txt`), and a
  **real page-view counter** backed by `server/data/views.txt` on the server.
- **Placeholder (by design):** Category 1 (Ask & Answer) has no backend yet —
  its UI is fully built but the mic/type buttons are inert until you wire up
  speech-to-text and a Claude evaluation call. Logging in doesn't yet unlock
  or gate anything (no premium tier is wired up — see Section 11 of the
  design document for that plan). Units 2–4 are listed for navigation but
  have no questions yet — add them via `questionBanks.js`.

## Suggested next steps

1. Wire Category 1 up to the Claude API (speech-to-text → Claude → feedback).
2. Gate `access: "premium"` content behind the `user` state that's already
   flowing through `App.jsx`, per Section 11 of the design document — the
   login system is ready for this, it just isn't checked against content yet.
3. If you deploy publicly, tighten the CORS policy in `server/index.js`
   (currently open to any origin) and consider rate-limiting `/api/signup`
   and `/api/login` to slow down automated abuse.
4. Move `src/data/questionBanks.js` to a real backend/CMS so content can be
   added without redeploying the app — and consider migrating
   `server/data/*.txt` to a real database (SQLite is a very easy first step)
   once you have more than a handful of users.

