import * as z from "zod";

export const ContactForm = z.object({
  name: z.string(),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string(),
  subject: z.string(),
  comment: z.string(),
});

export type ContactForm = z.infer<typeof ContactForm>;
