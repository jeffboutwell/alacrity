import { ContactForm } from "../utils/schema";
import React from "react";

const EmailTemplate = ({ formData }: { formData: ContactForm }) => {
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

export default EmailTemplate;
