import { motion } from 'framer-motion';
import {
  childVariants,
  containerVariants,
} from '@/lib/animations';
import { SectionWrapper } from '@/components/SectionWrapper';
import { SectionHeading, SectionSubheading } from '@/components/SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Understand the current system',
    description:
      'We map your existing workflows, tools, and handoffs to see where the real work happens.',
  },
  {
    number: '02',
    title: 'Identify the bottlenecks and waste',
    description:
      'We surface the manual steps, delays, and disconnected processes costing you time and money.',
  },
  {
    number: '03',
    title: 'Define practical automation systems',
    description:
      'We design solutions tailored to your operations — no generic templates, no off-the-shelf platforms.',
  },
  {
    number: '04',
    title: 'Decide together what makes sense',
    description:
      'You get a clear picture of what\u2019s possible. What happens next is entirely your call.',
  },
];

export function Process() {
  return (
    <SectionWrapper className="bg-ink-charcoal/50">
      <SectionHeading>We don't sell tools. We build systems.</SectionHeading>
      <SectionSubheading>
        Every engagement starts the same way — by understanding what's actually
        happening before recommending anything.
      </SectionSubheading>

      <div className="mt-16 relative">
        <div className="hidden md:block absolute top-[2.25rem] left-[10%] right-[10%] h-px bg-ink-border-light" />

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-4 gap-12 md:gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={childVariants}
              className="relative"
            >
              <div className="flex items-center gap-4 md:block">
                <span className="text-4xl md:text-5xl font-light text-accent-dim tabular-nums tracking-tight">
                  {step.number}
                </span>
                <h3 className="text-base md:text-lg font-semibold text-white mt-0 md:mt-4 tracking-tight">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed mt-3 md:mt-3 md:pr-2">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
