export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Backend & Systems' | 'E-Commerce' | 'Enterprise Systems' | 'AI & Web Platforms';
  clientRole?: string;
  badge: string;
  liveUrl?: string;
  githubUrl?: string;
  shortDescription: string;
  fullDescription: string;
  architecturePoints: string[];
  keyFeatures: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  highlight: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level: number; tag?: string }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  highlights: string[];
  tools: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  badge: string;
  description: string;
  year?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Kishoresharma T",
    title: "Backend Software Engineer",
    tagline: "Java, Spring Boot, REST APIs, PostgreSQL, Docker",
    email: "krishkishoreks@gmail.com",
    phone: "7695946750",
    location: "Salem, Tamil Nadu, India",
    linkedin: "https://linkedin.com/in/kishore-sharma-t",
    github: "https://github.com/kishoresharmaks",
    resumeUrl: "/Kishoresharma_T_SDE_Resume.pdf",
    degree: "B.Tech – Information Technology",
    college: "Sona College of Technology",
    cgpa: "8.01 / 10",
    gradYear: "2022 – 2026",
    summary: "Backend Software Engineer skilled in Java, Spring Boot, REST APIs, PostgreSQL, Docker, and Microservices. Experienced in designing 200+ Prisma models, building ACID-compliant dispatch routing engines with PostgreSQL row locks, RabbitMQ async queues, and production web applications.",
    stats: [
      { label: "B.Tech CGPA", value: "8.01" },
      { label: "Core Stack", value: "Java & Spring" },
      { label: "AWS Certifications", value: "2x" },
      { label: "Shipped Projects", value: "6+" },
    ],
  },

  skills: [
    {
      title: "Java & Spring Ecosystem",
      iconName: "Server",
      description: "Enterprise backend development with modern Java, Spring Boot, and ORM frameworks.",
      skills: [
        { name: "Java (Core, OOP, Multithreading, Streams)", level: 94, tag: "Primary" },
        { name: "Spring Boot & Spring Data JPA", level: 90, tag: "Framework" },
        { name: "REST APIs & Maven Build Management", level: 92, tag: "APIs" },
        { name: "Exception Handling & Collections Framework", level: 92, tag: "Core" },
        { name: "HttpSession & Security Auth", level: 88, tag: "Auth" },
      ],
    },
    {
      title: "Backend, APIs & Messaging",
      iconName: "Cpu",
      description: "Distributed architectures, asynchronous job queues, and type-safe server logic.",
      skills: [
        { name: "RabbitMQ (Async Messaging & Job Queues)", level: 86, tag: "Queues" },
        { name: "NestJS & Node.js (Microservices)", level: 88, tag: "Backend" },
        { name: "TypeScript & JavaScript", level: 90, tag: "Language" },
        { name: "Postman API Testing & Load Testing", level: 88, tag: "Testing" },
        { name: "Data Structures & Algorithms", level: 85, tag: "CS Core" },
      ],
    },
    {
      title: "Databases & Transactions",
      iconName: "Database",
      description: "ACID transactions, relational schemas, ORMs, and query optimization.",
      skills: [
        { name: "PostgreSQL & Row-Level Locking", level: 90, tag: "Primary DB" },
        { name: "Prisma ORM (200+ Model Schemas)", level: 92, tag: "ORM" },
        { name: "MySQL & MongoDB", level: 88, tag: "Databases" },
        { name: "Database Design & Indexing", level: 88, tag: "Architecture" },
      ],
    },
    {
      title: "DevOps, Cloud & Linux",
      iconName: "Cloud",
      description: "Containerization, automated CI/CD pipelines, and cloud hosting.",
      skills: [
        { name: "Docker Containerization", level: 88, tag: "DevOps" },
        { name: "GitHub Actions CI/CD Pipelines", level: 88, tag: "CI/CD" },
        { name: "Linux VPS, Nginx Reverse Proxy & PM2", level: 86, tag: "Production" },
        { name: "AWS Cloud (EC2, S3, IAM)", level: 84, tag: "Certified" },
      ],
    },
    {
      title: "Frontend & Web Platforms",
      iconName: "Layout",
      description: "Modern, responsive frontend development for client and customer storefronts.",
      skills: [
        { name: "React 18 & Next.js", level: 90, tag: "Frontend" },
        { name: "Tailwind CSS & Responsive UI", level: 92, tag: "Styling" },
        { name: "React Native (Mobile)", level: 80, tag: "Mobile" },
        { name: "Razorpay Payment Gateway & Webhooks", level: 90, tag: "Payments" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "1handindia",
      title: "1HandIndia Marketplace",
      subtitle: "Multi-Vendor E-Commerce Platform with Real-Time Routing Engine",
      category: "E-Commerce",
      clientRole: "Backend & Systems Architect",
      badge: "Production Client System",
      liveUrl: "https://1handindia.com",
      shortDescription: "Type-safe NestJS & PostgreSQL multi-seller marketplace serving customer, seller, and delivery apps with ACID row-lock batch dispatch and RabbitMQ async queues.",
      fullDescription: "Built the comprehensive backend REST APIs and database schema for 1HandIndia. Designed a PostgreSQL schema of 200+ Prisma models across 17 domain modules, created an automated courier dispatch engine using ordered row locks inside ACID transactions, integrated RabbitMQ workers, Dockerized the services, and automated CI/CD with GitHub Actions.",
      architecturePoints: [
        "Architected 200+ Prisma models across 17 domain modules covering auth, orders, payments, inventory, and delivery.",
        "Built courier dispatch scoring engine with ordered PostgreSQL row locks inside ACID transactions to eliminate race conditions.",
        "Integrated RabbitMQ message broker for asynchronous background order processing and courier allocation.",
        "Containerized with Docker and configured GitHub Actions CI/CD with Linux VPS, Nginx reverse proxy, and PM2.",
        "Integrated Razorpay payments and COD wallet tracking with single-pass checkout optimization.",
      ],
      keyFeatures: [
        "Multi-seller store management and verified merchant onboarding.",
        "Automated proximity courier scoring and duplicate-free dispatch.",
        "RabbitMQ asynchronous order and notification processing.",
        "Multi-platform backend powering Web, Seller App, and Delivery Partner App.",
      ],
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "PostGIS", "RabbitMQ", "Docker", "Git", "GitHub Actions", "Razorpay", "Next.js", "Linux", "Nginx", "PM2"],
      metrics: [
        { label: "Prisma Models", value: "200+" },
        { label: "Domain Modules", value: "17 Modules" },
        { label: "Concurrency", value: "ACID Row Locks" },
      ],
      highlight: "Engineered the ACID-compliant courier batch routing engine and 200+ model schema.",
    },
    {
      id: "spring-expense-tracker",
      title: "Expense Tracker REST App",
      subtitle: "Spring Boot Enterprise REST API & SQL Expense Management",
      category: "Backend & Systems",
      clientRole: "Backend Developer",
      badge: "Java / Spring Boot",
      githubUrl: "https://github.com/kishoresharmaks",
      shortDescription: "Spring Boot REST application with full CRUD endpoints (GET, POST, PUT, DELETE) and SQL database for monthly and all-time spending categorization.",
      fullDescription: "Engineered a production-ready Spring Boot backend application providing complete RESTful CRUD endpoints for expense tracking. Includes SQL relational database management with Maven build automation, month-wise filtering logic, and a responsive frontend.",
      architecturePoints: [
        "Spring Boot RESTful controller architecture with clean separation of Service and Repository layers.",
        "Relational SQL database schema for persistent expense categorization and audit trails.",
        "Maven build and dependency management with strict input validation.",
        "Monthly and all-time expense aggregation queries with sub-second execution.",
      ],
      keyFeatures: [
        "Complete REST API endpoints: GET, POST, PUT, DELETE.",
        "Month-wise filter and spending aggregation summaries.",
        "Structured error handling and HTTP status code compliance.",
        "Responsive frontend interface for quick logging and balance tracking.",
      ],
      technologies: ["Java", "Spring Boot", "REST APIs", "SQL", "Maven", "JavaScript", "HTML5/CSS3"],
      metrics: [
        { label: "Architecture", value: "Layered Spring" },
        { label: "Endpoints", value: "Full CRUD" },
        { label: "Build Tool", value: "Maven" },
      ],
      highlight: "Constructed modular Spring Boot REST service with SQL persistence and month-wise analytics.",
    },
    {
      id: "spring-auth-session",
      title: "Signup-Login-Auth Service",
      subtitle: "Spring Boot Session-Based Authentication & Security",
      category: "Backend & Systems",
      clientRole: "Backend Developer",
      badge: "Spring Security",
      githubUrl: "https://github.com/kishoresharmaks",
      shortDescription: "Robust Spring Boot authentication service implementing user signup, secure credential hashing, and HttpSession-based state management.",
      fullDescription: "Implemented a secure user authentication system using Spring Boot. Features server-managed HttpSession session state handling, secure credential verification, session validation interceptors, and user registration flows.",
      architecturePoints: [
        "Spring Boot session-based authentication using servlet HttpSession.",
        "Secure registration and login verification with state validation.",
        "Prevention of unauthorized resource access via session state checks.",
      ],
      keyFeatures: [
        "User registration with duplicate identity prevention.",
        "Secure login with stateful session management.",
        "Session invalidation and logout lifecycle management.",
      ],
      technologies: ["Java", "Spring Boot", "HttpSession", "Spring Data JPA", "SQL"],
      metrics: [
        { label: "Auth Mechanism", value: "HttpSession" },
        { label: "Framework", value: "Spring Boot" },
        { label: "Security", value: "Server-State" },
      ],
      highlight: "Implemented stateful session lifecycle authentication and registration workflows.",
    },
    {
      id: "cowork30",
      title: "Coworking Space Platform",
      subtitle: "Real-Time Desk & Meeting Room Booking System",
      category: "Enterprise Systems",
      clientRole: "Full Stack Engineer",
      badge: "Real-Time Booking",
      liveUrl: "https://cowork30.com/",
      shortDescription: "Interactive shared office platform with live visual floor plans, collision-free meeting room booking, and Razorpay webhook payment verification.",
      fullDescription: "Delivered a complete coworking space booking platform. Features an interactive visual 2D floor map showing live desk occupancy, meeting room scheduling with conflict resolution, Razorpay payment processing, and automated webhook verification.",
      architecturePoints: [
        "Conflict-free room reservation engine preventing overlapping time slots.",
        "Razorpay online payment integration with cryptographic webhook validation.",
        "Real-time desk occupancy indicator using WebSocket connections.",
        "Automated digital billing receipts and QR entry passes.",
      ],
      keyFeatures: [
        "Interactive visual desk picker with real-time occupancy status.",
        "Hourly meeting room scheduler with add-on refreshment ordering.",
        "Razorpay payment verification with automated tax receipts.",
      ],
      technologies: ["Next.js", "TypeScript", "MySQL", "Socket.io", "Razorpay", "Tailwind CSS"],
      metrics: [
        { label: "Floor Plan", value: "Interactive 2D" },
        { label: "Payments", value: "Razorpay Webhooks" },
        { label: "Updates", value: "Real-Time" },
      ],
      highlight: "Built collision-free meeting scheduler and real-time visual desk availability map.",
    },
    {
      id: "nl2mongo",
      title: "NL2Mongo Query Tool",
      subtitle: "Natural Language AI Translator to Database Queries & Visual Charts",
      category: "AI & Web Platforms",
      clientRole: "Creator & Developer",
      badge: "AI Data Tool",
      shortDescription: "Intelligent analytics tool converting plain English questions into MongoDB aggregation queries and auto-generated data charts.",
      fullDescription: "Developed an AI tool that translates natural language questions into secure MongoDB aggregation pipelines. Includes a 2-step plan confirmation workflow to protect database integrity, automatic chart format selection, and conversational query memory.",
      architecturePoints: [
        "Natural language prompt parser generating read-only MongoDB queries.",
        "2-step plan and confirmation safety gate before query execution.",
        "Dynamic chart selector generating Bar, Line, and Pie visualizations.",
      ],
      keyFeatures: [
        "Plain English to database query generation.",
        "Instant visual chart generation via Recharts.",
        "Safe read-only execution environment.",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "AI NLP", "Recharts", "Tailwind CSS"],
      metrics: [
        { label: "Query Input", value: "Plain English" },
        { label: "Data Safety", value: "2-Step Confirm" },
        { label: "Visuals", value: "Auto Charts" },
      ],
      highlight: "Engineered natural language database query engine with 2-step safety validation.",
    },
    {
      id: "studyflow",
      title: "StudyFlow AI Assistant",
      subtitle: "Offline-First Study Planner, AI Tutor & Practice Web App",
      category: "AI & Web Platforms",
      clientRole: "Creator & Developer",
      badge: "Offline PWA",
      shortDescription: "Progressive Web App with smart spaced-repetition flashcards, offline IndexedDB storage, and AI concept tutoring.",
      fullDescription: "Engineered an offline-first educational platform featuring spaced repetition flashcards, offline local storage synchronization, an interactive coding sandbox, and an integrated AI tutor.",
      architecturePoints: [
        "Offline-first architecture utilizing IndexedDB for zero-latency local caching.",
        "SuperMemo SM-2 spaced repetition algorithm for adaptive card scheduling.",
        "Bidirectional data synchronization upon reconnecting to network.",
      ],
      keyFeatures: [
        "100% offline functionality with background sync.",
        "Spaced repetition study scheduling.",
        "Interactive coding sandbox.",
      ],
      technologies: ["React", "TypeScript", "PWA", "IndexedDB", "Supabase", "Tailwind CSS"],
      metrics: [
        { label: "Offline Mode", value: "100% Functional" },
        { label: "Storage", value: "IndexedDB" },
        { label: "Algorithm", value: "Spaced Repetition" },
      ],
      highlight: "Engineered offline-first PWA with IndexedDB and spaced repetition flashcard algorithms.",
    },
  ] as Project[],

  experience: [
    {
      role: "Freelance Full-Stack Developer",
      company: "Self-Employed",
      period: "Oct 2025 – Present",
      type: "Client Projects & Freelance",
      location: "Salem, India / Remote",
      highlights: [
        "Developed type-safe backend REST APIs with NestJS and TypeScript on PostgreSQL for 1HandIndia multi-vendor marketplace, serving customer, seller, and delivery apps.",
        "Designed a comprehensive PostgreSQL schema of 200+ Prisma models across 17 domain modules, auditing data integrity and security.",
        "Built an automated courier routing and batch-assignment engine that scores couriers by proximity and cash exposure, using ordered PostgreSQL row locks inside ACID transactions.",
        "Integrated RabbitMQ for asynchronous messaging between API servers and background workers handling delivery and order jobs.",
        "Containerized services with Docker, configured GitHub Actions CI/CD pipelines (including native Android builds), and deployed to Linux VPS with Nginx and PM2.",
        "Delivered end-to-end client systems including a coworking space booking platform with Razorpay payments and webhook verification.",
      ],
      tools: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "PostGIS", "RabbitMQ", "Docker", "Git", "GitHub Actions", "Razorpay", "Linux", "Nginx", "PM2"],
    },
    {
      role: "Software Engineering Intern (Virtual)",
      company: "Infosys Springboard",
      period: "2024",
      type: "Virtual Internship",
      location: "Remote, India",
      highlights: [
        "Developed the Community Housing Project, a full-stack Spring Boot and ReactJS web application.",
        "Created RESTful endpoints for resident account management, maintenance service requests, and facility reservations.",
        "Designed relational database structures using Spring Data JPA and MySQL for efficient data storage and fast query times.",
      ],
      tools: ["Java", "Spring Boot", "ReactJS", "Spring Data JPA", "MySQL", "REST APIs"],
    },
  ] as Experience[],

  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      badge: "Official AWS Credential",
      description: "Validated expertise in AWS cloud infrastructure, security, networking, IAM, EC2, and S3.",
      year: "2024",
    },
    {
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services (AWS)",
      badge: "Official AWS AI Credential",
      description: "Certified proficiency in machine learning concepts, foundation models, and generative AI systems.",
      year: "2024",
    },
    {
      title: "Programming in Java – Elite Certification",
      issuer: "NPTEL (IIT)",
      badge: "Academic Distinction",
      description: "Elite certification in Core Java, OOP design, multithreading, and algorithmic problem solving.",
      year: "2023",
    },
    {
      title: "Wipro Talent Next – Java Full Stack",
      issuer: "Wipro Digital",
      badge: "Industry Credential",
      description: "Comprehensive industry certification covering Java, Spring Boot, microservices, and web development.",
      year: "2024",
    },
  ] as Certification[],

  achievements: [
    {
      title: "TECHGium Hackathon Pre-Finalist",
      organization: "L&T Technology Services",
      type: "National Hackathon",
      description: "Built a multicast CCTV video streaming solution optimizing network bandwidth for high-concurrency streaming.",
    },
    {
      title: "Academic Excellence Award",
      organization: "Sona College of Technology",
      type: "Academic Distinction",
      description: "Awarded Academic Excellence for outstanding academic achievement in IT (CGPA: 8.01).",
    },
    {
      title: "Chief Marketing Officer (CMO)",
      organization: "Coding Ninjas 10x Student Club",
      type: "Student Leadership",
      description: "Led student technical workshops, hackathons, and competitive programming meetups.",
    },
    {
      title: "Organizer & Tech Lead",
      organization: "Google Developer Groups (GDG)",
      type: "Developer Community",
      description: "Organized technical sessions and developer workshops on modern backend engineering and cloud architectures.",
    },
  ],
};
