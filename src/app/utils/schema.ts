import * as z from "zod";

export const ContactForm = z.object({
  name: z.string().nonempty({ message: "Please enter your full name." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().nonempty({ message: "Please enter your phone number." }),
  subject: z.string().nonempty({ message: "Please enter your subject." }),
  comment: z.string().nonempty({ message: "Please enter your comments." }),
});

export type ContactForm = z.infer<typeof ContactForm>;
