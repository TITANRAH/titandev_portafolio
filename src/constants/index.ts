
export const SITE_TITLE = "TitanDev - Portfolio";
export const SITE_DESCRIPTION = "Portfolio de desarrollo web full-stack";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/titan-dev/",
  email: "granrah1@gmail.com",
  twitter: "",
};

export const GOOGLE_CLOUD_DIGITAL_LEADER_CERTIFICATION_IMAGE_URL = "http://titandevback.cl/wp-content/uploads/2025/12/cloud-digital-leader-certification-espanol.png";
export const GOOGLE_CLOUD_DIGITAL_LEADER_CERTIFICATION_IMAGE_WIDTH = 120;
export const GOOGLE_CLOUD_DIGITAL_LEADER_CERTIFICATION_IMAGE_HEIGHT = 120;

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Estudios", href: "#estudios" },
  { label: "Certificados", href: "#certificados" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Stack Técnico", href: "#stack-tecnico" },
  { label: "Contacto", href: "#contacto" },
];

export const CACHE_CONFIG = {
  short: "public, s-maxage=10, stale-while-revalidate=30",
  medium: "public, s-maxage=30, stale-while-revalidate=60",
  long: "public, s-maxage=300, stale-while-revalidate=600",
};

export const GOOGLE_CLOUD_DIGITAL_LEADER_CERTIFICATION_URL = "https://www.credly.com/badges/a00dfe30-e539-445f-ae80-e1262c8e5187/public_url";

export const SKILL_LEVELS = {
  advanced: { label: "Avanzado", percentage: 90, color: "tech-cyan" },
  advanced_high: { label: "Avanzado", percentage: 85, color: "tech-cyan" },
  advanced_mid: { label: "Avanzado", percentage: 80, color: "tech-cyan" },
  advanced_low: { label: "Avanzado", percentage: 70, color: "tech-cyan" },
  intermediate: { label: "Intermedio", percentage: 60, color: "tech-green" },
  intermediate_low: {
    label: "Intermedio-Básico",
    percentage: 30,
    color: "tech-purple",
  },
  basic_mid: { label: "Básico", percentage: 20, color: "tech-gray" },
  basic: { label: "Básico", percentage: 15, color: "tech-gray" },
};

export const TECHNOLOGIES = {
  frontend: [
    { name: "React", level: "advanced" },
    { name: "Next.js", level: "advanced" },
    { name: "Astro.js", level: "advanced" },
    { name: "TypeScript", level: "advanced" },
    { name: "Angular", level: "intermediate" },
    { name: "Vue", level: "intermediate" },
    { name: "CSS", level: "advanced" },
    { name: "Tailwind CSS", level: "advanced" },
    { name: "Responsive Design", level: "advanced" },
    { name: "TanStack Query", level: "advanced_low" },
    { name: "Axios", level: "advanced" },
  ],
  backend: [
    { name: "Nest.js", level: "advanced" },
    { name: "Express", level: "advanced" },
    { name: "SQL", level: "advanced" },
    { name: "C#", level: "basic_mid" },
    { name: ".NET", level: "basic_mid" },
  ],
  mobile: [
    { name: "React Native", level: "intermediate" },
    { name: "Flutter", level: "intermediate" },
  ],
  database: [
    { name: "MongoDB", level: "advanced" },
    { name: "PostgreSQL", level: "advanced" },
  ],
  tools: [
    { name: "VSCode", level: "advanced" },
    { name: "Cursor", level: "advanced" },
    { name: "Git", level: "advanced" },
    { name: "GitFlow", level: "advanced" },
    { name: "Postman", level: "advanced" },
    { name: "CI/CD", level: "advanced_mid" },
    { name: "n8n", level: "intermediate" },
    { name: "Testing", level: "advanced_mid" },
    { name: "MSW", level: "advanced" },
  ],
  ai: [
    { name: "Claude", level: "advanced" },
    { name: "Gemini Code Assist", level: "advanced" },
  ],
  cloud: [
    { name: "AWS", level: "basic" },
    { name: "GCP", level: "intermediate_low" },
    { name: "Firebase", level: "advanced_mid" },
  ],
  leadership: [
    { name: "Liderazgo Técnico", level: "advanced_mid" },
    { name: "Manejo de Equipos", level: "advanced_mid" },
    { name: "Trabajo en Equipo", level: "advanced" },
    { name: "Consultoría", level: "advanced_mid" },
    { name: "Scrum", level: "advanced_high" },
  ],
};
