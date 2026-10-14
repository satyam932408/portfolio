export const personalInfo = {
  name: "Satyam Jha",
  role: "Full Stack Software Developer",
  tagline: "Building scalable, enterprise-ready web applications, responsive UIs, and robust cloud services with modern full-stack tech.",
  location: "Mumbai, Maharashtra, India",
  email: "satyamj9324@gmail.com",
  phone: "+91 9321459947",
  status: "Available for Full-time Roles & Projects",
  availability: "Open to opportunities in Software Engineering & Full Stack Development",
  github: "https://github.com/satyam932408",
  linkedin: "https://linkedin.com/in/satyam-jha-394255215",
  resumeUrl: "/satyam-latest-cv.pdf",
  bio: `Aspiring Software Developer with hands-on experience in full-stack web development using React.js, Next.js, Node.js, and Express.js, alongside AWS cloud services. Strong foundation in Data Structures and Algorithms (250+ DSA problems solved), Object-Oriented Programming, and database management systems. Dedicated to architecting clean, secure, and enterprise-grade software solutions.`
};

export const stats = [
  { label: "DSA Problems Solved", value: "250+", description: "LeetCode & Competitive Platforms" },
  { label: "Students Mentored", value: "400+", description: "Technical training & workshops" },
  { label: "Tech Stack Expertise", value: "15+", description: "Frontend, Backend & AWS Cloud" },
  { label: "TCS Prime", value: "Shortlisted", description: "National competitive selection" },
];

export const skillsData = {
  languages: [
    { name: "JavaScript (ES6+)", level: "Advanced", badge: "Primary" },
    { name: "C++", level: "Proficient", badge: "DSA" },
    { name: "TypeScript", level: "Intermediate", badge: "Frontend" },
    { name: "HTML5 & CSS3", level: "Expert", badge: "Web" },
  ],
  frontend: [
    { name: "React.js", level: "Advanced", badge: "Core" },
    { name: "Next.js", level: "Advanced", badge: "Fullstack" },
    { name: "Redux", level: "Intermediate", badge: "State" },
    { name: "Tailwind CSS", level: "Advanced", badge: "Styling" },
    { name: "Recharts", level: "Intermediate", badge: "Analytics" },
    { name: "jsPDF", level: "Intermediate", badge: "Reports" },
  ],
  backend: [
    { name: "Node.js", level: "Advanced", badge: "Runtime" },
    { name: "Express.js", level: "Advanced", badge: "Framework" },
    { name: "RESTful APIs", level: "Advanced", badge: "Architecture" },
    { name: "WebSocket", level: "Intermediate", badge: "Real-time" },
    { name: "Axios", level: "Advanced", badge: "Networking" },
    { name: "MJML", level: "Intermediate", badge: "Emails" },
  ],
  databasesCloud: [
    { name: "MySQL", level: "Advanced", badge: "Relational" },
    { name: "MongoDB", level: "Advanced", badge: "NoSQL" },
    { name: "AWS DynamoDB", level: "Intermediate", badge: "Cloud NoSQL" },
    { name: "AWS S3 & EC2", level: "Intermediate", badge: "Infrastructure" },
    { name: "AWS Lambda", level: "Intermediate", badge: "Serverless" },
    { name: "CloudFront & AWS CLI", level: "Intermediate", badge: "CDN & DevOps" },
  ],
  tools: [
    { name: "Git & GitHub", level: "Advanced", badge: "VCS" },
    { name: "VS Code", level: "Expert", badge: "Editor" },
    { name: "Vercel", level: "Advanced", badge: "Deployment" },
    { name: "Claude Code", level: "Advanced", badge: "AI Tooling" },
    { name: "Arduino IDE", level: "Intermediate", badge: "Embedded" },
  ]
};

