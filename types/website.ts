export interface SocialLink {
  id: string;
  label: string;
  mark: string;
  href: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
  id: string;
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface TitleToken {
  t: string;
  accent?: boolean;
}

export interface FreightTopBar1Variant {
  sectionId: string;
  showSocial: boolean;
}

export interface FreightHeader1Variant {
  logo: string;
  homeHref: string;
  homeAriaLabel: string;
  menuAriaLabel: string;
  navLinks: NavLinkItem[];
  ctaButton: {
    label: string;
    href: string;
  };
}

export interface FreightBanner1Variant {
  sectionId: string;
  badge: string;
  headlineLine1: string;
  headlineHighlight: string;
  headlineEnd: string;
  subheadline: string;
  bgImage: string;
  bgImageAlt: string;
  ctaButton: {
    label: string;
    href: string;
  };
  callLabel: string;
}

export interface FreightAbout1Variant {
  sectionId: string;
  badge: string;
  headlineLines: TitleToken[][];
  description: string;
  points: string[];
  teamLabel: string;
  teamHref: string;
  statValue: number;
  statSuffix: string;
  statLabel: string;
  imageA: string;
  imageAAlt: string;
  imageB: string;
  imageBAlt: string;
}

export interface ServiceSectionItem {
  title: string;
  text: string;
  icon: "shipping" | "air" | "warehousing" | "transportation" | "rail";
  image: string;
}

export interface FreightServices1Variant {
  sectionId: string;
  badge: string;
  titleLines: TitleToken[][];
  description: string;
  autoplayMs: number;
  services: ServiceSectionItem[];
}

export interface WhyChooseFeature {
  title: string;
  description: string;
  icon: "tracking" | "safety" | "support" | "flexible";
}

export interface FreightWhyChoose1Variant {
  sectionId: string;
  badge: string;
  titleLines: TitleToken[][];
  description: string;
  image: string;
  imageAlt: string;
  cardTitle: string[];
  cardText: string;
  features: WhyChooseFeature[];
}

export interface FreightTeamMember {
  name: string;
  role: string;
  image: string;
}

export interface FreightTeam1Variant {
  sectionId: string;
  badge: string;
  title: TitleToken[];
  description: string;
  members: FreightTeamMember[];
}

export interface HowItWorksStep {
  title: string;
  description: string;
  icon: "book" | "prepare" | "track" | "delivery";
}

export interface FreightHowItWorks1Variant {
  sectionId: string;
  badge: string;
  title: TitleToken[];
  steps: HowItWorksStep[];
}

export interface TestimonialSlideItem {
  quote: string;
  name: string;
  role: string;
}

export interface FreightTestimonials1Variant {
  sectionId: string;
  badge: string;
  title: TitleToken[];
  description: string;
  defaultActiveIndex: number;
  autoplayMs: number;
  prevAriaLabel: string;
  nextAriaLabel: string;
  dotAriaLabelPrefix: string;
  testimonials: TestimonialSlideItem[];
}

export interface ContactInfoItem {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: "phone" | "mail" | "map";
}

export interface ContactHighlightItem {
  title: string;
  icon: "truck" | "shield" | "layers";
}

export interface FreightContactFormConfig {
  title: string;
  description: string;
  fields: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    freightLabel: string;
    freightDefault: string;
    loadLabel: string;
    loadDefault: string;
    messageLabel: string;
    messagePlaceholder: string;
  };
  freightOptions: string[];
  loadOptions: string[];
  submitLabel: string;
  successTitle: string;
  successPrefix: string;
  defaultName: string;
  successSuffix: string;
  resetLabel: string;
}

export interface FreightContact1Variant {
  sectionId: string;
  badge: string;
  titleLines: TitleToken[][];
  subtitle: string;
  infoItems: ContactInfoItem[];
  highlights: ContactHighlightItem[];
  form: FreightContactFormConfig;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FreightFaqs1Variant {
  sectionId: string;
  badge: string;
  watermark: string;
  titleLines: TitleToken[][];
  description: string;
  defaultOpenIndex: number;
  items: FaqItem[];
}

export interface FooterContactItem {
  label: string;
  href?: string;
  icon: "phone" | "mail" | "map";
  filled: boolean;
}

export interface FreightFooter1Variant {
  sectionId: string;
  homeHref: string;
  homeAriaLabel: string;
  logo: string;
  logoAlt: string;
  summary: string;
  quickLinksHeading: string;
  supportHeading: string;
  contactHeading: string;
  quickLinks: FooterLinkItem[];
  supportLinks: FooterLinkItem[];
  contacts: FooterContactItem[];
  copyright: string;
}

export interface WebsiteData {
  common: {
    logo: string;
    footerLogo: string;
    siteNamePrimary: string;
    siteNameAccent: string;
    tagline: string;
    phone: string;
    phoneHref: string;
    email: string;
    emailHref: string;
    contactEmail: string;
    contactEmailHref: string;
    networkLabel: string;
    address: string;
    socialLinks: SocialLink[];
  };
  categories: {
    LogisticsCargo: {
      templateComponents: {
        "template-1": {
          shared: {
            TopBar: string;
            Header: string;
            Footer: string;
          };
          pages: {
            home: {
              components: Array<{ key: string; component: string }>;
            };
          };
        };
      };
      sections: {
        TopBar: {
          variants: {
            FreightTopBar1: FreightTopBar1Variant;
          };
        };
        Header: {
          variants: {
            FreightHeader1: FreightHeader1Variant;
          };
        };
        Banner: {
          variants: {
            FreightBanner1: FreightBanner1Variant;
          };
        };
        About: {
          variants: {
            FreightAbout1: FreightAbout1Variant;
          };
        };
        Services: {
          variants: {
            FreightServices1: FreightServices1Variant;
          };
        };
        WhyChooseUs: {
          variants: {
            FreightWhyChoose1: FreightWhyChoose1Variant;
          };
        };
        Team: {
          variants: {
            FreightTeam1: FreightTeam1Variant;
          };
        };
        HowItWorks: {
          variants: {
            FreightHowItWorks1: FreightHowItWorks1Variant;
          };
        };
        Testimonials: {
          variants: {
            FreightTestimonials1: FreightTestimonials1Variant;
          };
        };
        Contact: {
          variants: {
            FreightContact1: FreightContact1Variant;
          };
        };
        Faqs: {
          variants: {
            FreightFaqs1: FreightFaqs1Variant;
          };
        };
        Footer: {
          variants: {
            FreightFooter1: FreightFooter1Variant;
          };
        };
      };
    };
  };
}