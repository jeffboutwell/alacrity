"use server";

import { ContactForm } from "./schema";
import EmailTemplate from "../components/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async ({ formData }: { formData: ContactForm }) => {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "jeffboutwell@gmail.com",
    subject: "Alacrity Contact Form",
    react: EmailTemplate({ formData }),
  });

  if (error) {
    return Response.json({ error });
  }

  return Response.json(data);
};
