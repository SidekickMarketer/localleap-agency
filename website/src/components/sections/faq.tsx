'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { FAQItem } from '@/types';

interface FAQProps {
  title?: string;
  faqs: FAQItem[];
}

export function FAQ({ title = 'Frequently Asked Questions', faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section background="gray" containerSize="md">
      <SectionHeader title={title} />

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq._id}
            className="bg-white rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-left font-semibold text-lg hover:bg-gray-50 transition-colors"
            >
              {faq.question}
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ml-4',
                  openIndex === index && 'rotate-180'
                )}
              />
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-200',
                openIndex === index ? 'max-h-96' : 'max-h-0'
              )}
            >
              <p className="px-6 pb-6 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
