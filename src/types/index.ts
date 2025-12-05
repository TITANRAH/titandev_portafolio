import { z } from "zod";

const ImageSchema = z.object({
  full: z.object({
    url: z.string(),
    width: z.number(),
    height: z.number(),
  }),
  thumbnail: z
    .object({
      url: z.string(),
      width: z.number(),
      height: z.number(),
    })
    .optional(),
});

export const StudyUISchema = z.object({
  id: z.number(),
  title: z.string(),
  institution: z.string(),
  period: z.string(),
  status: z.enum(["Completado", "En curso"]),
  description: z.string().optional(),
  image: z.string().optional(),
  certificateUrl: z.string().optional(),
});

export const ExperienceUISchema = z.object({
  id: z.number(),
  company: z.string(),
  description: z.string(),
  period: z.string(),
  image: z.string().optional(),
});

export const CertificateUISchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string().optional(),
});

const HomeACFSchema = z
  .object({
    title: z.string().optional(), 
    subtititle: z.string().optional(), 
    image: ImageSchema.optional(),
  })
  .passthrough();

export const HomePageSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  featured_images: ImageSchema.optional(),
  acf: HomeACFSchema.optional(),
});

export const StudySchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  featured_images: ImageSchema.optional(),
  acf: z
    .object({
      institution: z.string().optional(),
      degree: z.string().optional(),
      start_date: z.string().optional(),
      end_date: z.string().optional(),
      description: z.string().optional(),
      logo: ImageSchema.optional(),
    })
    .optional(),
});

export const StudiesSchema = z.array(StudySchema);

export const ProjectSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  featured_images: ImageSchema.optional(),
  acf: z
    .object({
      project_url: z.string().optional(),
      technologies: z.string().optional(), 
      client: z.string().optional(),
      year: z.string().optional(),
      description: z.string().optional(),
      screenshots: z.array(ImageSchema).optional(),
    })
    .optional(),
});

export const ProjectsSchema = z.array(ProjectSchema);

export const ExperienceSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  featured_images: ImageSchema.optional(),
  acf: z
    .object({
      company: z.string().optional(),
      position: z.string().optional(),
      start_date: z.string().optional(),
      end_date: z.string().optional(),
      current: z.boolean().optional(),
      description: z.string().optional(),
      logo: ImageSchema.optional(),
    })
    .optional(),
});

export const ExperiencesSchema = z.array(ExperienceSchema);

export const CourseSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  featured_images: ImageSchema.optional(),
  acf: z
    .object({
      platform: z.string().optional(),
      instructor: z.string().optional(),
      duration: z.string().optional(),
      completion_date: z.string().optional(),
      certificate_url: z.string().optional(),
      description: z.string().optional(),
      logo: ImageSchema.optional(),
    })
    .optional(),
});

export const CoursesSchema = z.array(CourseSchema);

export const TestimonialSchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  featured_images: ImageSchema.optional(),
  acf: z
    .object({
      author_name: z.string().optional(),
      author_position: z.string().optional(),
      author_company: z.string().optional(),
      author_photo: ImageSchema.optional(),
      rating: z.number().optional(),
      testimonial_text: z.string().optional(),
    })
    .optional(),
});

export const TestimonialsSchema = z.array(TestimonialSchema);

export const TechnologySchema = z.object({
  id: z.number(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  featured_images: ImageSchema.optional(),
  acf: z
    .object({
      category: z.string().optional(),
      proficiency: z.number().optional(),
      icon: ImageSchema.optional(),
      color: z.string().optional(),
    })
    .optional(),
});

export const TechnologiesSchema = z.array(TechnologySchema);

export type HomePage = z.infer<typeof HomePageSchema>;
export type Study = z.infer<typeof StudySchema>;
export type StudyUI = z.infer<typeof StudyUISchema>;
export type ExperienceUI = z.infer<typeof ExperienceUISchema>;
export type CertificateUI = z.infer<typeof CertificateUISchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type Course = z.infer<typeof CourseSchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;
export type Technology = z.infer<typeof TechnologySchema>;
