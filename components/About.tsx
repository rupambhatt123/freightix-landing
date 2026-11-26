"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import rawData from "@/data/websiteData.json";
import type { WebsiteData } from "@/types/website";

const websiteData = rawData as WebsiteData;

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const NAVY = "#0A1F44";
const ORANGE = "#D97A2B";
const TEXT_MUTED = "#4A5568";
const EASE = [0.22, 0.8, 0.2, 1] as const;

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, to, reduce]);

  return <span ref={ref}>{val}</span>;
}

function DottedMap() {
  return (
    <svg
      viewBox="0 0 200 100"
      className="h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern
          id="mapDots"
          width="3.2"
          height="3.2"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.6" cy="1.6" r="0.9" fill="#9AA7B8" />
        </pattern>
        <clipPath id="continents">
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
        fill="url(#mapDots)"
        clipPath="url(#continents)"
        opacity="0.7"
      />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-9 w-9 sm:h-14 sm:w-14 lg:h-[68px] lg:w-[68px]"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="30" cy="20" r="11" stroke={NAVY} strokeWidth="2.4" />
      <path
        d="M22 14c3 4 13 4 16 0"
        stroke={NAVY}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M9 56c0-11 8-18 21-18s21 7 21 18"
        stroke={NAVY}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect
        x="36"
        y="42"
        width="22"
        height="16"
        rx="2"
        fill="#fff"
        stroke={ORANGE}
        strokeWidth="2.4"
      />
      <path d="M36 48h22" stroke={ORANGE} strokeWidth="2.4" />
      <path d="M44 52h6" stroke={ORANGE} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function RevealImage({
  src,
  alt,
  className,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-5%", "5%"]
  );

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={`relative overflow-hidden bg-[#E8EDF3] ${className ?? ""}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y: imgY }}
        className="absolute inset-x-0 -top-[6%] h-[112%] w-full object-cover object-top"
      />
    </motion.div>
  );
}

export default function AboutSection() {
  const aboutData =
    websiteData.categories.LogisticsCargo.sections.About.variants
      .FreightAbout1;
  const reduce = useReducedMotion();
  let wordIndex = 0;

  return (
    <section
      id={aboutData.sectionId}
      className={`${font.className} relative overflow-hidden bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(10,31,68,0.07) 1.2px, transparent 1.4px)",
            backgroundSize: "28px 28px",
            WebkitMaskImage:
              "radial-gradient(ellipse at 30% 40%, #000 0%, transparent 70%)",
            maskImage:
              "radial-gradient(ellipse at 30% 40%, #000 0%, transparent 70%)",
          }}
        />
        <div className="absolute -left-40 top-6 h-[320px] w-[320px] rounded-full bg-[#FBE6D2]/55 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full bg-[#DCE8F6]/55 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1320px] grid-cols-1 gap-6 lg:grid-cols-[43.5fr_56.5fr] lg:items-center lg:gap-0">
        <div className="min-w-0 lg:pr-4">
          <div className="mb-3 flex items-center gap-2.5 sm:mb-6 sm:gap-6">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ originX: 0, background: ORANGE }}
              className="h-[3px] w-7 rounded-full sm:w-[64px]"
            />
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ color: TEXT_MUTED }}
              className="text-[11px] font-semibold uppercase sm:text-[13px] sm:tracking-[0.3em]"
            >
              {aboutData.badge}
            </motion.span>
          </div>

          <h2
            aria-label={aboutData.headlineLines
              .map((l) => l.map((w) => w.t).join(" "))
              .join(" ")}
            className="text-[1.45rem] font-bold leading-[1.15] tracking-[-0.025em] sm:text-[2.45rem] lg:text-[clamp(2.1rem,3.4vw,3.25rem)]"
            style={{ color: NAVY }}
          >
            {aboutData.headlineLines.map((line, li) => (
              <span key={li} className="block whitespace-nowrap" aria-hidden="true">
                {line.map((w) => {
                  const i = wordIndex++;
                  return (
                    <span
                      key={`${w.t}-${i}`}
                      className="mr-[0.22em] inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom last:mr-0"
                    >
                      <motion.span
                        initial={{ y: "110%" }}
                        whileInView={{ y: "0%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.65,
                          delay: 0.12 + i * 0.06,
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
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.55, ease: EASE }}
            className="mt-3.5 max-w-[540px] text-sm leading-[1.6] sm:mt-6 sm:text-base lg:text-[17px]"
            style={{ color: TEXT_MUTED }}
          >
            {aboutData.description}
          </motion.p>

          <div className="mt-5 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <ul className="space-y-2.5 sm:space-y-4">
              {aboutData.points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.75 + i * 0.1,
                    ease: EASE,
                  }}
                  className="flex items-center gap-2.5 text-sm font-semibold sm:gap-3 sm:text-[16px] lg:text-[17px]"
                  style={{ color: NAVY }}
                >
                  <span
                    className="grid h-5 w-5 shrink-0 place-items-center rounded-full sm:h-7 sm:w-7"
                    style={{ background: ORANGE }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <motion.path
                        d="M5 12.5l4.5 4.5L19 7.5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                      />
                    </svg>
                  </span>
                  <span>{p}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href={aboutData.teamHref}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.55, delay: 0.9, ease: EASE }}
              className="group flex w-full shrink-0 flex-row items-center justify-center gap-3 rounded-lg border-[1.5px] bg-[#FFFDFB] px-4 py-3 text-center shadow-[0_10px_24px_-12px_rgba(217,122,43,0.4)] transition-shadow hover:shadow-[0_16px_32px_-12px_rgba(217,122,43,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:h-[180px] sm:w-[190px] sm:flex-col sm:gap-2 sm:py-0"
              style={{ borderColor: ORANGE, outlineColor: ORANGE }}
            >
              <motion.span
                animate={reduce ? undefined : { y: [0, -3, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="shrink-0"
              >
                <TeamIcon />
              </motion.span>
              <span
                className="text-sm font-semibold leading-snug sm:text-lg"
                style={{ color: NAVY }}
              >
                {aboutData.teamLabel}
              </span>
            </motion.a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-[406fr_450fr] sm:gap-5 lg:gap-6 lg:pl-[84px]">
          <div className="flex flex-col gap-3 sm:gap-5 lg:gap-6">
            <div className="relative">
              <motion.div
                aria-hidden="true"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.5, ease: EASE }}
                style={{ originX: 1, originY: 1, background: ORANGE }}
                className="absolute -left-2.5 bottom-0 z-0 h-10 w-10 rounded-tl-full sm:-left-8 sm:h-24 sm:w-24 lg:-left-[84px] lg:h-[94px] lg:w-[84px]"
              />
              <RevealImage
                src={aboutData.imageA}
                alt={aboutData.imageAAlt}
                className="relative z-10 aspect-[4/4] w-full sm:aspect-[406/425]"
                delay={0.15}
              />
            </div>

            <div className="relative flex flex-1 items-center gap-2 sm:gap-4 lg:-ml-[66px]">
              <motion.span
                aria-hidden="true"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.8 }}
                className="hidden h-[150px] w-px shrink-0 bg-[#C9D1DC] sm:block"
              />
              <div className="relative flex min-h-[100px] w-full flex-1 items-center justify-center sm:min-h-[170px]">
                <motion.div
                  className="pointer-events-none absolute inset-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                >
                  <DottedMap />
                </motion.div>
                <div className="relative z-10 text-center">
                  <div
                    className="flex items-start justify-center font-extrabold leading-none"
                    style={{ color: ORANGE }}
                  >
                    <span className="text-3xl sm:text-7xl xl:text-[88px]">
                      <CountUp to={aboutData.statValue} />
                    </span>
                    <span className="mt-0.5 text-lg sm:text-4xl">
                      {aboutData.statSuffix}
                    </span>
                  </div>
                  <p
                    className="mt-1 text-[11px] font-semibold sm:text-xl"
                    style={{ color: NAVY }}
                  >
                    {aboutData.statLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <RevealImage
              src={aboutData.imageB}
              alt={aboutData.imageBAlt}
              className="aspect-[4/5.2] w-full sm:aspect-auto sm:h-full sm:min-h-[560px] lg:aspect-[450/733]"
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
