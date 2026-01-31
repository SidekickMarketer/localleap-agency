import { Metadata } from 'next';
import { Check, Smartphone, Zap, Search, MousePointer } from 'lucide-react';
import { Section, SectionHeader, Container, Button } from '@/components/ui';
import { Contact } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Website Design for Local Businesses',
  description: 'Professional website design that converts visitors into customers. Mobile-friendly, fast-loading, and built for lead generation.',
};

const benefits = [
  {
    icon: MousePointer,
    title: 'Built to Convert',
    description: 'Every page designed with one goal: turning visitors into leads and customers.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: '60%+ of traffic is mobile. Your site will look and work perfectly on any device.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Speed matters. Our sites load in under 3 seconds so visitors don\'t bounce.',
  },
  {
    icon: Search,
    title: 'SEO-Ready',
    description: 'Built with proper structure, meta tags, and schema markup for search engines.',
  },
];

const included = [
  'Custom design (not templates)',
  'Mobile responsive development',
  'Up to 7 pages',
  'Contact form integration',
  'Google Analytics setup',
  'Basic SEO optimization',
  'SSL certificate',
  'Fast hosting included',
  '30 days of revisions',
  'Training on how to update',
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We learn about your business, goals, and what makes you different.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'We create mockups and wireframes for your approval before building.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'We build your site with clean code, fast loading, and mobile optimization.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'We launch your site, set up analytics, and train you on updates.',
  },
];

export default function WebsiteDesignPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-medium mb-6">
                Website Design
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
                Websites That{' '}
                <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                  Actually Convert
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your website is your 24/7 salesperson. We build professional, fast-loading sites
                designed to turn visitors into customers—not just look pretty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Get a Quote
                </Button>
                <Button href="/pricing" variant="outline" size="lg">
                  See Pricing
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="text-sm text-gray-500 mb-4">Website Performance</div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Page Speed</span>
                      <span className="text-sm font-bold text-green-600">95/100</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full" style={{ width: '95%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Mobile Score</span>
                      <span className="text-sm font-bold text-green-600">98/100</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full" style={{ width: '98%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">SEO Score</span>
                      <span className="text-sm font-bold text-green-600">92/100</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <Section>
        <SectionHeader
          title="What Makes a Website"
          titleHighlight="Actually Work"
          subtitle="A beautiful website that doesn't convert is just expensive art. Here's what matters."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section background="gray">
        <SectionHeader
          title="Our Process"
          subtitle="From concept to launch in 2-3 weeks."
        />
        <div className="grid md:grid-cols-4 gap-8">
          {process.map((item, index) => (
            <div key={index}>
              <div className="text-5xl font-bold text-gray-100 mb-4">{item.step}</div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What's Included */}
      <Section>
        <SectionHeader
          title="What's Included"
          subtitle="Everything you need to launch a professional website."
        />
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {included.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-500">Starting at $3,000 for a 5-page website</p>
        </div>
      </Section>

      {/* CTA */}
      <Contact />
    </>
  );
}
