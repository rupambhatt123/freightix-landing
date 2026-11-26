"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import rawData from "@/data/websiteData.json";
import type { WebsiteData } from "@/types/website";

const websiteData = rawData as WebsiteData;

export default function Hero() {
  const { common } = websiteData;
  const heroData =
    websiteData.categories.LogisticsCargo.sections.Banner.variants
      .FreightBanner1;

  return (
    <section
      id={heroData.sectionId}
      className="relative overflow-hidden bg-gradient-to-r from-[#0a2a45] via-[#0a2a45] to-[#0d3555] text-white min-h-[540px] sm:min-h-[600px] lg:min-h-[640px] flex items-center"
    >
      <div
        role="img"
        aria-label={heroData.bgImageAlt}
        className="absolute inset-0 bg-cover bg-no-repeat bg-[74%_25%] sm:bg-[70%_22%] lg:left-auto lg:w-[58%] lg:bg-top"
        style={{ backgroundImage: `url('${heroData.bgImage}')` }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a2a45]/95 via-[#0a2a45]/80 via-55% to-[#0a2a45]/35 lg:left-auto lg:w-[58%] lg:from-[#0a2a45] lg:via-[#0a2a45]/60 lg:via-35% lg:to-transparent lg:to-75%"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-[640px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
          >
            <span className="w-10 sm:w-14 h-[2px] bg-[#d9772b]" />
            <span className="text-[11px] sm:text-sm font-medium tracking-[0.22em] sm:tracking-[0.3em] uppercase text-white/85">
              {heroData.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-[64px] font-semibold leading-[1.08] tracking-tight"
          >
            {heroData.headlineLine1}
            <br />
            &amp;{" "}
            <span className="text-[#e8761f]">{heroData.headlineHighlight}</span>{" "}
            {heroData.headlineEnd}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 sm:mt-7 text-sm sm:text-lg text-white/90 leading-relaxed max-w-[480px]"
          >
            {heroData.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 sm:mt-9 flex flex-wrap items-center gap-4 sm:gap-7"
          >
            <motion.a
              href={heroData.ctaButton.href}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 sm:gap-3 bg-[#cc752c] hover:bg-[#b96624] text-white font-semibold text-sm sm:text-base px-5 sm:px-7 py-3 sm:py-4 rounded-lg transition-colors"
            >
              <span>{heroData.ctaButton.label}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <span className="hidden sm:block h-14 w-[1px] bg-white/25" />

            <a
              href={common.phoneHref}
              className="flex items-center gap-3 sm:gap-4 group"
            >
              <span className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#34506f] group-hover:bg-[#d9772b] flex items-center justify-center transition-colors shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </span>
              <div className="leading-snug">
                <p className="text-xs sm:text-sm text-white/80">{heroData.callLabel}</p>
                <p className="text-base sm:text-xl font-semibold text-white group-hover:text-[#e8761f] transition-colors">
                  {common.phone}
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

