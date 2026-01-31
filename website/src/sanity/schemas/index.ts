import service from './service';
import testimonial from './testimonial';
import caseStudy from './caseStudy';
import pricing from './pricing';
import faq from './faq';
import post from './post';
import author from './author';
import siteSettings from './siteSettings';
import homepage from './homepage';

export const schemaTypes = [
  // Documents
  service,
  testimonial,
  caseStudy,
  pricing,
  faq,
  post,
  author,

  // Singletons
  siteSettings,
  homepage,
];
