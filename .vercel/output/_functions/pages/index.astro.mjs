import { c as createComponent, m as maybeRenderHead, r as renderScript, a as addAttribute, b as renderTemplate, d as createAstro, e as renderSlot, f as renderComponent, g as renderHead, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_D1jtAn5N.mjs';
/* empty css                                 */
import 'clsx';
import { $ as $$Picture } from '../chunks/_astro_assets_BrDRXG9X.mjs';
import { z } from 'zod';
export { renderers } from '../renderers.mjs';

const SOCIAL_LINKS = {
  github: "https://github.com/TITANRAH",
  linkedin: "https://www.linkedin.com/in/titan-dev/"};
const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Estudios", href: "#estudios" },
  { label: "Certificados", href: "#certificados" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Recomendaciones", href: "#recomendaciones" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Contacto", href: "#contacto" }
];
const CACHE_CONFIG = {
  short: "public, s-maxage=10, stale-while-revalidate=30"};
const SKILL_LEVELS = {
  advanced: { label: "Avanzado", percentage: 90, color: "tech-cyan" },
  intermediate: { label: "Intermedio", percentage: 60, color: "tech-green" }
};
const TECHNOLOGIES = {
  frontend: [
    { name: "React", level: "advanced" },
    { name: "Next.js", level: "advanced" },
    { name: "Astro.js", level: "advanced" },
    { name: "Angular", level: "intermediate" },
    { name: "Vue", level: "intermediate" },
    { name: "CSS", level: "advanced" },
    { name: "Tailwind CSS", level: "advanced" }
  ],
  backend: [
    { name: "Nest.js", level: "advanced" },
    { name: "Express", level: "advanced" },
    { name: "SQL", level: "advanced" }
  ],
  mobile: [
    { name: "React Native", level: "intermediate" },
    { name: "Flutter", level: "intermediate" }
  ],
  database: [
    { name: "MongoDB", level: "advanced" },
    { name: "PostgreSQL", level: "advanced" }
  ],
  tools: [
    { name: "VSCode", level: "advanced" },
    { name: "Cursor", level: "advanced" },
    { name: "n8n", level: "intermediate" }
  ],
  ai: [
    { name: "Claude", level: "advanced" },
    { name: "Gemini Code Assist", level: "advanced" }
  ]
};

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top-0 left-0 right-0 z-50 glass border-b border-tech-cyan/20" data-astro-cid-5blmo7yk> <div class="w-full px-4 sm:px-6 py-4" data-astro-cid-5blmo7yk> <div class="flex items-center justify-between w-full" data-astro-cid-5blmo7yk> <!-- Logo --> <a href="#home" class="text-2xl font-black bg-linear-to-r from-tech-cyan to-tech-green bg-clip-text text-transparent" data-astro-cid-5blmo7yk>
TitanDev
</a> <!-- Desktop Menu --> <div class="hidden md:flex items-center gap-8" data-astro-cid-5blmo7yk> ${NAV_ITEMS.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(item.href, "data-nav-link")} class="nav-link text-tech-white hover:text-tech-cyan transition-colors font-semibold relative" data-astro-cid-5blmo7yk> ${item.label} </a>`)} </div> <!-- Mobile Menu Button --> <button id="mobile-menu-button" class="md:hidden text-tech-cyan hover:text-tech-green transition-colors" aria-label="Toggle menu" data-astro-cid-5blmo7yk> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-5blmo7yk></path> <path id="close-icon" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-5blmo7yk></path> </svg> </button> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4" data-astro-cid-5blmo7yk> ${NAV_ITEMS.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(item.href, "data-nav-link")} class="nav-link mobile-menu-link block py-3 text-tech-white hover:text-tech-cyan transition-colors font-semibold border-b border-gray-800" data-astro-cid-5blmo7yk> ${item.label} </a>`)} </div> </div> </nav> ${renderScript($$result, "/Users/titan-dev/Desktop/Proyectos/Astro/titan-dev-portafolio-astro/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/titan-dev/Desktop/Proyectos/Astro/titan-dev-portafolio-astro/src/components/Navbar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Portfolio de desarrollo web full-stack" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- AOS CSS --><link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css"><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet"><title>', "</title>", '</head> <body class="bg-tech-black text-tech-white"> ', " ", ' <!-- AOS JavaScript --> <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"><\/script> <script>\n      function initAOS() {\n        AOS.init({\n          duration: 800,\n          once: false,\n          offset: 100,\n          easing: "ease-in-out",\n          disable: false,\n        });\n      }\n\n      initAOS();\n\n      document.addEventListener("astro:after-swap", () => {\n        AOS.refresh();\n        initAOS();\n      });\n\n      document.addEventListener("astro:page-load", () => {\n        AOS.refresh();\n      });\n    <\/script> </body> </html>'])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]));
}, "/Users/titan-dev/Desktop/Proyectos/Astro/titan-dev-portafolio-astro/src/layouts/Layout.astro", void 0);

