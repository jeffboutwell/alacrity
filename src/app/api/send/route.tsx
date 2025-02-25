import * as React from "react";

import { ContactForm } from "@/app/utils/schema";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EmailTemplate = (formData: ContactForm) => {
  return (
    <div>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <p>Subject: {formData.subject}</p>
      <p>Comments: {formData.comment}</p>
    </div>
  );
};

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();
    const { data, error } = await resend.emails.send({
      from: "Alacrity <onboarding@resend.dev>",
      //to: ["jsuggs@docs.health", "tim@godigitalculture.com"],
      to: ["jeffboutwell@gmail.com"],
      subject: "Alacrity Contact Form",
      react: EmailTemplate(body) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
