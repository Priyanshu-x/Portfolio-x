# Priyanshu Kushwaha - Dual-Mode Portfolio
TODO: Document your project here
A neumorphic portfolio website for a BCA student specializing in **Cloud Computing & Cybersecurity**. The site ships with two switchable experiences:
1. **Normal Mode** - A soft, monochromatic neumorphic UI showcasing About, Skills, Projects, Education, and Contact.
2. **Terminal Mode** - A fully interactive CLI with boot sequence, command history, tab autocomplete, scanline overlay, and Matrix easter egg.

Live preview: <https://priyanshu-x.verce.app>
---
## ✨ Features
### Design
- Neumorphic UI with dual (light + dark) soft shadows
- Monochromatic gray palette built on `#e0e0e0` with teal accents
- Soft "pressed" effect on buttons and inputs
- Smooth morph animation when switching modes
- Responsive layout (mobile → desktop)
### Terminal Mode
- Animated boot sequence
- Command history navigation (`↑` / `↓`)
- `Tab` autocomplete
- Scanline overlay + blinking caret + CRT flicker
- Matrix rain easter egg
- Persisted mode preference via `localStorage`
### Keyboard Shortcuts
| Shortcut | Action |
|----------|--------|
| `Ctrl` + `` ` `` | Toggle terminal / GUI |
| `Esc` | Exit terminal |
| `↑` / `↓` | Navigate command history |
| `Tab` | Autocomplete command |
### Available Terminal Commands
`help`, `about`, `skills`, `projects`, `education`, `contact`, `certs`,
`whoami`, `pwd`, `date`, `uname`, `ls projects`, `cat about.txt`,
`ascii`, `matrix`, `theme`, `clear`, `sudo reveal --secret`
---
## 🛠 Tech Stack
- **React 18** + **TypeScript 5**
- **Vite 5** (SWC)
- **Tailwind CSS v3** with semantic HSL design tokens
- **shadcn/ui** primitives
- **lucide-react** icons
- **React Router** for routing
- **TanStack Query** for data fetching
---
## 📁 Project Structure
```
src/
├── components/
│   ├── portfolio/
│   │   ├── Navbar.tsx           # Mode toggle + nav
│   │   ├── NormalMode.tsx       # GUI layout wrapper
│   │   ├── TerminalMode.tsx     # Interactive CLI
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── EducationSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                      # shadcn primitives
├── data/
│   └── portfolio.ts             # All profile / skills / projects data
├── pages/
│   ├── Index.tsx                # Mode-switching entrypoint
│   └── NotFound.tsx
├── index.css                    # Neumorphic tokens + animations
└── main.tsx
```
---
## 🚀 Getting Started
### Prerequisites
- Node.js 18+ (or [Bun](https://bun.sh))
### Install & Run
```bash
# install dependencies
npm install        # or: bun install
# start dev server
npm run dev        # or: bun run dev
# build for production
npm run build
# preview production build
npm run preview
```
The dev server starts on <http://localhost:8080>
---
## ✏️ Customizing Content
All portfolio content lives in a single file: **`src/data/portfolio.ts`**.
Update the exported objects to personalize the site:
- `profile` - name, title, tagline, bio, email, social links
- `education` - degrees, institutions, highlights
- `skills` - `cloud`, `security`, `programming` (with proficiency %)
- `projects` - title, description, tech stack, status
- `certifications` - list of certs
- `terminalCommands` - output for each CLI command
No other files need to change for content updates.
---
## 🎨 Design Tokens
All colors are defined as HSL CSS variables in `src/index.css` and exposed
through `tailwind.config.ts`. Use semantic classes (`bg-background`,
`text-foreground`, `text-primary`, `neu-flat`, `neu-pressed`, `neu-button`,
`text-terminal-fg`, etc.) - never hard-coded color values.
Key utility classes:
- `.neu-flat` - extruded surface
- `.neu-pressed` - inset/pressed surface
- `.neu-button` - interactive press effect
- `.scanline` - CRT scanline overlay
- `.terminal-glow` - phosphor glow on terminal text
---
## 📦 Deployment
This project is deployed via **Vercel**. 
---
## 📄 License
© 2025 Priyanshu Kushwaha. Built with React + TypeScript.
