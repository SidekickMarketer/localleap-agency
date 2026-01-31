import { Metadata } from 'next';
import { Check, X } from 'lucide-react';
import { Section, SectionHeader, Container, Button } from '@/components/ui';
import { FAQ, Contact } from '@/components/sections';
import { defaultContent } from '@/lib/config';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for local business marketing services. No hidden fees, no long-term contracts. See our packages starting at $1,500/month.',
};

const packages = [
  {
    name: 'Starter',
    price: 1500,
    description: 'Perfect for businesses just getting started with digital marketing.',
    features: [
      { text: 'Google Business Profile management', included: true },
      { text: '12 social posts/month (2 platforms)', included: true },
      { text: 'Monthly performance report', included: true },
      { text: 'Email support', included: true },
      { text: 'Google Ads management', included: false },
      { text: 'Local SEO campaign', included: false },
      { text: 'Strategy calls', included: false },
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: 2500,
    description: 'Our most popular package for businesses ready to grow.',
    features: [
      { text: 'Everything in Starter, plus:', included: true },
      { text: 'Google Ads management', included: true },
      { text: 'Local SEO campaign', included: true },
      { text: '20 social posts/month (3 platforms)', included: true },
      { text: '1 blog post/month', included: true },
      { text: 'Bi-weekly strategy calls', included: true },
      { text: 'Meta Ads management', included: false },
    ],
    cta: 'Get Started',
    highlighted: true,
    highlightLabel: 'MOST POPULAR',
  },
  {
    name: 'Scale',
    price: 4000,
    description: 'For businesses ready to dominate their market.',
    features: [
      { text: 'Everything in Growth, plus:', included: true },
      { text: 'Meta Ads (Facebook/Instagram)', included: true },
      { text: '30 social posts/month', included: true },
      { text: '4 blog posts/month', included: true },
      { text: 'Email marketing (2 campaigns/mo)', included: true },
      { text: 'Weekly strategy calls', included: true },
      { text: 'Priority support', included: true },
    ],
    cta: 'Get Started',
    highlighted: false,
  },
];

const oneTimeServices = [
  { name: 'Website Design (5-7 pages)', price: '$3,000 - $5,000' },
  { name: 'Website Design (10+ pages)', price: '$5,000 - $8,000' },
  { name: 'Brand Identity Package', price: '$1,500 - $2,500' },
  { name: 'Marketing Audit', price: '$500' },
  { name: 'Google Ads Setup (one-time)', price: '$750' },
  { name: 'Social Media Setup', price: '$500' },
];

const faqs = [
  {
    _id: '1',
    question: 'What\'s included in ad spend?',
    answer: 'Our fees cover strategy, management, and optimization. Ad spend (what you pay Google or Meta directly) is separate and paid by you to the platforms. We typically recommend starting with $1,000-2,000/month in ad spend.',
  },
  {
    _id: '2',
    question: 'Do you require long-term contracts?',
    answer: 'We have a 3-month minimum commitment to allow enough time to show results. After that, it\'s month-to-month with 30-day cancellation notice. We believe in earning your business every month.',
  },
  {
    _id: '3',
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes! You can change your plan at any time with 30 days notice. We\'ll help you transition smoothly.',
  },
  {
    _id: '4',
    question: 'What if I need something not listed?',
    answer: 'We offer custom packages for businesses with unique needs. Contact us and we\'ll create a proposal tailored to your goals.',
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Simple,{' '}
              <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              No hidden fees. No long-term contracts. No surprises.
              Choose the package that fits your goals and budget.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={cn(
                'rounded-2xl p-8 relative',
                pkg.highlighted
                  ? 'bg-gray-900 text-white scale-105'
                  : 'bg-white border border-gray-200',
                'transition-all duration-200'
              )}
            >
              {pkg.highlighted && pkg.highlightLabel && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                  {pkg.highlightLabel}
                </div>
              )}

              <div className={cn('text-sm font-medium mb-2', pkg.highlighted ? 'text-gray-400' : 'text-gray-500')}>
                {pkg.name.toUpperCase()}
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">${pkg.price.toLocaleString()}</span>
                <span className={pkg.highlighted ? 'text-gray-400' : 'text-gray-500'}>/month</span>
              </div>

              <p className={cn('mb-6', pkg.highlighted ? 'text-gray-400' : 'text-gray-600')}>
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className={cn('w-5 h-5 mt-0.5 flex-shrink-0', pkg.highlighted ? 'text-green-400' : 'text-green-500')} />
                    ) : (
                      <X className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400" />
                    )}
                    <span className={!feature.included ? 'text-gray-400' : ''}>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={pkg.highlighted ? 'primary' : 'secondary'}
                className="w-full"
              >
                {pkg.cta}
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* One-Time Services */}
      <Section background="gray">
        <SectionHeader
          title="One-Time Services"
          subtitle="Project-based work with fixed pricing."
        />
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden">
            {oneTimeServices.map((service, index) => (
              <div
                key={index}
                className={cn(
                  'flex justify-between items-center p-4',
                  index !== oneTimeServices.length - 1 && 'border-b border-gray-100'
                )}
              >
                <span className="font-medium">{service.name}</span>
                <span className="text-gray-600">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <FAQ title="Pricing FAQs" faqs={faqs} />

      {/* CTA */}
      <Contact />
    </>
  );
}
