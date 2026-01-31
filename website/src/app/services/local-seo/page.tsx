import { Metadata } from 'next';
import { Check, MapPin, Star, Building2, Link2 } from 'lucide-react';
import { Section, SectionHeader, Container, Button } from '@/components/ui';
import { Contact } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Local SEO Services',
  description: 'Rank #1 in Google Maps and local search results. Local SEO services that help customers find your business when they need you most.',
};

const benefits = [
  {
    icon: MapPin,
    title: 'Dominate Google Maps',
    description: 'Appear in the coveted "Map Pack" when customers search for services in your area.',
  },
  {
    icon: Star,
    title: 'Build Your Reputation',
    description: 'Generate more 5-star reviews and manage your online reputation effectively.',
  },
  {
    icon: Building2,
    title: 'Local Authority',
    description: 'Build citations and local links that establish your business as the area leader.',
  },
  {
    icon: Link2,
    title: 'Consistent NAP',
    description: 'Ensure your Name, Address, Phone is consistent across 50+ directories.',
  },
];

const included = [
  'Google Business Profile optimization',
  'Citation building (50+ directories)',
  'NAP consistency audit & fixes',
  'Review generation strategy',
  'Review response management',
  'Local keyword research',
  'On-page local optimization',
  'Local link building',
  'Competitor analysis',
  'Monthly ranking reports',
];

const rankings = [
  { keyword: '"plumber near me"', before: 'Not ranked', after: '#2' },
  { keyword: '"emergency plumbing [city]"', before: '#18', after: '#1' },
  { keyword: '"water heater repair"', before: '#12', after: '#3' },
  { keyword: '"drain cleaning service"', before: 'Not ranked', after: '#4' },
];

export default function LocalSEOPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-medium mb-6">
                Local SEO Services
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
                Rank #1 in{' '}
                <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                  Google Maps
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                When customers search for services in your area, you need to show up first.
                Our local SEO services put your business at the top of Google Maps and local search results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Get a Free SEO Audit
                </Button>
                <Button href="/pricing" variant="outline" size="lg">
                  See Pricing
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="text-sm text-gray-500 mb-4">Sample Ranking Improvements</div>
                <div className="space-y-3">
                  {rankings.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">{item.keyword}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">{item.before}</span>
                        <span className="text-gray-300">→</span>
                        <span className="text-sm font-bold text-green-600">{item.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <Section>
        <SectionHeader
          title="Why Local SEO"
          titleHighlight="Matters"
          subtitle="46% of all Google searches have local intent. If you're not ranking locally, you're invisible to half your potential customers."
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
          subtitle="Complete local SEO management to dominate your market."
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

      {/* The Map Pack */}
      <Section>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              The Google Map Pack Gets{' '}
              <span className="text-primary-500">42% of Clicks</span>
            </h2>
            <p className="text-gray-600 mb-6">
              When someone searches for a local service, Google shows 3 businesses in the "Map Pack"
              at the top of results. These 3 spots get 42% of all clicks.
            </p>
            <p className="text-gray-600 mb-6">
              If you're not in those top 3 positions, you're losing nearly half of your potential
              customers to competitors who are.
            </p>
            <p className="text-gray-600 mb-8">
              Our local SEO services are specifically designed to get you into and stay in the Map Pack.
            </p>
            <Button href="/contact">
              Check My Rankings
            </Button>
          </div>
          <div className="hidden lg:block">
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-primary-500 shadow">
                  <div className="font-bold">#1 - Your Business</div>
                  <div className="text-sm text-gray-500">4.9 ★ (312 reviews)</div>
                </div>
                <div className="bg-white rounded-lg p-4 opacity-60">
                  <div className="font-medium">#2 - Competitor A</div>
                  <div className="text-sm text-gray-500">4.7 ★ (189 reviews)</div>
                </div>
                <div className="bg-white rounded-lg p-4 opacity-40">
                  <div className="font-medium">#3 - Competitor B</div>
                  <div className="text-sm text-gray-500">4.5 ★ (97 reviews)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Case Study */}
      <Section background="gray">
        <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 lg:p-12 text-white">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div className="text-sm font-medium opacity-80 mb-2">CASE STUDY</div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Bright Smile Dental: From Page 2 to #1
              </h3>
              <p className="opacity-90 mb-6">
                "Finally, a marketing partner who understands our industry. New patient numbers have never been better."
              </p>
              <Button href="/results" variant="secondary">
                Read Case Study
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">89 → 312</div>
                  <div className="text-sm opacity-80">Google Reviews</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">#1</div>
                  <div className="text-sm opacity-80">Map Pack Ranking</div>
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
