import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    surname: z.string().min(1, "Surname is required"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
        .string()
        .regex(/^\+?[\d\s\-()]{9,15}$/, "Enter a valid phone number. Use format: +38324234324"),
    description: z
        .string()
        .max(250, "Description must be 250 characters or less"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
