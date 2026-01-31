import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Search, Share2, Monitor } from 'lucide-react';
import { services } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Digital marketing services for local businesses. Google Ads, Local SEO, Social Media, and Website Design.',
};

export default function ServicesPage() {
  const icons: Record<string, any> = {
    'google-ads': Search,
    'local-seo': MapPin,
    'social-media': Share2,
    'website-design': Monitor,
  };

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 bg-pattern">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-serif text-stone-900 mb-6">
            Services
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            A focused set of services, all aimed at one thing: getting more customers
            to find you and choose you.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {services.map((service) => {
              const Icon = icons[service.slug] || Search;
              return (
                <div
                  key={service.slug}
                  className="grid md:grid-cols-3 gap-8 pb-16 border-b border-stone-200 last:border-0 last:pb-0"
                >
                  <div>
                    <div className="w-14 h-14 bg-accent-50 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-accent-600" />
                    </div>
                    <h2 className="text-2xl font-serif text-stone-900">
                      {service.title}
                    </h2>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-stone-600 mb-6 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-stone-400 mb-4 font-medium">
                        What you get
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {service.whatYouGet.map((item, index) => (
                          <li key={index} className="text-stone-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">
            Not sure what you need?
          </h2>
          <p className="text-stone-600 mb-8 text-lg">
            Let's talk. I'll take a look at your current situation and tell you
            what I'd recommend—no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3.5 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors font-medium"
          >
            Get in touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
