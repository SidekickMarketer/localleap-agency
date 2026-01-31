import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { faqs } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Straightforward pricing for local business marketing. No hidden fees, no long-term contracts.',
};

export default function PricingPage() {
  return (
    <main>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-serif text-stone-900 mb-6">
            Pricing
          </h1>
          <p className="text-xl text-stone-600 mb-12 leading-relaxed">
            Pricing depends on what you need. I don't do one-size-fits-all packages—every
            business is different, and your marketing should reflect that.
          </p>

          <div className="space-y-8">
            <div className="border border-stone-200 rounded p-6">
              <h2 className="text-lg font-medium text-stone-900 mb-4">
                Ongoing Marketing
              </h2>
              <p className="text-stone-600 mb-4">
                Most clients spend <strong className="text-stone-900">$1,500 - $3,000/month</strong> for
                ongoing marketing work. This includes a combination of services based on what
                makes sense for your business—could be Google Ads, SEO, social media, or all three.
              </p>
              <p className="text-stone-500 text-sm">
                3-month minimum, then month-to-month. Ad spend is separate and paid directly to the platforms.
              </p>
            </div>

            <div className="border border-stone-200 rounded p-6">
              <h2 className="text-lg font-medium text-stone-900 mb-4">
                Website Design
              </h2>
              <p className="text-stone-600 mb-4">
                A new website runs <strong className="text-stone-900">$3,000 - $6,000</strong> depending
                on how many pages you need and how complex the design is. Simple 5-page sites
                are on the lower end; larger sites with custom features cost more.
              </p>
              <p className="text-stone-500 text-sm">
                One-time project. Includes basic SEO setup and a site you can update yourself.
              </p>
            </div>

            <div className="border border-stone-200 rounded p-6">
              <h2 className="text-lg font-medium text-stone-900 mb-4">
                Not sure yet?
              </h2>
              <p className="text-stone-600 mb-4">
                That's fine. We can have a conversation about your business first. I'll tell you
                what I'd recommend and give you a specific quote—no obligation to move forward.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-stone-200">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">
              How I charge
            </h2>
            <ul className="space-y-4 text-stone-600">
              <li className="flex items-start gap-3">
                <span className="text-stone-400">-</span>
                <span>
                  <strong className="text-stone-900">No long-term contracts.</strong> After
                  the initial 3 months, you can cancel anytime with 30 days notice.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-400">-</span>
                <span>
                  <strong className="text-stone-900">No hidden fees.</strong> The price I quote
                  is the price you pay. Ad spend is separate and goes directly to Google/Meta.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-400">-</span>
                <span>
                  <strong className="text-stone-900">You own everything.</strong> Your accounts,
                  your content, your website—it's all yours even if we stop working together.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-stone-900 text-white rounded hover:bg-stone-800 transition-colors"
            >
              Let's discuss your project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-stone-200 bg-stone-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-serif text-stone-900 mb-8">
            Common questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-stone-200 pb-6 last:border-0">
                <h3 className="font-medium text-stone-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-stone-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
