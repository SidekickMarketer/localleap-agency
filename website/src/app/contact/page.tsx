import { Metadata } from 'next';
import { founderInfo, faqs } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch to talk about your business and how I can help you get more customers.',
};

export default function ContactPage() {
  return (
    <main>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-serif text-stone-900 mb-6">
            Let's talk
          </h1>
          <p className="text-xl text-stone-600 mb-12 leading-relaxed">
            Want to chat about your business? I'm happy to have a conversation—no pitch,
            no pressure. Just reach out and tell me a bit about what you're working on.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-lg font-medium text-stone-900 mb-4">
                Get in touch
              </h2>
              <div className="space-y-4 text-stone-600">
                <div>
                  <div className="text-sm text-stone-400 mb-1">Email</div>
                  <a
                    href={`mailto:${founderInfo.email}`}
                    className="hover:text-stone-900 transition-colors"
                  >
                    {founderInfo.email}
                  </a>
                </div>
                {founderInfo.phone && (
                  <div>
                    <div className="text-sm text-stone-400 mb-1">Phone</div>
                    <a
                      href={`tel:${founderInfo.phone}`}
                      className="hover:text-stone-900 transition-colors"
                    >
                      {founderInfo.phone}
                    </a>
                  </div>
                )}
                {founderInfo.calendlyUrl && (
                  <div>
                    <div className="text-sm text-stone-400 mb-1">Book a call</div>
                    <a
                      href={founderInfo.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-900 transition-colors"
                    >
                      Schedule on Calendly
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-8 p-6 bg-stone-100 rounded">
                <h3 className="font-medium text-stone-900 mb-2">
                  What to expect
                </h3>
                <p className="text-stone-600 text-sm">
                  I'll get back to you within a day or two. If it seems like we might
                  be a good fit, we'll set up a call to discuss your business in more detail.
                </p>
              </div>
            </div>

            {/* Simple Contact Form */}
            <div>
              <h2 className="text-lg font-medium text-stone-900 mb-4">
                Send a message
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-stone-600 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:border-stone-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-stone-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:border-stone-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm text-stone-600 mb-1">
                    What kind of business do you run?
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    placeholder="e.g., Dental practice in Austin"
                    className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:border-stone-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-stone-600 mb-1">
                    What would you like help with?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:border-stone-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-stone-900 text-white rounded hover:bg-stone-800 transition-colors"
                >
                  Send message
                </button>
              </form>
            </div>
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
