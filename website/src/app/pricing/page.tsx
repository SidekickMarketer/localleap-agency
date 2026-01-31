import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { faqs } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Straightforward pricing for local business marketing. No hidden fees, no long-term contracts.',
};

const principles = [
  {
    title: 'No long-term contracts',
    description: "After the initial 3 months, you can cancel anytime with 30 days notice.",
  },
  {
    title: 'No hidden fees',
    description: "The price I quote is the price you pay. Ad spend goes directly to the platforms.",
  },
  {
    title: 'You own everything',
    description: "Your accounts, your content, your website—all yours, even if we stop working together.",
  },
];

export default function PricingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 bg-pattern">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-serif text-stone-900 mb-6">
            Pricing
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Pricing depends on what you need. I don't do one-size-fits-all packages—every
            business is different, and your marketing should reflect that.
          </p>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ongoing Marketing */}
            <div className="p-8 bg-stone-900 text-white rounded-2xl">
              <div className="text-sm uppercase tracking-wider text-stone-400 mb-2 font-medium">
                Ongoing
              </div>
              <h2 className="text-2xl font-serif mb-4">
                Marketing Services
              </h2>
              <div className="mb-6">
                <span className="text-4xl font-bold">$1,500 - $3,000</span>
                <span className="text-stone-400">/month</span>
              </div>
              <p className="text-stone-300 mb-6 leading-relaxed">
                Most clients spend in this range for ongoing marketing work. This includes a
                combination of services based on what makes sense for your business—could be
                Google Ads, SEO, social media, or all three.
              </p>
              <div className="text-sm text-stone-400 border-t border-stone-700 pt-4">
                3-month minimum, then month-to-month. Ad spend is separate.
              </div>
            </div>

            {/* Website Design */}
            <div className="p-8 bg-white border border-stone-200 rounded-2xl">
              <div className="text-sm uppercase tracking-wider text-stone-400 mb-2 font-medium">
                One-time
              </div>
              <h2 className="text-2xl font-serif text-stone-900 mb-4">
                Website Design
              </h2>
              <div className="mb-6">
                <span className="text-4xl font-bold text-stone-900">$3,000 - $6,000</span>
              </div>
              <p className="text-stone-600 mb-6 leading-relaxed">
                A new website runs in this range depending on how many pages you need and
                how complex the design is. Simple 5-page sites are on the lower end; larger
                sites with custom features cost more.
              </p>
              <div className="text-sm text-stone-400 border-t border-stone-200 pt-4">
                Includes basic SEO setup and a site you can update yourself.
              </div>
            </div>
          </div>

          {/* Not Sure */}
          <div className="mt-8 p-8 bg-accent-50 rounded-2xl text-center">
            <h2 className="text-xl font-semibold text-stone-900 mb-2">
              Not sure what you need?
            </h2>
            <p className="text-stone-600 mb-6">
              That's fine. We can have a conversation about your business first. I'll tell you
              what I'd recommend and give you a specific quote—no obligation to move forward.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors font-medium"
            >
              Let's discuss your project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How I Charge */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-stone-900 mb-12 text-center">
            How I charge
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index}>
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-accent-600" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-stone-600 text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-stone-900 mb-12">
            Common questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-stone-200 pb-8 last:border-0">
                <h3 className="font-semibold text-stone-900 mb-3 text-lg">
                  {faq.question}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {faq.answer}
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
            Ready to get started?
          </h2>
          <p className="text-accent-100 text-lg mb-8">
            Let's have a conversation about your business and what you're trying to achieve.
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
