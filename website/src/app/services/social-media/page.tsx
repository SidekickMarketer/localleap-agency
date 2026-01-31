import { Metadata } from 'next';
import { Check, Users, Calendar, TrendingUp, MessageCircle } from 'lucide-react';
import { Section, SectionHeader, Container, Button } from '@/components/ui';
import { Contact } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Social Media Management',
  description: 'Done-for-you social media management for local businesses. Content creation, posting, and community management that builds your brand.',
};

const benefits = [
  {
    icon: Calendar,
    title: 'Consistent Posting',
    description: 'Never miss a day. We create and schedule content so your brand stays active.',
  },
  {
    icon: Users,
    title: 'Grow Your Following',
    description: 'Build a community of engaged followers who become customers.',
  },
  {
    icon: MessageCircle,
    title: 'Community Management',
    description: 'We respond to comments and messages so you never miss an opportunity.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Tracking',
    description: 'Monthly reports showing engagement, growth, and what\'s working.',
  },
];

const included = [
  'Content strategy development',
  'Custom graphics & visuals',
  'Caption writing',
  'Hashtag research',
  'Posting & scheduling',
  'Comment & DM management',
  'Story creation',
  'Monthly content calendar',
  'Performance analytics',
  'Competitor monitoring',
];

const platforms = [
  { name: 'Instagram', posts: '12-20 posts/month' },
  { name: 'Facebook', posts: '12-20 posts/month' },
  { name: 'LinkedIn', posts: '8-12 posts/month' },
  { name: 'TikTok', posts: 'Available as add-on' },
];

export default function SocialMediaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-medium mb-6">
                Social Media Management
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
                Stay Top of Mind with{' '}
                <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                  Social Media
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                You're too busy running your business to post on social media every day.
                We handle everything—strategy, content, posting, and engagement—so you don't have to.
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
                <div className="text-sm text-gray-500 mb-4">Platforms We Manage</div>
                <div className="space-y-3">
                  {platforms.map((platform, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{platform.name}</span>
                      <span className="text-sm text-gray-500">{platform.posts}</span>
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
          title="Why Hire a"
          titleHighlight="Social Media Manager"
          subtitle="Posting randomly when you have time doesn't work. Consistency and strategy drive real results."
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
          subtitle="Full-service social media management."
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

      {/* Content Mix */}
      <Section>
        <SectionHeader
          title="Our Content Strategy"
          subtitle="A balanced mix designed to engage, educate, and convert."
        />
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-primary-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-primary-500 mb-2">40%</div>
            <div className="font-bold mb-1">Value & Education</div>
            <p className="text-sm text-gray-600">Tips, how-tos, and industry insights that help your audience.</p>
          </div>
          <div className="bg-accent-500/10 rounded-xl p-6">
            <div className="text-3xl font-bold text-accent-500 mb-2">30%</div>
            <div className="font-bold mb-1">Behind the Scenes</div>
            <p className="text-sm text-gray-600">Team photos, process shots, and personality that humanizes your brand.</p>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-500 mb-2">20%</div>
            <div className="font-bold mb-1">Promotional</div>
            <p className="text-sm text-gray-600">Services, offers, and calls-to-action that drive business.</p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-yellow-500 mb-2">10%</div>
            <div className="font-bold mb-1">Social Proof</div>
            <p className="text-sm text-gray-600">Reviews, testimonials, and user-generated content.</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Contact />
    </>
  );
}
