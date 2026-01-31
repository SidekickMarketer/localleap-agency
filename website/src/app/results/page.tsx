import { Metadata } from 'next';
import { Section, SectionHeader, Container, Button } from '@/components/ui';
import { Testimonials, Contact } from '@/components/sections';
import { defaultContent } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Results & Case Studies',
  description: 'Real results for real local businesses. See how we help dental offices, med spas, HVAC companies, and more grow with digital marketing.',
};

const stats = [
  { value: '127%', label: 'Average Lead Increase' },
  { value: '4.2x', label: 'Average ROAS' },
  { value: '50+', label: 'Happy Clients' },
  { value: '93%', label: 'Client Retention' },
];

const caseStudies = [
  {
    industry: 'Med Spa',
    client: 'Luxe Aesthetics',
    description: 'Luxe Aesthetics was struggling to fill their appointment calendar despite having excellent services. They had tried Facebook ads on their own with minimal results.',
    challenge: 'Low appointment volume, inconsistent lead flow, wasted ad spend on ineffective campaigns.',
    solution: 'We implemented a full-funnel strategy: Google Ads for high-intent searches, retargeting for website visitors, and a review generation campaign to build social proof.',
    results: [
      { label: 'Monthly Leads', before: '12', after: '47', change: '+292%' },
      { label: 'Google Ranking', before: '#8', after: '#1', change: '' },
      { label: 'Revenue Growth', before: '', after: '', change: '+186%' },
      { label: 'Google Reviews', before: '34', after: '127', change: '+273%' },
    ],
    quote: 'LocalLeap transformed our marketing. We went from struggling to fill our calendar to having a 3-week waitlist.',
    quoteName: 'Sarah Kim',
    quoteRole: 'Founder, Luxe Aesthetics',
  },
  {
    industry: 'HVAC',
    client: 'Elite Comfort Systems',
    description: 'Elite Comfort was spending $5,000/month on Google Ads but couldn\'t tell if it was working. They knew they were getting some calls but had no idea which ones came from ads.',
    challenge: 'No conversion tracking, poor campaign structure, wasted spend on irrelevant searches.',
    solution: 'We rebuilt their campaigns from scratch with proper tracking, implemented call tracking, created separate campaigns for each service, and optimized for lead quality over quantity.',
    results: [
      { label: 'Cost Per Lead', before: '$89', after: '$31', change: '-65%' },
      { label: 'Monthly Calls', before: '23', after: '78', change: '+239%' },
      { label: 'ROAS', before: '1.2x', after: '5.2x', change: '+333%' },
      { label: 'Booked Jobs', before: '8', after: '31', change: '+287%' },
    ],
    quote: 'Best marketing investment we\'ve ever made. The ROI speaks for itself - we 5x\'d our ad spend in the first month.',
    quoteName: 'Michael Rodriguez',
    quoteRole: 'Owner, Elite Comfort Systems',
  },
  {
    industry: 'Dental',
    client: 'Bright Smile Dental',
    description: 'Bright Smile Dental had a beautiful new office but wasn\'t showing up when patients searched for dentists in their area. Their previous marketing company had them stuck on page 2 of Google.',
    challenge: 'Poor local SEO, few online reviews, website not optimized for conversions.',
    solution: 'We optimized their Google Business Profile, built out local citations, implemented a review generation system, and redesigned their website for better conversion rates.',
    results: [
      { label: 'New Patients/mo', before: '18', after: '52', change: '+189%' },
      { label: 'Google Reviews', before: '89', after: '312', change: '+251%' },
      { label: 'Map Pack Ranking', before: '#7', after: '#1', change: '' },
      { label: 'Revenue Growth', before: '', after: '', change: '+94%' },
    ],
    quote: 'I was skeptical about hiring another marketing company after being burned twice. LocalLeap restored my faith. Transparent, honest, and they actually get results.',
    quoteName: 'Dr. James Patterson',
    quoteRole: 'Owner, Bright Smile Dental',
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Real Results for{' '}
              <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                Real Businesses
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Don't just take our word for it. Here are the actual results we've achieved
              for local businesses like yours.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <Section background="gray">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Case Studies */}
      <Section>
        <SectionHeader
          title="Case Studies"
          subtitle="Deep dives into how we helped these businesses grow."
        />
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-6 text-white">
                <div className="text-sm font-medium opacity-80">{study.industry}</div>
                <h3 className="text-2xl font-bold">{study.client}</h3>
              </div>
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">The Challenge</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Our Solution</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">The Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className="text-gray-500">{result.label}</span>
                          <span className="font-medium">
                            {result.before && result.after
                              ? `${result.before} → ${result.after}`
                              : result.change}
                            {result.change && result.before && (
                              <span className="text-green-600 ml-1">({result.change})</span>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <blockquote className="text-lg italic text-gray-600 mb-4">
                    "{study.quote}"
                  </blockquote>
                  <div className="font-medium">{study.quoteName}</div>
                  <div className="text-sm text-gray-500">{study.quoteRole}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Testimonials testimonials={defaultContent.testimonials} />

      {/* CTA */}
      <Contact />
    </>
  );
}
