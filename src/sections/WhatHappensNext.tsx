import { motion } from 'framer-motion';
import { childVariants, containerVariants } from '@/lib/animations';
import { SectionWrapper } from '@/components/SectionWrapper';
import { SectionHeading } from '@/components/SectionHeading';

const steps = [
  {
    title: 'You submit the form',
    description: 'We receive your request and review it within one business day.',
  },
  {
    title: 'We schedule a short intro call',
    description:
      '20\u201330 minutes. No deck, no pitch. We ask questions and listen.',
  },
  {
    title: 'We conduct the audit',
    description:
      'We analyze your workflows and identify automation opportunities specific to your operations.',
  },
  {
    title: 'You receive a clear report',
    description:
      'Written recommendations, prioritized by impact. Delivered within 5\u20137 business days.',
  },
  {
    title: 'You decide what to do next',
    description:
      'Engage us to build, take the report elsewhere, or do nothing. The decision is entirely yours.',
  },
];

export function WhatHappensNext() {
  return (
    <SectionWrapper>
      <SectionHeading>
        Here's exactly what happens after you reach out.
      </SectionHeading>

      <motion.div
        variants={containerVariants}
        className="mt-16 relative max-w-2xl"
      >
        <div className="absolute left-[1.75rem] top-2 bottom-2 w-px bg-ink-border-light" />

        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={childVariants}
              className="relative flex gap-6"
            >
              <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-ink-charcoal border border-ink-border-light flex items-center justify-center">
                <span className="text-lg font-light text-accent-dim tabular-nums">
                  {i + 1}
                </span>
              </div>
              <div className="pt-2">
                <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-base text-muted leading-relaxed mt-2">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
