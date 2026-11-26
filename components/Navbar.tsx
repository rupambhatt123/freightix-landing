"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import rawData from "@/data/websiteData.json";
import type { WebsiteData } from "@/types/website";

const websiteData = rawData as WebsiteData;

export default function Navbar() {
  const common = websiteData?.common;
  const headerData =
    websiteData?.categories?.LogisticsCargo?.sections?.Header?.variants
      ?.FreightHeader1;

  const navLinks = headerData?.navLinks ?? [];
  const [activeId, setActiveId] = useState<string>(navLinks[0]?.id ?? "home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const logoSrc = headerData?.logo || common?.logo || "/logo.png";
  const logoAlt = headerData?.homeAriaLabel || "Freightix home";
  const homeHref = headerData?.homeHref || "#home";
  const ctaLabel = headerData?.ctaButton?.label || "Contact";
  const ctaHref = headerData?.ctaButton?.href || "#contact";
  const ctaId = ctaHref.replace(/^#/, "") || "contact";
  const isCtaActive = activeId === ctaId;

  useEffect(() => {
    if (!navLinks.length) return;

    const handleScroll = () => {
      const scrollMarker = window.scrollY + 180;
      const contactEl = document.getElementById(ctaId);

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveId(contactEl ? ctaId : navLinks[navLinks.length - 1]?.id || "home");
        return;
      }

      let currentId = navLinks[0].id;
      for (const item of navLinks) {
        const sectionId = item.id || item.href.replace(/^#/, "");
        const el = document.getElementById(sectionId);
        if (!el) continue;

        const top = el.getBoundingClientRect().top + window.scrollY;
        if (scrollMarker >= top) {
          currentId = item.id;
        }
      }

      if (contactEl) {
        const contactTop = contactEl.getBoundingClientRect().top + window.scrollY;
        if (scrollMarker >= contactTop) {
          currentId = ctaId;
        }
      }

      setActiveId(currentId);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [navLinks, ctaId]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
        <a
          href={homeHref}
          aria-label={logoAlt}
          onClick={() => setActiveId("home")}
          className="inline-flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26A0D]"
        >
          <img
            src={logoSrc}
            alt={logoAlt}
            className="h-11 w-auto max-w-[220px] object-contain object-left sm:h-12 sm:max-w-[260px] lg:h-14 lg:max-w-[300px]"
          />
        </a>

        <nav className="hidden items-center gap-5 xl:flex xl:gap-7">
          {navLinks.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveId(item.id)}
                className={`whitespace-nowrap text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-[#F26A0D]"
                    : "text-[#0A1F44] hover:text-[#F26A0D]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={ctaHref}
            onClick={() => setActiveId(ctaId)}
            aria-current={isCtaActive ? "page" : undefined}
            className={`hidden items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-white transition-all sm:inline-flex ${
              isCtaActive
                ? "bg-[#0A1F44] ring-2 ring-[#E8740C] ring-offset-2"
                : "bg-[#E8740C] hover:opacity-95"
            }`}
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={headerData?.menuAriaLabel || "Toggle Menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#0A1F44] transition-colors hover:border-[#F26A0D] hover:text-[#F26A0D] xl:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 xl:hidden">
          <div className="mx-auto flex max-w-[1360px] flex-col gap-2.5">
            {navLinks.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveId(item.id);
                    setMobileOpen(false);
                  }}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-[#FFF4EC] text-[#F26A0D]"
                      : "text-[#0A1F44] hover:bg-slate-50 hover:text-[#F26A0D]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={ctaHref}
              onClick={() => {
                setActiveId(ctaId);
                setMobileOpen(false);
              }}
              aria-current={isCtaActive ? "page" : undefined}
              className={`mt-1 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold text-white transition-all sm:hidden ${
                isCtaActive
                  ? "bg-[#0A1F44] ring-2 ring-[#E8740C]"
                  : "bg-[#E8740C]"
              }`}
            >
              <span>{ctaLabel}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
