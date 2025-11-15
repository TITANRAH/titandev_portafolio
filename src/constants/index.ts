// Constantes del proyecto

export const SITE_TITLE = "TitanDev - Portfolio";
export const SITE_DESCRIPTION = "Portfolio de desarrollo web full-stack";

// Redes sociales (actualizar con tus datos)
export const SOCIAL_LINKS = {
  github: "https://github.com/TITANRAH",
  linkedin: "https://linkedin.com/in/tu-perfil",
  email: "tu-email@ejemplo.com",
  twitter: "https://twitter.com/tu-usuario",
};

// Navegación
export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Estudios", href: "#estudios" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Cursos", href: "#cursos" },
  { label: "Recomendaciones", href: "#recomendaciones" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

// Configuración de caché (según Plan Maestro)
export const CACHE_CONFIG = {
  short: 'public, s-maxage=10, stale-while-revalidate=30',
  medium: 'public, s-maxage=30, stale-while-revalidate=60',
  long: 'public, s-maxage=300, stale-while-revalidate=600',
};
