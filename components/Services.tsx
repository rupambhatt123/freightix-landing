"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container, Plane, Warehouse, Truck, TrainFront } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import rawData from "@/data/websiteData.json";
import type { WebsiteData } from "@/types/website";

const websiteData = rawData as WebsiteData;

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const NAVY = "#0A1F44";
const NAVY_CARD = "#0A2F4D";
const ORANGE = "#E8740C";
const EASE = [0.22, 0.8, 0.2, 1] as const;

const serviceIconMap = {
  shipping: Container,
  air: Plane,
  warehousing: Warehouse,
  transportation: Truck,
  rail: TrainFront,
};

export default function ServicesSection() {
  const servicesData =
    websiteData.categories.LogisticsCargo.sections.Services.variants
      .FreightServices1;

  const reduce = useReducedMotion();
  const { services } = servicesData;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reduce) return;
    const id = setTimeout(
      () => setActive((i) => (i + 1) % services.length),
      servicesData.autoplayMs
    );
    return () => clearTimeout(id);
  }, [active, paused, reduce, services.length, servicesData.autoplayMs]);

  let wordIndex = 0;

  return (
    <section
      id={servicesData.sectionId}
      className={`${font.className} relative overflow-hidden bg-gradient-to-b from-white via-[#FBFCFE] to-[#F2F6FB] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-24 h-[300px] w-[300px] rounded-full bg-[#FBE6D2]/60 blur-3xl" />
        <motion.svg
          viewBox="0 0 400 400"
          className="absolute -bottom-40 -left-32 h-[320px] w-[320px] sm:-bottom-28 sm:-left-24 sm:h-[420px] sm:w-[420px]"
          initial={{ opacity: 0, rotate: -8 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          fill="none"
        >
          <defs>
            <pattern
              id="globeDots"
              width="9"
              height="9"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="4.5" cy="4.5" r="1.6" fill="#9AA7B8" />
            </pattern>
            <radialGradient id="globeFade" cx="0.5" cy="0.5" r="0.5">
              <stop offset="55%" stopColor="#fff" stopOpacity="1" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.15" />
            </radialGradient>
            <mask id="globeMask">
              <circle cx="200" cy="200" r="190" fill="url(#globeFade)" />
            </mask>
          </defs>
          <g mask="url(#globeMask)" opacity="0.45">
            <circle cx="200" cy="200" r="190" fill="url(#globeDots)" />
          </g>
          <circle
            cx="200"
            cy="200"
            r="190"
            stroke="#C9D1DC"
            strokeOpacity="0.6"
          />
        </motion.svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-8 xl:grid-cols-[minmax(0,3.5fr)_minmax(0,5fr)_minmax(0,3.5fr)] xl:gap-8">
        <div className="min-w-0 lg:col-span-2 xl:col-span-1">
          <div className="mb-3 flex items-center gap-3 sm:gap-4">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ originX: 0, background: ORANGE }}
              className="h-[3px] w-10 rounded-full sm:w-[60px]"
            />
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.4em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.24em" }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ color: NAVY }}
              className="text-[11px] font-semibold uppercase sm:text-xs"
            >
              {servicesData.badge}
            </motion.span>
          </div>

          <h2
            aria-label={servicesData.titleLines
              .map((l) => l.map((w) => w.t).join(" "))
              .join(" ")}
            className="text-[2rem] font-extrabold leading-[1.1] tracking-[-0.025em] sm:text-4xl xl:text-[clamp(2rem,2.6vw,3rem)]"
            style={{ color: NAVY }}
          >
            {servicesData.titleLines.map((line, li) => (
              <span key={li} className="block" aria-hidden="true">
                {line.map((w) => {
                  const i = wordIndex++;
                  return (
                    <span
                      key={`${w.t}-${i}`}
                      className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom"
                    >
                      <motion.span
                        initial={{ y: "110%" }}
                        whileInView={{ y: "0%" }}
                        viewport={{ once: true, amount: "some" }}
                        transition={{
                          duration: 0.7,
                          delay: 0.12 + i * 0.1,
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
            transition={{ duration: 0.65, delay: 0.45, ease: EASE }}
            className="mt-3.5 max-w-[340px] text-sm leading-[1.65] text-[#4A5568] sm:mt-4 sm:text-[15px]"
          >
            {servicesData.description}
          </motion.p>
        </div>

        <div
          className="min-w-0 lg:col-span-1"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <ul className="bg-white/75 shadow-[0_14px_32px_-24px_rgba(10,31,68,0.4)] backdrop-blur-sm">
            {services.map((s, i) => {
              const Icon = serviceIconMap[s.icon] || Container;
              const isActive = i === active;
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: "some" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.15 + i * 0.08,
                    ease: EASE,
                  }}
                  className={
                    isActive
                      ? ""
                      : "mx-0 border-b border-[#D6DCE5] last:border-b-0 sm:mx-4"
                  }
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`group relative block w-full overflow-hidden text-left transition-colors duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#E8740C] ${
                      isActive ? "border-l-[6px] border-l-[#E8740C]" : ""
                    }`}
                    style={{
                      background: isActive ? NAVY_CARD : "transparent",
                    }}
                  >
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          aria-hidden="true"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="pointer-events-none absolute inset-y-0 right-0 w-[45%]"
                          style={{
                            backgroundImage: `url('${s.image}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            opacity: 0.22,
                            WebkitMaskImage:
                              "linear-gradient(115deg, transparent 20%, #000 80%)",
                            maskImage:
                              "linear-gradient(115deg, transparent 20%, #000 80%)",
                          }}
                        />
                      )}
                    </AnimatePresence>

                    <div
                      className={`relative flex items-center gap-3 px-3.5 sm:gap-4 sm:px-5 ${
                        isActive ? "py-4 sm:py-5" : "py-3 sm:py-3.5"
                      } transition-[padding] duration-500`}
                    >
                      <motion.span
                        animate={{ scale: isActive ? 1.06 : 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 18,
                        }}
                        className="grid h-10 w-10 shrink-0 place-items-center sm:h-12 sm:w-12"
                      >
                        <Icon
                          className="h-7 w-7 transition-colors duration-500 sm:h-9 sm:w-9 group-hover:-rotate-6"
                          strokeWidth={1.6}
                          style={{ color: isActive ? "#fff" : NAVY }}
                        />
                      </motion.span>

                      <span
                        aria-hidden="true"
                        className="h-10 w-px shrink-0 transition-colors duration-500 sm:h-12"
                        style={{
                          background: isActive
                            ? "rgba(255,255,255,0.25)"
                            : "#C9D1DC",
                        }}
                      />

                      <span className="min-w-0 flex-1">
                        <span
                          className="block text-base font-bold leading-snug transition-colors duration-500 sm:text-lg"
                          style={{ color: isActive ? "#fff" : NAVY }}
                        >
                          {s.title}
                        </span>
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.span
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: EASE }}
                              className="block overflow-hidden"
                            >
                              <span className="mt-1.5 block max-w-[300px] text-xs leading-relaxed text-white/80 sm:text-sm">
                                {s.text}
                              </span>
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </span>
                    </div>

                    {isActive && !reduce && (
                      <motion.span
                        key={`bar-${active}-${paused}`}
                        aria-hidden="true"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: paused ? 0 : 1 }}
                        transition={{
                          duration: paused ? 0 : servicesData.autoplayMs / 1000,
                          ease: "linear",
                        }}
                        style={{ originX: 0, background: ORANGE }}
                        className="absolute bottom-0 left-0 h-[3px] w-full"
                      />
                    )}
                  </button>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="relative h-[240px] w-full min-w-0 overflow-hidden bg-[#E8EDF3] shadow-[0_16px_36px_-20px_rgba(10,31,68,0.45)] sm:h-[320px] lg:col-span-1 lg:h-[460px]"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={services[active].image}
              src={services[active].image}
              alt={services[active].title}
              initial={{ opacity: 0.35, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.25 }}
              transition={{
                opacity: { duration: 0.45, ease: "easeInOut" },
                scale: { duration: 0.9, ease: "easeOut" },
              }}
              className="h-full w-full object-cover object-center"
            />
          </AnimatePresence>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,31,68,0) 55%, rgba(10,31,68,0.35) 100%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

