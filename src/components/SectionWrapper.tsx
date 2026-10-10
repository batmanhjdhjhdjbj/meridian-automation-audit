import { motion } from 'framer-motion';
import { sectionVariants, containerVariants } from '@/lib/animations';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export function SectionWrapper({
  children,
  id,
  className = '',
  containerClassName = '',
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={`py-24 md:py-32 px-6 ${className}`}
    >
      <motion.div
        variants={containerVariants}
        className={`max-w-6xl mx-auto ${containerClassName}`}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}
