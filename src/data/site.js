/**
 * Single source of truth for all portfolio content.
 * Presentation components read from here so copy can be edited without
 * touching layout or animation code.
 */

/**
 * Where the resume lives: an asset attached to the repository's latest GitHub
 * release. Publishing that release — or replacing its asset — is the only thing
 * needed to change what the site serves.
 */
const resumeRelease =
  "https://github.com/dangi-vikas/my-portfolio/releases/latest/download";

export const profile = {
  name: "Vikas Dangi",
  initials: "VD",
  role: "Software Engineer",
  location: "Hyderabad, India",
  email: "mvikasdangi@gmail.com",
  github: "https://github.com/dangi-vikas",
  githubLabel: "github.com/dangi-vikas",
  linkedin: "https://www.linkedin.com/in/vikasdangi",
  linkedinLabel: "linkedin.com/in/vikasdangi",
  /**
   * Resume download.
   *
   * This is an asset on the repository's latest GitHub release:
   *
   *   https://github.com/dangi-vikas/my-portfolio/releases/latest/download/Vikas-Dangi-Resume.pdf
   *
   * `releases/latest` follows GitHub's redirect to the newest published release
   * (drafts and pre-releases are skipped), and GitHub answers with
   * `Content-Disposition: attachment`, so a click downloads the file — named
   * after the asset — instead of opening a preview. Replacing that asset leaves
   * this URL untouched, so the site serves the new resume with no rebuild, no
   * redeploy and no code change.
   *
   * The asset name and this URL have to agree: if you upload the PDF under a
   * different name, update `resumeUrl` in the same commit.
   *
   * Prefer serving it from your own domain? Commit the PDF to `public/resume/`
   * and set `resumeUrl: resumePath` below — that path is deployed by Netlify,
   * but each resume update then needs a deploy.
   */
  resumeUrl: `${resumeRelease}/Vikas-Dangi-Resume.pdf`,
  resumePath: "/resume/Vikas-Dangi-Resume.pdf",
  resumeFileName: "Vikas-Dangi-Resume.pdf",
  /**
   * Neutral, non-committal presence label. Change this to a status such as
   * "Open to new opportunities" only when you want to state that explicitly.
   */
  statusLabel: "Hyderabad, India",
  tagline:
    "Software Engineer building scalable backend systems and AI-powered experiences.",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  eyebrow: "SOFTWARE ENGINEER · JAVA BACKEND · DISTRIBUTED SYSTEMS",
  headline: ["Building reliable systems.", "Engineering what scales."],
  supporting:
    "I'm Vikas Dangi, a Software Engineer with 4+ years of experience building backend and full-stack applications using Java, Spring Boot, reactive systems, microservices, and cloud-native technologies.",
  /*
   * Three factual cards shown along the base of the hero, echoing the
   * "destination" cards of the reference layout. Every value is drawn from the
   * experience data below — nothing here is invented.
   */
  stats: [
    { label: "Experience", value: "4+ years", note: "Backend · Full-stack" },
    { label: "Currently", value: "Marriott", note: "Software Engineer" },
    { label: "Based in", value: "Hyderabad", note: "India" },
  ],
  highlight: [
    "Java 21",
    "Spring Boot",
    "Kafka",
    "AWS",
    "Distributed Systems",
  ],
  primaryCta: { label: "Explore My Work", href: "#projects" },
  secondaryCta: { label: "Download Resume", href: profile.resumeUrl },
};

export const about = {
  eyebrow: "About",
  heading: "Engineering beyond the endpoint.",
  paragraphs: [
    "I'm a Software Engineer focused on building scalable backend services and reliable distributed applications. My work spans Java and Spring-based microservices, reactive APIs, event-driven architecture, caching, cloud-native deployment, and performance optimization.",
    "I enjoy understanding how systems behave under load, how services recover from failures, and how thoughtful engineering decisions improve reliability and maintainability.",
  ],
  facts: [
    { label: "Focus", value: "Backend · Distributed systems" },
    { label: "Core stack", value: "Java 21 · Spring Boot · Kafka" },
    { label: "Cloud", value: "AWS · Kubernetes · CI/CD" },
    { label: "Based in", value: "Hyderabad, India" },
  ],
};

