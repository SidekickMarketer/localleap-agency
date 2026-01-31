import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig, founderInfo, services, workProcess } from '@/lib/config';

export default function Home() {
  return (
    <main>
      {/* Hero - Simple, personal, no gradients */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-serif font-normal leading-tight text-stone-900 mb-6">
            I help local businesses get more customers.
          </h1>
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">
            If you run a local service business—a dental practice, med spa, HVAC company,
            or something similar—and you want more customers finding you online,
            that's what I do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-stone-900 text-white rounded hover:bg-stone-800 transition-colors"
            >
              Let's talk
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-stone-300 text-stone-700 rounded hover:border-stone-400 transition-colors"
            >
              What I offer
            </Link>
          </div>
        </div>
      </section>

      {/* Brief intro */}
      <section className="py-16 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-serif text-stone-900 mb-6">
            Here's the thing about marketing agencies.
          </h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              Most of them treat local businesses as an afterthought. You get the junior
              team, the cookie-cutter strategy, and reports full of metrics that don't
              actually mean anything to your bottom line.
            </p>
            <p>
              I do it differently. I work with a small number of local businesses at a time.
              I focus on what actually drives customers—not vanity metrics. And I'm
              straightforward about what's working and what isn't.
            </p>
            <p>
              If that sounds like what you're looking for,{' '}
              <Link href="/about" className="text-stone-900 underline underline-offset-4 hover:text-accent-600">
                read more about how I work
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Services - Simple list */}
      <section className="py-16 border-t border-stone-200 bg-stone-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-serif text-stone-900 mb-8">
            What I can help with
          </h2>
          <div className="space-y-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block p-6 bg-white rounded border border-stone-200 hover:border-stone-300 transition-colors group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-stone-600">
                      {service.shortDescription}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-stone-600 transition-colors flex-shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process - How it works */}
      <section className="py-16 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-serif text-stone-900 mb-8">
            How it works
          </h2>
          <div className="space-y-8">
            {workProcess.map((step) => (
              <div key={step.step} className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center text-sm font-medium">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-medium text-stone-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-stone-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Simple */}
      <section className="py-16 border-t border-stone-200 bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif mb-4">
            Want to talk about your business?
          </h2>
          <p className="text-stone-400 mb-8">
            No pitch, no pressure. Just a conversation about what you're trying to achieve
            and whether I can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-stone-900 rounded hover:bg-stone-100 transition-colors"
          >
            Get in touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
