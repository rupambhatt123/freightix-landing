"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import rawData from "@/data/websiteData.json";
import type { WebsiteData } from "@/types/website";

const websiteData = rawData as WebsiteData;

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const BG = "#121921";
const ORANGE = "#F26A0D";
const EASE = [0.22, 0.8, 0.2, 1] as const;

const contactIconMap = {
  phone: Phone,
  mail: Mail,
  map: MapPin,
};

function normalizeAssetPath(path?: string) {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("/")
  ) {
    return path;
  }
  return `/${path.replace(/^public\//, "")}`;
}

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h3 className="text-base font-bold text-white sm:text-lg lg:text-xl">
        {children}
      </h3>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
        style={{ originX: 0, background: ORANGE }}
        className="mb-3.5 mt-2 block h-[3px] w-10 rounded-full sm:mb-4 sm:w-12"
      />
    </>
  );
}

function LinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-2 sm:space-y-2.5">
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="group inline-flex items-center gap-2.5 text-xs text-white/90 transition-colors hover:text-[#F26A0D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26A0D] sm:text-sm"
          >
            <ChevronRight
              className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
              strokeWidth={3}
              style={{ color: ORANGE }}
            />
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              {item.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const { common } = websiteData;
  const footerData =
    websiteData.categories.LogisticsCargo.sections.Footer.variants
      .FreightFooter1;
  const reduce = useReducedMotion();

  const rawLogo =
    footerData.logo || common.footerLogo || "/logo-w.png" || common.logo;
  const [imgSrc, setImgSrc] = useState<string>(normalizeAssetPath(rawLogo));
  const [imgFailed, setImgFailed] = useState(false);

  const handleImgError = () => {
    const fallback = normalizeAssetPath(common.logo);
    if (fallback && imgSrc !== fallback) {
      setImgSrc(fallback);
    } else {
      setImgFailed(true);
    }
  };

  const col = (i: number) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: "some" as const },
    transition: { duration: 0.55, delay: 0.08 + i * 0.1, ease: EASE },
  });

  return (
    <footer
      id={footerData.sectionId}
      className={`${font.className} relative overflow-hidden px-4 pb-5 pt-8 text-white sm:px-6 sm:pb-6 sm:pt-10 lg:px-10 lg:pt-12`}
      style={{ background: BG }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.05) 1.2px, transparent 1.4px)",
            backgroundSize: "28px 28px",
            WebkitMaskImage:
              "radial-gradient(ellipse at 30% 30%, #000 0%, transparent 70%)",
            maskImage:
              "radial-gradient(ellipse at 30% 30%, #000 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={reduce ? undefined : { x: [0, 12, 0], y: [0, -8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 top-0 h-[220px] w-[220px] rounded-full bg-[#F26A0D]/[0.07] blur-3xl"
        />
        <div className="absolute right-1/4 top-0 h-[200px] w-[200px] rounded-full bg-[#2B4C7E]/20 blur-3xl" />

        <motion.svg
          viewBox="0 0 640 210"
          className="absolute -bottom-1 right-0 h-auto w-[72%] max-w-[640px] sm:w-[46%]"
          initial={{ opacity: 0.8, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
          fill="none"
        >
          <defs>
            <linearGradient id="swooshA" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#B24A0A" stopOpacity="0.1" />
              <stop offset="55%" stopColor="#F26A0D" />
              <stop offset="100%" stopColor="#FF8A2B" />
            </linearGradient>
            <linearGradient id="swooshB" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#5A2A0C" stopOpacity="0" />
              <stop offset="100%" stopColor="#6B3410" stopOpacity="0.85" />
            </linearGradient>
          </defs>
          <motion.g
            animate={reduce ? undefined : { y: [0, -4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              d="M120 210 C330 200 560 150 640 28 V96 C560 170 380 205 220 210 Z"
              fill="url(#swooshB)"
            />
            <path
              d="M200 210 C400 196 580 120 640 -2 V58 C570 130 420 192 300 210 Z"
              fill="url(#swooshA)"
            />
          </motion.g>
        </motion.svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px]">
        <div className="grid grid-cols-1 gap-6 pb-6 sm:grid-cols-2 sm:gap-8 sm:pb-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)_minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-0">
          <motion.div {...col(0)} className="min-w-0 lg:pr-8">
            <a
              href={footerData.homeHref}
              aria-label={footerData.homeAriaLabel}
              className="inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26A0D]"
            >
              {!imgFailed && imgSrc ? (
                <motion.img
                  src={imgSrc}
                  alt={footerData.logoAlt}
                  onError={handleImgError}
                  whileHover={reduce ? undefined : { scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="h-12 w-auto max-w-[260px] object-contain sm:h-14 sm:max-w-[320px] lg:h-16 lg:max-w-[360px]"
                />
              ) : (
                <span className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  {common?.siteNamePrimary || "FREIGHT"}
                  <span style={{ color: ORANGE }}>
                    {common?.siteNameAccent || "IX"}
                  </span>
                </span>
              )}
            </a>
            <p className="mt-3 max-w-[340px] text-xs leading-[1.65] text-white/90 sm:mt-4 sm:text-sm">
              {footerData.summary}
            </p>
          </motion.div>

          <motion.div
            {...col(1)}
            className="min-w-0 lg:border-l lg:border-white/15 lg:pl-8 xl:pl-10"
          >
            <ColumnTitle>{footerData.quickLinksHeading}</ColumnTitle>
            <LinkList items={footerData.quickLinks} />
          </motion.div>

          <motion.div
            {...col(2)}
            className="min-w-0 lg:border-l lg:border-white/15 lg:pl-8 xl:pl-10"
          >
            <ColumnTitle>{footerData.supportHeading}</ColumnTitle>
            <LinkList items={footerData.supportLinks} />
          </motion.div>

          <motion.div
            {...col(3)}
            className="min-w-0 lg:border-l lg:border-white/15 lg:pl-8 xl:pl-10"
          >
            <ColumnTitle>{footerData.contactHeading}</ColumnTitle>
            <ul className="space-y-3 sm:space-y-3.5">
              {footerData.contacts.map((c) => {
                const Icon = contactIconMap[c.icon] || Phone;
                const inner = (
                  <>
                    <Icon
                      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5"
                      strokeWidth={c.filled ? 1.4 : 2}
                      fill={c.filled ? ORANGE : "none"}
                      style={{ color: ORANGE }}
                    />
                    <span className="min-w-0 text-xs text-white [overflow-wrap:anywhere] transition-colors group-hover:text-[#F26A0D] sm:text-sm">
                      {c.label}
                    </span>
                  </>
                );
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="group inline-flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26A0D]"
                      >
                        {inner}
                      </a>
                    ) : (
                      <span className="group inline-flex items-center gap-2.5">
                        {inner}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-px w-full bg-white/15"
          aria-hidden="true"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-4 text-xs text-white/85 sm:text-sm"
        >
          {footerData.copyright}
        </motion.p>
      </div>
    </footer>
  );
}
