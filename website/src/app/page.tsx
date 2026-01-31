import Link from 'next/link';
import { ArrowRight, MapPin, Search, Share2, Monitor, Check } from 'lucide-react';
import { siteConfig, founderInfo, services, workProcess } from '@/lib/config';

export default function Home() {
  const icons: Record<string, any> = {
    'google-ads': Search,
    'local-seo': MapPin,
    'social-media': Share2,
    'website-design': Monitor,
  };

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-pattern">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                Available for new clients
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight text-stone-900 mb-6">
                I help local businesses get more customers.
              </h1>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                If you run a dental practice, med spa, HVAC company, or similar local business—and you want more customers finding you online—that's what I do.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors font-medium"
                >
                  Let's talk
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-white border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors font-medium"
                >
                  What I offer
                </Link>
              </div>
            </div>

            {/* Photo placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-stone-200 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-stone-300 rounded-full mx-auto mb-4"></div>
                    <p className="text-sm">Your photo here</p>
                    <p className="text-xs mt-1 text-stone-400">Add a professional headshot</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-100 rounded-xl -z-10"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-stone-100 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif mb-8">
            Here's the thing about marketing agencies.
          </h2>
          <div className="space-y-6 text-stone-300 text-lg leading-relaxed">
            <p>
              Most of them treat local businesses as an afterthought. You get the junior team, the cookie-cutter strategy, and reports full of metrics that don't actually mean anything to your bottom line.
            </p>
            <p>
              I do it differently. I work with a small number of local businesses at a time. I focus on what actually drives customers—not vanity metrics. And I'm straightforward about what's working and what isn't.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-600 flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-stone-200">No long-term contracts</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-600 flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-stone-200">You own everything</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-600 flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-stone-200">Focused on results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-4">
              What I can help with
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              A focused set of services, all aimed at one thing: getting more customers to find you and choose you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = icons[service.slug] || Search;
              return (
                <div
                  key={service.slug}
                  className="group p-8 bg-white border border-stone-200 rounded-2xl card-hover"
                >
                  <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.whatYouGet.slice(0, 3).map((item, index) => (
                      <li key={index} className="text-sm text-stone-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent-500 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors"
            >
              View all services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-4">
              How it works
            </h2>
            <p className="text-lg text-stone-600">
              No complicated processes. Just a straightforward way to get started.
            </p>
          </div>

          <div className="space-y-0">
            {workProcess.map((step, index) => (
              <div key={step.step} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Line connector */}
                {index < workProcess.length - 1 && (
                  <div className="absolute left-5 top-12 w-0.5 h-full bg-stone-200"></div>
                )}

                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center font-semibold text-sm">
                  {step.step}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-stone-900 text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif mb-4">
            Ready to talk about your business?
          </h2>
          <p className="text-accent-100 text-lg mb-8 max-w-2xl mx-auto">
            No pitch, no pressure. Just a conversation about what you're trying to achieve and whether I can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent-700 rounded-lg hover:bg-accent-50 transition-colors font-semibold"
          >
            Get in touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