export const experience = [
  {
    company: "Marriott Tech Accelerator",
    role: "Software Engineer",
    location: "Hyderabad, India",
    period: "June 2025 – Present",
    current: true,
    summary:
      "High-throughput reactive services and event-driven workflows for a high-availability reservation platform.",
    highlights: [
      {
        text: "Designed and developed high-throughput reactive microservices using Java 21 and Spring WebFlux, improving response time by approximately 35% and throughput by approximately 40% for workloads exceeding 150 TPS.",
        metric: "~35% faster response · ~40% more throughput",
      },
      {
        text: "Contributed to a high-availability reservation platform serving millions of users, maintaining approximately 99.95% uptime.",
        metric: "~99.95% uptime",
      },
      {
        text: "Built React and TypeScript components and improved frontend performance metrics by approximately 20%.",
        metric: "~20% frontend performance",
      },
      {
        text: "Implemented circuit breakers, retries, and timeouts, reducing the impact of downstream failures by approximately 45%.",
        metric: "~45% reduced failure impact",
      },
      {
        text: "Optimized data access through read/write database separation and Amazon ElastiCache caching, reducing latency by approximately 30–40%.",
        metric: "~30–40% lower latency",
      },
      {
        text: "Built Kafka-based event-driven workflows and integrated secure APIs using Spring Security and JWT.",
      },
      {
        text: "Deployed containerized services on AWS EKS/Kubernetes and automated delivery through Harness CI/CD, reducing deployment time by approximately 50%.",
        metric: "~50% faster deployments",
      },
      {
        text: "Used Dynatrace and service-mesh capabilities for observability, traffic management, and reliability.",
      },
    ],
    tags: [
      "Java 21",
      "Spring WebFlux",
      "Kafka",
      "AWS EKS",
      "Harness",
      "Dynatrace",
      "React",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Java Developer",
    location: "Pune, India",
    period: "August 2022 – May 2025",
    current: false,
    summary:
      "Spring Boot microservices and REST APIs for a high-traffic pharmacy platform.",
    highlights: [
      {
        text: "Developed Spring Boot microservices and REST APIs for a high-traffic pharmacy platform serving 50K+ daily users with approximately 99.9% availability.",
        metric: "50K+ daily users · ~99.9% availability",
      },
      {
        text: "Delivered 50+ production features and built 200+ unit/integration tests.",
        metric: "50+ features · 200+ tests",
      },
      {
        text: "Improved backend performance by approximately 20% through query optimization and data-access improvements.",
        metric: "~20% backend performance",
      },
      {
        text: "Implemented Spring Security/OAuth-based authentication and integrated React applications through Kong API Gateway.",
      },
      {
        text: "Designed transactional locking and thread-safe operations to prevent race conditions.",
      },
      {
        text: "Automated build and deployment workflows using Azure DevOps and Docker, reducing deployment time by approximately 30%.",
        metric: "~30% faster deployments",
      },
      {
        text: "Used JUnit and Mockito testing practices, maintaining 90%+ test coverage.",
        metric: "90%+ test coverage",
      },
    ],
    tags: [
      "Spring Boot",
      "Kong",
      "OAuth",
      "Azure DevOps",
      "Docker",
      "JUnit",
      "Mockito",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: "code",
    items: ["Java", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    icon: "server",
    items: [
      "Spring Boot",
      "Spring WebFlux",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    title: "Messaging & caching",
    icon: "stream",
    items: ["Apache Kafka", "Redis", "Amazon ElastiCache"],
  },
  {
    title: "Databases",
    icon: "database",
    items: ["PostgreSQL", "MongoDB", "Amazon DocumentDB", "MS SQL Server"],
  },
  {
    title: "Cloud & infrastructure",
    icon: "cloud",
    items: [
      "AWS",
      "Amazon EKS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Harness",
      "Azure DevOps",
    ],
  },
  {
    title: "Architecture",
    icon: "network",
    items: [
      "Distributed Systems",
      "Event-Driven Architecture",
      "Reactive Systems",
      "High Availability",
      "Fault Tolerance",
      "Scalability",
    ],
  },
  {
    title: "Testing & tooling",
    icon: "flask",
    items: [
      "JUnit",
      "Mockito",
      "Dynatrace",
      "Vault",
      "Git",
      "Swagger/OpenAPI",
      "Postman",
    ],
  },
];

export const projects = [
  {
    id: "snap2stay",
    name: "Snap2Stay",
    tagline: "AI-Powered Visual Property Search",
    featured: true,
    description:
      "A visual property search system that lets users upload an image and discover matching Marriott properties and other places in the same destination.",
    highlights: [
      "Designed a visual property search system using Java 21, Spring Boot, and Spring WebFlux.",
      "Integrated Python FastAPI with CLIP-based image embeddings using Hugging Face Transformers.",
      "Architected four services across two programming languages for visual search, property catalog management, image ingestion, and embedding generation.",
      "Incorporated Resilience4j circuit breakers for resilient downstream communication.",
      "Includes a vector-store ingestion workflow for image embeddings.",
    ],
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring WebFlux",
      "Python 3.11",
      "FastAPI",
      "CLIP",
      "Hugging Face Transformers",
      "Resilience4j",
    ],
    links: {
      github: "https://github.com/dangi-vikas/snap2stay",
    },
    visual: "snap2stay",
  },
  {
    id: "nexgen",
    name: "NexGen",
    tagline: "Pharmacy Platform",
    featured: false,
    description:
      "A pharmacy platform built using Spring Boot microservices and React.",
    highlights: [
      "Event-driven communication using Kafka.",
      "Caching with Redis.",
      "REST APIs and secure authentication.",
      "Containerization and orchestration using Docker and Kubernetes.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "Kafka",
      "Redis",
      "SQL Server",
      "Docker",
      "Kubernetes",
    ],
    links: {
      github: "https://github.com/dangi-vikas/nexgen",
    },
    visual: "nexgen",
  },
];

export const education = {
  degree: "Bachelor of Engineering, Mechanical Engineering",
  institute: "Institute of Engineering & Technology, DAVV, Indore",
  period: "2018–2022",
  score: "CGPA: 8.11/10",
  distinction: "Distinction",
};

export const certifications = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft" },
];

export const contact = {
  eyebrow: "Contact",
  heading: "Have an interesting engineering challenge?",
  supporting:
    "I'm always interested in connecting with engineers and teams working on scalable systems, backend architecture, and meaningful technology.",
  email: profile.email,
};
