import { CheckCircle } from 'lucide-react';
import { Button, Container, Badge } from '@/components/ui';
import type { HeroContent } from '@/types';

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 -right-48 w-96 h-96 bg-primary-200 rounded-full blur-[60px] opacity-50 -z-10" />
      <div className="absolute bottom-0 -left-48 w-96 h-96 bg-accent-500/20 rounded-full blur-[60px] -z-10" />

      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="animate-fadeIn">
            {content.badge && (
              <Badge variant="primary" className="mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                {content.badge}
              </Badge>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              {content.headline}{' '}
              {content.highlightedText && (
                <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                  {content.highlightedText}
                </span>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {content.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button href={content.primaryCta.href} size="lg">
                {content.primaryCta.text}
              </Button>
              {content.secondaryCta && (
                <Button
                  href={content.secondaryCta.href}
                  variant="secondary"
                  size="lg"
                >
                  {content.secondaryCta.text}
                </Button>
              )}
            </div>

            {content.features && content.features.length > 0 && (
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                {content.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    {feature}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Stats Visual */}
          <div className="hidden lg:block relative">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500 text-sm">Monthly Leads</span>
                  <span className="text-green-500 text-sm font-medium">
                    +127%
                  </span>
                </div>
                <div className="text-3xl font-bold">247</div>
                <div className="mt-4 h-16 flex items-end gap-1">
                  {[30, 45, 55, 70, 85, 100].map((height, i) => (
                    <div
                      key={i}
                      className="w-full bg-gradient-to-t from-primary-500 to-accent-500 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <div className="text-gray-500 text-sm mb-1">
                    Google Ranking
                  </div>
                  <div className="text-2xl font-bold">#1</div>
                  <div className="text-green-500 text-xs">Up from #12</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <div className="text-gray-500 text-sm mb-1">
                    Revenue Growth
                  </div>
                  <div className="text-2xl font-bold">+83%</div>
                  <div className="text-green-500 text-xs">Year over year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
