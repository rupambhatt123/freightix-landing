"use client";

import React, { FormEvent, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Truck,
  ShieldCheck,
  Layers,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import rawData from "@/data/websiteData.json";
import type { WebsiteData } from "@/types/website";

const websiteData = rawData as WebsiteData;

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const INK = "#182230";
const ORANGE = "#E8740C";
const PANEL = "#1F252C";
const EASE = [0.22, 0.8, 0.2, 1] as const;

const fieldBase =
  "w-full rounded-[7px] bg-white px-3.5 py-2.5 text-[13px] sm:text-sm text-[#182230] placeholder:text-[#7A8594] outline-none transition-shadow duration-200 focus:shadow-[0_0_0_2px_rgba(232,116,12,0.65)]";

const contactIconMap = {
  phone: Phone,
  mail: Mail,
  map: MapPin,
};

const highlightIconMap = {
  truck: Truck,
  shield: ShieldCheck,
  layers: Layers,
};

function Field({
  label,
  required,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs sm:text-[13px] font-semibold text-white">
        {label}
        {required && (
          <span className="ml-0.5" style={{ color: ORANGE }}>
            *
          </span>
        )}
      </span>
      {children}
    </label>
  );
}

export default function Contact() {
  const contactData =
    websiteData.categories.LogisticsCargo.sections.Contact.variants
      .FreightContact1;
  const { form: formConfig } = contactData;

  const reduce = useReducedMotion();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    freight: "",
    load: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id={contactData.sectionId}
      className={`${font.className} relative overflow-hidden bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10`}
    >
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-7 lg:grid-cols-[445fr_735fr] lg:gap-10">
        {/* Left Dark Form Card with Subtle Orange Accent Corners */}
        <div className="relative mx-auto w-full max-w-[460px] lg:mx-0 lg:max-w-none">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-2.5 top-5 z-0 h-14 w-6 rounded-l-lg sm:-left-3.5 sm:top-6 sm:h-16 sm:w-8"
            style={{ background: ORANGE }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-2.5 left-6 z-0 h-4 w-20 rounded-b-lg sm:-bottom-3 sm:left-8 sm:h-5 sm:w-24"
            style={{ background: ORANGE }}
          />

          <div
            className="relative z-10 rounded-[18px] px-4 py-5 shadow-[0_20px_42px_-24px_rgba(15,23,42,0.55)] sm:px-6 sm:py-6"
            style={{ background: PANEL }}
          >
            <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
              {formConfig.title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-white/80 sm:text-[13px]">
              {formConfig.description}
            </p>

            <AnimatePresence mode="wait" initial={false}>
              {submitted ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="mt-5 flex min-h-[270px] flex-col items-center justify-center text-center"
                >
                  <CheckCircle2
                    className="h-12 w-12"
                    style={{ color: ORANGE }}
                    strokeWidth={1.8}
                  />
                  <p className="mt-3 text-lg font-bold text-white">
                    {formConfig.successTitle}
                  </p>
                  <p className="mt-1 max-w-[320px] text-xs text-white/80 sm:text-sm">
                    {formConfig.successPrefix}{" "}
                    {form.name || formConfig.defaultName}.{" "}
                    {formConfig.successSuffix}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-semibold underline underline-offset-4 hover:text-white cursor-pointer"
                    style={{ color: ORANGE }}
                  >
                    {formConfig.resetLabel}
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-4 space-y-3 sm:space-y-3.5"
                >
                  <Field label={formConfig.fields.nameLabel} required>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder={formConfig.fields.namePlaceholder}
                      className={fieldBase}
                    />
                  </Field>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Field label={formConfig.fields.emailLabel} required>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={set("email")}
                        placeholder={formConfig.fields.emailPlaceholder}
                        className={fieldBase}
                      />
                    </Field>
                    <Field label={formConfig.fields.phoneLabel} required>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={set("phone")}
                        placeholder={formConfig.fields.phonePlaceholder}
                        className={fieldBase}
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Field label={formConfig.fields.freightLabel}>
                      <div className="relative">
                        <select
                          value={form.freight}
                          onChange={set("freight")}
                          className={`${fieldBase} cursor-pointer appearance-none pr-9 ${
                            form.freight ? "" : "text-[#7A8594]"
                          }`}
                        >
                          <option value="">
                            {formConfig.fields.freightDefault}
                          </option>
                          {formConfig.freightOptions.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#475569]"
                          strokeWidth={2.4}
                        />
                      </div>
                    </Field>
                    <Field label={formConfig.fields.loadLabel}>
                      <div className="relative">
                        <select
                          value={form.load}
                          onChange={set("load")}
                          className={`${fieldBase} cursor-pointer appearance-none pr-9 ${
                            form.load ? "" : "text-[#7A8594]"
                          }`}
                        >
                          <option value="">
                            {formConfig.fields.loadDefault}
                          </option>
                          {formConfig.loadOptions.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#475569]"
                          strokeWidth={2.4}
                        />
                      </div>
                    </Field>
                  </div>

                  <Field label={formConfig.fields.messageLabel}>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={set("message")}
                      placeholder={formConfig.fields.messagePlaceholder}
                      className={`${fieldBase} min-h-[76px] resize-none`}
                    />
                  </Field>

                  <motion.button
                    type="submit"
                    whileHover={reduce ? undefined : { y: -1 }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                    className="mt-1 w-full rounded-[7px] px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-opacity hover:opacity-95 sm:w-auto sm:px-7 sm:py-3 sm:text-[13px] cursor-pointer"
                    style={{ background: ORANGE }}
                  >
                    {formConfig.submitLabel}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Info & Highlights Column */}
        <div className="min-w-0">
          <div className="mb-2.5 flex items-center gap-3">
            <span
              className="h-[2.5px] w-8 rounded-full sm:w-10"
              style={{ background: ORANGE }}
            />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em] sm:text-xs"
              style={{ color: INK }}
            >
              {contactData.badge}
            </span>
          </div>

          <h2
            className="text-[1.85rem] font-extrabold leading-[1.12] tracking-[-0.025em] sm:text-4xl lg:text-[2.85rem]"
            style={{ color: INK }}
          >
            {contactData.titleLines.map((line, li) => (
              <span key={li} className="block">
                {line.map((w, wi) => (
                  <span
                    key={`${w.t}-${wi}`}
                    className="mr-[0.24em] inline-block last:mr-0"
                    style={{ color: w.accent ? ORANGE : undefined }}
                  >
                    {w.t}
                  </span>
                ))}
              </span>
            ))}
          </h2>

          <p className="mt-3 max-w-[580px] text-xs leading-[1.65] text-[#475569] sm:text-sm lg:text-[15px]">
            {contactData.subtitle}
          </p>

          {/* Contact Info Row */}
          <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:gap-0">
            {contactData.infoItems.map((c, i) => {
              const Icon = contactIconMap[c.icon] || Phone;
              const content = (
                <div className="group flex items-center gap-3">
                  <Icon
                    className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
                    strokeWidth={1.8}
                    style={{ color: ORANGE }}
                  />
                  <div className="min-w-0 leading-tight">
                    <span
                      className="block text-xs font-extrabold sm:text-sm"
                      style={{ color: INK }}
                    >
                      {c.label}
                    </span>
                    <span className="mt-0.5 block text-xs text-[#475569] transition-colors [overflow-wrap:anywhere] group-hover:text-[#E8740C] sm:text-[13px]">
                      {c.value}
                    </span>
                  </div>
                </div>
              );

              return (
                <div
                  key={c.label}
                  className={`min-w-0 sm:px-4 first:sm:pl-0 last:sm:pr-0 ${
                    i > 0 ? "sm:border-l sm:border-[#E2E8F0]" : ""
                  }`}
                >
                  {c.href ? <a href={c.href}>{content}</a> : content}
                </div>
              );
            })}
          </div>

          <hr className="my-5 border-[#E2E8F0]" />

          {/* Highlights Row */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:gap-0">
            {contactData.highlights.map((h, i) => {
              const Icon = highlightIconMap[h.icon] || Truck;
              return (
                <div
                  key={h.title}
                  className={`flex min-w-0 items-center gap-3 sm:px-4 first:sm:pl-0 last:sm:pr-0 ${
                    i > 0 ? "sm:border-l sm:border-[#E2E8F0]" : ""
                  }`}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] sm:h-12 sm:w-12">
                    <Icon
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      strokeWidth={1.7}
                      style={{ color: i === 0 ? INK : ORANGE }}
                    />
                  </span>
                  <p
                    className="text-xs font-bold leading-snug sm:text-sm"
                    style={{ color: INK }}
                  >
                    {h.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

