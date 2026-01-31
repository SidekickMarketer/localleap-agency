import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeader, Container, IconBox, Button } from '@/components/ui';
import { Contact } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Full-service digital marketing for local businesses. Google Ads, Local SEO, Social Media, Email Marketing, Website Design, and Meta Ads.',
};

const services = [
  {
    title: 'Google Ads Management',
    description: 'Show up at the exact moment customers search for your services. We build and manage campaigns that deliver qualified leads at a predictable cost.',
    icon: 'Search',
    href: '/services/google-ads',
    features: ['Search & Display Campaigns', 'Conversion Tracking', 'A/B Testing', 'Monthly Optimization'],
  },
  {
    title: 'Local SEO',
    description: 'Rank #1 in Google Maps and local search results. We optimize your online presence so customers find you first when they need your services.',
    icon: 'MapPin',
    href: '/services/local-seo',
    features: ['Google Business Profile', 'Citation Building', 'Review Management', 'Local Link Building'],
  },
  {
    title: 'Social Media Management',
    description: 'Stay top of mind with consistent, engaging content. We handle everything from strategy and content creation to community management.',
    icon: 'Share2',
    href: '/services/social-media',
    features: ['Content Creation', 'Posting & Scheduling', 'Community Management', 'Performance Analytics'],
  },
  {
    title: 'Email Marketing',
    description: 'Turn past customers into repeat buyers and nurture leads into paying clients with automated email sequences that work 24/7.',
    icon: 'Mail',
    href: '/services/email-marketing',
    features: ['Automated Sequences', 'Newsletter Campaigns', 'List Segmentation', 'Win-Back Campaigns'],
  },
  {
    title: 'Website Design',
    description: 'Beautiful, fast websites built to convert visitors into customers. Mobile-friendly, SEO-optimized, and designed for lead generation.',
    icon: 'Monitor',
    href: '/services/website-design',
    features: ['Custom Design', 'Mobile Responsive', 'SEO Optimized', 'Fast Loading'],
  },
  {
    title: 'Meta Ads (Facebook & Instagram)',
    description: 'Reach your ideal customers where they spend their time. Targeted campaigns that build awareness and drive real leads.',
    icon: 'Target',
    href: '/services/meta-ads',
    features: ['Audience Targeting', 'Retargeting Campaigns', 'Lead Generation', 'Creative Development'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Digital Marketing Services That{' '}
              <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                Actually Work
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We help local service businesses get more customers through proven digital marketing strategies.
              No fluff. No vanity metrics. Just results that impact your bottom line.
            </p>
            <Button href="/contact" size="lg">
              Get a Free Strategy Call
            </Button>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <IconBox name={service.icon} className="mb-6" />
              <h2 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="gray">
        <SectionHeader
          title="Why Local Businesses"
          titleHighlight="Choose Us"
          subtitle="We're not a generic agency. We specialize in local service businesses and understand what it takes to win in your market."
        />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">100%</div>
            <div className="text-gray-600">Focus on Local Businesses</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">No</div>
            <div className="text-gray-600">Long-Term Contracts</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">30 Day</div>
            <div className="text-gray-600">Results Guarantee</div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Contact />
    </>
  );
}
