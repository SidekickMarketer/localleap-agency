import { DollarSign, Clock, Frown } from 'lucide-react';
import { Section, SectionHeader, Container } from '@/components/ui';

interface Problem {
  icon: 'money' | 'time' | 'invisible';
  title: string;
  description: string;
}

interface ProblemsProps {
  title?: string;
  subtitle?: string;
  problems?: Problem[];
}

const iconMap = {
  money: DollarSign,
  time: Clock,
  invisible: Frown,
};

const defaultProblems: Problem[] = [
  {
    icon: 'money',
    title: 'Wasted Ad Spend',
    description:
      'Money thrown at Google and Facebook with no clear ROI. No one can tell you what\'s actually working.',
  },
  {
    icon: 'time',
    title: 'No Time for Marketing',
    description:
      'You\'re busy running your business. Social media, content, ads - it all falls through the cracks.',
  },
  {
    icon: 'invisible',
    title: 'Invisible Online',
    description:
      'Competitors show up on Google. You don\'t. Potential customers can\'t find you when they\'re ready to buy.',
  },
];

export function Problems({
  title = "Tired of Marketing That Doesn't Work?",
  subtitle = "Most local businesses waste thousands on agencies that don't understand their market. We're different.",
  problems = defaultProblems,
}: ProblemsProps) {
  return (
    <Section>
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((problem, index) => {
          const IconComponent = iconMap[problem.icon];
          return (
            <div key={index} className="text-center p-8">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <IconComponent className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
