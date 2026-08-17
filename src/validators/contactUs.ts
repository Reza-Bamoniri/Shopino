import { z } from "zod";

export const contactUsSchema = z.object({
    name: z.string().trim().min(3, {message: "name must be at least 3 characters"}),

    phone: z.string().trim().regex(/^[0-9]{10,11}$/, {message: "the mobile number is invalid"}),

    subject: z.string().trim().min(3, {message: "subject must be at least 3 characters"}),

    content: z.string().trim().min(3, {message: "content must be at least 10 characters"})
})