const $$Astro$6 = createAstro();
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const { title, subtitle, description, imageUrl, imageWidth, imageHeight } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden" data-astro-cid-nlow4r3u> <!-- Gradient Background --> <div class="absolute inset-0 bg-linear-to-br from-tech-black via-tech-dark to-tech-black" data-astro-cid-nlow4r3u></div> <!-- Animated Grid Background --> <div class="absolute inset-0 opacity-20" data-astro-cid-nlow4r3u> <div class="absolute inset-0" style="background-image: linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px); background-size: 50px 50px;" data-astro-cid-nlow4r3u></div> </div> <!-- Content Container --> <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-nlow4r3u> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-astro-cid-nlow4r3u> <!-- Text Content --> <div class="order-2 lg:order-1" data-aos="fade-right" data-astro-cid-nlow4r3u> <div class="space-y-6" data-astro-cid-nlow4r3u> <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight" data-astro-cid-nlow4r3u> <span class="block bg-linear-to-r from-tech-cyan via-tech-green to-tech-purple bg-clip-text text-transparent" data-astro-cid-nlow4r3u> ${title} </span> </h1> <p class="text-2xl sm:text-3xl lg:text-4xl text-tech-white font-semibold" data-astro-cid-nlow4r3u> ${subtitle} </p> ${description && renderTemplate`<p class="text-lg lg:text-xl text-gray-400 max-w-xl leading-relaxed" data-astro-cid-nlow4r3u> ${description} </p>`} <!-- Action Buttons --> <div class="flex flex-wrap gap-4 pt-4" data-astro-cid-nlow4r3u> <a href="#experiencia" class="px-8 py-4 bg-linear-to-r from-tech-cyan to-tech-green text-tech-black font-bold rounded-lg hover:scale-105 transition-all duration-300 glow inline-flex items-center gap-2" data-astro-cid-nlow4r3u> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-nlow4r3u> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-nlow4r3u></path> </svg>
Ver Experiencia
</a> <a href="#contacto" class="px-8 py-4 border-2 border-tech-cyan text-tech-cyan font-bold rounded-lg hover:bg-tech-cyan hover:text-tech-black transition-all duration-300 inline-flex items-center gap-2" data-astro-cid-nlow4r3u> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-nlow4r3u> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-nlow4r3u></path> </svg>
Contactar
</a> </div> <!-- Social Links --> <div class="flex gap-4 pt-4" data-astro-cid-nlow4r3u> <a${addAttribute(SOCIAL_LINKS.github, "href")} target="_blank" rel="noopener noreferrer" class="w-12 h-12 flex items-center justify-center rounded-full border-2 border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-black transition-all duration-300" data-astro-cid-nlow4r3u> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-nlow4r3u> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-astro-cid-nlow4r3u></path> </svg> </a> <a${addAttribute(SOCIAL_LINKS.linkedin, "href")} target="_blank" rel="noopener noreferrer" class="w-12 h-12 flex items-center justify-center rounded-full border-2 border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-black transition-all duration-300" data-astro-cid-nlow4r3u> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-nlow4r3u> <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" data-astro-cid-nlow4r3u></path> </svg> </a> </div> </div> </div> <!-- Image Content --> <div class="order-1 lg:order-2 flex justify-center lg:justify-end pt-24 pb-8" data-aos="fade-left" data-aos-delay="200" data-astro-cid-nlow4r3u> <div class="relative group w-96 h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]" data-astro-cid-nlow4r3u> <!-- Subtle Glow Effect (Circular) --> <div class="absolute -inset-4 bg-tech-cyan/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-nlow4r3u></div> <!-- Rotating Border Ring --> <div class="absolute inset-0 rounded-full border-2 border-tech-cyan/30 animate-spin-slow" data-astro-cid-nlow4r3u></div> <!-- Image Container (Circular) --> <div class="relative w-full h-full overflow-hidden rounded-full border-4 border-tech-cyan/40 shadow-2xl" data-astro-cid-nlow4r3u> ${imageUrl && imageWidth && imageHeight && renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "src": imageUrl, "alt": title, "width": imageWidth, "height": imageHeight, "formats": ["avif", "webp"], "class": "w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500", "style": "object-position: 20% center;", "loading": "eager", "data-astro-cid-nlow4r3u": true })}`} <!-- Overlay Oscuro Permanente --> <div class="absolute inset-0 bg-tech-black/50 rounded-full" data-astro-cid-nlow4r3u></div> <!-- Scan Line Effect (Circular) --> <div class="absolute inset-0 opacity-20 pointer-events-none rounded-full overflow-hidden" data-astro-cid-nlow4r3u> <div class="scan-line" data-astro-cid-nlow4r3u></div> </div> </div> <!-- Certification Badge (Floating) --> <a href="https://www.credly.com/badges/a00dfe30-e539-445f-ae80-e1262c8e5187/public_url" target="_blank" rel="noopener noreferrer" class="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 z-20" data-aos="zoom-in" data-aos-delay="600" aria-label="Ver certificado Google Cloud Digital Leader en Credly" data-astro-cid-nlow4r3u> <div class="relative group/badge" data-astro-cid-nlow4r3u> <!-- Badge Glow --> <div class="absolute inset-0 bg-tech-green/30 rounded-lg blur-xl opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300" data-astro-cid-nlow4r3u></div> <!-- Badge Container --> <div class="relative bg-tech-dark/90 backdrop-blur-sm border-2 border-tech-green rounded-lg p-2 shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer" data-astro-cid-nlow4r3u> ${renderComponent($$result, "Picture", $$Picture, { "src": "http://titandevback.local/wp-content/uploads/2025/12/cloud-digital-leader-certification-espanol.png", "alt": "Google Cloud Digital Leader Certification", "width": 120, "height": 120, "formats": ["avif", "webp"], "class": "w-20 h-20 lg:w-28 lg:h-28 object-contain", "loading": "lazy", "data-astro-cid-nlow4r3u": true })} <!-- Shine Effect --> <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300" data-astro-cid-nlow4r3u></div> </div> </div> </a> <!-- Orbital Accent Dots --> <div class="absolute top-0 left-1/2 w-3 h-3 bg-tech-cyan rounded-full -translate-x-1/2 animate-pulse" data-astro-cid-nlow4r3u></div> <div class="absolute bottom-0 left-1/2 w-3 h-3 bg-tech-green rounded-full -translate-x-1/2 animate-pulse" style="animation-delay: 0.5s;" data-astro-cid-nlow4r3u></div> </div> </div> </div> <!-- Scroll Indicator --> <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="600" data-astro-cid-nlow4r3u> <div class="flex flex-col items-center gap-2" data-astro-cid-nlow4r3u> <span class="text-tech-cyan text-sm font-semibold" data-astro-cid-nlow4r3u>Scroll</span> <div class="animate-bounce" data-astro-cid-nlow4r3u> <svg class="w-6 h-6 text-tech-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-nlow4r3u> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-nlow4r3u></path> </svg> </div> </div> </div> </div> </section> `;
}, "/Users/titan-dev/Desktop/Proyectos/Astro/titan-dev-portafolio-astro/src/components/HeroSection.astro", void 0);

