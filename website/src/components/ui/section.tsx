import { cn } from '@/lib/utils';
import { Container } from './container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'dark' | 'gradient';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const backgrounds = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  dark: 'bg-gray-900 text-white',
  gradient: 'bg-gradient-to-r from-primary-500 to-accent-500 text-white',
};

export function Section({
  children,
  className,
  id,
  background = 'white',
  containerSize = 'xl',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-20 lg:py-32', backgrounds[background], className)}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  titleHighlight,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 lg:mb-16',
        centered && 'text-center max-w-3xl mx-auto',
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        {title}{' '}
        {titleHighlight && (
          <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
            {titleHighlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 dark:text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}
