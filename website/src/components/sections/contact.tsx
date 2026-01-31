'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Section, Button, Input, Select } from '@/components/ui';

interface ContactProps {
  title?: string;
  subtitle?: string;
  features?: string[];
}

const challengeOptions = [
  { value: 'leads', label: 'Not enough leads/customers' },
  { value: 'visibility', label: "Can't be found on Google" },
  { value: 'ads', label: 'Wasting money on ads' },
  { value: 'social', label: 'No time for social media' },
  { value: 'other', label: 'Something else' },
];

export function Contact({
  title = 'Ready to Dominate Your Local Market?',
  subtitle = "Book a free 30-minute strategy call. We'll audit your current online presence and show you exactly how to get more customers.",
  features = [
    'Free online presence audit',
    'Custom strategy recommendations',
    'No pressure, no obligation',
  ],
}: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    // In production, replace with your form handler (Netlify Forms, Formspree, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <Section id="contact" background="gradient">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div className="mb-12 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-xl opacity-90 mb-8">{subtitle}</p>
          <ul className="space-y-4 text-lg">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl text-gray-900">
          {!isSubmitted ? (
            <>
              <h3 className="text-2xl font-bold mb-6">
                Book Your Free Strategy Call
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Your Name"
                  id="name"
                  name="name"
                  required
                  placeholder="John Smith"
                />
                <Input
                  label="Business Name"
                  id="business"
                  name="business"
                  required
                  placeholder="Smith's Plumbing"
                />
                <Input
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                />
                <Input
                  label="Phone"
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(555) 123-4567"
                />
                <Select
                  label="What's your biggest marketing challenge?"
                  id="challenge"
                  name="challenge"
                  options={challengeOptions}
                  placeholder="Select one..."
                  required
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Book My Free Strategy Call'}
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  We&apos;ll respond within 24 hours to schedule your call.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Thank You!</h4>
              <p className="text-gray-600">
                We&apos;ll be in touch within 24 hours to schedule your strategy
                call.
              </p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
