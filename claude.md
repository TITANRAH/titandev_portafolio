# claude.md - Template Astro + WordPress

## 📋 Referencia al Plan Maestro

**IMPORTANTE**: Este proyecto sigue el **Plan Maestro de Astro + WordPress** ubicado en:
`/Users/titan-dev/Desktop/PLAN-MAESTRO-ASTRO-WORDPRESS.md`

Claude debe leer ese archivo para entender:
- Arquitectura completa del stack
- Configuración de caché e ISR
- Patrones de fetch a WordPress
- Schemas Zod y validación
- Configuración de Vercel
- Troubleshooting común

---

## 🎯 Especificaciones de ESTE Proyecto

### WordPress Backend
- **URL WordPress**: http://titandevback.local/
- **API URL**: http://titandevback.local//wp-json/wp/v2
- **Dominio para imágenes**: titandevback.local

### Frontend (Astro + Vercel)
- **URL Producción**: [Por configurar en Vercel]
- **Dominio personalizado**: [Por configurar]
- **Estilo Visual**: Tech Minimal (minimalista-futurista)

### Post Types Personalizados
- [x] `pages` (Home, etc.)
- [x] `projects` (Trabajos/Portfolio)
- [x] `experience` (Experiencia Laboral)
- [x] `studies` (Estudios)
- [x] `courses` (Cursos y Certificaciones)
- [x] `testimonials` (Recomendaciones)
- [x] `technologies` (Stack Técnico)

### Taxonomías Personalizadas
- [ ] `tech_categories` (Frontend, Backend, Database, DevOps, etc.)

### Campos ACF Especiales
Documentar campos ACF que requieren procesamiento en `functions.php`:

**Páginas**:
- [ ] Página "Inicio": `title` (text), `image` (image)
- [ ] Agregar más...

**Posts**:
- [ ] Agregar campos ACF personalizados aquí...

**Custom Post Types**:
- [ ] Agregar campos ACF por cada CPT...

---

## 🎨 Configuración de Caché (Resumen)

Basado en el Plan Maestro, estos son los tiempos de revalidación recomendados:

| Página | Configuración | Revalidación |
|--------|---------------|--------------|
| Inicio | `prerender: true` + `s-maxage=60` | 1 minuto |
| Páginas estables | `prerender: true` + `s-maxage=300` | 5 minutos |
| Productos/Eventos | Sin prerender + `s-maxage=120` | 2 minutos |
| Páginas con query params | Sin prerender + `s-maxage=60` | 1 minuto |

**Ajustar según necesidades del cliente**.

---

## 🔧 Tareas de Configuración Inicial

### WordPress (SiteGround)
- [ ] WordPress instalado
- [ ] Tema personalizado creado
- [ ] `functions.php` configurado (CORS, featured_images, ACF processing)
- [ ] Plugins instalados: ACF, Custom Post Type UI
- [ ] Post types personalizados creados
- [ ] Campos ACF configurados
- [ ] Contenido de prueba publicado

### Astro (Local)
- [ ] Proyecto inicializado (`npm create astro@latest`)
- [ ] Dependencias instaladas: `@astrojs/vercel`, `zod`, `@tailwindcss/vite`
- [ ] `astro.config.mjs` configurado
- [ ] Variables de entorno configuradas (`.env.development`)
- [ ] Schemas Zod creados en `src/types/index.ts`
- [ ] Helpers creados en `src/helpers/index.ts`
- [ ] Layout base creado
- [ ] Build local exitoso

### Vercel
- [ ] Repositorio Git conectado
- [ ] Variables de entorno configuradas en Vercel
- [ ] Build exitoso
- [ ] Dominio personalizado configurado (si aplica)

---

## 📝 Notas del Proyecto

[Agregar notas específicas, decisiones de diseño, cambios al plan maestro, etc.]

---

**Fecha de inicio**: [Completar]
**Última actualización**: [Completar]
