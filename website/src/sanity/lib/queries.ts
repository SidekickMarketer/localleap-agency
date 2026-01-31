import { groq } from 'next-sanity';

// Site settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    name,
    description,
    logo,
    ogImage,
    "navigation": navigation[]->{
      title,
      "href": slug.current
    },
    socialLinks
  }
`;

// Services
export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    features,
    "slug": slug.current
  }
`;

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    description,
    icon,
    features,
    fullDescription,
    "slug": slug.current
  }
`;

// Testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    role,
    company,
    content,
    image,
    rating
  }
`;

// Case Studies
export const caseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(_createdAt desc) {
    _id,
    title,
    client,
    industry,
    description,
    metrics,
    image,
    "slug": slug.current
  }
`;

export const caseStudyBySlugQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    client,
    industry,
    description,
    metrics,
    image,
    fullContent,
    "slug": slug.current
  }
`;

// Pricing
export const pricingQuery = groq`
  *[_type == "pricing"] | order(price asc) {
    _id,
    name,
    price,
    description,
    features,
    highlighted,
    ctaText,
    ctaHref
  }
`;

// FAQs
export const faqsQuery = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer
  }
`;

// Blog Posts
export const blogPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    categories,
    featuredImage,
    "author": author->{
      name,
      image
    }
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    publishedAt,
    categories,
    featuredImage,
    "author": author->{
      name,
      role,
      image,
      bio
    }
  }
`;

// Homepage content
export const homepageQuery = groq`
  *[_type == "homepage"][0] {
    hero {
      badge,
      headline,
      highlightedText,
      subheadline,
      primaryCta,
      secondaryCta,
      features
    },
    servicesSection {
      headline,
      subheadline
    },
    resultsSection {
      headline,
      subheadline,
      stats
    },
    ctaSection {
      headline,
      subheadline,
      features,
      ctaText,
      ctaHref
    }
  }
`;