export const projects = [
  {
    id: "algo-tracker",
    title: "Algo Tracker - DSA Question Tracker",
    category: "Frontend / React",
    description: "Responsive DSA question tracking platform built with React.js for engineers to log, categorize, and master algorithms with optimized state management.",
    longDescription: "Engineered a performant DSA tracking application using React.js and modern hooks (useState, useEffect, useMemo). Provides persistent tracking, topic-based categorization (Arrays, Trees, DP, Graphs), status filtering, and notes logging with instant deployment on Vercel.",
    tags: ["React.js", "JavaScript", "React Hooks", "Vercel", "Tailwind CSS"],
    highlights: [
      "Custom CRUD architecture for adding, tagging, and tracking LeetCode/DSA problems",
      "Dynamic filtering by difficulty (Easy, Medium, Hard) and data structure topic",
      "Optimized production build deployed seamlessly on Vercel with near-instant load times"
    ],
    liveUrl: "https://algo-tracker-dsa.vercel.app/",
    githubUrl: "https://github.com/satyam932408/algo-tracker",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accentColor: "#38bdf8"
  },
  {
    id: "serenity-healthcare",
    title: "Serenity Yoga & Natural Healthcare",
    category: "Full Stack / Next.js",
    description: "Full-scale client healthcare web platform developed with Next.js, featuring modular components, session booking consultations, and responsive layout.",
    longDescription: "Architected a responsive client web application for a holistic healthcare & yoga center using Next.js. Engineered structured sections for wellness programs, instructor bios, interactive consultation forms, and fluid cross-device navigation.",
    tags: ["Next.js", "TypeScript", "Sass", "Responsive UI", "Client Project"],
    highlights: [
      "Modular component architecture with server and client components in Next.js",
      "Seamless multi-page routing including Programs, Contact, and Consultation bookings",
      "High-speed accessibility "
    ],
    liveUrl: "https://serenity-yoga-natural-healthcare.vercel.app/",
    githubUrl: "https://github.com/satyam932408/serenity-yoga-healthcare",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "#34d399"
  },
  {
    id: "eatfresh-food",
    title: "EatFresh - Food Delivery Platform",
    category: "Backend / Full Stack",
    description: "Full-stack food ordering and delivery system powered by Node.js, Express, MongoDB, with comprehensive RESTful API endpoints for order lifecycle.",
    longDescription: "Developed an end-to-end food delivery web application. Built robust REST APIs in Express.js and Node.js to manage menu catalogs, user carts, order state transitions (Pending, Preparing, Out for Delivery, Delivered), and persistent storage in MongoDB.",
    tags: ["MongoDB", "Express.js", "Node.js", "JavaScript", "REST APIs"],
    highlights: [
      "RESTful API endpoints for complete order lifecycle (create, read, update, delete, and tracking)",
      "Structured MongoDB schemas with indexing for dishes, carts, and customer profiles",
      "Robust input validation and error handling for production reliability"
    ],
    liveUrl: null,
    githubUrl: null,
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentColor: "#fbbf24"
  }
];

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Icanio Technologies",
    period: "07/2026 – Present",
    type: "Full-Time / Industry Experience",
    location: "India",
    description: "Contributing to the design, architecture, and development of enterprise-level full-stack web applications and cloud integrations.",
    achievements: [
      "Received structured training and hands-on exposure to Next.js, Redux, jsPDF, WebSocket, MJML, Axios, Claude Code, and Recharts for building modern, data-driven interfaces.",
      "Built and maintained backend services using Node.js, and gained hands-on experience with AWS cloud services including S3, EC2, DynamoDB, Lambda, CloudFront, and AWS CLI.",
      "Engineered data visualization dashboards and automated PDF export systems for operational reporting.",
      "Leverage Claude Code CLI across day-to-day engineering workflows for rapid codebase navigation, intelligent refactoring and accelerated feature delivery."
    ]
  },
  {
    role: "Robokart Intern",
    company: "Robokart",
    period: "12/2024 – 12/2024",
    type: "Internship",
    location: "Gujarat, India",
    description: "Conducted technical training programs on embedded hardware and developed C/C++ control software.",
    achievements: [
      "Conducted technical hands-on training sessions for 400+ students on robotics and embedded systems.",
      "Gained hands-on experience with Arduino Uno, sensor networks, and real-time hardware integration.",
      "Developed and debugged C/C++ firmware programs for microcontrollers using the Arduino IDE."
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    institution: "Shree L.R. Tiwari College of Engineering",
    period: "2022 – 2026",
    location: "Mumbai, Maharashtra",
    details: "Focusing on Software Engineering, Data Structures, Algorithms, DBMS, and Web Technologies."
  },
  {
    degree: "Higher Secondary Education (HSC - Science)",
    institution: "Durga Devi Saraf College of Science",
    period: "2020 – 2022",
    location: "Mumbai, Maharashtra",
    details: "Science stream with Mathematics, Physics, Chemistry, and Information Technology."
  },
  {
    degree: "Secondary Education (SSC)",
    institution: "Queen Mary High School",
    period: "2019 – 2020",
    location: "Mumbai, Maharashtra",
    details: "Foundational education with academic distinction."
  }
];

export const certificationsAndAchievements = {
  certifications: [
    {
      title: "Delta (Full Stack Web Development)",
      issuer: "Apna College",
      instructor: "Shradha Khapra",
      credentialId: "6abfa1182083e21f9d0aa358",
      description: "Comprehensive full stack development covering JavaScript, Node.js, Express, MongoDB, REST APIs, HTML5, and CSS3.",
      fileUrl: "/certificates/apna-college-full-stack.pdf",
      badge: "Full Stack"
    },
    {
      title: "Claude Code 101",
      issuer: "Anthropic",
      description: "Official certification in Claude Code CLI, agentic terminal workflows, AI code assistance, and autonomous developer tooling.",
      fileUrl: "/certificates/anthropic-claude-code-101.pdf",
      badge: "Agentic AI"
    },
    {
      title: "Claude 101",
      issuer: "Anthropic",
      description: "Foundational mastery of Anthropic's Claude LLM models, advanced prompt engineering, and multimodal AI capabilities.",
      fileUrl: "/certificates/anthropic-claude-101.pdf",
      badge: "LLM Systems"
    },
    {
      title: "Introduction to Claude Cowork",
      issuer: "Anthropic",
      description: "Enterprise collaboration, agent-assisted workflows, and productivity pipelines using Anthropic Claude architectures.",
      fileUrl: "/certificates/anthropic-claude-cowork.pdf",
      badge: "AI Collaboration"
    }
  ],
  achievements: [
    {
      title: "250+ DSA Problems Solved",
      description: "Solved across platforms including LeetCode, mastering Data Structures, Algorithms, and optimization."
    },
    {
      title: "Shortlisted for TCS Prime",
      description: "Selected through a competitive, high-difficulty national-level technical assessment."
    },
    {
      title: "Mentored 400+ Students",
      description: "Conducted hands-on embedded systems and coding workshops under an innovation club initiative."
    }
  ],
  languagesKnown: ["English", "Hindi"],
  interests: ["Competitive Programming", "Outdoor Games", "Podcasts", "Fitness"]
};

