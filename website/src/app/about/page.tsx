import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { founderInfo } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about how I work and why I focus on local businesses.',
};

const beliefs = [
  {
    title: 'Results matter more than activity',
    description: "I don't care about impressions or followers. I care about whether your phone is ringing with new customers.",
  },
  {
    title: 'Honesty over hype',
    description: "I'll tell you what's working and what isn't. If something's not a good fit, I'll say so upfront.",
  },
  {
    title: 'You should own everything',
    description: "Your accounts, your content, your data. If we stop working together, you keep all of it.",
  },
  {
    title: 'No long-term lock-ins',
    description: "I earn your business every month. If I'm not delivering, you can leave.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 bg-pattern">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-serif text-stone-900 mb-6">
            About
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            I'm {founderInfo.name}. I help local service businesses get more customers
            through digital marketing.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Photo placeholder */}
            <div>
              <div className="aspect-square bg-stone-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-stone-400 p-4">
                  <div className="w-16 h-16 bg-stone-300 rounded-full mx-auto mb-3"></div>
                  <p className="text-sm">Your photo</p>
                </div>
              </div>
            </div>

            {/* Story content */}
            <div className="md:col-span-2 space-y-6 text-stone-600 leading-relaxed">
              <p>
                Before starting LocalLeap, I spent years working at digital marketing agencies.
                I saw how they operated from the inside—and I didn't love what I saw.
              </p>
              <p>
                Local businesses consistently got the short end. They'd sign up expecting
                expert attention and instead get handed off to junior team members running
                the same playbook for every client. Reports were full of impressive-looking
                numbers that didn't actually mean more customers.
              </p>
              <p>
                I knew there was a better way to do this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-8">
            How I work
          </h2>
          <div className="space-y-6 text-stone-300 text-lg leading-relaxed">
            <p>
              I keep things small on purpose. I only work with a handful of clients at a time.
              That means I can actually pay attention to each business instead of spreading
              myself thin across dozens of accounts.
            </p>
            <p>
              I focus on local service businesses specifically—dentists, med spas, HVAC companies,
              plumbers, lawyers, that kind of thing. I understand these markets. I know what works
              and what doesn't.
            </p>
          </div>
        </div>
      </section>

      {/* What I Believe */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-stone-900 mb-12">
            What I believe
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {beliefs.map((belief, index) => (
              <div key={index} className="p-6 bg-stone-50 rounded-xl">
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-accent-600" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">
                  {belief.title}
                </h3>
                <p className="text-stone-600">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-4">
            Want to talk?
          </h2>
          <p className="text-accent-100 text-lg mb-8">
            If this sounds like the kind of marketing partner you're looking for,
            I'd like to hear about your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3.5 bg-white text-accent-700 rounded-lg hover:bg-accent-50 transition-colors font-medium"
          >
            Get in touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
