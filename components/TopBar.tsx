"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import rawData from "@/data/websiteData.json";
import type { WebsiteData } from "@/types/website";

const websiteData = rawData as WebsiteData;

const defaultSocialLinks = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
];

function SocialIcon({ id }: { id: string }) {
  switch (id) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" aria-hidden="true">
          <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 13.02C20.44 9.88 18.76 8.22 16.16 8.22C14.37 8.22 13.48 9.2 13.02 9.93V8.5H9.65C9.7 9.48 9.65 19.5 9.65 19.5H13.02V13.36C13.02 13.02 13.05 12.69 13.15 12.45C13.42 11.78 14.03 11.09 15.07 11.09C16.41 11.09 17.06 12.11 17.06 13.6V19.5H20.44V13.02Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" aria-hidden="true">
          <path d="M13.5 21V12.75H16.25L16.67 9.5H13.5V7.42C13.5 6.48 13.76 5.84 15.11 5.84H16.78V2.93C16.49 2.89 15.5 2.8 14.34 2.8C11.93 2.8 10.28 4.27 10.28 6.97V9.5H7.5V12.75H10.28V21H13.5Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-none stroke-current" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" aria-hidden="true">
          <path d="M21.58 7.19C21.35 6.33 20.67 5.65 19.81 5.42C18.25 5 12 5 12 5C12 5 5.75 5 4.19 5.42C3.33 5.65 2.65 6.33 2.42 7.19C2 8.75 2 12 2 12C2 12 2 15.25 2.42 16.81C2.65 17.67 3.33 18.35 4.19 18.58C5.75 19 12 19 12 19C12 19 18.25 19 19.81 18.58C20.67 18.35 21.35 17.67 21.58 16.81C22 15.25 22 12 22 12C22 12 22 8.75 21.58 7.19ZM10 15V9L15.2 12L10 15Z" />
        </svg>
      );
  }
}

export default function TopBar() {
  const common = websiteData?.common;
  const topBarData =
    websiteData?.categories?.LogisticsCargo?.sections?.TopBar?.variants
      ?.FreightTopBar1;

  const phone = common?.phone ?? "+91 98765 43210";
  const phoneHref = common?.phoneHref ?? "tel:+919876543210";
  const email = common?.email ?? "info@freightix.com";
  const emailHref = common?.emailHref ?? "mailto:info@freightix.com";
  const networkLabel = common?.networkLabel ?? "Global Logistics Network";
  const socialLinks =
    common?.socialLinks && common.socialLinks.length > 0
      ? common.socialLinks
      : defaultSocialLinks;
  const showSocial = topBarData?.showSocial ?? true;

  return (
    <motion.div
      id={topBarData?.sectionId ?? "topbar"}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-[#062336] text-white text-[11px] sm:text-sm py-1.5 sm:py-2.5 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
        <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-6 w-full sm:w-auto min-w-0">
          <a
            href={phoneHref}
            className="inline-flex items-center gap-1.5 sm:gap-2 py-0.5 hover:text-[#e66c1a] transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#e66c1a] shrink-0" />
            <span>{phone}</span>
          </a>
          <span className="text-white/25">|</span>
          <a
            href={emailHref}
            className="inline-flex items-center gap-1.5 sm:gap-2 py-0.5 hover:text-[#e66c1a] transition-colors whitespace-nowrap truncate"
          >
            <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#e66c1a] shrink-0" />
            <span className="truncate">{email}</span>
          </a>
        </div>

        <div className="flex items-center justify-center sm:justify-end gap-2.5 sm:gap-6 w-full sm:w-auto min-w-0">
          <div className="inline-flex items-center gap-1.5 py-0.5 whitespace-nowrap">
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#e66c1a] shrink-0" />
            <span>{networkLabel}</span>
          </div>
          {showSocial && (
            <>
              <span className="hidden sm:inline text-white/25">|</span>
              <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-5 w-5 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#e66c1a] hover:text-white transition-colors"
                  >
                    <SocialIcon id={social.id} />
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}