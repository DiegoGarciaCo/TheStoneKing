"use client";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { captureLead } from "@/lib/actions";
import { useFormState } from "react-dom";

export default function ContactForm({
  className,
  inputClass,
  messageClass,
}: {
  className: string;
  inputClass: string;
  messageClass: string;
}) {
  const [state, action] = useFormState(captureLead, {});
  const formRef = useRef<any>(null);
  const [formMessages, setFormMessages] = useState<any>();

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
      setFormMessages({
        output: state?.output,
      });
      const timer = setTimeout(() => {
        setFormMessages({});
      }, 5000);
      return () => clearTimeout(timer);
    } else if (!state?.success) {
      setFormMessages({
        name: state?.name,
        phone: state?.phone,
        email: state?.email,
        message: state?.message,
        output: state?.output,
      });
      const timer = setTimeout(() => {
        setFormMessages({});
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state]);
  return (
    <form action={action} ref={formRef} className={className}>
      <label htmlFor="name">
        Name <span className="text-red-800 font-bold">*</span>
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Full Name"
        className={inputClass}
      />
      {formMessages?.name && (
        <p className="text-red-800">{formMessages.name}</p>
      )}
      <label htmlFor="phone">
        Phone <span className="text-red-800 font-bold">*</span>
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Phone Number"
        className={inputClass}
      />
      {formMessages?.phone && (
        <p className="text-red-800">{formMessages.phone}</p>
      )}
      <label htmlFor="email">
        Email <span className="text-red-800 font-bold">*</span>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        className={inputClass}
      />
      {formMessages?.email && (
        <p className="text-red-800">{formMessages.email}</p>
      )}
      <label htmlFor="address">
        Address <span className="text-red-800 font-bold">*</span>
      </label>
      <input
        type="text"
        id="address"
        name="address"
        placeholder="Full Address"
        className={inputClass}
      />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        placeholder="Type Your Message..."
        className={messageClass}
      ></textarea>
      {formMessages?.message && (
        <p className="text-red-800">{formMessages.message}</p>
      )}
      {state?.success ? (
        <p className="text-green-800 p-2 text-center">{formMessages.output}</p>
      ) : (
        <p className="text-red-800 p-2 text-center">{state.output}</p>
      )}
      <Button
        buttonStyle="btn-primary"
        buttonSize="btn-md"
        type="submit"
        text="Submit"
      />
    </form>
  );
}
