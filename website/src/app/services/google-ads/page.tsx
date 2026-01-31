import { Metadata } from 'next';
import { Check, TrendingUp, Target, DollarSign, BarChart3 } from 'lucide-react';
import { Section, SectionHeader, Container, Button, Card } from '@/components/ui';
import { Contact } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Google Ads Management',
  description: 'Expert Google Ads management for local businesses. Get more leads with targeted search campaigns that deliver measurable ROI.',
};

const benefits = [
  {
    icon: Target,
    title: 'Show Up When It Matters',
    description: 'Appear at the exact moment potential customers search for your services. No wasted impressions.',
  },
  {
    icon: DollarSign,
    title: 'Predictable Lead Cost',
    description: 'Know exactly how much each lead costs. Scale your budget based on results, not guesswork.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Optimization',
    description: 'We monitor and optimize your campaigns weekly to improve performance and reduce costs.',
  },
  {
    icon: BarChart3,
    title: 'Transparent Reporting',
    description: 'Monthly reports showing exactly where your money went and what results you got.',
  },
];

const included = [
  'Keyword research & strategy',
  'Campaign setup & structure',
  'Ad copywriting & testing',
  'Landing page recommendations',
  'Conversion tracking setup',
  'Negative keyword management',
  'Bid optimization',
  'Competitor analysis',
  'Monthly performance reports',
  'Dedicated account manager',
];

const process = [
  {
    step: '01',
    title: 'Discovery & Research',
    description: 'We analyze your market, competitors, and identify the highest-intent keywords for your business.',
  },
  {
    step: '02',
    title: 'Campaign Build',
    description: 'We create targeted campaigns with compelling ad copy designed to attract your ideal customers.',
  },
  {
    step: '03',
    title: 'Launch & Monitor',
    description: 'Your campaigns go live and we monitor performance daily to ensure everything runs smoothly.',
  },
  {
    step: '04',
    title: 'Optimize & Scale',
    description: 'We continuously optimize for better results and scale what works to maximize your ROI.',
  },
];

export default function GoogleAdsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-medium mb-6">
                Google Ads Management
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
                Get More Customers from{' '}
                <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                  Google Search
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Show up at the exact moment potential customers search for your services.
                We build and manage Google Ads campaigns that deliver qualified leads at a cost you can count on.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Get a Free Audit
                </Button>
                <Button href="/pricing" variant="outline" size="lg">
                  See Pricing
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-sm text-gray-500 mb-2">Average Results</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary-500">4.2x</div>
                    <div className="text-gray-600">Return on Ad Spend</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-500">-35%</div>
                    <div className="text-gray-600">Cost Per Lead</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-500">+127%</div>
                    <div className="text-gray-600">Lead Volume</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-500">30 days</div>
                    <div className="text-gray-600">To See Results</div>
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
          title="Why Google Ads"
          titleHighlight="Works"
          subtitle="Unlike SEO which takes months, Google Ads puts you in front of customers immediately."
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

      {/* What's Included */}
      <Section background="gray">
        <SectionHeader
          title="What's Included"
          subtitle="Everything you need to run successful Google Ads campaigns."
        />
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {included.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader
          title="Our Process"
          subtitle="A proven system for Google Ads success."
        />
        <div className="grid md:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <div key={index}>
              <div className="text-5xl font-bold text-gray-100 mb-4">{step.step}</div>
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Case Study Teaser */}
      <Section background="gray">
        <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 lg:p-12 text-white">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div className="text-sm font-medium opacity-80 mb-2">CASE STUDY</div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                How Elite Comfort HVAC 5x'd Their Ad Spend
              </h3>
              <p className="opacity-90 mb-6">
                "Best marketing investment we've ever made. The ROI speaks for itself."
              </p>
              <Button href="/results" variant="secondary">
                Read Case Study
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">$89 → $31</div>
                  <div className="text-sm opacity-80">Cost Per Lead</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">5.2x</div>
                  <div className="text-sm opacity-80">ROAS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Contact />
    </>
  );
}
