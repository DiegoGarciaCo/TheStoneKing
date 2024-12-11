"use client";
import { useRef } from "react";
import Button from "./Button";

export default function ContactForm({
  className,
  inputClass,
  messageClass,
}: {
  className: string;
  inputClass: string;
  messageClass: string;
}) {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form action="" ref={ref} className={className}>
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
      <Button
        buttonStyle="btn-primary"
        buttonSize="btn-md"
        type="submit"
        text="Submit"
      />
    </form>
  );
}