export const terminalResponses = {
  help: `Available commands:
  • about        - Summary of background, education, and objectives
  • skills       - View core technical stack (React, Node, AWS, C++)
  • projects     - View software projects (Algo Tracker, Serenity, EatFresh)
  • experience   - View work history at Icanio Technologies & Robokart
  • education    - View college and academic details
  • achievements - View TCS Prime shortlist, DSA milestones, and mentoring
  • certifications - View verified credentials from Apna College & Anthropic
  • resume       - View and download Satyam's latest CV (PDF)
  • contact      - Get email, phone, GitHub, and LinkedIn links
  • clear        - Clear the terminal screen`,

  about: `Satyam Jha | Aspiring Software Developer & Full Stack Engineer
Location: Mumbai, Maharashtra, India
Education: B.E. in Information Technology @ Shree L.R. Tiwari College of Engineering (2022 - 2026)
Specialization: Full-Stack Web Development (React.js, Next.js, Node.js, Express.js, AWS Cloud)`,

  skills: `Technical Stack:
  [Languages]   C++, JavaScript (ES6+), HTML5, CSS3, TypeScript
  [Frontend]    React.js, Next.js, Redux, Tailwind CSS, Recharts, jsPDF
  [Backend]     Node.js, Express.js, REST APIs, WebSocket, MJML, Axios
  [Databases]   MySQL, MongoDB, AWS DynamoDB
  [AWS Cloud]   S3, EC2, Lambda, CloudFront, AWS CLI
  [Tools]       Git, GitHub, Vercel, VS Code, Claude Code`,

  projects: `Featured Projects:
  1. Algo Tracker       - DSA Question Tracker [https://algo-tracker-dsa.vercel.app/]
  2. Serenity Healthcare- Holistic Wellness Platform [https://serenity-yoga-natural-healthcare.vercel.app/]
  3. EatFresh Platform  - Food Delivery & REST APIs [Node.js, Express, MongoDB]`,

  certifications: `Verified Certifications:
  • Delta (Full Stack Web Development) - Apna College [Shradha Khapra]
  • Claude Code 101 - Anthropic
  • Claude 101 - Anthropic
  • Introduction to Claude Cowork - Anthropic`,

  experience: `Professional Experience:
  • Full Stack Developer @ Icanio Technologies (07/2026 – Present)
    Next.js, Redux, Node.js, AWS (S3, EC2, Lambda), Claude Code CLI
  • Robokart Intern @ Gujarat (12/2024 – 12/2024)
    Trained 400+ students, Arduino Uno, C/C++ embedded programming`,

  education: `Academic Background:
  • B.E. in Information Technology: Shree L.R. Tiwari College of Engineering (2022 - 2026)
  • Higher Secondary (Science): Durga Devi Saraf College of Science (2020 - 2022)
  • Secondary School: Queen Mary High School (2019 - 2020)`,

  achievements: `Achievements:
  ⭐ Solved 250+ DSA problems across LeetCode & competitive platforms
  ⭐ Shortlisted for TCS Prime via competitive national-level selection
  ⭐ Mentored 400+ students in hands-on technical workshops
  ⭐ Completed Apna College Delta Full Stack Certification
  ⭐ Certified in Claude 101 & Claude Code 101 by Anthropic`,

  contact: `Connect with Satyam Jha:
  Email:    satyamj9324@gmail.com
  Phone:    +91 9321459947
  LinkedIn: linkedin.com/in/satyam-jha-394255215
  GitHub:   github.com/satyam932408
  Status:   Open for software engineering opportunities!`,

  resume: `Curriculum Vitae (Satyam Jha):
  • File: satyam-latest-cv.pdf
  • Direct Link: /satyam-latest-cv.pdf
  • Role: Full Stack Software Developer
  Opening CV in your browser... 📄`,

  cv: `Curriculum Vitae (Satyam Jha):
  • File: satyam-latest-cv.pdf
  • Direct Link: /satyam-latest-cv.pdf
  • Role: Full Stack Software Developer
  Opening CV in your browser... 📄`,

  sudo: `Permission granted! Welcome Satyam, ready to deploy to production. 🚀`
};