const $$Astro$5 = createAstro();
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { title, icon, color } = Astro2.props;
  const icons = {
    book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    briefcase: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    document: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    badge: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    star: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    code: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    newspaper: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
    mail: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  };
  const iconPath = icons[icon] || icons.star;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center mb-12"> <svg${addAttribute(`w-16 h-16 text-${color} mb-4`, "class")} fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(iconPath, "d")}></path> </svg> <h2${addAttribute(`text-5xl font-black text-${color} text-center`, "class")}>${title}</h2> </div>`;
}, "/Users/titan-dev/Desktop/Proyectos/Astro/titan-dev-portafolio-astro/src/components/SectionTitle.astro", void 0);

const $$Astro$4 = createAstro();
const $$StudiesSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$StudiesSection;
  const { studies = [] } = Astro2.props;
  const displayStudies = studies.length > 0 ? studies : [];
  return renderTemplate`${maybeRenderHead()}<section id="estudios" class="min-h-screen flex items-center justify-center bg-tech-dark"> <div class="container mx-auto px-6 py-20" data-aos="fade-up"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Estudios", "icon": "book", "color": "tech-green" })} <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"> ${displayStudies.map((study, index) => renderTemplate`<div class="glass rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 group" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")}>  <div class="relative h-48 overflow-hidden bg-tech-black/30 flex items-center justify-center p-6"> <img${addAttribute(study.image, "src")}${addAttribute(study.title, "alt")} class="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"> <div class="absolute inset-0 bg-linear-to-t from-tech-black/60 to-transparent pointer-events-none"></div>  <div class="absolute top-4 right-4 z-10"> ${study.status === "Completado" ? renderTemplate`<span class="px-4 py-2 bg-tech-green text-tech-black text-sm font-bold rounded-full shadow-lg shadow-tech-green/50 border-2 border-tech-green">
✓ Completado
</span>` : renderTemplate`<span class="px-4 py-2 bg-tech-cyan text-tech-black text-sm font-bold rounded-full shadow-lg shadow-tech-cyan/50 border-2 border-tech-cyan">
⏳ En curso
</span>`} </div> </div>  <div class="p-6"> <h3 class="text-2xl font-bold text-tech-cyan mb-3 group-hover:text-tech-green transition-colors"> ${study.title} </h3> <div class="space-y-2 mb-4"> <div class="flex items-center gap-2 text-gray-300"> <svg class="w-5 h-5 text-tech-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> </svg> <span class="text-sm">${study.institution}</span> </div> <div class="flex items-center gap-2 text-gray-400"> <svg class="w-5 h-5 text-tech-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <span class="text-sm">${study.period}</span> </div> </div> ${study.description && renderTemplate`<p class="text-gray-400 text-sm mb-4 leading-relaxed"> ${study.description} </p>`}  ${study.certificateUrl && renderTemplate`<button class="inline-flex items-center gap-2 px-4 cursor-pointer  py-2 bg-linear-to-r from-tech-cyan to-tech-green text-tech-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300 text-sm certificate-btn"${addAttribute(study.certificateUrl, "data-certificate")}${addAttribute(study.title, "data-title")}> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg>
Ver Certificado
</button>`} </div> </div>`)} </div> </div> <!-- Modal para mostrar certificado --> <div id="certificate-modal" class="fixed inset-0 bg-black/95 backdrop-blur-md z-50 hidden items-center justify-center p-2 md:p-4"> <div class="relative max-w-7xl w-full h-[95vh] bg-tech-dark border-2 border-tech-cyan rounded-lg overflow-hidden flex flex-col" data-aos="zoom-in" data-aos-duration="500"> <!-- Header del modal --> <div class="flex items-center justify-between p-3 md:p-4 bg-tech-black/50 border-b border-tech-cyan/30 shrink-0"> <h3 id="modal-title" class="text-lg md:text-xl font-bold text-tech-cyan truncate mr-4"></h3> <div class="flex items-center gap-2"> <!-- Botón descargar --> <button id="download-certificate" class="px-4 py-2 bg-tech-green text-tech-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path> </svg> <span class="hidden sm:inline">Descargar</span> </button> <!-- Botón cerrar --> <button id="close-modal" class="w-10 h-10 flex items-center justify-center rounded-full border-2 border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-black transition-all duration-300 shrink-0"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> <!-- Contenido del modal (PDF) --> <div class="relative w-full flex-1 min-h-0 flex items-center justify-center bg-gray-900"> <iframe id="certificate-iframe" class="w-full h-full border-0"></iframe> </div> </div> </div> </section> ${renderScript($$result, "/Users/titan-dev/Desktop/Proyectos/Astro/titan-dev-portafolio-astro/src/components/StudiesSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/titan-dev/Desktop/Proyectos/Astro/titan-dev-portafolio-astro/src/components/StudiesSection.astro", void 0);

