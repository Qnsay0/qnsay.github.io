"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { MdSend } from "react-icons/md";
import type { IconType } from "react-icons";

interface ContactProps {
  title: string;
  subtitle: string;
  buttonString: string;
  email: string;
  phoneNumber: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

const labelClass =
  "text-sm font-semibold uppercase tracking-wider text-neutral-400";
const inputClass =
  "h-8 resize-none border-b border-neutral-600 bg-transparent outline-none transition-colors focus:border-white";
const contactLineClass = "border-b text-lg leading-loose md:text-xl";

function Field({
  id,
  name,
  label,
  placeholder,
  rows = 1,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  rows?: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className={`${inputClass} ${rows > 1 ? "h-auto pb-1.5" : ""}`}
      />
    </div>
  );
}

export default function Contact({
  title,
  subtitle,
  buttonString,
  email,
  phoneNumber,
  nameLabel,
  namePlaceholder,
  emailLabel,
  emailPlaceholder,
  messageLabel,
  messagePlaceholder,
}: ContactProps) {
  const form = useRef<HTMLFormElement>(null);
  const serviceKey = process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY as string;
  const templateKey = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY as string;
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string;
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs.sendForm(serviceKey, templateKey, form.current, publicKey).then(
      (result) => {
        console.log("Wysłano email", result.text);
        form.current?.reset();
      },
      (error) => {
        console.log("Problem z wysłaniem", error.text);
      },
    );
  };

  return (
    <section className="mx-auto flex h-fit flex-wrap justify-between gap-10 px-8 py-20  text-white max-w-7xl ">
      <div className="flex flex-1 flex-col space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-7xl leading-[1.05] font-bold tracking-tighter text-white uppercase md:text-8xl">
              {title}
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground sm:text-xl md:max-w-xl md:text-2xl">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col space-y-2 w-fit select-text">
            <span className={`${contactLineClass} text-white`}>{email}</span>
            <span className={contactLineClass}>{phoneNumber}</span>
          </div>
        </div>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-1 flex-col gap-5 mt-5"
      >
        <Field
          id="name"
          name="name"
          label={nameLabel}
          placeholder={namePlaceholder}
        />
        <Field
          id="email"
          name="email"
          label={emailLabel}
          placeholder={emailPlaceholder}
        />
        <Field
          id="question"
          name="message"
          label={messageLabel}
          placeholder={messagePlaceholder}
          rows={3}
        />

        <button
          type="submit"
          className="group relative z-[99] mx-auto mt-5 flex w-fit cursor-pointer items-center justify-between gap-4 rounded-4xl bg-white px-7.5 py-2.5 font-bold tracking-wider text-black uppercase transition duration-200 hover:-translate-y-0.5"
        >
          <MdSend className="transition duration-200 group-hover:-translate-y-0.5" />
          <span className="transition duration-200 group-hover:-translate-y-0.5">
            {buttonString}
          </span>
        </button>
      </form>
    </section>
  );
}
