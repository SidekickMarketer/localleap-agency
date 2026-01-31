import { Star } from 'lucide-react';
import { Section, SectionHeader, Card } from '@/components/ui';
import { getInitials } from '@/lib/utils';
import type { Testimonial } from '@/types';

interface TestimonialsProps {
  title?: string;
  testimonials: Testimonial[];
}

export function Testimonials({
  title = 'What Our Clients Say',
  testimonials,
}: TestimonialsProps) {
  return (
    <Section>
      <SectionHeader title={title} />

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial._id} className="border border-gray-200">
            {/* Star Rating */}
            {testimonial.rating && (
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            )}

            {/* Content */}
            <p className="text-gray-600 mb-6">&ldquo;{testimonial.content}&rdquo;</p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">
                {getInitials(testimonial.name)}
              </div>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">
                  {testimonial.role && `${testimonial.role}, `}
                  {testimonial.company}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
