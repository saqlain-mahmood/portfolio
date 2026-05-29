// All site content lives here so the components stay clean and easy to edit.
// Want to change a project or skill? Just edit this file.

export const profile = {
  name: "Saqlain Mahmood",
  tagline:
    "Computer Science graduate & aspiring Associate Software Engineer, full-stack developer (MERN + Next.js)",
  email: "saqlainxmahmood@gmail.com",
  phone: "(+92) 301-3799799",
  phoneHref: "+923013799799",
  location: "Pakistan",
  age: 22, // ← set your real age
  linkedin: "https://linkedin.com/in/saqlainmahmood",
  github: "https://github.com/saqlain-mahmood",
  twitter: "https://x.com/saqlainmahmood_",
  cv: "/cv.pdf", // place your CV at: public/cv.pdf
  // Optional: paste a Formspree endpoint (https://formspree.io/f/xxxxxx) to make
  // the contact form submit in-page. If left empty, the form opens the visitor's
  // email app with the message pre-filled (works with no setup).
  formEndpoint: "",
};

export const about = [
  "I'm a Computer Science graduate with a strong foundation in full-stack web development. I enjoy turning ideas into responsive, scalable applications backed by clean, maintainable code.",
  "I work comfortably across the stack, building REST APIs, integrating AI services, and shipping polished front-ends. I care about details, readability, and getting things to production.",
];

// Skills grouped into tidy categories
export const skills = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "React Native",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "VSCode", "Ubuntu"],
  },
];

export const projects = [
  {
    name: "Fitness Buddy",
    label: "Capstone Project",
    description:
      "AI fitness app that pairs workout partners and generates personalised plans through a RAG pipeline (LLaMA 3.3 70B + HuggingFace embeddings). Includes real-time chat, challenges, and streaks.",
    tech: ["React Native", "TypeScript", "Firebase", "Groq", "RAG"],
    links: [
      {
        label: "Code",
        href: "https://github.com/moeidejaz/fyp-fitness-buddy",
        icon: "github",
      },
      {
        label: "Download APK",
        href: "https://expo.dev/accounts/saqlainmahmood/projects/FYP-Fitness-Buddy/builds/8aa23948-821e-4fd7-bd80-0bb1711d8af2",
        icon: "download",
      },
    ],
  },
  {
    name: "Emotion Classification with Fine-Tuned LLMs",
    label: "Research / ML",
    description:
      "Fine-tuned LLaMA 3.1 8B with QLoRA, reaching 93.55% accuracy on 6-class emotion classification, beating classical ML baselines by up to 16.2%.",
    tech: ["Python", "PyTorch", "HuggingFace", "QLoRA"],
    links: [], // add { label, href, icon: "github" | "download" | "demo" } here
  },
  {
    name: "PhotoShare",
    label: "Cloud / Serverless",
    description:
      "Serverless Azure photo-sharing platform with AI auto-tagging, sentiment analysis, JWT authentication, and 10 REST endpoints.",
    tech: ["Python", "Azure Functions", "Cosmos DB", "Blob Storage"],
    links: [],
  },
];

export const experience = [
  {
    role: "Software Engineering Intern",
    company: "Systems Limited",
    period: "Jul – Aug 2025",
    team: "APAC Cloud App Dev team",
    points: [
      "Built full-stack features on Microsoft Azure using Python and Azure Functions.",
      "Integrated AI services into production workflows.",
      "Implemented secure JWT-based authentication.",
      "Set up automated deployments with GitHub Actions CI/CD.",
    ],
  },
];

export const education = [
  {
    school: "National University of Modern Languages (NUML)",
    degree: "BS Computer Science",
    period: "Sept 2022 – Jun 2026",
    detail: "",
  },
  {
    school: "Aspire College",
    degree: "FSC (Pre-Medical)",
    period: "2020 – 2022",
    detail: "",
  },
  {
    school: "EDIFY Science Model High School",
    degree: "Matriculation (Science)",
    period: "2018 – 2020", // ← estimated years - adjust to your actual dates
    detail: "",
  },
];

// Section list drives the navbar + smooth-scroll links
export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
