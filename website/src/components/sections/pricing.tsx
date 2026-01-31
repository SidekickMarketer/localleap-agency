import { Check } from 'lucide-react';
import { Section, SectionHeader, Button } from '@/components/ui';
import { formatCurrency, cn } from '@/lib/utils';
import type { PricingTier } from '@/types';

interface PricingProps {
  title?: string;
  subtitle?: string;
  tiers: PricingTier[];
}

export function Pricing({
  title = 'Simple, Transparent Pricing',
  subtitle = 'No hidden fees. No long-term contracts. Just results.',
  tiers,
}: PricingProps) {
  return (
    <Section id="pricing">
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {tiers.map((tier) => (
          <div
            key={tier._id}
            className={cn(
              'rounded-2xl p-8 relative',
              tier.highlighted
                ? 'bg-gray-900 text-white'
                : 'bg-white border border-gray-200',
              'transition-all duration-200 hover:-translate-y-1 hover:shadow-xl'
            )}
          >
            {tier.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
            )}

            <div
              className={cn(
                'text-sm font-medium mb-2',
                tier.highlighted ? 'text-gray-400' : 'text-gray-500'
              )}
            >
              {tier.name.toUpperCase()}
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold">
                {formatCurrency(tier.price)}
              </span>
              <span
                className={tier.highlighted ? 'text-gray-400' : 'text-gray-500'}
              >
                /month
              </span>
            </div>

            <p
              className={cn(
                'mb-6',
                tier.highlighted ? 'text-gray-400' : 'text-gray-600'
              )}
            >
              {tier.description}
            </p>

            <ul className="space-y-3 mb-8">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check
                    className={cn(
                      'w-5 h-5 mt-0.5 flex-shrink-0',
                      tier.highlighted ? 'text-green-400' : 'text-green-500'
                    )}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              href={tier.ctaHref}
              variant={tier.highlighted ? 'primary' : 'secondary'}
              className="w-full"
            >
              {tier.ctaText}
            </Button>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-500 mt-8">
        Need something custom?{' '}
        <a href="#contact" className="text-primary-600 hover:underline">
          Let&apos;s talk
        </a>
      </p>
    </Section>
  );
}
