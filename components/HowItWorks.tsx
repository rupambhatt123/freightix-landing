"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import rawData from "@/data/websiteData.json";
import type { WebsiteData } from "@/types/website";

const websiteData = rawData as WebsiteData;

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const NAVY = "#0A1F44";
const ORANGE = "#F26A0D";
const EASE = [0.22, 0.8, 0.2, 1] as const;

const sw = {
  strokeWidth: 3.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconBook() {
  return (
    <svg viewBox="0 0 96 84" className="h-full w-full" fill="none" aria-hidden="true">
      <rect x="14" y="8" width="62" height="46" rx="4" stroke={NAVY} {...sw} />
      <path d="M5 62h80M36 62l2 4h14l2-4" stroke={NAVY} {...sw} />
      <path d="M45 22l12 6v13l-12 6-12-6V28z" stroke={ORANGE} {...sw} />
      <path d="M33 28l12 6 12-6M45 34v13" stroke={ORANGE} {...sw} strokeWidth={2.6} />
      <path
        d="M62 38l6 22 4-8 8 8 4-4-8-8 8-4z"
        fill={NAVY}
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPrepare() {
  return (
    <svg viewBox="0 0 96 84" className="h-full w-full" fill="none" aria-hidden="true">
      <path d="M10 22L42 8l32 14v38L42 74 10 60z" stroke={NAVY} {...sw} />
      <path d="M10 22l32 14 32-14M42 36v38" stroke={NAVY} {...sw} />
      <path
        d="M24 15l32 14v10L24 25z"
        stroke={ORANGE}
        fill="#FFD9BD"
        {...sw}
        strokeWidth={2.6}
      />
      <path
        d="M64 44l16-5 16 5v14c0 12-8 20-16 24-8-4-16-12-16-24z"
        transform="translate(-10 -8) scale(1)"
        fill="#fff"
        stroke={ORANGE}
        {...sw}
      />
      <path d="M62 62l7 7 13-14" stroke={ORANGE} {...sw} transform="translate(-0 -3)" />
    </svg>
  );
}

function IconTransport() {
  return (
    <svg viewBox="0 0 96 84" className="h-full w-full" fill="none" aria-hidden="true">
      <path d="M6 28h22M2 38h26M10 48h18" stroke={ORANGE} {...sw} />
      <path d="M32 18h34v38H32" stroke={NAVY} {...sw} />
      <path d="M66 28h12l10 12v16H66z" stroke={NAVY} {...sw} />
      <path d="M32 56h-2" stroke={NAVY} {...sw} />
      <circle cx="42" cy="60" r="7" fill="#fff" stroke={NAVY} {...sw} />
      <circle cx="76" cy="60" r="7" fill="#fff" stroke={NAVY} {...sw} />
      <path d="M49 58h20" stroke={NAVY} {...sw} />
    </svg>
  );
}

function IconDelivery() {
  return (
    <svg viewBox="0 0 96 84" className="h-full w-full" fill="none" aria-hidden="true">
      <path
        d="M8 44l30-12 30 12v24L38 80 8 68z"
        stroke={NAVY}
        {...sw}
        transform="translate(8 -4)"
      />
      <path d="M8 44l30 12 30-12M38 56v24" stroke={NAVY} {...sw} transform="translate(8 -4)" />
      <path
        d="M62 4c-10 0-17 7-17 16 0 12 17 28 17 28s17-16 17-28c0-9-7-16-17-16z"
        fill="#fff"
        stroke={ORANGE}
        {...sw}
      />
      <circle cx="62" cy="20" r="6" fill={ORANGE} />
    </svg>
  );
}

const stepIconMap = {
  book: IconBook,
  prepare: IconPrepare,
  track: IconTransport,
  delivery: IconDelivery,
};

export default function HowItWorks() {
  const processData =
    websiteData.categories.LogisticsCargo.sections.HowItWorks.variants
      .FreightHowItWorks1;
  const reduce = useReducedMotion();
  const { steps } = processData;

  return (
    <section
      id={processData.sectionId}
      className={`${font.className} relative overflow-hidden bg-gradient-to-b from-[#FBFCFE] to-[#F3F6FA] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(10,31,68,0.055) 1.2px, transparent 1.4px)",
            backgroundSize: "30px 30px",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 45%, #000 0%, transparent 70%)",
            maskImage: "radial-gradient(ellipse at 50% 45%, #000 0%, transparent 70%)",
          }}
        />
        <div className="absolute -left-32 top-1/3 h-[300px] w-[300px] rounded-full bg-[#FBE6D2]/55 blur-3xl" />
        <div className="absolute -right-28 bottom-0 h-[300px] w-[300px] rounded-full bg-[#DCE8F6]/60 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="text-center">
          <div className="mb-2.5 flex items-center justify-center gap-3 sm:gap-4">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ originX: 1, background: ORANGE }}
              className="h-[3px] w-8 rounded-full sm:w-[68px]"
            />
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.45em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.26em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              style={{ color: NAVY }}
              className="text-xs font-semibold uppercase sm:text-base"
            >
              {processData.badge}
            </motion.span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ originX: 0, background: ORANGE }}
              className="h-[3px] w-8 rounded-full sm:w-[68px]"
            />
          </div>

          <h2
            aria-label={processData.title.map((w) => w.t).join(" ")}
            className="text-[1.95rem] font-extrabold leading-[1.12] tracking-[-0.025em] sm:text-4xl lg:text-[clamp(2.3rem,3.6vw,3.4rem)]"
            style={{ color: NAVY }}
          >
            {processData.title.map((w, i) => (
              <span
                key={`${w.t}-${i}`}
                aria-hidden="true"
                className="mr-[0.24em] inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom last:mr-0"
              >
                <motion.span
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.15 + i * 0.09, ease: EASE }}
                  className="inline-block"
                  style={{ color: w.accent ? ORANGE : undefined }}
                >
                  {w.t}
                </motion.span>
              </span>
            ))}
          </h2>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:mt-9 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-0">
          {steps.map((s, i) => {
            const Icon = stepIconMap[s.icon] || IconBook;
            return (
              <React.Fragment key={s.title}>
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -5 }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.2 + i * 0.12 },
                    y: { type: "spring", stiffness: 260, damping: 22 },
                  }}
                  className="group relative flex min-w-0 flex-col items-center overflow-hidden rounded-[20px] border border-slate-200/80 bg-white px-4 pb-6 pt-6 text-center shadow-[0_12px_28px_-18px_rgba(10,31,68,0.32)] transition-shadow duration-500 hover:shadow-[0_22px_38px_-18px_rgba(10,31,68,0.42)] sm:px-5 sm:pb-7 sm:pt-7 lg:min-h-[340px]"
                >
                  <motion.div
                    animate={reduce ? undefined : { y: [0, -3, 0] }}
                    transition={{
                      duration: 3.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4,
                    }}
                    className="h-[72px] w-[84px] transition-transform duration-500 group-hover:scale-105 sm:h-[84px] sm:w-[98px]"
                  >
                    <Icon />
                  </motion.div>

                  <h3
                    className="mt-4 text-lg font-extrabold leading-snug sm:mt-5 sm:text-xl"
                    style={{ color: NAVY }}
                  >
                    {s.title}
                  </h3>

                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.12 }}
                    style={{ background: ORANGE }}
                    className="my-2.5 block h-[3px] w-12 rounded-full sm:my-3"
                  />

                  <p className="max-w-[250px] text-xs leading-[1.65] text-[#2D3748] sm:text-sm">
                    {s.description}
                  </p>

                  <motion.span
                    aria-hidden="true"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.45 + i * 0.12, ease: EASE }}
                    style={{ background: ORANGE, originX: 0 }}
                    className="absolute inset-x-0 bottom-0 h-[5px] rounded-b-[20px]"
                  />
                </motion.article>

                {i < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="relative hidden w-[64px] items-center justify-center lg:flex xl:w-[80px] lg:-translate-y-[12px]"
                  >
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.55 + i * 0.12 }}
                      className="absolute inset-x-0 h-px bg-slate-300/80"
                      style={{ originX: 0 }}
                    />
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 16,
                        delay: 0.7 + i * 0.12,
                      }}
                      className="relative grid h-10 w-10 place-items-center rounded-full text-white shadow-[0_8px_18px_-6px_rgba(242,106,13,0.7)]"
                      style={{ background: ORANGE }}
                    >
                      {!reduce && (
                        <motion.span
                          className="absolute inset-0 rounded-full border"
                          style={{ borderColor: ORANGE }}
                          initial={{ scale: 1, opacity: 0.6 }}
                          animate={{ scale: 1.6, opacity: 0 }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: i * 0.4,
                          }}
                        />
                      )}
                      <motion.svg
                        viewBox="0 0 24 24"
                        className="relative h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={reduce ? undefined : { x: [0, 2, 0] }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3,
                        }}
                      >
                        <path d="M9 6l6 6-6 6" />
                      </motion.svg>
                    </motion.span>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
