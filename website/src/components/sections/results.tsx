import { Section, SectionHeader, Container } from '@/components/ui';
import type { CaseStudy } from '@/types';

interface Stat {
  value: string;
  label: string;
}

interface ResultsProps {
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  stats: Stat[];
  caseStudies: CaseStudy[];
}

export function Results({
  title = 'Real Results for',
  titleHighlight = 'Real Businesses',
  subtitle = "Don't just take our word for it. Here's what we've achieved for businesses like yours.",
  stats,
  caseStudies,
}: ResultsProps) {
  return (
    <Section id="results">
      <SectionHeader
        title={title}
        titleHighlight={titleHighlight}
        subtitle={subtitle}
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Case Studies Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {caseStudies.map((study) => (
          <div
            key={study._id}
            className="bg-gradient-to-br from-primary-50 to-accent-500/10 rounded-2xl p-8"
          >
            <div className="text-sm font-medium text-primary-600 mb-2">
              {study.industry}
            </div>
            <h3 className="text-xl font-bold mb-4">{study.client}</h3>
            <p className="text-gray-600 mb-6">{study.description}</p>
            <div className="space-y-3">
              {study.metrics.map((metric, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-500">{metric.label}</span>
                  <span className="font-semibold">
                    {metric.before && metric.after
                      ? `${metric.before} → ${metric.after}`
                      : metric.after || metric.improvement}
                    {metric.improvement && !metric.before && (
                      <span className="text-green-600 ml-1">
                        {metric.improvement}
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
