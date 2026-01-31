import { Section, SectionHeader } from '@/components/ui';

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
}

export function Process({
  title = 'How It Works',
  subtitle = "Getting started is simple. We handle the complexity so you don't have to.",
  steps,
}: ProcessProps) {
  return (
    <Section id="process" background="dark">
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
              {index + 1}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
