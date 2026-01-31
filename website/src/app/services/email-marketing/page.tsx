import { Metadata } from 'next';
import { Check, Mail, Zap, Users, RefreshCw } from 'lucide-react';
import { Section, SectionHeader, Container, Button } from '@/components/ui';
import { Contact } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Email Marketing Services',
  description: 'Email marketing that turns leads into customers and customers into repeat buyers. Automated sequences that work 24/7.',
};

const benefits = [
  {
    icon: Zap,
    title: 'Automated Sequences',
    description: 'Set it and forget it. Emails that nurture leads automatically while you focus on your business.',
  },
  {
    icon: Users,
    title: 'Nurture Leads',
    description: 'Turn cold leads into warm prospects ready to buy with strategic email sequences.',
  },
  {
    icon: RefreshCw,
    title: 'Win Back Customers',
    description: 'Re-engage past customers who haven\'t visited in a while with targeted campaigns.',
  },
  {
    icon: Mail,
    title: 'Stay Top of Mind',
    description: 'Regular newsletters keep your brand front and center when they\'re ready to buy.',
  },
];

const included = [
  'Email strategy development',
  'List segmentation setup',
  'Automated welcome sequence',
  'Lead nurturing sequences',
  'Monthly newsletter campaigns',
  'Win-back campaigns',
  'Email template design',
  'A/B testing',
  'Deliverability optimization',
  'Performance reporting',
];

const sequences = [
  {
    name: 'Welcome Sequence',
    emails: 5,
    description: 'Introduce new subscribers to your brand and services',
  },
  {
    name: 'Lead Nurture',
    emails: 7,
    description: 'Guide prospects from interest to purchase',
  },
  {
    name: 'Win-Back Campaign',
    emails: 3,
    description: 'Re-engage customers who haven\'t purchased recently',
  },
  {
    name: 'Post-Purchase',
    emails: 4,
    description: 'Turn one-time buyers into repeat customers',
  },
];

export default function EmailMarketingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-medium mb-6">
                Email Marketing
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
                Email Marketing That{' '}
                <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                  Sells While You Sleep
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Turn leads into customers and customers into repeat buyers with email sequences
                that work 24/7. The highest ROI marketing channel, done right.
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
                <div className="text-sm text-gray-500 mb-4">Email Marketing ROI</div>
                <div className="text-center py-8">
                  <div className="text-6xl font-bold text-primary-500 mb-2">$42</div>
                  <div className="text-gray-600">Average return for every $1 spent</div>
                </div>
                <div className="text-xs text-gray-400 text-center">
                  Source: DMA National Email Client Report
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <Section>
        <SectionHeader
          title="Why Email Marketing"
          titleHighlight="Still Works"
          subtitle="Social media reach is declining. Email gives you direct access to your audience's inbox."
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

      {/* Sequences */}
      <Section background="gray">
        <SectionHeader
          title="Automated Sequences"
          subtitle="Set up once, work forever."
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sequences.map((sequence, index) => (
            <div key={index} className="bg-white rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold">{sequence.name}</h3>
                <span className="text-sm bg-primary-100 text-primary-700 px-2 py-1 rounded">
                  {sequence.emails} emails
                </span>
              </div>
              <p className="text-gray-600 text-sm">{sequence.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What's Included */}
      <Section>
        <SectionHeader
          title="What's Included"
          subtitle="Complete email marketing management."
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
