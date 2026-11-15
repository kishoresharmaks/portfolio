export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  clientRole?: string;
  badge: string;
  liveUrl?: string;
  githubUrl?: string;
  thumbnail: string;
  shortDescription: string;
  fullDescription: string;
  overview: string;
  problemStatement: string;
  solution: string;
  myContribution: string[];
  architecturePoints: string[];
  mainFeatures: string[];
  keyFeatures: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  challenges: string;
  highlight: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; tag?: string; level: number }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  responsibilities: string[];
  highlights: string[];
  technologies: string[];
  tools: string[];
  achievements?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  badge: string;
  description: string;
  year: string;
  credentialUrl?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Kishoresharma T",
    title: "Full-Stack Software Developer",
    secondaryTitle: "Backend Engineer | Application Developer",
    eyebrow: "FULL-STACK SOFTWARE DEVELOPER",
    headline: "Building scalable applications and meaningful digital experiences.",
    supportingText: "I'm Kishoresharma T, a software developer focused on building modern web applications, robust backend systems, and practical digital products using modern technologies.",
    compactTechLine: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "MongoDB"
    ],
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
    summary: "I'm Kishoresharma T, a software developer focused on building modern web applications, robust backend systems, and practical digital products using modern technologies.",
    stats: [
      { label: "B.Tech CGPA", value: "8.01" },
      { label: "Core Stack", value: "Java & Spring" },
      { label: "AWS Certifications", value: "2x" },
      { label: "Shipped Projects", value: "6+" },
    ],
  },

  about: {
    intro: "I'm a Full-Stack Software Developer with a strong interest in backend engineering and application development. I enjoy designing and developing practical software solutions, building APIs, working with databases, and deploying applications in real-world environments.",
    body: "My experience includes working with modern JavaScript and TypeScript technologies, backend frameworks, relational and NoSQL databases, and Linux-based deployment environments.",
    philosophy: "I focus on writing maintainable code, solving engineering problems, and building applications that deliver real value.",
    strengths: [
      {
        title: "Full-Stack Development",
        description: "Building end-to-end, responsive web applications with React, Next.js, and TypeScript with clean component architecture.",
      },
      {
        title: "Backend Engineering",
        description: "Architecting modular server applications with NestJS, Node.js, and Spring Boot, focusing on reliability and clean layers.",
      },
      {
        title: "API Development",
        description: "Designing RESTful APIs with strict validation, predictable error handling, and seamless third-party gateway integrations.",
      },
      {
        title: "Database Design",
        description: "Designing structured relational schemas in PostgreSQL and MySQL, working with Prisma ORM, and modeling NoSQL MongoDB collections.",
      },
      {
        title: "Application Deployment",
        description: "Deploying and managing applications on Linux (Ubuntu) VPS with Nginx reverse proxy, PM2 process management, and Docker.",
      },
      {
        title: "Problem Solving",
        description: "Handling concurrency control, transaction integrity with row-level locks, and optimizing query performance for scale.",
      },
    ],
  },

  skillCategories: [
    {
      title: "Frontend Development",
      description: "Modern, component-driven client applications with responsive design and accessibility.",
      iconName: "Layout",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 92 },
        { name: "React", level: 94 },
        { name: "Next.js", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Bootstrap", level: 86 },
      ],
    },
    {
      title: "Backend Development",
      description: "Scalable server architectures, microservices, asynchronous queues, and REST APIs.",
      iconName: "Server",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "NestJS", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "Java", level: 92 },
        { name: "Spring Boot", level: 90 },
        { name: "PHP", level: 85 },
        { name: "Laravel", level: 85 },
        { name: "REST APIs", level: 94 },
      ],
    },
    {
      title: "Database and ORM",
      description: "Relational integrity, schema migrations, ORMs, and document-oriented databases.",
      iconName: "Database",
      skills: [
        { name: "PostgreSQL", level: 92 },
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 88 },
        { name: "Prisma ORM", level: 92 },
      ],
    },
    {
      title: "DevOps and Infrastructure",
      description: "Linux administration, containerization, web server reverse proxying, and automated CI/CD.",
      iconName: "Cloud",
      skills: [
        { name: "Linux", level: 88 },
        { name: "Ubuntu", level: 88 },
        { name: "Nginx", level: 86 },
        { name: "PM2", level: 86 },
        { name: "VPS Deployment", level: 88 },
        { name: "Git", level: 92 },
        { name: "GitHub", level: 92 },
      ],
    },
    {
      title: "Tools and Integrations",
      description: "Developer tooling, payment gateways, API testing, and third-party webhook integrations.",
      iconName: "Wrench",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 90 },
        { name: "Razorpay", level: 90 },
        { name: "Third-party API integrations", level: 90 },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "1handindia",
      title: "1HandIndia",
      subtitle: "Multi-Vendor E-Commerce Marketplace Platform",
      category: "Multi-Vendor E-Commerce Marketplace",
      badge: "Production Client System",
      liveUrl: "https://1handindia.com/",
      thumbnail: "/images/1handindia.png",
      shortDescription: "A multi-vendor marketplace platform designed to connect customers with merchants, regional producers, sellers, and business suppliers through a unified digital commerce experience.",
      fullDescription: "Architected and implemented the backend REST APIs and database architecture for 1HandIndia. Built a PostgreSQL schema of 200+ Prisma models across 17 domain modules, created an automated courier batch routing engine using ordered row locks inside ACID transactions, integrated RabbitMQ workers, and deployed on Linux VPS with Nginx and PM2.",
      overview: "1HandIndia is an expansive multi-vendor commerce platform serving verified merchants, consumers, and regional logistics providers across India.",
      problemStatement: "Multi-vendor marketplaces struggle with inventory race conditions during flash sales, complex merchant commission splits, and automated delivery partner dispatch without human bottlenecks.",
      solution: "Engineered a type-safe NestJS backend backed by PostgreSQL. Implemented an automated courier routing and batch-assignment engine with ordered row-level locks inside ACID transactions to eliminate race conditions, alongside RabbitMQ message queues for asynchronous order events.",
      myContribution: [
        "Architected a comprehensive PostgreSQL schema of 200+ Prisma models across 17 domain modules.",
        "Built courier dispatch scoring engine with ordered PostgreSQL row locks inside ACID transactions.",
        "Integrated RabbitMQ message broker for asynchronous background order processing and courier allocation.",
        "Configured Linux VPS deployment with Nginx reverse proxy, PM2 clustering, and automated GitHub Actions CI/CD pipelines.",
        "Implemented Razorpay payment gateway integration with cryptographic webhook validation and wallet reconciliation.",
      ],
      architecturePoints: [
        "Modular NestJS monolith with strict domain-driven boundaries (Auth, Products, Orders, Logistics, Wallets).",
        "PostgreSQL database with PostGIS for spatial merchant-to-customer proximity queries.",
        "RabbitMQ message broker buffering asynchronous job queues.",
        "Linux VPS deployment with Nginx SSL termination and PM2 process management.",
      ],
      mainFeatures: [
        "Customer Experience: Product catalog, multi-seller cart, order tracking, and online payments.",
        "Seller Management: Merchant onboarding, inventory management, order fulfillment, and earnings ledger.",
        "Product Management: Multi-tier categories, variants, pricing, and stock controls.",
        "Order Management: Real-time status transitions, invoice generation, and refund handling.",
        "Delivery Workflows: Proximity-based dispatch, delivery app integration, and proof-of-delivery.",
        "Marketplace Administration: Global moderation, merchant verification, commissions, and audit logs.",
      ],
      get keyFeatures() { return this.mainFeatures; },
      technologies: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "REST APIs", "RabbitMQ", "Docker", "Linux VPS", "Nginx", "PM2", "Razorpay"],
      metrics: [
        { label: "Prisma Models", value: "200+" },
        { label: "Domain Modules", value: "17 Modules" },
        { label: "Concurrency", value: "ACID Row Locks" },
        { label: "Deployment", value: "Linux VPS / Nginx" },
      ],
      challenges: "Ensuring zero duplicate dispatches when hundreds of concurrent orders compete for nearby delivery personnel. Resolved by employing database-level SELECT FOR UPDATE row locking within strict transaction timeouts.",
      highlight: "Engineered the ACID-compliant courier batch routing engine and 200+ model schema.",
    },
    {
      id: "cowork-pro",
      title: "Cowork Pro",
      subtitle: "Coworking Space Booking and Client Portal",
      category: "Coworking Space Booking and Client Portal",
      badge: "Full-Stack Portal",
      liveUrl: "https://cowork30.com/",
      thumbnail: "/images/cowork30.png",
      shortDescription: "A full-stack coworking management platform featuring separate administrative and member portals, booking workflows, member credit tracking, payment integration, and content management.",
      fullDescription: "Developed a comprehensive coworking management platform with separate administrative and client workflows. Built conflict-free desk and meeting room reservation systems, monthly membership credit allotment, Razorpay payment verification, and automated billing receipts.",
      overview: "Cowork Pro streamlines physical workspace operations, desk allocation, member subscriptions, and conference room booking for modern coworking venues.",
      problemStatement: "Coworking facilities lose revenue from scheduling collisions, manual invoice collection, and untracked member credits across multiple meeting spaces.",
      solution: "Built a structured Laravel platform with relational MySQL storage. Created role-based portals for administrators and members, automated monthly credit allowances, and integrated Razorpay for instant billing with zero scheduling collisions.",
      myContribution: [
        "Designed and implemented separate administrative and member authentication guards.",
        "Engineered collision-free booking workflow for hot desks, dedicated desks, and hourly conference rooms.",
        "Implemented member credit tracking logic with automatic monthly allowance renewals.",
        "Integrated Razorpay payment gateway with automated digital invoice and receipt generation.",
        "Built dynamic CMS functionality enabling admins to manage space amenities, pricing plans, and announcement boards.",
      ],
      architecturePoints: [
        "MVC architecture powered by PHP 8.2 and Laravel with clean separation of controllers and services.",
        "MySQL relational schema with foreign key constraints ensuring booking slot exclusivity.",
        "Tailwind CSS and Bootstrap 5 frontend with responsive layout for mobile and desktop members.",
        "Razorpay webhook listeners for cryptographic payment confirmation.",
      ],
      mainFeatures: [
        "Separate Admin & Member Portals: Role-specific navigation, permissions, and dashboards.",
        "Booking & Membership Management: Day passes, monthly memberships, and hourly meeting rooms.",
        "Member Credit Tracking: Automated credit balances for conference room reservations.",
        "Payment Integration: Seamless Razorpay checkout with instant confirmation.",
        "CMS Functionality: Dynamic workspace photo galleries, pricing tiers, and FAQ management.",
      ],
      get keyFeatures() { return this.mainFeatures; },
      technologies: ["PHP 8.2", "Laravel 12", "MySQL", "Blade", "Bootstrap 5", "Tailwind CSS", "JavaScript", "Razorpay"],
      metrics: [
        { label: "Architecture", value: "Laravel 12 MVC" },
        { label: "Authentication", value: "Multi-Guard Admin/User" },
        { label: "Payments", value: "Razorpay Webhooks" },
        { label: "Database", value: "MySQL Relational" },
      ],
      challenges: "Preventing double-booking of high-demand conference rooms during peak business hours. Solved using database transaction isolation with slot lock checks prior to payment authorization.",
      highlight: "Delivered dual-portal coworking management with automated credit tracking and payment webhooks.",
    },
    {
      id: "nl2mongo",
      title: "NL2Mongo AI Query Platform",
      subtitle: "AI-Powered Database Query Translation Engine",
      category: "AI-Powered Database Query Platform",
      badge: "AI Query Platform",
      thumbnail: "/images/nl2mongo.png",
      shortDescription: "An AI-powered platform designed to translate natural language requests into MongoDB queries, making database interaction more accessible.",
      fullDescription: "Constructed an intelligent developer tool that converts plain English business questions into syntactically valid MongoDB aggregation pipelines and queries. Incorporates a 2-step confirmation safety guard to verify queries before execution, alongside dynamic chart visualization.",
      overview: "NL2Mongo bridges the gap between non-technical stakeholders and complex NoSQL databases by translating natural language into safe database queries.",
      problemStatement: "Product managers and business analysts frequently need custom database insights, creating repetitive back-and-forth query requests for backend engineering teams.",
      solution: "Built a web platform that parses user requests, generates optimized read-only MongoDB queries using modern AI models, displays the query plan for verification, and automatically renders results into interactive charts.",
      myContribution: [
        "Constructed natural language prompt parsing pipeline translating user queries into MongoDB pipelines.",
        "Implemented a strict 2-step plan verification and read-only execution safety gate.",
        "Integrated Recharts to automatically detect query shape and render Bar, Line, or Pie charts.",
        "Developed full-stack React frontend and Node.js/Express backend with MongoDB connectivity.",
      ],
      architecturePoints: [
        "Client-server architecture with React frontend and Express backend.",
        "Schema-aware AI prompting injecting collection metadata without exposing sensitive data.",
        "Sandboxed MongoDB execution running under restricted read-only credentials.",
      ],
      mainFeatures: [
        "Natural Language Translation: Turns plain English into structured MongoDB aggregation syntax.",
        "2-Step Plan Confirmation: Shows proposed query plan before executing against database.",
        "Dynamic Charting: Automatically converts output data tables into visual charts.",
        "Query History & Export: Save queries and export result sets as CSV or JSON.",
      ],
      get keyFeatures() { return this.mainFeatures; },
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "TypeScript", "AI NLP", "Recharts", "Tailwind CSS"],
      metrics: [
        { label: "Input Format", value: "Plain English" },
        { label: "Safety Gate", value: "2-Step Verification" },
        { label: "Visuals", value: "Dynamic Recharts" },
        { label: "Target DB", value: "MongoDB NoSQL" },
      ],
      challenges: "Ensuring AI generated queries do not perform destructive updates or unbounded full-collection scans. Enforced by parsing AST and rejecting non-find/non-aggregate commands.",
      highlight: "Engineered natural language NoSQL translator with safe 2-step execution gates.",
    },
    {
      id: "nexusnation",
      title: "NexusNation",
      subtitle: "Technical Content Platform & Developer Resource Hub",
      category: "Technical Content Platform",
      badge: "Content Platform",
      liveUrl: "https://nexusnation.in/",
      thumbnail: "/images/beeshub.png",
      shortDescription: "A technical platform focused on publishing technology-related content and providing useful resources for developers and technology enthusiasts.",
      fullDescription: "Designed and launched NexusNation as a high-performance content platform delivering in-depth technical guides, software architecture insights, and curated developer resources. Built with Next.js for server-side rendering, sub-second load times, and structured SEO metadata.",
      overview: "NexusNation provides practical engineering tutorials, software development insights, and technical guides for engineers and tech enthusiasts.",
      problemStatement: "Technical blogs often suffer from slow client-side rendering, poor search engine indexability, and cluttered user interfaces that distract from code readability.",
      solution: "Developed a minimalist, fast Next.js publication with server-rendered markdown pages, syntax-highlighted code blocks, optimized asset delivery, and automated XML sitemaps.",
      myContribution: [
        "Engineered the responsive Next.js frontend with modern typography and dark-mode styling.",
        "Implemented structured technical article layout with syntax highlighting and reading time estimation.",
        "Configured technical SEO including Open Graph, Twitter cards, and Schema.org Article metadata.",
        "Deployed on cloud infrastructure with automated caching headers and CDN delivery.",
      ],
      architecturePoints: [
        "Static site generation (SSG) with incremental static regeneration (ISR) for fast page loads.",
        "Tailwind CSS typography plugin for clean, readable code blocks and long-form prose.",
        "Automated Open Graph image generation and technical metadata extraction.",
      ],
      mainFeatures: [
        "Fast Server-Rendered Content: Optimized for instant reading and perfect Core Web Vitals.",
        "Syntax Highlighted Code: Clear code snippets supporting multiple languages.",
        "Search & Tag Filtering: Categorized technical topics across backend, cloud, and architecture.",
        "Responsive Reader Experience: Mobile-optimized reading layout with zero layout shifts.",
      ],
      get keyFeatures() { return this.mainFeatures; },
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Markdown", "SEO / Schema.org"],
      metrics: [
        { label: "Rendering", value: "Next.js SSG / ISR" },
        { label: "Core Web Vitals", value: "95+ Mobile Score" },
        { label: "Platform", value: "nexusnation.in" },
      ],
      challenges: "Achieving fast initial page load while rendering syntax-highlighted code blocks. Addressed via build-time syntax processing and selective CSS splitting.",
      highlight: "Constructed high-speed technical publishing platform with structured SEO metadata.",
    },
    {
      id: "spring-boot-services",
      title: "Spring Boot REST Services",
      subtitle: "Enterprise Java Services & Security Architecture",
      category: "Enterprise Backend Systems",
      badge: "Java / Spring Boot",
      githubUrl: "https://github.com/kishoresharmaks",
      thumbnail: "/images/studyflow.png",
      shortDescription: "Production-ready Spring Boot backend services implementing RESTful endpoints, relational SQL database persistence, and session security authentication.",
      fullDescription: "Engineered modular Spring Boot enterprise backend applications utilizing clean Controller-Service-Repository architecture, Maven dependency management, SQL persistence via Spring Data JPA, and secure session management.",
      overview: "A suite of enterprise Java services showcasing clean object-oriented architecture, relational database management, and RESTful service design.",
      problemStatement: "Enterprise APIs require strict type safety, structured error handling, reliable input validation, and secure authentication to prevent data corruption.",
      solution: "Built modular Spring Boot services with layered architecture, comprehensive REST endpoints, relational persistence with Spring Data JPA, and session validation interceptors.",
      myContribution: [
        "Developed complete RESTful CRUD endpoints following HTTP status code standards.",
        "Configured Spring Data JPA repositories with relational SQL mapping and validation.",
        "Implemented server-side session authentication lifecycle and security filters.",
        "Organized Maven build configurations with automated unit test scaffolding.",
      ],
      architecturePoints: [
        "Clean layered architecture: Controller -> Service -> Repository -> SQL DB.",
        "Maven build lifecycle with strict dependency scoping.",
        "Global exception handling controller advice returning structured RFC 7807 error responses.",
      ],
      mainFeatures: [
        "RESTful Endpoints: Full GET, POST, PUT, DELETE operations with request validation.",
        "Relational Persistence: Structured SQL schemas with transaction management.",
        "Session Security: Stateful session verification and protected endpoints.",
        "Structured Error Handling: Unified error responses with clear HTTP status codes.",
      ],
      get keyFeatures() { return this.mainFeatures; },
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "SQL", "Maven", "REST APIs", "HttpSession"],
      metrics: [
        { label: "Architecture", value: "Layered Spring" },
        { label: "Build Tool", value: "Maven" },
        { label: "Language", value: "Java 21" },
      ],
      challenges: "Managing stateful session lifecycle alongside scalable REST endpoints. Solved by separating stateless resource endpoints from session-authenticated user services.",
      highlight: "Constructed modular Spring Boot REST service with SQL persistence and clean layered architecture.",
    },
  ] as Project[],

  experience: [
    {
      role: "Freelance Full-Stack Developer",
      company: "Self-Employed",
      period: "Oct 2025 – Present",
      type: "Client Projects & Freelance",
      location: "Salem, India / Remote",
      responsibilities: [
        "Developed type-safe backend REST APIs with NestJS and TypeScript on PostgreSQL for 1HandIndia multi-vendor marketplace, serving customer, seller, and delivery apps.",
        "Designed a comprehensive PostgreSQL schema of 200+ Prisma models across 17 domain modules, auditing data integrity, constraints, and relational indexes.",
        "Built an automated courier routing and batch-assignment engine that scores couriers by proximity and cash exposure, using ordered PostgreSQL row locks inside ACID transactions.",
        "Integrated RabbitMQ for asynchronous messaging between API servers and background workers handling delivery dispatch and order jobs.",
        "Containerized services with Docker, configured GitHub Actions CI/CD pipelines, and deployed to Linux VPS environments with Nginx reverse proxy and PM2 process management.",
        "Delivered full-stack client solutions including the Cowork Pro coworking management platform with Razorpay payment gateway integration and webhook verification.",
      ],
      get highlights() { return this.responsibilities; },
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "RabbitMQ", "Docker", "Linux (Ubuntu)", "Nginx", "PM2", "Razorpay", "Next.js", "Git / GitHub Actions"],
      get tools() { return this.technologies; },
      achievements: [
        "Architected and delivered 200+ model relational schema for production marketplace.",
        "Eliminated order race conditions using PostgreSQL row-level locks.",
      ],
    },
    {
      role: "Software Engineering Intern (Virtual)",
      company: "Infosys Springboard",
      period: "2024",
      type: "Virtual Internship",
      location: "Remote, India",
      responsibilities: [
        "Developed the Community Housing Project, a full-stack Spring Boot and ReactJS web application.",
        "Created RESTful endpoints for resident account management, maintenance service requests, and facility reservations.",
        "Designed relational database structures using Spring Data JPA and MySQL for efficient data storage and fast query times.",
        "Implemented input validation, error handling middleware, and tested endpoints with Postman.",
      ],
      get highlights() { return this.responsibilities; },
      technologies: ["Java", "Spring Boot", "ReactJS", "Spring Data JPA", "MySQL", "REST APIs", "Postman"],
      get tools() { return this.technologies; },
      achievements: [
        "Successfully implemented multi-role resident portal with full CRUD facilities reservation.",
      ],
    },
  ] as Experience[],

  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      badge: "Official AWS Credential",
      description: "Validated expertise in AWS cloud infrastructure, security, networking, IAM, EC2, S3, and cloud deployment principles.",
      year: "2024",
      credentialUrl: "https://aws.amazon.com/verification",
    },
    {
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services (AWS)",
      badge: "Official AWS Credential",
      description: "Certified proficiency in machine learning concepts, foundation models, AI security, and practical generative AI integration.",
      year: "2024",
      credentialUrl: "https://aws.amazon.com/verification",
    },
    {
      title: "Programming in Java – Elite Certification",
      issuer: "NPTEL (IIT)",
      badge: "Academic Distinction",
      description: "Elite certification in Core Java, OOP design patterns, multithreading, collections framework, and algorithmic problem solving.",
      year: "2023",
    },
    {
      title: "Wipro Talent Next – Java Full Stack",
      issuer: "Wipro Digital",
      badge: "Industry Credential",
      description: "Comprehensive industry training program covering Java, Spring Boot, microservices, and modern web application development.",
      year: "2024",
    },
  ] as Certification[],

  education: {
    degree: "B.Tech – Information Technology",
    college: "Sona College of Technology",
    location: "Salem, Tamil Nadu, India",
    period: "2022 – 2026",
    cgpa: "8.01 / 10",
    honors: "Academic Distinction",
  },
  get skills() {
    return this.skillCategories;
  },
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
