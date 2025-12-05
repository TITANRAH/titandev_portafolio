import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  contact: {
    sendEmail: defineAction({
      input: z.object({
        name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
        phone: z.string().optional().or(z.literal("")),
        email: z.string().email("Correo electrónico inválido"),
        subject: z.string().min(3, "El asunto debe tener al menos 3 caracteres"),
        message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
      }),
      handler: async (input) => {
        try {
          // URL de tu WordPress Contact Form 7
          // Necesitas crear un formulario en WordPress y obtener el ID
          const WORDPRESS_API_URL = import.meta.env.API_URL;
          const CONTACT_FORM_ID = import.meta.env.CONTACT_FORM_ID; // ID del formulario en CF7

          // Preparar los datos para Contact Form 7
          const formData = new FormData();
          formData.append("your-name", input.name);
          formData.append("your-email", input.email);
          formData.append("your-phone", input.phone || "");
          formData.append("your-subject", input.subject);
          formData.append("your-message", input.message);
          formData.append("_wpcf7_unit_tag", "wpcf7-123");

          // Enviar a Contact Form 7
          const response = await fetch(
            `${WORDPRESS_API_URL.replace("/wp-json/wp/v2", "")}/wp-json/contact-form-7/v1/contact-forms/${CONTACT_FORM_ID}/feedback`,
            {
              method: "POST",
              body: formData,
            }
          );

          const data = await response.json();

          if (data.status === "mail_sent") {
            return {
              status: "mail_sent",
              message: data.message || "Mensaje enviado correctamente",
            };
          } else if (data.status === "validation_failed") {
            return {
              status: "validation_failed",
              message: data.message || "Error de validación",
              invalidFields: data.invalid_fields || [],
            };
          } else {
            return {
              status: "mail_failed",
              message: data.message || "Error al enviar el mensaje",
            };
          }
        } catch (error) {
          console.error("Error al enviar email:", error);
          return {
            status: "mail_failed",
            message: "Error al conectar con el servidor",
          };
        }
      },
    }),
  },
};
