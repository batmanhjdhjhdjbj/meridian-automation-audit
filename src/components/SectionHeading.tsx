import { motion } from 'framer-motion';
import { childVariants } from '@/lib/animations';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h2' | 'h3';
}

export function SectionHeading({
  children,
  className = '',
  as: Tag = 'h2',
}: SectionHeadingProps) {
  return (
    <motion.div variants={childVariants}>
      <Tag
        className={`text-3xl md:text-5xl font-semibold text-white tracking-tightest leading-[1.15] ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  );
}

interface SectionSubheadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionSubheading({
  children,
  className = '',
}: SectionSubheadingProps) {
  return (
    <motion.div variants={childVariants}>
      <p
        className={`text-lg md:text-xl text-muted leading-relaxed max-w-2xl mt-5 ${className}`}
      >
        {children}
      </p>
    </motion.div>
  );
}
