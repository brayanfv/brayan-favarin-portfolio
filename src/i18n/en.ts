import { ptBrContent } from "@/i18n/pt-br";
import type { LocaleContent } from "@/i18n/types";

const [professionalManagement, personalPortfolio] = ptBrContent.projects.items;
const [mohawkExperience, simplesDentalExperience] = ptBrContent.experiences.items;
const [backend, frontend, database, tools, practices] = ptBrContent.technologies.groups;

export const enContent = {
  locale: "en",
  metadata: {
    title: "Brayan Favarin | Full Stack Developer",
    description:
      "Brayan Favarin's portfolio — a Full Stack Developer experienced in Java, Spring Boot, Angular, TypeScript, and modern application development.",
    keywords: [
      "Brayan Favarin",
      "Full Stack Developer",
      "Java",
      "Spring Boot",
      "Angular",
      "TypeScript",
      "Next.js",
    ],
    openGraphAlt: "Brayan Favarin — Full Stack Developer",
  },
  sections: {
    home: "home",
    about: "about",
    projects: "projects",
    experience: "experience",
    technologies: "technologies",
    contact: "contact",
  },
  personal: {
    ...ptBrContent.personal,
    role: "Full Stack Developer",
    location: "Criciúma, Santa Catarina, Brazil",
    education: "Computer Science — UNESC",
    area: "Full Stack Development",
    focus: "Java, Spring Boot, Angular, and PostgreSQL",
    availability: "Open to opportunities",
    hero: {
      proposal:
        "Specialized in building complete, well-structured applications that are ready for production.",
      dynamicMessages: [
        "Planning solutions.",
        "Designing architecture.",
        "Building applications.",
        "Preparing for production.",
      ],
      technicalFlow: [
        { detail: "requirements and scope", label: "planning" },
        { detail: "sustainable systems", label: "architecture" },
        { detail: "frontend and backend", label: "development" },
        { detail: "testing and delivery", label: "quality" },
      ],
    },
    about: {
      eyebrow: "01 / About",
      title: "Development beyond code.",
      paragraphs: [
        "I work as a Full Stack Developer, building complete applications with Java, Spring Boot, Angular, and relational databases to turn business needs into reliable, well-structured solutions.",
        "Through real-world projects, I contribute to REST APIs, frontend-backend integration, architectural decisions, business rules, and the continuous evolution of features in collaborative environments.",
        "I enjoy understanding the problem before writing code and making decisions that value organization, architecture, quality, and simplicity. Continuous learning is part of both my work and professional growth.",
      ],
    },
  },
  quickFacts: [
    { label: "Location", value: "Criciúma, Santa Catarina, Brazil" },
    { label: "Education", value: "Computer Science — UNESC" },
    { label: "Specialization", value: "Full Stack Development" },
    { label: "Core stack", value: "Java, Spring Boot, Angular, and PostgreSQL" },
  ],
  projects: {
    section: {
      eyebrow: "02 / Projects",
      title: "Projects that turn knowledge into real solutions.",
      description:
        "A selection of applications built to apply architecture, business rules, modern interfaces, system integration, and sound development practices.",
    },
    items: [
      {
        ...professionalManagement,
        subtitle: "Full stack system for managing professionals and contacts",
        description:
          "A full stack system for managing professionals and contacts, combining a Next.js interface, Spring Boot backend, authentication, persistence, and a production-ready environment.",
        shortDescription:
          "A full stack professional management system with frontend, backend, JWT authentication, PostgreSQL persistence, and a Docker environment prepared for production.",
        category: "Full stack system",
        roleSummary: "Full stack architecture and development",
        imageAlt:
          "Professional Management System dashboard with an overview of the application",
        overview: {
          description:
            "Professional Management System is a full stack application that organizes professional and contact registration and lookup through an integrated frontend, backend, and database experience.",
          objective:
            "Build a reliable flow for creating, finding, updating, and deleting records without duplication or inconsistent data.",
          context:
            "The project was developed as a complete organizational system, bringing together authentication, business rules, persistence, backend documentation, and an operation-focused interface.",
        },
        demonstrates: [
          { title: "Full stack architecture", description: "A clear separation between interface, business rules, and persistence keeps the solution cohesive and easy to evolve." },
          { title: "Protected authentication", description: "A JWT-based access flow restricts the administrative area to authorized users." },
          { title: "Domain modeling", description: "Professionals and contacts are organized with well-defined relationships, validations, and business rules." },
          { title: "Docker environment", description: "A containerized setup makes system execution more reproducible across environments." },
          { title: "Quality and CI/CD", description: "Documented contracts, validations, and a structure ready to expand automated testing and continuous integration." },
          { title: "Production readiness", description: "Layered organization and separate configuration support maintenance, delivery, and continuous evolution." },
        ],
        roles: [
          { title: "Solution architecture", description: "Defined the integration between frontend, backend, database, and the responsibility boundaries of each layer." },
          { title: "Interface development", description: "Built authentication, dashboard, listing, and registration screens with clear user flows." },
          { title: "Backend and business rules", description: "Implemented endpoints, validations, DTOs, and consistent application responses." },
          { title: "Persistence and documentation", description: "Modeled relational data in PostgreSQL and organized the API for documentation and ongoing maintenance." },
        ],
        features: [
          { title: "User authentication", description: "Credential and JWT-protected access for the system's internal flows." },
          { title: "Operational dashboard", description: "An initial overview that guides navigation and brings together important system information." },
          { title: "Professional management", description: "List, search, create, update, and delete professional records." },
          { title: "Contact management", description: "Professional-contact relationships keep information organized." },
          { title: "Validation and consistent responses", description: "API rules reduce invalid data and make integration more predictable." },
          { title: "Endpoint documentation", description: "A foundation for consulting and testing the resources exposed by the REST API." },
        ],
        gallery: [
          { ...professionalManagement.gallery[0], alt: "Professional Management System login screen", title: "Login", description: "A credential-based access flow into the system's administrative area.", objective: "Demonstrates authentication and protected access before navigating internal resources." },
          { ...professionalManagement.gallery[1], alt: "Professional Management System dashboard", title: "Dashboard", description: "A consolidated view of totals, professional status, departments, roles, and recent records.", objective: "Demonstrates how organizational indicators are grouped to support an initial view of operations." },
          { ...professionalManagement.gallery[2], alt: "Professional list in the Professional Management System", title: "Professional list", description: "A table with search, filters for status, department, and role, ordering, and pagination.", objective: "Demonstrates scalable professional management for easier lookup, location, and status tracking." },
          { ...professionalManagement.gallery[3], alt: "Professional creation screen in the Professional Management System", title: "Create professional", description: "A form organized around personal data and organizational placement to register a new professional.", objective: "Demonstrates a clear creation flow that guides input and applies domain validation rules." },
        ],
        architecture: {
          layers: [
            { name: "Next.js", description: "The system's interface, navigation, and user experience." },
            { name: "Spring Boot", description: "REST API, business rules, authentication, and data access." },
            { name: "PostgreSQL", description: "Relational persistence for professionals, contacts, and application data." },
          ],
          supportingItems: ["JWT", "Docker", "CI/CD", "Testing", "Deployment"],
        },
        stack: [
          { category: "frontend", technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
          { category: "backend", technologies: ["Java", "Spring Boot", "Spring Data JPA", "REST API"] },
          { category: "database", technologies: ["PostgreSQL"] },
          { category: "infrastructure", technologies: ["Docker", "Docker Compose", "JWT", "Deployment preparation"] },
          { category: "quality", technologies: ["Swagger / OpenAPI", "Validation", "Error handling", "Testing preparation"] },
        ],
        decisions: [
          { title: "Clear layers", description: "Separation between controller, service, repository, entities, and DTOs keeps responsibilities clear." },
          { title: "DTOs at API boundaries", description: "Transfer objects prevent coupling between the persistence model and public contracts." },
          { title: "JWT-based authentication", description: "Tokens protect internal flows without exposing sensitive data in the interface." },
          { title: "Reproducible environment", description: "Docker provides a more predictable local setup and supports future deployment evolution." },
        ],
        learnings: [
          "Integrating frontend, backend, and database into a single application.",
          "Modeling entity relationships and organizing business rules.",
          "Building REST APIs with clearer contracts, validation, and error handling.",
          "Planning a solution ready for documentation, testing, and continuous delivery.",
        ],
        result: {
          description:
            "The result is a complete full stack system for professional management, with frontend, backend, authentication, persistence, and a Docker environment ready for maintenance and production.",
          highlights: ["Frontend integrated with the backend", "Relational persistence with PostgreSQL", "Authentication and data management flows", "Docker environment ready for evolution and production"],
        },
      },
      {
        ...personalPortfolio,
        subtitle: "Platform for presenting professional background, projects, and experience",
        description:
          "A portfolio built from scratch to bring together experience, technologies, and case studies in an editorial, responsive experience designed to grow.",
        shortDescription:
          "A responsive, data-driven portfolio created to present professional background, technology, and projects clearly.",
        category: "Professional portfolio",
        roleSummary: "Full stack design and development",
        imageAlt: "Brayan Favarin personal portfolio presentation image",
        overview: {
          description:
            "An independent platform for presenting professional background, technologies, experience, and projects with more context than a traditional resume.",
          objective:
            "Present professional information through a clear, accessible structure that is simple to update as new projects are completed.",
          context:
            "The portfolio also serves as a lab for applying Next.js architecture, visual systems, SEO, responsiveness, and development best practices.",
        },
        demonstrates: [
          { title: "Data-driven architecture", description: "Content is separated from components so new projects do not require structural interface changes." },
          { title: "Responsive experience", description: "Layouts and components are designed to keep reading comfortable across different screen sizes." },
          { title: "Built-in accessibility", description: "Keyboard navigation, visible focus, semantics, and reduced motion were considered from the start." },
          { title: "Foundation for growth", description: "Dynamic routes, per-project metadata, and a modular structure support the portfolio's evolution." },
        ],
        roles: [
          { title: "Product direction", description: "Defined the narrative, content hierarchy, and goals for each portfolio area." },
          { title: "Visual identity", description: "Created a dark editorial technology system with reusable tokens and moderate accent color usage." },
          { title: "Frontend development", description: "Implemented the interface with Next.js App Router, TypeScript, Tailwind CSS, and reusable components." },
          { title: "Quality and discovery", description: "Organized metadata, project pages, navigation, and content to support maintenance and future evolution." },
        ],
        features: [
          { title: "Anchor navigation", description: "Direct access to the home page's main areas with keyboard support and a responsive menu." },
          { title: "Dynamic case studies", description: "Individual pages generated from typed data to explore each project in depth." },
          { title: "Modular sections", description: "Independent components for professional background, projects, technologies, and contact while preserving consistency." },
          { title: "Integrated contact", description: "A secure form and alternative links make conversation more accessible to recruiters and partners." },
          { title: "SEO and metadata", description: "Global and individual metadata improve presentation in search engines and shared links." },
          { title: "Resume available", description: "A download action integrated into the portfolio without relying on external services." },
        ],
        gallery: [{ ...personalPortfolio.gallery[0], alt: "Brayan Favarin personal portfolio presentation image", title: "Portfolio identity", description: "A visual composition representing the project's personal brand and technical proposition.", objective: "Establish a recognizable, consistent professional presence in shares and site entry points." }],
        architecture: {
          layers: [
            { name: "Next.js", description: "App Router, dynamic routes, rendering, and the performance foundation." },
            { name: "Typed components and data", description: "A reusable interface connected to centralized content files." },
            { name: "Deployment-ready hosting", description: "A structure ready to be published on a platform compatible with Next.js." },
          ],
          supportingItems: ["SEO", "Accessibility", "Secure contact form", "Resume", "Vercel-ready"],
        },
        stack: [
          { category: "frontend", technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
          { category: "backend", technologies: ["Route Handlers", "Resend", "Zod"] },
          { category: "database", technologies: ["No database in this version"] },
          { category: "infrastructure", technologies: ["Vercel", "Environment variables", "GitHub"] },
          { category: "quality", technologies: ["ESLint", "TypeScript", "SEO", "Accessibility"] },
        ],
        decisions: [
          { title: "No ready-made template", description: "The interface was designed for this professional identity and content, without inheriting a generic theme's limitations." },
          { title: "Data outside components", description: "Projects, experience, and technologies live in dedicated files to reduce repetition and simplify updates." },
          { title: "Server Components by default", description: "Interactivity is limited to the required points to preserve simplicity and performance." },
          { title: "Accessibility as a requirement", description: "Semantics, visible focus, and motion preferences are part of the implementation, not an afterthought." },
        ],
        learnings: ["Structuring a small, coherent design system for a real application.", "Using the App Router, dynamic routes, and Next.js metadata in a portfolio project.", "Balancing visual presence, performance, SEO, and accessibility.", "Creating a modular foundation for publishing new case studies."],
        result: {
          description:
            "The portfolio has become a complete professional platform that presents projects in depth and can keep evolving without losing visual consistency.",
          highlights: ["A home page with a complete professional narrative", "Case studies generated from data", "Integrated contact, resume, and social links", "Foundation ready for new projects and publication"],
        },
      },
    ],
  },
  experiences: {
    labels: { current: "Current", context: "Context", competencies: "Demonstrated competencies", technologies: "Technologies", technologyList: "Technologies used at {company}", timeline: "Professional timeline" },
    section: {
      eyebrow: "03 / Experience",
      title: "Experiences that have shaped the way I work.",
      description:
        "Practical experience in web application development, working on real projects with modern frontend, backend, and database technologies.",
    },
    items: [
      { ...mohawkExperience, role: "Development Intern", period: "Aug 2025 — Jan 2026", description: ["Contributed to interfaces and features for an internal business management system using Angular on the frontend and collaborating on Python backend integrations. Took part in feature evolution and maintenance of existing flows in a collaborative environment using Git, Docker, and PostgreSQL."], competencies: ["Frontend development", "Frontend-backend integration", "Teamwork", "Git version control", "Feature development"] },
      { ...simplesDentalExperience, role: "Development Intern", period: "Jan 2025 — Aug 2025", description: ["Contributed to the development and maintenance of web applications with Spring Boot and Angular, supporting REST APIs, frontend-backend integration, data modeling, and the evolution of features in a collaborative environment."], competencies: ["Full stack development", "REST APIs", "Frontend-backend integration", "Data modeling", "Teamwork"] },
    ],
  },
  technologies: {
    section: { eyebrow: "04 / Technologies", title: "Tools I use to turn ideas into applications.", description: "Technologies, tools, and practices used to build complete applications — from architecture and backend to frontend, databases, and production preparation." },
    focusDescription: "Technologies marked as Focus form the core of my main stack and are used in most projects.",
    practicesDescription: "Principles that guide how I organize and develop solutions.",
    groups: [
      { ...backend, label: "Backend", items: [{ ...backend.items[0], description: "Primary backend language for REST API development." }, { ...backend.items[1], description: "Framework used to build scalable Java applications." }, ...backend.items.slice(2)] },
      { ...frontend, label: "Frontend", items: [{ ...frontend.items[0], description: "Primary framework for modern web interfaces." }, ...frontend.items.slice(1, 4), { ...frontend.items[4], description: "Language used to build robust, well-structured frontend applications." }, ...frontend.items.slice(5)] },
      { ...database, label: "Databases", items: [{ ...database.items[0], description: "The relational database used in most projects." }, ...database.items.slice(1)] },
      { ...tools, label: "Tools and DevOps", items: [{ ...tools.items[0], description: "Code versioning and collaboration in a team." }, tools.items[1], { ...tools.items[2], description: "Containerization and consistent preparation for production." }, ...tools.items.slice(3)] },
      { ...practices, label: "Practices", items: [
        { ...practices.items[0], name: "Responsive development" },
        { ...practices.items[1], name: "Frontend-backend integration" },
        { ...practices.items[2], name: "Code versioning" },
        { ...practices.items[3], name: "Component organization" },
        { ...practices.items[4], name: "Business rules" },
        { ...practices.items[5], name: "REST APIs" },
        { ...practices.items[6], name: "Teamwork" },
        { ...practices.items[7], name: "Agile methodologies" },
      ] },
    ],
  },
  contact: {
    eyebrow: "05 / Contact",
    title: "Let's build something together.",
    description: ["I am open to professional opportunities, projects, and conversations about software development.", "If you would like to learn more about my work or discuss an opportunity, please get in touch."],
    channelsLabel: "Professional channels",
    highlights: [
      { icon: "clock", title: "Quick response", description: "I usually reply within one business day." },
      { icon: "briefcase", title: "New opportunities", description: "I am available for professional opportunities, freelance work, and projects." },
      { icon: "sparkles", title: "Projects and partnerships", description: "Let's turn ideas into modern, scalable solutions." },
    ],
    form: {
      fields: { name: "Name", email: "Email", message: "Message", website: "Website" },
      send: "Send message",
      sending: "Sending...",
      turnstile: { label: "Security verification", loading: "Loading security verification...", pending: "Complete the security verification before sending your message.", failed: "Security verification failed. Please try again.", unavailable: "Security verification is temporarily unavailable. Please try again or use one of the contact channels below." },
      feedback: { genericError: "Your message could not be sent right now. Please try again or use one of the contact links below.", invalidFields: "Please review the highlighted fields and try again.", processingError: "Your message could not be processed.", success: "Message sent successfully. Thank you for getting in touch!" },
      validation: { nameMin: "Please enter a name with at least 2 characters.", nameMax: "Your name must be 80 characters or fewer.", emailInvalid: "Please enter a valid email address.", emailMax: "Your email must be 254 characters or fewer.", messageMin: "Your message must be at least 10 characters.", messageMax: "Your message must be 2000 characters or fewer." },
      email: { heading: "New message from the portfolio", nameLabel: "Name", emailLabel: "Email", messageLabel: "Message", originLabel: "Origin", originValue: "Professional portfolio", subjectPrefix: "New message from the portfolio" },
    },
  },
  ui: {
    skipToContent: "Skip to content",
    aboutAsideLabel: "Quick facts about {name}",
    navigation: { mainLabel: "Main navigation", mobileLabel: "Mobile navigation menu", openMenu: "Open navigation menu", closeMenu: "Close navigation menu", contact: "Contact", mobileContact: "Get in touch", items: { about: "About", projects: "Projects", experience: "Experience", technologies: "Technologies", contact: "Contact" } },
    languageSwitcher: { label: "Choose language", localeLabels: { "pt-BR": "PT", en: "EN" } },
    hero: { projects: "View projects", resume: "Download Resume", panelFile: "delivery.flow", panelActive: "in focus", panelFrom: "idea", panelTo: "quality software" },
    footer: { builtWith: "Built with Next.js, TypeScript, and Tailwind CSS.", copyright: "© 2026 {name}.", backToTop: "Back to top" },
    project: { statusPrefix: "Status: ", statusLabels: { completed: "Completed", "in-development": "In development", "in-evolution": "In evolution", planned: "Planned" }, stackCategories: { frontend: "Frontend", backend: "Backend", database: "Database", infrastructure: "Infrastructure", quality: "Quality" }, breadcrumb: { label: "Breadcrumb", home: "Home", projects: "Projects" }, card: { caseStudy: "Case study", code: "GitHub", deploy: "Deploy" }, overview: { title: "Overview", heading: "The project in perspective.", objective: "Objective", context: "Context", projectType: "Project type", role: "Role", status: "Status", year: "Year" }, sections: ["What this project demonstrates", "My role", "Features", "Gallery", "Architecture", "Technical stack", "Technical decisions", "Learnings", "Result", "Links"], gallery: { title: "Gallery", description: "Interfaces and visual records that help explain the project's experience and primary flows.", objective: "Objective:" }, architectureSupportingItems: "Supporting elements", links: { availableDescription: "Explore the public resources available to learn more about the project.", unavailableDescription: "Public links for this project will be added when they are available.", deploy: "View deployment", code: "GitHub", documentation: "Documentation" }, navigation: { returnToProjects: "Back to projects", previous: "Previous project", next: "Next project", previousProject: "Previous project", nextProject: "Next project" }, contact: { eyebrow: "Next step", button: "Get in touch" } },
    socialLinksLabel: "Social links",
    technology: { focus: "Focus", primary: "Core stack", complementary: "Complementary technologies", primaryPrefix: "Core technology:", practices: "Practices" },
    notFound: { eyebrow: "404 / Page not found", title: "Page not found.", description: "The content you tried to access does not exist or has been moved.", home: "Back to home", projects: "View projects" },
  },
} as const satisfies LocaleContent;
