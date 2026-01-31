import { Check } from 'lucide-react';
import { Section, SectionHeader, Card, IconBox } from '@/components/ui';
import type { Service } from '@/types';

interface ServicesProps {
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  services: Service[];
}

export function Services({
  title = 'Everything You Need to',
  titleHighlight = 'Dominate Your Market',
  subtitle = 'We handle your entire digital marketing so you can focus on what you do best - running your business.',
  services,
}: ServicesProps) {
  return (
    <Section id="services" background="gray">
      <SectionHeader
        title={title}
        titleHighlight={titleHighlight}
        subtitle={subtitle}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service._id}>
            <IconBox name={service.icon} className="mb-6" />
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2 text-sm text-gray-500">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
