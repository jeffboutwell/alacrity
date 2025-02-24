"use client";

import React, { useState } from "react";

import { ContactForm } from "../utils/schema";
import { phoneMaskOptions } from "../utils/masks";
import { useForm } from "react-hook-form";
import { useMaskito } from "@maskito/react";
import { withMaskitoRegister } from "../utils/with-maskito-register";
import { zodResolver } from "@hookform/resolvers/zod";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(ContactForm),
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [emailSendError, SetEmailSendError] = useState<boolean>(false);
  const phoneInputRef = useMaskito({ options: phoneMaskOptions });

  const onSubmit = async (formData: ContactForm) => {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      await response.json();
      setSubmitted(true);
      reset();
    } else {
      console.error("API error:", response.status);
      SetEmailSendError(true);
    }
  };
  return (
    <div className="Contact Content--outer" id="form">
      <div className="Content--inner">
        <h2 className="text-gray-800">Contact Us</h2>
        <form className="ContactForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="ContactForm--inner">
            <fieldset className="col-span-6">
              <label>Name</label>
              <input {...register("name")} placeholder="Name" />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </fieldset>
            <fieldset className="col-span-6">
              <label>Email</label>
              <input {...register("email")} placeholder="Email Address" />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </fieldset>
            <fieldset className="col-span-6">
              <label>Phone</label>
              <input
                type="tel"
                placeholder="Phone"
                {...withMaskitoRegister(register("phone"), phoneInputRef)}
              />
              {errors.phone && <p className="error">{errors.phone.message}</p>}
            </fieldset>
            <fieldset className="col-span-6">
              <label>Subject</label>
              <input {...register("subject")} placeholder="Subject" />
              {errors.subject && (
                <p className="error">{errors.subject.message}</p>
              )}
            </fieldset>
            <fieldset className="col-span-6 md:col-span-full">
              <label>Comments</label>
              <textarea {...register("comment")} placeholder="Comments" />
              {errors.comment && (
                <p className="error">{errors.comment.message}</p>
              )}
            </fieldset>
          </div>
          {!submitted && <button className="Button">Send Message</button>}
          {submitted && !emailSendError && (
            <p className="text-gray-800 text-lg">
              Thank you for contacting us! We&#8217;ll been in touch.
            </p>
          )}
          {submitted && emailSendError && (
            <p className="text-red-800 text-lg">
              Something went wrong. The email couldn&#8217;t be sent.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
