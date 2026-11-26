"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import rawData from "@/data/websiteData.json";
import type { WebsiteData } from "@/types/website";

const websiteData = rawData as WebsiteData;

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const INK = "#111A2E";
const ORANGE = "#F26A0D";
const HEADER_DARK = "#272C38";
const EASE = [0.22, 0.8, 0.2, 1] as const;

export default function Faqs() {
  const faqData =
    websiteData.categories.LogisticsCargo.sections.Faqs.variants.FreightFaqs1;

  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(
    faqData.defaultOpenIndex
  );
  let wordIndex = 0;

  return (
    <section
      id={faqData.sectionId}
      className={`${font.className} relative overflow-hidden bg-gradient-to-b from-white via-[#FBFCFE] to-[#F3F6FA] px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(10,31,68,0.055) 1.2px, transparent 1.4px)",
            backgroundSize: "28px 28px",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 40%, #000 0%, transparent 70%)",
            maskImage:
              "radial-gradient(ellipse at 50% 40%, #000 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={reduce ? undefined : { y: [0, -10, 0], x: [0, 6, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 bottom-8 h-56 w-56 rounded-full bg-[#FBE6D2]/60 blur-3xl"
        />
        <motion.div
          animate={reduce ? undefined : { y: [0, 10, 0], x: [0, -6, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-24 top-10 h-60 w-60 rounded-full bg-[#DCE8F6]/60 blur-3xl"
        />
        <motion.span
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 0.045, scale: 1 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 1.2 }}
          className="absolute -bottom-14 left-[4%] hidden select-none text-[280px] font-extrabold leading-none lg:block"
          style={{ color: INK }}
        >
          {faqData.watermark}
        </motion.span>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1360px] grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-[minmax(0,5.2fr)_minmax(0,6.4fr)] lg:gap-10">
        <div className="min-w-0 lg:pt-1">
          <div className="mb-3 flex items-center gap-3 sm:gap-4">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ originX: 0, background: ORANGE }}
              className="h-[2.5px] w-10 rounded-full sm:w-[56px]"
            />
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.45em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.28em" }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              style={{ color: INK }}
              className="text-xs font-bold uppercase sm:text-sm"
            >
              {faqData.badge}
            </motion.span>
          </div>

          <h2
            aria-label={faqData.titleLines
              .map((l) => l.map((w) => w.t).join(" "))
              .join(" ")}
            className="text-[1.75rem] font-extrabold leading-[1.14] tracking-[-0.025em] sm:text-[2.25rem] lg:text-[clamp(2rem,3.1vw,3.1rem)]"
            style={{ color: INK }}
          >
            {faqData.titleLines.slice(0, 3).map((line, li) => (
              <span
                key={li}
                className="block whitespace-nowrap"
                aria-hidden="true"
              >
                {line.map((w) => {
                  const i = wordIndex++;
                  return (
                    <span
                      key={`${w.t}-${i}`}
                      className="mr-[0.24em] inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom last:mr-0"
                    >
                      <motion.span
                        initial={{ y: "110%" }}
                        whileInView={{ y: "0%" }}
                        viewport={{ once: true, amount: "some" }}
                        transition={{
                          duration: 0.7,
                          delay: 0.12 + i * 0.07,
                          ease: EASE,
                        }}
                        className="inline-block"
                        style={{ color: w.accent ? ORANGE : undefined }}
                      >
                        {w.t}
                      </motion.span>
                    </span>
                  );
                })}
              </span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.65, delay: 0.5, ease: EASE }}
            className="mt-3.5 max-w-[500px] text-xs leading-[1.65] text-[#374151] sm:mt-4 sm:text-sm lg:text-base"
          >
            {faqData.description}
          </motion.p>
        </div>

        <div className="min-w-0 space-y-2.5 sm:space-y-3">
          {faqData.items.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const btnId = `faq-btn-${idx}`;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + idx * 0.08,
                  ease: EASE,
                }}
                className={`overflow-hidden rounded-xl border bg-white transition-shadow duration-300 ${
                  isOpen
                    ? "border-slate-300/80 shadow-[0_14px_30px_-18px_rgba(17,26,46,0.4)]"
                    : "border-slate-200/80 shadow-[0_8px_20px_-16px_rgba(17,26,46,0.3)] hover:shadow-[0_14px_26px_-18px_rgba(17,26,46,0.4)]"
                }`}
              >
                <button
                  id={btnId}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className={`group relative flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-bold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#F26A0D] sm:px-6 sm:py-4 sm:text-base lg:text-lg ${
                    isOpen
                      ? "text-white"
                      : "text-[#111A2E] hover:bg-slate-50/80"
                  }`}
                  style={{ background: isOpen ? HEADER_DARK : undefined }}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-0 h-full w-[4px] origin-top transition-transform duration-300 ${
                      isOpen
                        ? "scale-y-100"
                        : "scale-y-0 group-hover:scale-y-100"
                    }`}
                    style={{ background: ORANGE }}
                  />
                  <span className="min-w-0 leading-snug">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.28, ease: EASE }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-colors ${
                        isOpen ? "text-white" : "text-[#111A2E]"
                      }`}
                      strokeWidth={2.2}
                    />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{ y: -6 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="px-4 pb-4 pt-3 text-xs leading-[1.65] text-[#2D3748] sm:px-6 sm:pb-5 sm:pt-4 sm:text-sm lg:text-[15px]"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

