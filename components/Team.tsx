"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import rawData from "@/data/websiteData.json";
import type { WebsiteData } from "@/types/website";

const websiteData = rawData as WebsiteData;

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const NAVY = "#0A1F44";
const ORANGE = "#D9772B";
const EASE = [0.22, 0.8, 0.2, 1] as const;

function Cranes() {
  const c = "#8FA9C9";
  return (
    <svg viewBox="0 0 520 260" className="h-full w-full" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="craneFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="75%" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="craneMask">
          <rect width="520" height="260" fill="url(#craneFade)" />
        </mask>
      </defs>
      <g mask="url(#craneMask)" stroke={c} strokeLinecap="round" strokeLinejoin="round">
        <g strokeWidth="3">
          <path d="M330 20 V250 M350 20 V250 M330 90 H350 M330 150 H350" />
          <path d="M80 100 L340 28 L500 62" />
          <path d="M80 100 H500" />
          <path d="M340 28 L460 100 M340 28 L400 100 M340 28 L290 100" strokeWidth="1.8" />
          <path d="M250 100 V135 H300 V100" />
          <rect x="410" y="38" width="40" height="22" />
        </g>
        <g strokeWidth="2.4" opacity="0.8">
          <path d="M150 110 V250 M166 110 V250 M150 170 H166" />
          <path d="M20 150 L158 112 L250 135" />
          <path d="M158 112 L220 150 M158 112 L100 150" strokeWidth="1.5" />
        </g>
        <g strokeWidth="2" opacity="0.55">
          <path d="M0 232 H520 M30 232 V215 H80 V232 M110 232 V208 H170 V232 M380 232 V212 H440 V232 M460 232 V220 H510 V232" />
        </g>
      </g>
    </svg>
  );
}

export default function Team() {
  const teamData =
    websiteData.categories.LogisticsCargo.sections.Team.variants.FreightTeam1;
  const reduce = useReducedMotion();
  const members = teamData.members;

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = members.length;
  const currentMember = members[activeIndex];

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % total);
  };

  return (
    <section
      id={teamData.sectionId}
      className={`${font.className} relative overflow-hidden bg-gradient-to-b from-white via-[#FBFCFE] to-[#F3F6FA] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(10,31,68,0.06) 1.2px, transparent 1.4px)",
            backgroundSize: "28px 28px",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 20%, #000 0%, transparent 65%)",
            maskImage: "radial-gradient(ellipse at 50% 20%, #000 0%, transparent 65%)",
          }}
        />
        <div className="absolute -left-32 top-6 h-[260px] w-[260px] rounded-full bg-[#FBE6D2]/55 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[280px] w-[280px] rounded-full bg-[#DCE8F6]/60 blur-3xl" />

        <motion.div
          initial={{ opacity: 0.45, x: 0 }}
          animate={reduce ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-24 top-0 hidden h-[220px] w-[460px] sm:block lg:-right-6"
        >
          <Cranes />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mx-auto max-w-[820px] text-center">
          <div className="mb-2 flex items-center justify-center gap-3 sm:gap-4">
            <span
              style={{ background: ORANGE }}
              className="h-[3px] w-10 rounded-full sm:w-[72px]"
            />
            <span
              style={{ color: NAVY }}
              className="text-[11px] font-semibold uppercase tracking-[0.25em] sm:text-xs"
            >
              {teamData.badge}
            </span>
          </div>

          <h2
            className="text-[1.95rem] font-extrabold leading-[1.12] tracking-[-0.025em] sm:text-4xl lg:text-[clamp(2.2rem,3.4vw,3.25rem)]"
            style={{ color: NAVY }}
          >
            {teamData.title.map((w, i) => (
              <span
                key={`${w.t}-${i}`}
                className="mr-[0.24em] inline-block last:mr-0"
                style={{ color: w.accent ? ORANGE : undefined }}
              >
                {w.t}
              </span>
            ))}
          </h2>

          <p className="mx-auto mt-2.5 max-w-[700px] text-xs leading-[1.65] text-[#4A5568] sm:mt-3 sm:text-sm lg:text-base">
            {teamData.description}
          </p>
        </div>

        {/* Phone View: 1 Card Carousel */}
        <div className="mt-6 sm:hidden">
          <div className="relative mx-auto max-w-[330px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={`${currentMember.name}-${activeIndex}`}
                initial={{ opacity: 0, x: direction * 36 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -36 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="overflow-hidden bg-white shadow-[0_12px_28px_-16px_rgba(10,31,68,0.35)]"
              >
                <div className="relative aspect-[409/395] w-full overflow-hidden bg-[#DCE4EE]">
                  <img
                    src={currentMember.image}
                    alt={`${currentMember.name}, ${currentMember.role}`}
                    className="h-full w-full object-cover object-top"
                  />
                  <span
                    className="absolute bottom-0 left-0 h-[3px] w-full"
                    style={{ background: ORANGE }}
                  />
                </div>

                <div className="flex items-center gap-3 px-4 py-3.5">
                  <span
                    style={{ background: ORANGE }}
                    className="h-9 w-[3px] shrink-0"
                  />
                  <div className="min-w-0">
                    <h3
                      className="truncate text-base font-extrabold leading-snug"
                      style={{ color: NAVY }}
                    >
                      {currentMember.name}
                    </h3>
                    <p className="truncate text-xs text-[#4A5568]">
                      {currentMember.role}
                    </p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="mt-3.5 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous team member"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#CBD5E1] bg-white text-[#0A1F44] shadow-sm transition-colors hover:border-[#D9772B] hover:text-[#D9772B]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {members.map((m, idx) => (
                  <button
                    key={m.name}
                    type="button"
                    onClick={() => {
                      setDirection(idx > activeIndex ? 1 : -1);
                      setActiveIndex(idx);
                    }}
                    aria-label={`View ${m.name}`}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeIndex
                        ? "w-5 bg-[#D9772B]"
                        : "w-2 bg-[#CBD5E1]"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next team member"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#CBD5E1] bg-white text-[#0A1F44] shadow-sm transition-colors hover:border-[#D9772B] hover:text-[#D9772B]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tablet & Desktop View: 4 Cards Grid without bottom arrows */}
        <div className="mt-7 hidden sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {members.map((m) => (
            <motion.article
              key={m.name}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group bg-white shadow-[0_12px_28px_-16px_rgba(10,31,68,0.32)] transition-shadow duration-300 hover:shadow-[0_22px_40px_-16px_rgba(10,31,68,0.42)]"
            >
              <div className="relative aspect-[409/395] w-full overflow-hidden bg-[#DCE4EE]">
                <img
                  src={m.image}
                  alt={`${m.name}, ${m.role}`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                />
                <span
                  className="absolute bottom-0 left-0 h-[3.5px] w-0 transition-all duration-300 group-hover:w-full"
                  style={{ background: ORANGE }}
                />
              </div>

              <div className="flex items-center gap-3.5 px-5 py-4">
                <span
                  style={{ background: ORANGE }}
                  className="h-10 w-[3px] shrink-0"
                />
                <div className="min-w-0">
                  <h3
                    className="truncate text-base font-extrabold leading-snug lg:text-lg"
                    style={{ color: NAVY }}
                  >
                    {m.name}
                  </h3>
                  <p className="truncate text-xs text-[#4A5568] lg:text-sm">
                    {m.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}