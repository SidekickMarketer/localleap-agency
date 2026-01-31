import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Digital marketing services for local businesses. Google Ads, Local SEO, Social Media, and Website Design.',
};

export default function ServicesPage() {
  return (
    <main>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-serif text-stone-900 mb-6">
            Services
          </h1>
          <p className="text-xl text-stone-600 mb-12 leading-relaxed">
            I offer a handful of services, all focused on one thing: getting more customers
            to find you and choose you.
          </p>

          <div className="space-y-12">
            {services.map((service) => (
              <div
                key={service.slug}
                className="border-t border-stone-200 pt-8"
              >
                <h2 className="text-2xl font-serif text-stone-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="mb-6">
                  <h3 className="text-sm uppercase tracking-wide text-stone-400 mb-3">
                    What you get
                  </h3>
                  <ul className="space-y-2">
                    {service.whatYouGet.map((item, index) => (
                      <li key={index} className="text-stone-600 flex items-start gap-2">
                        <span className="text-stone-400 mt-1.5">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-stone-200 pt-12 mt-12">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">
              Not sure what you need?
            </h2>
            <p className="text-stone-600 mb-6">
              Let's talk. I'll take a look at your current situation and tell you
              what I'd recommend—no obligation.
            </p>
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