const $$Astro$3 = createAstro();
const $$ExperienceSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ExperienceSection;
  const { experiences = [] } = Astro2.props;
  const displayExperiences = experiences.length > 0 ? experiences : [];
  return renderTemplate`${maybeRenderHead()}<section id="experiencia" class="min-h-screen flex items-center justify-center bg-tech-dark relative overflow-hidden" data-astro-cid-qi3mz2iw> <!-- Background Grid --> <div class="absolute inset-0 opacity-10" data-astro-cid-qi3mz2iw> <div class="absolute inset-0" style="background-image: linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px); background-size: 50px 50px;" data-astro-cid-qi3mz2iw></div> </div> <div class="container mx-auto px-6 py-20 relative z-10" data-aos="fade-up" data-astro-cid-qi3mz2iw> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Experiencia Laboral", "icon": "document", "color": "tech-purple", "data-astro-cid-qi3mz2iw": true })}  <div class="max-w-5xl mx-auto mt-16 relative" data-astro-cid-qi3mz2iw>  <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tech-purple via-tech-cyan to-tech-purple transform -translate-x-1/2" data-astro-cid-qi3mz2iw></div>  <div class="space-y-12" data-astro-cid-qi3mz2iw> ${displayExperiences.map((exp, index) => renderTemplate`<div class="relative"${addAttribute(index % 2 === 0 ? "fade-right" : "fade-left", "data-aos")}${addAttribute(index * 100, "data-aos-delay")} data-astro-cid-qi3mz2iw>  <div class="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-tech-purple rounded-full border-4 border-tech-dark transform -translate-x-1/2 z-10 pulse-dot" data-astro-cid-qi3mz2iw></div>  <div${addAttribute(`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`, "class")} data-astro-cid-qi3mz2iw> <div class="glass rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 group border border-tech-purple/20 hover:border-tech-purple/60" data-astro-cid-qi3mz2iw> <div class="flex flex-col md:flex-row items-center gap-6 p-6" data-astro-cid-qi3mz2iw>  ${exp.image && renderTemplate`<div class="relative shrink-0" data-astro-cid-qi3mz2iw> <div class="w-24 h-24 rounded-full bg-tech-black/50 border-2 border-tech-purple/40 flex items-center justify-center p-4 group-hover:border-tech-cyan transition-all duration-300 overflow-hidden" data-astro-cid-qi3mz2iw> ${renderComponent($$result, "Picture", $$Picture, { "src": exp.image, "alt": exp.company, "width": 96, "height": 96, "formats": ["avif", "webp"], "class": "w-full h-full object-contain group-hover:scale-110 transition-transform duration-300", "loading": "lazy", "data-astro-cid-qi3mz2iw": true })} </div>  <div class="absolute inset-0 rounded-full bg-tech-purple/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-qi3mz2iw></div> </div>`}  <div class="flex-1 text-center md:text-left" data-astro-cid-qi3mz2iw> <h3 class="text-2xl font-bold text-tech-cyan mb-2 group-hover:text-tech-purple transition-colors" data-astro-cid-qi3mz2iw> ${exp.company} </h3> ${exp.period && renderTemplate`<div class="inline-flex items-center gap-2 px-3 py-1 bg-tech-purple/20 rounded-full mb-3" data-astro-cid-qi3mz2iw> <svg class="w-4 h-4 text-tech-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qi3mz2iw> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-qi3mz2iw></path> </svg> <span class="text-sm font-semibold text-tech-green" data-astro-cid-qi3mz2iw>${exp.period}</span> </div>`} ${exp.description && renderTemplate`<p class="text-gray-400 text-sm leading-relaxed" data-astro-cid-qi3mz2iw> ${exp.description} </p>`} </div> </div>  <div class="h-1 bg-gradient-to-r from-transparent via-tech-purple to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-qi3mz2iw></div> </div> </div> </div>`)} </div> </div> ${displayExperiences.length === 0 && renderTemplate`<p class="text-gray-400 text-center mt-8" data-astro-cid-qi3mz2iw>Cargando experiencias...</p>`} </div> </section> `;
}, "/Users/titan-dev/Desktop/Proyectos/Astro/titan-dev-portafolio-astro/src/components/ExperienceSection.astro", void 0);

