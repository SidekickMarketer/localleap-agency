import { Metadata } from 'next';
import { Mail, Phone, Clock } from 'lucide-react';
import { Section, Container } from '@/components/ui';
import { Contact as ContactForm } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch for a free strategy call. We\'ll audit your current marketing and show you exactly how to get more customers.',
};

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@localleap.com',
    href: 'mailto:hello@localleap.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 lg:pt-40 lg:pb-12 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Let's{' '}
              <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                Talk
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Ready to get more customers? Book a free strategy call and we'll show you
              exactly how to grow your business with digital marketing.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-medium text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="font-medium text-gray-900">{item.value}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Form */}
      <ContactForm
        title="Book Your Free Strategy Call"
        subtitle="Fill out the form below and we'll reach out within 24 hours to schedule your call."
      />

      {/* What to Expect */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="font-bold mb-2">We Listen</h3>
              <p className="text-gray-600 text-sm">
                We'll learn about your business, goals, and current marketing challenges.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="font-bold mb-2">We Audit</h3>
              <p className="text-gray-600 text-sm">
                We'll review your online presence and identify opportunities for improvement.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="font-bold mb-2">We Recommend</h3>
              <p className="text-gray-600 text-sm">
                We'll share specific, actionable recommendations—whether you hire us or not.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
