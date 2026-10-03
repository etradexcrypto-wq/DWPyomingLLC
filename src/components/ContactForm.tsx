"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./Icon";

export function ContactForm() {
  const [status, setStatus] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("Your details passed validation, but no message was sent. This form is not connected to a delivery service yet. Please use the client application if you already have access.");
  }
  return <form className="contact-form" onSubmit={submit} onChange={() => setStatus("")} noValidate={false}>
    <div className="form-row"><label>Full Name <span aria-hidden="true">*</span><input name="fullName" type="text" autoComplete="name" required minLength={2} placeholder="Your full name"/></label><label>Email <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" required placeholder="you@company.com"/></label></div>
    <div className="form-row"><label>Phone <input name="phone" type="tel" autoComplete="tel" placeholder="Optional"/></label><label>Company <input name="company" type="text" autoComplete="organization" placeholder="Optional"/></label></div>
    <label>Message <span aria-hidden="true">*</span><textarea name="message" required minLength={10} rows={6} placeholder="Tell us a little about the conversation you'd like to have"/></label>
    <p className="form-note">Please do not include sensitive personal or financial information. This preview form is not connected to a message-delivery service.</p>
    <button type="submit" className="button button-gold">Send Message <Icon name="arrow" size={18}/></button>
    {status && <div className="form-status" role="status">{status}</div>}
  </form>;
}
