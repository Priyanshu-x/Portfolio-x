export const profile = {
  name: "Priyanshu Kushwaha",
  title: "Cloud & Cybersecurity Enthusiast | Full-Stack Developer | AI Wizard",
  tagline:
    "Building scalable applications, solving real-world problems with code, and securing networks and systems.",
  shortAbout:
    "Hi, I'm Priyanshu Kushwaha - a Cloud and Cybersecurity enthusiast, full-stack developer, and AI explorer. I build scalable applications, secure systems, and continuously learn new technologies to solve real-world problems.",
  bio: "I am a Bachelor of Computer Applications (BCA) student specializing in Cloud and Cyber Security, with a strong passion for solving real-world technology challenges. Currently, I am working as a Python Intern at Hackveda, where I am gaining hands-on experience in software development, testing, and deployment. I enjoy building full-stack applications, exploring AI-driven solutions, and strengthening my cybersecurity skills. Curious by nature and committed to continuous learning, I am working toward becoming a highly skilled cloud and cybersecurity professional.",
  email: "priyanshu18181@gmail.com",
  github: "https://github.com/priyanshu-x",
  linkedin: "https://linkedin.com/in/priyanshu-x",
  location: "Madhya Pradesh, India",
};

export const experience = [
  {
    role: "Python Intern",
    company: "Hackveda",
    period: "Current",
    description:
      "Working on software development, testing, and deployment while strengthening practical Python and development skills.",
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    specialization: "Cloud and Cyber Security",
    institution: "Bachelor of Computer Applications",
    period: "Current",
    highlights: [
      "Specializing in Cloud and Cyber Security",
      "Building full-stack applications and practical software projects",
      "Developing cloud, cybersecurity, and AI-focused technical skills",
    ],
  },
];

export const skills = {
  "Programming Languages": ["Python", "JavaScript"],
  "Frontend Development": ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  "Backend Development": ["Node.js", "Express.js", "FastAPI", "Django", "Flask"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL"],
  "Tools & Platforms": ["Git", "GitHub", "Docker", "AWS", "Linux"],
  "Core Areas": [
    "Cloud Computing",
    "Cybersecurity",
    "Full-Stack Development",
    "Artificial Intelligence",
  ],
};

export const projects = [
  {
    title: "File-Board",
    description:
      "A Flask-based public file board for uploading, sharing, and managing files with automatic file expiry and admin controls.",
    tech: ["Flask", "Python", "SQLite/MySQL", "Bootstrap"],
    status: "Completed",
    image: "/file-board.png",
    link: "https://file-board.onrender.com/",
    github: "https://github.com/Priyanshu-x/file-board"
  },
  {
    title: "FocusLock",
    description:
      "An Android productivity application that locks the device and blocks access to distracting apps until the timer completes.",
    tech: ["Android", "Kotlin/Java"],
    status: "Completed",
    image: "/focus-lock.png",
    link: "https://github.com/Priyanshu-x/focuslock",
    github: "https://github.com/Priyanshu-x/focuslock"
  },
  {
    title: "Chattr",
    description:
      "A modern real-time chat application with a sleek UI/UX and a distinctive C-shaped Pac-Man logo.",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB"],
    status: "Completed",
    image: "/chattr.png",
    link: "https://chattr-x.onrender.com/",
    github: "https://github.com/Priyanshu-x/Chattr"
  },
];

export const certifications = [
  "Amazon Web Services Certified Cloud Practitioner",
];

const formatSkills = () =>
  Object.entries(skills)
    .map(([category, items]) => `${category}\n${items.map((skill) => `  - ${skill}`).join("\n")}`)
    .join("\n\n");

export const terminalCommands: Record<string, string> = {
  help: `Available commands:
  about        - Display profile summary
  skills       - Show technical skills
  projects     - List all projects
  experience   - Show current experience
  education    - Show education details
  contact      - Show contact information
  certs        - Show certifications
  clear        - Clear terminal
  theme        - Toggle dark/light theme
  matrix       - Trigger matrix animation
  ascii        - Show ASCII art
  ls projects  - List projects Unix-style
  cat about.txt - Display bio line by line
  sudo reveal --secret - Easter egg
  whoami       - Who am I?
  pwd          - Print working directory
  date         - Show current date
  uname        - System information`,

  about: `┌─────────────────────────────────────────┐
│  ${profile.name}
│  ${profile.title}
│
│  ${profile.shortAbout}
│
│  📍 ${profile.location}
└─────────────────────────────────────────┘`,

  skills: formatSkills(),

  projects: projects.map((p, i) => `[${i + 1}] ${p.title} (${p.status})
    ${p.description}
    Tech: ${p.tech.join(", ")}`).join("\n\n"),

  experience: experience.map((item) => `${item.role} - ${item.company}
   Period: ${item.period}
   ${item.description}`).join("\n\n"),

  education: education.map(e => `🎓 ${e.degree}
   Specialization: ${e.specialization}
   Status: ${e.period}
   ${e.highlights.map(h => `   • ${h}`).join("\n")}`).join("\n\n"),

  contact: `📧 Email: ${profile.email}
🔗 GitHub: ${profile.github}
🔗 LinkedIn: ${profile.linkedin}
📍 Location: ${profile.location}`,

  certs: certifications.map((c, i) => `  [${i + 1}] ${c}`).join("\n"),

  whoami: `${profile.name} - ${profile.title}`,

  pwd: `/home/${profile.name.toLowerCase().replace(" ", "_")}/portfolio`,

  date: new Date().toString(),

  uname: `PortfolioOS 1.0.0 x86_64 - Built with React + TypeScript`,

  "ls projects": projects.map(p => `drwxr-xr-x  ${p.title.toLowerCase().replace(/\s+/g, "-")}/`).join("\n"),

  "cat about.txt": profile.bio,

  "sudo reveal --secret": `SECRET UNLOCKED!

  "The best way to predict the future is to build it."

  Fun facts about Priyanshu:
  - Loves building full-stack apps that solve real problems
  - Thinks cloud and security belong in the same conversation
  - Enjoys exploring AI-driven solutions
  - Still believes the terminal has main-character energy`,

  ascii: `
   ██████╗ ██╗  ██╗
   ██╔══██╗██║ ██╔╝
   ██████╔╝█████╔╝ 
   ██╔═══╝ ██╔═██╗ 
   ██║     ██║  ██╗
   ╚═╝     ╚═╝  ╚═╝
   Priyanshu Kushwaha
   Cloud | Cybersecurity | Full-Stack | AI`,
};
