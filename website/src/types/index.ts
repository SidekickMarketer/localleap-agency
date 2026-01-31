// Core types for the agency template
// These types are designed to be reusable across multiple agency projects

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
  links?: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export interface HeroContent {
  badge?: string;
  headline: string;
  highlightedText?: string;
  subheadline: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  features?: string[];
}

export interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  slug?: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: SanityImage;
  rating?: number;
}

export interface CaseStudy {
  _id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  metrics: {
    label: string;
    before: string;
    after: string;
    improvement?: string;
  }[];
  image?: SanityImage;
  slug: string;
}

export interface PricingTier {
  _id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaHref: string;
}

export interface FAQItem {
  _id: string;
  question: string;
  answer: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image?: SanityImage;
  links?: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: PortableTextBlock[];
  author: TeamMember;
  publishedAt: string;
  categories: string[];
  featuredImage?: SanityImage;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service?: string;
}

// Sanity-specific types
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface PortableTextBlock {
  _type: 'block';
  _key: string;
  style?: string;
  children: {
    _type: 'span';
    _key: string;
    text: string;
    marks?: string[];
  }[];
  markDefs?: {
    _type: string;
    _key: string;
    href?: string;
  }[];
}

// Page section types for flexible page building
export interface PageSection {
  _type: string;
  _key: string;
}

export interface HeroSection extends PageSection {
  _type: 'hero';
  content: HeroContent;
}

export interface ServicesSection extends PageSection {
  _type: 'services';
  headline: string;
  subheadline?: string;
  services: Service[];
}

export interface TestimonialsSection extends PageSection {
  _type: 'testimonials';
  headline: string;
  testimonials: Testimonial[];
}

export interface PricingSection extends PageSection {
  _type: 'pricing';
  headline: string;
  subheadline?: string;
  tiers: PricingTier[];
}

export interface CTASection extends PageSection {
  _type: 'cta';
  headline: string;
  subheadline?: string;
  features?: string[];
  ctaText: string;
  ctaHref: string;
}
