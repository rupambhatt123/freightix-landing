"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, ShieldCheck, Headphones, Layers, Truck } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import rawData from "@/data/websiteData.json";
import type { WebsiteData } from "@/types/website";

const websiteData = rawData as WebsiteData;

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const NAVY = "#0A1F44";
const CARD = "#123A5C";
const ORANGE = "#D9772B";
const EASE = [0.22, 0.8, 0.2, 1] as const;

const featureIconMap = {
  tracking: MapPin,
  safety: ShieldCheck,
  support: Headphones,
  flexible: Layers,
};

function DottedMap() {
  return (
    <svg viewBox="0 0 200 100" className="h-full w-full" aria-hidden="true">
      <defs>
        <pattern
          id="wcuDots"
          width="3.4"
          height="3.4"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.7" cy="1.7" r="0.95" fill="#8F9DB0" />
        </pattern>
        <clipPath id="wcuLand">
          <path d="M10 15 L45 8 L60 15 L58 30 L48 42 L40 50 L30 40 L18 32 Z" />
          <path d="M62 6 L76 5 L74 16 L66 16 Z" />
          <path d="M42 55 L55 52 L62 62 L55 82 L48 90 L44 75 Z" />
          <path d="M92 16 L108 12 L112 24 L100 30 L90 26 Z" />
          <path d="M92 34 L112 32 L122 48 L112 74 L102 72 L94 52 Z" />
          <path d="M112 12 L165 10 L178 28 L160 44 L140 48 L125 38 L114 26 Z" />
          <path d="M140 46 L152 50 L146 66 Z" />
          <path d="M158 66 L180 64 L184 80 L164 82 Z" />
        </clipPath>
      </defs>
      <rect
        width="200"
        height="100"
        fill="url(#wcuDots)"
        clipPath="url(#wcuLand)"
      />
    </svg>
  );
}

export default function WhyChooseUs() {
  const whyData =
    websiteData.categories.LogisticsCargo.sections.WhyChooseUs.variants
      .FreightWhyChoose1;
  const reduce = useReducedMotion();
  let wordIndex = 0;

  return (
    <section
      id={whyData.sectionId}
      className={`${font.className} relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(10,31,68,0.06) 1.2px, transparent 1.4px)",
            backgroundSize: "30px 30px",
            WebkitMaskImage:
              "radial-gradient(ellipse at 70% 40%, #000 0%, transparent 70%)",
            maskImage:
              "radial-gradient(ellipse at 70% 40%, #000 0%, transparent 70%)",
          }}
        />
        <div className="absolute -left-40 bottom-0 h-[340px] w-[340px] rounded-full bg-[#DCE8F6]/60 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-[#FBE6D2]/50 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 0.55, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -right-24 -top-6 hidden h-[300px] w-[600px] sm:block lg:-right-10 lg:top-2"
        >
          <motion.div
            animate={reduce ? undefined : { x: [0, -10, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-full"
          >
            <DottedMap />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-6">
          <div className="relative pb-[3%] pr-[3%]">
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, x: 24, y: 24 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
              className="absolute bottom-0 right-0 h-[21%] w-[33%]"
              style={{ background: ORANGE }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative aspect-[829/755] w-full overflow-hidden bg-[#DCE4EE] shadow-[0_20px_44px_-24px_rgba(10,31,68,0.55)]"
              style={{ containerType: "inline-size" }}
            >
              <motion.img
                src={whyData.image}
                alt={whyData.imageAlt}
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="absolute inset-0 z-0 h-full w-full object-cover"
              />

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
                className="absolute z-10 flex flex-col justify-center"
                style={{
                  left: "2.6%",
                  top: "39.9%",
                  width: "61.6%",
                  height: "57.8%",
                  background: CARD,
                  padding: "0 7.4%",
                }}
              >
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  style={{
                    originX: 0,
                    background: ORANGE,
                    height: 3,
                    width: "17%",
                  }}
                  className="mb-[4cqw]"
                />
                <h3
                  className="font-extrabold leading-[1.15] tracking-[-0.02em] text-white"
                  style={{ fontSize: "clamp(15px, 5.1cqw, 44px)" }}
                >
                  {whyData.cardTitle[0]}
                  <br />
                  <span style={{ color: ORANGE }}>{whyData.cardTitle[1]}</span>
                </h3>
                <p
                  className="mt-[2.6cqw] leading-[1.6] text-white/90"
                  style={{ fontSize: "clamp(10.5px, 2.65cqw, 22px)" }}
                >
                  {whyData.cardText}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-6">
          <div className="mb-5 flex items-center gap-4 sm:gap-5">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ originX: 0, background: ORANGE }}
              className="h-[3px] w-12 rounded-full sm:w-[70px]"
            />
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.26em" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={{ color: NAVY }}
              className="text-xs font-semibold sm:text-sm"
            >
              {whyData.badge}
            </motion.span>
          </div>

          <h2
            aria-label={whyData.titleLines
              .map((l) => l.map((w) => w.t).join(" "))
              .join(" ")}
            className="text-[2.3rem] font-extrabold leading-[1.15] tracking-[-0.025em] sm:text-5xl xl:text-[clamp(2.6rem,3.6vw,3.6rem)]"
            style={{ color: NAVY }}
          >
            {whyData.titleLines.map((line, li) => (
              <span key={li} className="block" aria-hidden="true">
                {line.map((w) => {
                  const i = wordIndex++;
                  return (
                    <span
                      key={w.t}
                      className="mr-[0.24em] inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom last:mr-0"
                    >
                      <motion.span
                        initial={{ y: "110%" }}
                        animate={{ y: "0%" }}
                        transition={{
                          duration: 0.75,
                          delay: 0.15 + i * 0.12,
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

          <div className="relative mt-5 flex h-8 items-center">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
              style={{ originX: 0, background: ORANGE }}
              className="ml-10 h-[2px] w-[min(260px,55%)]"
            />
            <motion.span
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
              className="absolute left-0 top-1/2 -translate-y-1/2"
            >
              <motion.span
                animate={reduce ? undefined : { y: [0, -1.5, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="block"
              >
                <Truck
                  className="h-7 w-7"
                  strokeWidth={1.7}
                  style={{ color: ORANGE }}
                />
              </motion.span>
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
            className="mt-4 max-w-[640px] text-base leading-[1.75] text-[#4A5568] sm:text-lg"
          >
            {whyData.description}
          </motion.p>

          <div className="mt-9 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
            {whyData.features.map((f, i) => {
              const Icon = featureIconMap[f.icon] || MapPin;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.55 + i * 0.1,
                    ease: EASE,
                  }}
                  className="group flex items-start gap-4"
                >
                  <span className="grid h-[60px] w-[60px] shrink-0 place-items-center rounded-xl bg-[#F1F3F6] transition-colors duration-300 group-hover:bg-[#FBE6D2]">
                    <Icon
                      className="h-7 w-7 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-110"
                      strokeWidth={1.6}
                      style={{ color: ORANGE }}
                    />
                  </span>
                  <motion.span
                    aria-hidden="true"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                    className="mt-1 h-[56px] w-px shrink-0 bg-[#CBD2DC]"
                  />
                  <div className="min-w-0">
                    <h3
                      className="text-lg font-bold leading-snug sm:text-xl"
                      style={{ color: NAVY }}
                    >
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#4A5568] sm:text-[15px]">
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