const $$Astro$2 = createAstro();
const $$CertificatesSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CertificatesSection;
  const { certificates = [] } = Astro2.props;
  const displayCertificates = certificates.length > 0 ? certificates : [];
  return renderTemplate`${maybeRenderHead()}<section id="certificados" class="min-h-screen flex items-center justify-center bg-tech-black relative overflow-hidden" data-astro-cid-ncislydo> <!-- Background Effect --> <div class="absolute inset-0 opacity-10" data-astro-cid-ncislydo> <div class="absolute inset-0" style="background-image: linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px); background-size: 50px 50px;" data-astro-cid-ncislydo></div> </div> <div class="container mx-auto px-6 py-20 relative z-10" data-aos="fade-up" data-astro-cid-ncislydo> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Certificaciones", "icon": "award", "color": "tech-cyan", "data-astro-cid-ncislydo": true })}  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto mt-16" data-astro-cid-ncislydo> ${displayCertificates.map((cert, index) => renderTemplate`<div class="certificate-card group relative" data-aos="flip-left"${addAttribute(index * 50, "data-aos-delay")}${addAttribute(cert.image, "data-certificate-img")}${addAttribute(cert.name, "data-certificate-name")} data-astro-cid-ncislydo>  <div class="relative aspect-square rounded-lg overflow-hidden border-2 border-tech-cyan/30 hover:border-tech-cyan transition-all duration-300 bg-tech-dark/50 backdrop-blur-sm cursor-pointer" data-astro-cid-ncislydo>  ${cert.image && renderTemplate`<div class="w-full h-full p-4 flex items-center justify-center" data-astro-cid-ncislydo> ${renderComponent($$result, "Picture", $$Picture, { "src": cert.image, "alt": cert.name, "width": 300, "height": 300, "formats": ["avif", "webp"], "class": "w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500", "loading": "lazy", "data-astro-cid-ncislydo": true })} </div>`}  <div class="absolute inset-0 bg-tech-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" data-astro-cid-ncislydo> <div class="text-center" data-astro-cid-ncislydo> <svg class="w-12 h-12 text-tech-cyan mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ncislydo> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" data-astro-cid-ncislydo></path> </svg> <p class="text-tech-cyan font-semibold text-sm" data-astro-cid-ncislydo>Ver certificado</p> </div> </div>  <div class="absolute inset-0 bg-tech-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" data-astro-cid-ncislydo></div> </div>  <div class="mt-3 text-center" data-astro-cid-ncislydo> <h3 class="text-sm lg:text-base font-semibold text-tech-white group-hover:text-tech-cyan transition-colors" data-astro-cid-ncislydo> ${cert.name} </h3> </div> </div>`)} </div> ${displayCertificates.length === 0 && renderTemplate`<p class="text-gray-400 text-center mt-8" data-astro-cid-ncislydo>No hay certificados disponibles.</p>`} </div>  <div id="cert-lightbox" class="fixed inset-0 bg-black/95 backdrop-blur-md z-50 hidden items-center justify-center p-4" style="cursor: zoom-out;" data-astro-cid-ncislydo> <button id="close-lightbox" class="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full border-2 border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-black transition-all duration-300 z-10" aria-label="Cerrar" data-astro-cid-ncislydo> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ncislydo> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-ncislydo></path> </svg> </button> <div class="max-w-6xl w-full" data-aos="zoom-in" data-aos-duration="300" data-astro-cid-ncislydo> <h3 id="lightbox-title" class="text-2xl font-bold text-tech-cyan mb-4 text-center" data-astro-cid-ncislydo></h3> <div class="bg-white rounded-lg p-4 shadow-2xl" data-astro-cid-ncislydo> <img id="lightbox-img" src="" alt="" class="w-full h-auto max-h-[80vh] object-contain" data-astro-cid-ncislydo> </div> </div> </div> </section> ${renderScript($$result, "/Users/titan-dev/Desktop/Proyectos/Astro/titan-dev-portafolio-astro/src/components/CertificatesSection.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/titan-dev/Desktop/Proyectos/Astro/titan-dev-portafolio-astro/src/components/CertificatesSection.astro", void 0);

const $$Astro$1 = createAstro();
const $$TestimonialsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TestimonialsSection;
  const { testimonials = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="recomendaciones" class="min-h-screen flex items-center justify-center bg-tech-dark"> <div class="container mx-auto px-6 py-20" data-aos="fade-up"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Recomendaciones", "icon": "star", "color": "tech-cyan" })} ${testimonials.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"> ${testimonials.map((testimonial) => renderTemplate`<div class="glass p-6 rounded-lg"> <p class="text-gray-300 mb-4 italic">"${testimonial.content}"</p> <div class="flex items-center gap-4"> ${testimonial.avatar && renderTemplate`<img${addAttribute(testimonial.avatar, "src")}${addAttribute(testimonial.name, "alt")} class="w-12 h-12 rounded-full">`} <div> <p class="text-dark-green font-bold">${testimonial.name}</p> <p class="text-gray-500 text-sm">${testimonial.position}</p> </div> </div> </div>`)} </div>` : renderTemplate`<p class="text-gray-400 text-center">Sección en construcción...</p>`} </div> </section>`;
}, "/Users/titan-dev/Desktop/Proyectos/Astro/titan-dev-portafolio-astro/src/components/TestimonialsSection.astro", void 0);

const $$TechnologiesSection = createComponent(($$result, $$props, $$slots) => {
  const categoryNames = {
    frontend: "Frontend",
    backend: "Backend",
    mobile: "Mobile",
    database: "Databases",
    tools: "Dev Tools",
    ai: "AI Tools"
  };
  const categoryIcons = {
    frontend: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`,
    backend: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>`,
    mobile: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>`,
    database: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>`,
    tools: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
    ai: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>`
  };
  return renderTemplate`${maybeRenderHead()}<section id="tecnologias" class="min-h-screen flex items-center justify-center bg-tech-dark" data-astro-cid-mxls6im7> <div class="container mx-auto px-6 py-20" data-aos="fade-up" data-astro-cid-mxls6im7> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Stack T\xE9cnico", "icon": "code", "color": "tech-purple", "data-astro-cid-mxls6im7": true })} <div class="max-w-7xl mx-auto" data-astro-cid-mxls6im7> <!-- Grid de categorías --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-astro-cid-mxls6im7> ${Object.entries(TECHNOLOGIES).map(([categoryKey, techs], categoryIndex) => renderTemplate`<div class="glass rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 group" data-aos="fade-up"${addAttribute(categoryIndex * 100, "data-aos-delay")} data-astro-cid-mxls6im7> <!-- Header de categoría --> <div class="flex items-center gap-3 mb-6" data-astro-cid-mxls6im7> <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-tech-cyan to-tech-purple flex items-center justify-center text-tech-black group-hover:scale-110 transition-transform duration-300" data-astro-cid-mxls6im7> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(categoryIcons[categoryKey])}` })} </div> <h3 class="text-2xl font-bold text-tech-white group-hover:text-tech-cyan transition-colors" data-astro-cid-mxls6im7> ${categoryNames[categoryKey]} </h3> </div> <!-- Lista de tecnologías --> <div class="space-y-5" data-astro-cid-mxls6im7> ${techs.map((tech, techIndex) => {
    const skillLevel = SKILL_LEVELS[tech.level];
    const percentage = skillLevel.percentage;
    skillLevel.color;
    const isAdvanced = tech.level === "advanced";
    return renderTemplate`<div class="tech-item group/tech" data-aos="fade-right"${addAttribute(categoryIndex * 100 + techIndex * 50, "data-aos-delay")} data-astro-cid-mxls6im7>  <div class="flex items-center justify-between mb-2" data-astro-cid-mxls6im7> <span class="text-tech-white font-semibold text-base group-hover/tech:text-tech-cyan transition-colors" data-astro-cid-mxls6im7> ${tech.name} </span> <span${addAttribute(`px-3 py-1 text-xs font-bold rounded-full border-2 transition-all duration-300 ${isAdvanced ? "bg-tech-cyan/10 text-tech-cyan border-tech-cyan group-hover/tech:shadow-lg group-hover/tech:shadow-tech-cyan/50" : "bg-tech-green/10 text-tech-green border-tech-green group-hover/tech:shadow-lg group-hover/tech:shadow-tech-green/50"}`, "class")} data-astro-cid-mxls6im7> ${percentage}%
</span> </div>  <div class="relative h-3 bg-tech-black/50 rounded-full overflow-hidden border border-tech-gray group-hover/tech:border-tech-cyan/50 transition-all duration-300" data-astro-cid-mxls6im7>  <div${addAttribute(`absolute inset-0 opacity-20 blur-sm ${isAdvanced ? "bg-tech-cyan" : "bg-tech-green"}`, "class")} data-astro-cid-mxls6im7></div>  <div${addAttribute(`skill-bar absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out ${isAdvanced ? "bg-gradient-to-r from-tech-cyan to-tech-purple shadow-lg shadow-tech-cyan/50" : "bg-gradient-to-r from-tech-green to-tech-cyan shadow-lg shadow-tech-green/50"} group-hover/tech:shadow-xl`, "class")}${addAttribute(`width: 0%`, "style")}${addAttribute(percentage, "data-percentage")} data-astro-cid-mxls6im7>  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" data-astro-cid-mxls6im7></div> </div>  <div${addAttribute(`skill-end-point absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${isAdvanced ? "bg-tech-cyan" : "bg-tech-green"} shadow-lg opacity-0 transition-all duration-1000`, "class")}${addAttribute(`left: 0%`, "style")}${addAttribute(percentage, "data-percentage")} data-astro-cid-mxls6im7></div> </div> </div>`;
  })} </div> </div>`)} </div>  <div class="mt-12 flex flex-wrap items-center justify-center gap-6" data-aos="fade-up" data-aos-delay="600" data-astro-cid-mxls6im7> <div class="flex items-center gap-2" data-astro-cid-mxls6im7> <div class="w-8 h-3 rounded-full bg-gradient-to-r from-tech-cyan to-tech-purple shadow-lg shadow-tech-cyan/50" data-astro-cid-mxls6im7></div> <span class="text-tech-white text-sm font-medium" data-astro-cid-mxls6im7>Avanzado (90%)</span> </div> <div class="flex items-center gap-2" data-astro-cid-mxls6im7> <div class="w-8 h-3 rounded-full bg-gradient-to-r from-tech-green to-tech-cyan shadow-lg shadow-tech-green/50" data-astro-cid-mxls6im7></div> <span class="text-tech-white text-sm font-medium" data-astro-cid-mxls6im7>Intermedio (60%)</span> </div> </div> </div> </div> </section>  ${renderScript($$result, "/Users/titan-dev/Desktop/Proyectos/Astro/titan-dev-portafolio-astro/src/components/TechnologiesSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/titan-dev/Desktop/Proyectos/Astro/titan-dev-portafolio-astro/src/components/TechnologiesSection.astro", void 0);

const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contacto" class="min-h-screen flex items-center justify-center"> <div class="container mx-auto px-6 py-20" data-aos="fade-up"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Contacto", "icon": "mail", "color": "tech-cyan" })} <div class="max-w-2xl mx-auto"> <div class="glass p-8 rounded-lg"> <form class="space-y-6"> <div> <label for="name" class="block text-tech-green mb-2 font-semibold">Nombre</label> <input type="text" id="name" name="name" class="w-full px-4 py-3 bg-tech-black border border-tech-cyan rounded-lg text-white focus:outline-none focus:border-tech-green transition-colors" placeholder="Tu nombre"> </div> <div> <label for="email" class="block text-tech-green mb-2 font-semibold">Email</label> <input type="email" id="email" name="email" class="w-full px-4 py-3 bg-tech-black border border-tech-cyan rounded-lg text-white focus:outline-none focus:border-tech-greentransition-colors" placeholder="tu@email.com"> </div> <div> <label for="message" class="block text-tech-green mb-2 font-semibold">Mensaje</label> <textarea id="message" name="message" rows="5" class="w-full px-4 py-3 bg-tech-black border border-tech-cyan rounded-lg text-white focus:outline-none focus:border-tech-green transition-colors resize-none" placeholder="Cuéntame sobre tu proyecto..."></textarea> </div> <button type="submit" class="w-full px-8 py-4 bg-linear-to-r from-tech-cyan to-tech-green text-black font-bold rounded-lg hover:scale-105 transition-transform duration-300 glow">
Enviar Mensaje
</button> </form> <div class="mt-8 pt-8 border-t border-gray-700"> <p class="text-gray-400 text-center mb-4">O contáctame directamente:</p> <div class="flex justify-center gap-6"> <a href="mailto:tu-email@ejemplo.com" class="text-tech-cyan hover:text-tech-green transition-colors">
Email
</a> <a href="https://linkedin.com" target="_blank" class="text-tech-cyan hover:text-tech-green transition-colors">
LinkedIn
</a> <a href="https://github.com" target="_blank" class="text-tech-cyan hover:text-tech-green transition-colors">
GitHub
</a> </div> </div> </div> </div> </div> </section>`;
}, "/Users/titan-dev/Desktop/Proyectos/Astro/titan-dev-portafolio-astro/src/components/ContactSection.astro", void 0);

