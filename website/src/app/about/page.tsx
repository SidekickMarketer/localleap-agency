import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { founderInfo } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about how I work and why I focus on local businesses.',
};

export default function AboutPage() {
  return (
    <main>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-serif text-stone-900 mb-8">
            About
          </h1>

          <div className="space-y-6 text-stone-600 leading-relaxed">
            <p className="text-xl">
              I'm {founderInfo.name}. I help local service businesses get more customers
              through digital marketing.
            </p>

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

            <h2 className="text-2xl font-serif text-stone-900 pt-8">
              How I work
            </h2>

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

            <h2 className="text-2xl font-serif text-stone-900 pt-8">
              What I believe
            </h2>

            <ul className="space-y-4">
              <li>
                <strong className="text-stone-900">Results matter more than activity.</strong>{' '}
                I don't care about impressions or followers. I care about whether your phone
                is ringing with new customers.
              </li>
              <li>
                <strong className="text-stone-900">Honesty over hype.</strong>{' '}
                I'll tell you what's working and what isn't. If something's not a good fit,
                I'll say so upfront.
              </li>
              <li>
                <strong className="text-stone-900">You should own everything.</strong>{' '}
                Your accounts, your content, your data. If we stop working together,
                you keep all of it.
              </li>
              <li>
                <strong className="text-stone-900">No long-term lock-ins.</strong>{' '}
                I earn your business every month. If I'm not delivering, you can leave.
              </li>
            </ul>

            <h2 className="text-2xl font-serif text-stone-900 pt-8">
              Want to talk?
            </h2>

            <p>
              If this sounds like the kind of marketing partner you're looking for,
              I'd like to hear about your business.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-stone-900 text-white rounded hover:bg-stone-800 transition-colors"
            >
              Get in touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
