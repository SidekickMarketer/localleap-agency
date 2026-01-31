import {
  Hero,
  TrustBadges,
  Problems,
  Services,
  Results,
  Process,
  Pricing,
  Testimonials,
  FAQ,
  Contact,
} from '@/components/sections';
import { defaultContent } from '@/lib/config';

// In production, fetch this from Sanity CMS
// For now, we use default content that works without a CMS connection
async function getPageContent() {
  // TODO: Replace with Sanity fetch when connected
  // const client = getClient();
  // const [homepage, services, testimonials, pricing, faqs] = await Promise.all([
  //   client.fetch(homepageQuery),
  //   client.fetch(servicesQuery),
  //   client.fetch(testimonialsQuery),
  //   client.fetch(pricingQuery),
  //   client.fetch(faqsQuery),
  // ]);

  return defaultContent;
}

export default async function Home() {
  const content = await getPageContent();

  return (
    <>
      <Hero content={content.hero} />
      <TrustBadges />
      <Problems />
      <Services services={content.services} />
      <Results stats={content.stats} caseStudies={content.caseStudies} />
      <Process steps={content.process} />
      <Pricing tiers={content.pricing} />
      <FAQ faqs={content.faqs} />
      <Testimonials testimonials={content.testimonials} />
      <Contact />
    </>
  );
}
