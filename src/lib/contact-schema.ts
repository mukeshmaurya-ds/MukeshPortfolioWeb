import { z } from "zod";

const noHeaderInjection = (value: string) =>
  !/[\r\n]/.test(value);

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name cannot exceed 50 characters.")
    .refine(noHeaderInjection, {
      message: "Invalid characters detected.",
    }),

  email: z
    .email("Please enter a valid email address.")
    .refine(noHeaderInjection, {
      message: "Invalid email.",
    }),

  subject: z
    .string()
    .trim()
    .min(5, "Subject must be at least 5 characters.")
    .max(100, "Subject cannot exceed 100 characters.")
    .refine(noHeaderInjection, {
      message: "Invalid subject.",
    }),

  message: z
    .string()
    .trim()
    .min(20, "Message must contain at least 20 characters.")
    .max(1000, "Message cannot exceed 1000 characters."),

  website: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;