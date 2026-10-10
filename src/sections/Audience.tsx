import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import {
  childVariants,
  containerVariants,
} from '@/lib/animations';
import { SectionWrapper } from '@/components/SectionWrapper';
import { SectionHeading } from '@/components/SectionHeading';

const forYou = [
  'You run a business with real operations and a team',
  'Your people are doing work that follows a predictable pattern',
  "You're evaluating AI seriously but want clarity before committing",
  "You're a CEO, COO, or CFO responsible for operational efficiency",
];

const notForYou = [
  "You're looking for a quick fix or a magic-button solution",
  "You're exploring AI as a hobby or side experiment",
  'You need something built overnight without a clear process',
];

export function Audience() {
  return (
    <SectionWrapper>
      <SectionHeading className="text-center mb-16">
        Is this the right conversation for you?
      </SectionHeading>

      <div className="grid md:grid-cols-2 gap-0 md:gap-0 relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-ink-border-light -translate-x-1/2" />

        <motion.div
          variants={containerVariants}
          className="md:pr-12 md:pl-0 px-0 pb-12 md:pb-0"
        >
          <motion.h3
            variants={childVariants}
            className="text-sm font-semibold text-accent uppercase tracking-wider mb-6"
          >
            This is for you if:
          </motion.h3>
          <ul className="space-y-5">
            {forYou.map((item) => (
              <motion.li key={item} variants={childVariants} className="flex gap-4">
                <span className="flex-shrink-0 mt-0.5">
                  <Check className="h-5 w-5 text-accent" strokeWidth={2} />
                </span>
                <span className="text-white/90 text-base md:text-lg leading-relaxed">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="md:pl-12 px-0 pt-12 md:pt-0 border-t md:border-t-0 border-ink-border"
        >
          <motion.h3
            variants={childVariants}
            className="text-sm font-semibold text-muted-dim uppercase tracking-wider mb-6"
          >
            This isn't for you if:
          </motion.h3>
          <ul className="space-y-5">
            {notForYou.map((item) => (
              <motion.li key={item} variants={childVariants} className="flex gap-4">
                <span className="flex-shrink-0 mt-0.5">
                  <X className="h-5 w-5 text-muted-dim" strokeWidth={2} />
                </span>
                <span className="text-muted text-base md:text-lg leading-relaxed">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
