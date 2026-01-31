import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

type IconName = keyof typeof LucideIcons;

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 24 }: IconProps) {
  // Convert common names to Lucide format
  const iconName = name as IconName;
  const IconComponent = LucideIcons[iconName] as React.ComponentType<{
    className?: string;
    size?: number;
  }>;

  if (!IconComponent) {
    // Fallback to a default icon if not found
    const FallbackIcon = LucideIcons.Circle;
    return <FallbackIcon className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
}

interface IconBoxProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'gradient' | 'outline';
}

const boxSizes = {
  sm: 'w-10 h-10',
  md: 'w-14 h-14',
  lg: 'w-16 h-16',
};

const iconSizes = {
  sm: 20,
  md: 28,
  lg: 32,
};

const boxVariants = {
  default: 'bg-gray-100 text-gray-600',
  gradient: 'bg-gradient-to-r from-primary-500 to-accent-500 text-white',
  outline: 'border-2 border-gray-200 text-gray-600',
};

export function IconBox({
  name,
  className,
  size = 'md',
  variant = 'gradient',
}: IconBoxProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-xl',
        boxSizes[size],
        boxVariants[variant],
        className
      )}
    >
      <Icon name={name} size={iconSizes[size]} />
    </div>
  );
}
