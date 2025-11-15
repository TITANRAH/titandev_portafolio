import { z } from "zod";

// Schema base para imágenes
const ImageSchema = z.object({
  full: z.object({
    url: z.string(),
    width: z.number(),
    height: z.number(),
  }),
  thumbnail: z.object({
    url: z.string(),
    width: z.number(),
    height: z.number(),
  }).optional(),
});

// Schema base para ACF
const BaseACFSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  image: ImageSchema.optional(),
});

// Schema para Home Page
export const HomePageSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  featured_images: ImageSchema.optional(),
  acf: BaseACFSchema.optional(),
});

// Schema para Estudios (studies)
export const StudySchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  featured_images: ImageSchema.optional(),
  acf: z.object({
    institution: z.string().optional(),
    degree: z.string().optional(),
    start_date: z.string().optional(),
    end_date: z.string().optional(),
    description: z.string().optional(),
    logo: ImageSchema.optional(),
  }).optional(),
});

export const StudiesSchema = z.array(StudySchema);

// Schema para Proyectos/Trabajos (projects)
export const ProjectSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  featured_images: ImageSchema.optional(),
  acf: z.object({
    project_url: z.string().optional(),
    github_url: z.string().optional(),
    technologies: z.string().optional(), // Comma separated
    client: z.string().optional(),
    year: z.string().optional(),
    description: z.string().optional(),
    screenshots: z.array(ImageSchema).optional(),
  }).optional(),
});

export const ProjectsSchema = z.array(ProjectSchema);

// Schema para Experiencia Laboral (experience)
export const ExperienceSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  featured_images: ImageSchema.optional(),
  acf: z.object({
    company: z.string().optional(),
    position: z.string().optional(),
    start_date: z.string().optional(),
    end_date: z.string().optional(),
    current: z.boolean().optional(),
    description: z.string().optional(),
    logo: ImageSchema.optional(),
  }).optional(),
});

export const ExperiencesSchema = z.array(ExperienceSchema);

// Schema para Cursos (courses)
export const CourseSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  featured_images: ImageSchema.optional(),
  acf: z.object({
    platform: z.string().optional(),
    instructor: z.string().optional(),
    duration: z.string().optional(),
    completion_date: z.string().optional(),
    certificate_url: z.string().optional(),
    description: z.string().optional(),
    logo: ImageSchema.optional(),
  }).optional(),
});

export const CoursesSchema = z.array(CourseSchema);

// Schema para Testimonios/Recomendaciones (testimonials)
export const TestimonialSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  featured_images: ImageSchema.optional(),
  acf: z.object({
    author_name: z.string().optional(),
    author_position: z.string().optional(),
    author_company: z.string().optional(),
    author_photo: ImageSchema.optional(),
    rating: z.number().optional(),
    testimonial_text: z.string().optional(),
  }).optional(),
});

export const TestimonialsSchema = z.array(TestimonialSchema);

// Schema para Tecnologías (technologies)
export const TechnologySchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  featured_images: ImageSchema.optional(),
  acf: z.object({
    category: z.string().optional(), // Frontend, Backend, Database, etc.
    proficiency: z.number().optional(), // 1-5
    icon: ImageSchema.optional(),
    color: z.string().optional(),
  }).optional(),
});

export const TechnologiesSchema = z.array(TechnologySchema);

// Schema para Posts del Blog (posts)
export const PostSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  excerpt: z.object({
    rendered: z.string(),
  }),
  date: z.string(),
  featured_images: ImageSchema.optional(),
  acf: z.object({
    reading_time: z.string().optional(),
    author_bio: z.string().optional(),
  }).optional(),
});

export const PostsSchema = z.array(PostSchema);

// Export types
export type HomePage = z.infer<typeof HomePageSchema>;
export type Study = z.infer<typeof StudySchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type Course = z.infer<typeof CourseSchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;
export type Technology = z.infer<typeof TechnologySchema>;
export type Post = z.infer<typeof PostSchema>;
