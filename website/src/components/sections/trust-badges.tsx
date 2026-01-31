import { Container } from '@/components/ui';

interface TrustBadgesProps {
  headline?: string;
  logos?: string[];
}

export function TrustBadges({
  headline = 'Trusted by local businesses across the country',
  logos = ['DENTAL CO', 'LUXE SPA', 'ELITE HVAC', 'PRO PLUMB', 'FIT STUDIO'],
}: TrustBadgesProps) {
  return (
    <section className="py-12 bg-gray-50">
      <Container>
        <p className="text-center text-gray-500 mb-8">{headline}</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {logos.map((logo, index) => (
            <div key={index} className="text-2xl font-bold text-gray-400">
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
