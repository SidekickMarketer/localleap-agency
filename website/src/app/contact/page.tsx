import { Metadata } from 'next';
import { Mail, Clock, MessageSquare } from 'lucide-react';
import { founderInfo, faqs } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch to talk about your business and how I can help you get more customers.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 bg-pattern">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-serif text-stone-900 mb-6">
            Let's talk
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Want to chat about your business? I'm happy to have a conversation—no pitch,
            no pressure. Just reach out and tell me a bit about what you're working on.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold text-stone-900 mb-6">
                Get in touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-400 mb-1">Email</div>
                    <a
                      href={`mailto:${founderInfo.email}`}
                      className="text-stone-900 hover:text-accent-600 transition-colors font-medium"
                    >
                      {founderInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-400 mb-1">Response time</div>
                    <p className="text-stone-900 font-medium">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-400 mb-1">What happens next</div>
                    <p className="text-stone-600 text-sm">
                      I'll get back to you within a day. If it seems like we might
                      be a good fit, we'll set up a call.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="bg-stone-50 rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-stone-900 mb-6">
                  Send a message
                </h2>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-stone-700 mb-2">
                      What kind of business do you run?
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      placeholder="e.g., Dental practice in Austin"
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                      What would you like help with?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors font-medium"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-12">
            Common questions
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="font-medium text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-stone-400 leading-relaxed">
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
