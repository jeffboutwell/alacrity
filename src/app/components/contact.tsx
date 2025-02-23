"use client";

import React, { useState } from "react";

import { ContactForm } from "../utils/schema";
import { useForm } from "react-hook-form";
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
  const onSubmit = (data: ContactForm) => {
    console.log(data);
    reset();
    setSubmitted(true);
  };
  return (
    <div className="Contact Content--outer">
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
              <label>Phone </label>
              <input {...register("phone")} placeholder="Phone" />
              {errors.phone && <p className="error">{errors.phone.message}</p>}
            </fieldset>
            <fieldset className="col-span-6">
              <label>Subject </label>
              <input {...register("subject")} placeholder="Subject" />
              {errors.subject && (
                <p className="error">{errors.subject.message}</p>
              )}
            </fieldset>
            <fieldset className="md:col-span-full">
              <label>Comments </label>
              <textarea {...register("comment")} placeholder="Comments" />
              {errors.comment && (
                <p className="error">{errors.comment.message}</p>
              )}
            </fieldset>
          </div>
          {!submitted ? (
            <button className="Button">Send Message</button>
          ) : (
            <p className="text-gray-800 text-lg">
              Thank you for contacting us! We&#8217;ll been in touch.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
