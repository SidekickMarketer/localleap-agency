import { Metadata } from 'next';
import { Check } from 'lucide-react';
import { Section, SectionHeader, Container, Button } from '@/components/ui';
import { Contact } from '@/components/sections';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'We help local service businesses get more customers through proven digital marketing. Learn about our approach and why we do what we do.',
};

const values = [
  {
    title: 'Results Over Vanity Metrics',
    description: 'We don\'t care about impressions or followers. We care about leads, customers, and revenue. Everything we do ties back to your bottom line.',
  },
  {
    title: 'Transparency Always',
    description: 'No black boxes. You\'ll always know exactly what we\'re doing, why we\'re doing it, and what results it\'s generating.',
  },
  {
    title: 'No Long-Term Contracts',
    description: 'We believe in earning your business every month. If we\'re not delivering, you can leave. It\'s that simple.',
  },
  {
    title: 'Local Business Focus',
    description: 'We specialize in local service businesses. We understand your market, your customers, and what it takes to win.',
  },
];

const antiValues = [
  'Cookie-cutter strategies that ignore your unique business',
  'Vanity metrics that look good but don\'t drive revenue',
  'Long-term contracts that lock you in',
  'Hidden fees and surprise charges',
  'Outsourced work to overseas agencies',
  'Slow response times and poor communication',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Marketing That Actually{' '}
              <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                Works
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We started LocalLeap because we were tired of seeing local businesses get burned by marketing agencies
              that over-promise and under-deliver.
            </p>
          </div>
        </Container>
      </section>

      {/* Story */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-600">
            <p>
              After years of working at digital marketing agencies, we noticed a pattern: local businesses
              were consistently getting the short end of the stick.
            </p>
            <p>
              Big agencies treated them as afterthoughts—junior team members, cookie-cutter strategies,
              and reports full of vanity metrics that looked impressive but didn't move the needle.
            </p>
            <p>
              We knew there was a better way. Local businesses deserve the same quality of marketing
              that big brands get, just tailored to their unique needs and budgets.
            </p>
            <p>
              That's why we built LocalLeap. We focus exclusively on local service businesses—dentists,
              med spas, HVAC companies, plumbers, lawyers, and similar industries. We know these markets
              inside and out, and we've developed proven strategies that consistently deliver results.
            </p>
            <p>
              Our approach is simple: we only do what works, we're completely transparent about what
              we're doing, and we earn your business every month.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section background="gray">
        <SectionHeader
          title="What We Believe"
          subtitle="The principles that guide everything we do."
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Anti-Values */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">What We Don't Do</h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
            We're just as defined by what we refuse to do as what we do.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {antiValues.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                <span className="text-red-500 font-bold">✕</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Numbers */}
      <Section background="gray">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary-500 mb-2">50+</div>
            <div className="text-gray-600">Local Businesses Served</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-500 mb-2">93%</div>
            <div className="text-gray-600">Client Retention Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-500 mb-2">4.2x</div>
            <div className="text-gray-600">Average ROAS</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-500 mb-2">127%</div>
            <div className="text-gray-600">Avg Lead Increase</div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Contact />
    </>
  );
}
