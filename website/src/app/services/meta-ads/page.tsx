import { Metadata } from 'next';
import { Check, Target, Users, RefreshCw, BarChart3 } from 'lucide-react';
import { Section, SectionHeader, Container, Button } from '@/components/ui';
import { Contact } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Facebook & Instagram Ads Management',
  description: 'Meta Ads (Facebook & Instagram) management for local businesses. Targeted campaigns that reach your ideal customers and drive real leads.',
};

const benefits = [
  {
    icon: Target,
    title: 'Precise Targeting',
    description: 'Reach people by location, demographics, interests, and behaviors—only pay to reach your ideal customer.',
  },
  {
    icon: Users,
    title: 'Build Awareness',
    description: 'Get your brand in front of thousands of local customers who don\'t know you exist yet.',
  },
  {
    icon: RefreshCw,
    title: 'Retargeting',
    description: 'Stay in front of people who visited your website but didn\'t convert.',
  },
  {
    icon: BarChart3,
    title: 'Track Everything',
    description: 'Know exactly how many leads and customers your ads generate.',
  },
];

const included = [
  'Campaign strategy development',
  'Audience research & targeting',
  'Ad creative development',
  'Ad copywriting',
  'A/B testing',
  'Retargeting campaigns',
  'Conversion tracking setup',
  'Pixel installation',
  'Weekly optimization',
  'Monthly performance reports',
];

const adTypes = [
  {
    name: 'Lead Generation Ads',
    description: 'Capture contact info directly within Facebook/Instagram without visitors leaving the app.',
  },
  {
    name: 'Traffic Campaigns',
    description: 'Drive visitors to your website or landing page to learn more about your services.',
  },
  {
    name: 'Retargeting Ads',
    description: 'Show ads to people who visited your website but didn\'t take action.',
  },
  {
    name: 'Brand Awareness',
    description: 'Get your business in front of as many local people as possible.',
  },
];

export default function MetaAdsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-medium mb-6">
                Meta Ads (Facebook & Instagram)
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
                Reach Customers Where They{' '}
                <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                  Scroll Daily
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your customers spend hours on Facebook and Instagram every day.
                Meta Ads let you put your business directly in their feed with laser-targeted campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Get Started
                </Button>
                <Button href="/pricing" variant="outline" size="lg">
                  See Pricing
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="text-sm text-gray-500 mb-4">Why Meta Ads?</div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-500">3B+</div>
                    <div className="text-sm text-gray-600">Monthly active users on Meta platforms</div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-500">$0.50</div>
                    <div className="text-sm text-gray-600">Average cost per click for local businesses</div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-500">10x</div>
                    <div className="text-sm text-gray-600">More targeting options than Google Ads</div>
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
          title="Why Meta Ads"
          titleHighlight="For Local Businesses"
          subtitle="Google Ads captures demand. Meta Ads creates demand by reaching people before they start searching."
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

      {/* Campaign Types */}
      <Section background="gray">
        <SectionHeader
          title="Campaign Types"
          subtitle="Different campaigns for different goals."
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {adTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-xl p-6">
              <h3 className="font-bold mb-2">{type.name}</h3>
              <p className="text-gray-600 text-sm">{type.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What's Included */}
      <Section>
        <SectionHeader
          title="What's Included"
          subtitle="Full-service Meta Ads management."
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
      </Section>

      {/* CTA */}
      <Contact />
    </>
  );
}