const ImageSchema = z.object({
  full: z.object({
    url: z.string(),
    width: z.number(),
    height: z.number()
  }),
  thumbnail: z.object({
    url: z.string(),
    width: z.number(),
    height: z.number()
  }).optional()
});
z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  image: ImageSchema.optional()
});
z.object({
  career: z.string().optional(),
  institution: z.string().optional(),
  date_from: z.string().optional(),
  date_until: z.string().optional(),
  complete: z.boolean().optional(),
  // Campo en WordPress se llama "complete" no "completed"
  certificate: z.union([ImageSchema, z.number(), z.string()]).optional(),
  img_institution: z.union([ImageSchema, z.number(), z.string()]).optional()
});
z.object({
  title: z.string().optional(),
  // Nombre de la empresa
  description: z.string().optional(),
  // Descripción del trabajo
  img: z.union([ImageSchema, z.number(), z.string()]).optional(),
  // Logo de la empresa
  experience_time: z.string().optional()
  // Duración (ej: "4 meses")
});
z.object({
  id: z.number(),
  title: z.string(),
  institution: z.string(),
  period: z.string(),
  status: z.enum(["Completado", "En curso"]),
  description: z.string().optional(),
  image: z.string().optional(),
  certificateUrl: z.string().optional()
});
z.object({
  id: z.number(),
  company: z.string(),
  description: z.string(),
  period: z.string(),
  image: z.string().optional()
});
z.object({
  id: z.number(),
  name: z.string(),
  image: z.string().optional()
});
const HomeACFSchema = z.object({
  title: z.string().optional(),
  // Subtitle del hero
  subtititle: z.string().optional(),
  // Descripción del hero (note: typo en WordPress)
  image: ImageSchema.optional()
}).passthrough();
const HomePageSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string()
  }),
  content: z.object({
    rendered: z.string()
  }),
  featured_images: ImageSchema.optional(),
  acf: HomeACFSchema.optional()
});
const StudySchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string()
  }),
  content: z.object({
    rendered: z.string()
  }),
  featured_images: ImageSchema.optional(),
  acf: z.object({
    institution: z.string().optional(),
    degree: z.string().optional(),
    start_date: z.string().optional(),
    end_date: z.string().optional(),
    description: z.string().optional(),
    logo: ImageSchema.optional()
  }).optional()
});
z.array(StudySchema);
const ProjectSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string()
  }),
  content: z.object({
    rendered: z.string()
  }),
  featured_images: ImageSchema.optional(),
  acf: z.object({
    project_url: z.string().optional(),
    github_url: z.string().optional(),
    technologies: z.string().optional(),
    // Comma separated
    client: z.string().optional(),
    year: z.string().optional(),
    description: z.string().optional(),
    screenshots: z.array(ImageSchema).optional()
  }).optional()
});
z.array(ProjectSchema);
const ExperienceSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string()
  }),
  content: z.object({
    rendered: z.string()
  }),
  featured_images: ImageSchema.optional(),
  acf: z.object({
    company: z.string().optional(),
    position: z.string().optional(),
    start_date: z.string().optional(),
    end_date: z.string().optional(),
    current: z.boolean().optional(),
    description: z.string().optional(),
    logo: ImageSchema.optional()
  }).optional()
});
z.array(ExperienceSchema);
const CourseSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string()
  }),
  content: z.object({
    rendered: z.string()
  }),
  featured_images: ImageSchema.optional(),
  acf: z.object({
    platform: z.string().optional(),
    instructor: z.string().optional(),
    duration: z.string().optional(),
    completion_date: z.string().optional(),
    certificate_url: z.string().optional(),
    description: z.string().optional(),
    logo: ImageSchema.optional()
  }).optional()
});
z.array(CourseSchema);
const TestimonialSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string()
  }),
  content: z.object({
    rendered: z.string()
  }),
  featured_images: ImageSchema.optional(),
  acf: z.object({
    author_name: z.string().optional(),
    author_position: z.string().optional(),
    author_company: z.string().optional(),
    author_photo: ImageSchema.optional(),
    rating: z.number().optional(),
    testimonial_text: z.string().optional()
  }).optional()
});
z.array(TestimonialSchema);
const TechnologySchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string()
  }),
  content: z.object({
    rendered: z.string()
  }),
  featured_images: ImageSchema.optional(),
  acf: z.object({
    category: z.string().optional(),
    // Frontend, Backend, Database, etc.
    proficiency: z.number().optional(),
    // 1-5
    icon: ImageSchema.optional(),
    color: z.string().optional()
  }).optional()
});
z.array(TechnologySchema);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  Astro2.response.headers.set("Cache-Control", CACHE_CONFIG.short);
  let parsedData = null;
  let title = "";
  try {
    const url = `${"http://titandevback.local/wp-json/wp/v2"}/pages?slug=inicio`;
    const response = await fetch(url);
    if (response.ok && response.headers.get("content-type")?.includes("application/json")) {
      const json = await response.json();
      if (json && json.length > 0) {
        parsedData = HomePageSchema.parse(json[0]);
        title = parsedData.title.rendered;
      }
    }
  } catch (error) {
    console.log("WordPress API no disponible, usando valores por defecto");
  }
  let experiencesData = [];
  try {
    const expUrl = `${"http://titandevback.local/wp-json/wp/v2"}/experience?_embed`;
    const expResponse = await fetch(expUrl);
    if (expResponse.ok && expResponse.headers.get("content-type")?.includes("application/json")) {
      experiencesData = await expResponse.json();
      console.log("Experiencias:", experiencesData.length);
    }
  } catch (error) {
    console.log("No se pudieron cargar las experiencias");
  }
  let subtitle = "";
  let description = "";
  let imageUrl = "";
  let imageWidth = 0;
  let imageHeight = 0;
  let studies = [];
  let experiences = [];
  let certificates = [];
  if (parsedData) {
    if (parsedData.acf && !Array.isArray(parsedData.acf) && parsedData.acf.title) {
      title = parsedData.acf.title;
    }
    if (parsedData.acf && !Array.isArray(parsedData.acf) && parsedData.acf.subtititle) {
      description = parsedData.acf.subtititle;
    }
    if (parsedData.acf && !Array.isArray(parsedData.acf) && parsedData.acf.image && typeof parsedData.acf.image === "object" && "full" in parsedData.acf.image) {
      imageUrl = parsedData.acf.image.full.url;
      imageWidth = parsedData.acf.image.full.width;
      imageHeight = parsedData.acf.image.full.height;
    }
    if (!imageUrl && parsedData.featured_images && typeof parsedData.featured_images === "object" && "full" in parsedData.featured_images) {
      imageUrl = parsedData.featured_images.full.url;
      imageWidth = parsedData.featured_images.full.width;
      imageHeight = parsedData.featured_images.full.height;
    }
    if (parsedData.acf && !Array.isArray(parsedData.acf)) {
      for (let i = 1; i <= 10; i++) {
        const studyKey = `study_${i}`;
        const study = parsedData.acf[studyKey];
        if (study && typeof study === "object" && "career" in study && study.career) {
          const studyData = {
            id: i,
            title: study.career,
            institution: study.institution || "",
            period: study.date_from && study.date_until ? `${study.date_from} - ${study.date_until}` : "",
            status: study.complete === true ? "Completado" : "En curso",
            description: ""
          };
          if (study.img_institution && typeof study.img_institution === "object" && "full" in study.img_institution) {
            studyData.image = study.img_institution.full.url;
          }
          if (study.certificate && typeof study.certificate === "object" && "full" in study.certificate) {
            studyData.certificateUrl = study.certificate.full.url;
          }
          studies.push(studyData);
        }
      }
    }
    if (parsedData.acf && !Array.isArray(parsedData.acf)) {
      for (let i = 1; i <= 10; i++) {
        const expKey = `experience_${i}`;
        const exp = parsedData.acf[expKey];
        if (exp && typeof exp === "object" && "title" in exp && exp.title) {
          const expData = {
            id: i,
            company: exp.title,
            description: exp.description || "",
            period: exp.experience_time || ""
          };
          if (exp.img && typeof exp.img === "object" && "full" in exp.img) {
            expData.image = exp.img.full.url;
          }
          experiences.push(expData);
        }
      }
    }
  }
  if (experiencesData && experiencesData.length > 0) {
    experiences = experiencesData.map((exp, index) => {
      const expData = {
        id: exp.id,
        company: exp.title.rendered,
        description: exp.acf?.description || exp.content?.rendered?.replace(/<[^>]*>/g, "") || "",
        period: exp.acf?.experience_time || ""
      };
      if (exp.acf?.img && typeof exp.acf.img === "object" && "full" in exp.acf.img) {
        expData.image = exp.acf.img.full.url;
      } else if (exp.featured_images && typeof exp.featured_images === "object" && "full" in exp.featured_images) {
        expData.image = exp.featured_images.full.url;
      }
      return expData;
    });
  }
  if (parsedData && parsedData.acf && !Array.isArray(parsedData.acf)) {
    for (let i = 1; i <= 20; i++) {
      const certKey = `certificate_${i}`;
      const cert = parsedData.acf[certKey];
      if (cert && typeof cert === "object" && "name" in cert && cert.name) {
        const certData = {
          id: i,
          name: cert.name
        };
        if (cert.img && typeof cert.img === "object" && "full" in cert.img) {
          certData.image = cert.img.full.url;
        }
        certificates.push(certData);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": title, "subtitle": subtitle, "description": description, "imageUrl": imageUrl, "imageWidth": imageWidth, "imageHeight": imageHeight })} ${renderComponent($$result2, "StudiesSection", $$StudiesSection, { "studies": studies })} ${renderComponent($$result2, "CertificatesSection", $$CertificatesSection, { "certificates": certificates })} ${renderComponent($$result2, "ExperienceSection", $$ExperienceSection, { "experiences": experiences })} ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, {})} ${renderComponent($$result2, "TechnologiesSection", $$TechnologiesSection, {})} ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ` })}`;
}, "/Users/titan-dev/Desktop/Proyectos/Astro/titan-dev-portafolio-astro/src/pages/index.astro", void 0);
const $$file = "/Users/titan-dev/Desktop/Proyectos/Astro/titan-dev-portafolio-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
