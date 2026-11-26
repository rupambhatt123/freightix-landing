"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import rawData from "@/data/websiteData.json";
import type { WebsiteData, TestimonialSlideItem } from "@/types/website";

const websiteData = rawData as WebsiteData;

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const NAVY = "#0A1F44";
const ORANGE = "#F26A0D";
const EASE = [0.22, 0.8, 0.2, 1] as const;

function QuoteMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 46" className={className} fill={ORANGE} aria-hidden="true">
      <g transform="rotate(180 32 23)">
        <path d="M2 24C2 10 10 2 24 0v9c-6 2-9 6-9 10h9v27H2z" />
        <path d="M36 24C36 10 44 2 58 0v9c-6 2-9 6-9 10h9v27H36z" />
      </g>
    </svg>
  );
}

function Card({
  item,
  active,
  onSelect,
}: {
  item: TestimonialSlideItem;
  active: boolean;
  onSelect?: () => void;
}) {
  return (
    <article
      onClick={onSelect}
      className={`group relative flex h-full cursor-pointer flex-col rounded-[18px] border bg-white px-5 pb-5 pt-5 transition-all duration-300 sm:px-6 sm:pb-6 sm:pt-6 ${
        active
          ? "border-[#F4C9A8] shadow-[0_18px_36px_-20px_rgba(242,106,13,0.4)]"
          : "border-slate-200/80 shadow-[0_10px_24px_-18px_rgba(10,31,68,0.28)] hover:shadow-[0_16px_32px_-20px_rgba(10,31,68,0.36)]"
      }`}
    >
      <motion.div
        animate={{ scale: active ? 1.05 : 1, rotate: active ? -3 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="origin-left"
      >
        <QuoteMark className="h-7 w-10 sm:h-8 sm:w-12" />
      </motion.div>

      <p className="mt-3 flex-1 text-sm italic leading-[1.6] text-[#1F2937] sm:text-base">
        &ldquo;{item.quote}&rdquo;
      </p>

      <span
        className="my-3.5 block h-[3px] rounded-full transition-all duration-300"
        style={{ background: ORANGE, width: active ? 60 : 40 }}
      />

      <h3
        className="text-base font-extrabold leading-snug sm:text-lg"
        style={{ color: NAVY }}
      >
        {item.name}
      </h3>
      <p className="mt-0.5 text-xs text-[#374151] sm:text-sm">{item.role}</p>
    </article>
  );
}

export default function Testimonials() {
  const testimonialsData =
    websiteData.categories.LogisticsCargo.sections.Testimonials.variants
      .FreightTestimonials1;
  const reduce = useReducedMotion();
  const { testimonials } = testimonialsData;
  const total = testimonials.length;

  const [active, setActive] = useState(
    Math.min(testimonialsData.defaultActiveIndex || 0, Math.max(total - 1, 0))
  );
  const [dir, setDir] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);

  const go = (nextIndex: number, d: 1 | -1) => {
    setDir(d);
    setActive((nextIndex + total) % total);
  };
  const prev = () => go(active - 1, -1);
  const next = () => go(active + 1, 1);

  useEffect(() => {
    if (paused || reduce || total <= 1) return;
    const id = setTimeout(() => {
      setDir(1);
      setActive((i) => (i + 1) % total);
    }, testimonialsData.autoplayMs);
    return () => clearTimeout(id);
  }, [active, paused, reduce, total, testimonialsData.autoplayMs]);

  const desktopCount = Math.min(3, total);
  const visibleDesktop = Array.from({ length: desktopCount }, (_, offset) => {
    const idx = (active + offset) % total;
    return { item: testimonials[idx], idx, isFront: offset === 0 };
  });

  return (
    <section
      id={testimonialsData.sectionId}
      className={`${font.className} relative overflow-hidden bg-gradient-to-b from-white via-[#FBFCFE] to-[#F3F6FA] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(10,31,68,0.055) 1.2px, transparent 1.4px)",
            backgroundSize: "28px 28px",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 50%, #000 0%, transparent 70%)",
            maskImage:
              "radial-gradient(ellipse at 50% 50%, #000 0%, transparent 70%)",
          }}
        />
        <div className="absolute -left-32 top-1/4 h-[260px] w-[260px] rounded-full bg-[#DCE8F6]/60 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[280px] w-[280px] rounded-full bg-[#FBE6D2]/60 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 1.2 }}
          className="absolute left-[6%] top-[10%] hidden h-[160px] w-[220px] lg:block"
        >
          <QuoteMark className="h-full w-full" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px]">
        <div className="text-center">
          <div className="mb-2 flex items-center justify-center gap-3 sm:gap-4">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ originX: 1, background: ORANGE }}
              className="h-[3px] w-8 rounded-full sm:w-[68px]"
            />
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.45em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.28em" }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              style={{ color: NAVY }}
              className="text-xs font-bold uppercase sm:text-base"
            >
              {testimonialsData.badge}
            </motion.span>
          </div>

          <h2
            aria-label={testimonialsData.title.map((w) => w.t).join(" ")}
            className="text-[1.95rem] font-extrabold leading-[1.12] tracking-[-0.025em] sm:text-4xl lg:text-[clamp(2.2rem,3.5vw,3.35rem)]"
            style={{ color: NAVY }}
          >
            {testimonialsData.title.map((w, i) => (
              <span
                key={`${w.t}-${i}`}
                aria-hidden="true"
                className="mr-[0.24em] inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom last:mr-0"
              >
                <motion.span
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, amount: "some" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.12 + i * 0.08,
                    ease: EASE,
                  }}
                  className="inline-block"
                  style={{ color: w.accent ? ORANGE : undefined }}
                >
                  {w.t}
                </motion.span>
              </span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.65, delay: 0.45, ease: EASE }}
            className="mx-auto mt-2.5 max-w-[760px] text-xs text-[#374151] sm:mt-3 sm:text-base"
          >
            {testimonialsData.description}
          </motion.p>
        </div>

        <div
          className="mt-6 sm:mt-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="flex items-center gap-3 lg:gap-5">
            <motion.button
              type="button"
              onClick={prev}
              aria-label={testimonialsData.prevAriaLabel}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-200 bg-[#F3F4F6] text-[#0A1F44] shadow-sm transition-colors hover:border-[#F26A0D] hover:text-[#F26A0D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F26A0D] md:grid cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2.6} />
            </motion.button>

            <div className="hidden min-w-0 flex-1 grid-cols-3 gap-4 md:grid lg:gap-6">
              {visibleDesktop.map(({ item, idx, isFront }, slot) => (
                <motion.div
                  key={`${item.name}-${idx}-${slot}`}
                  initial={{ opacity: 0.75, x: dir * 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  whileHover={{ y: -4 }}
                  className="min-w-0"
                >
                  <Card
                    item={item}
                    active={isFront}
                    onSelect={() => go(idx, slot === 0 ? 1 : -1)}
                  />
                </motion.div>
              ))}
            </div>

            <div className="mx-auto w-full max-w-[360px] min-w-0 flex-1 overflow-hidden md:hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${testimonials[active].name}-${active}`}
                  initial={{ opacity: 0, x: dir * 36 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -dir * 36 }}
                  transition={{ duration: 0.32, ease: EASE }}
                >
                  <Card item={testimonials[active]} active />
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button
              type="button"
              onClick={next}
              aria-label={testimonialsData.nextAriaLabel}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="hidden h-11 w-11 shrink-0 place-items-center rounded-full text-white shadow-[0_10px_22px_-8px_rgba(242,106,13,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F26A0D] md:grid cursor-pointer"
              style={{ background: ORANGE }}
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2.6} />
            </motion.button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-4 sm:mt-6">
            <button
              type="button"
              onClick={prev}
              aria-label={testimonialsData.prevAriaLabel}
              className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-[#F3F4F6] text-[#0A1F44] md:hidden cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={2.6} />
            </button>

            <div className="flex items-center gap-2.5">
              {testimonials.map((t, i) => (
                <button
                  key={`${t.name}-${i}`}
                  type="button"
                  onClick={() => go(i, i > active ? 1 : -1)}
                  aria-label={`${testimonialsData.dotAriaLabelPrefix} ${i + 1}`}
                  aria-current={i === active}
                  className="grid h-4 w-4 place-items-center cursor-pointer"
                >
                  <motion.span
                    animate={{
                      scale: i === active ? 1.15 : 1,
                      backgroundColor: i === active ? ORANGE : "#C4C8CF",
                    }}
                    transition={{ duration: 0.25 }}
                    className="block h-2.5 w-2.5 rounded-full"
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label={testimonialsData.nextAriaLabel}
              className="grid h-9 w-9 place-items-center rounded-full text-white md:hidden cursor-pointer"
              style={{ background: ORANGE }}
            >
              <ChevronRight className="h-4 w-4" strokeWidth={2.6} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

