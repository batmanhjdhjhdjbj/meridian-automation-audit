import { motion } from 'framer-motion';
import { FileSearch, ListChecks, FileText, Mail } from 'lucide-react';
import { childVariants, containerVariants } from '@/lib/animations';
import { SectionWrapper } from '@/components/SectionWrapper';
import { SectionHeading } from '@/components/SectionHeading';
import { CTAButton } from '@/components/CTAButton';

interface AuditOfferProps {
  onAuditClick: () => void;
}

const deliverables = [
  {
    icon: FileSearch,
    text: 'A workflow map of your highest-friction processes',
  },
  {
    icon: ListChecks,
    text: 'An automation opportunity summary with effort/impact ratings',
  },
  {
    icon: FileText,
    text: 'A written recommendations document',
  },
  {
    icon: Mail,
    text: 'A follow-up email sequence with the audit framework and a calendar link to book a strategy call',
  },
];

export function AuditOffer({ onAuditClick }: AuditOfferProps) {
  return (
    <SectionWrapper className="bg-ink-charcoal/50">
      <motion.div
        variants={childVariants}
        className="rounded-2xl border border-ink-border-light bg-ink-elevated/60 p-8 md:p-14 max-w-4xl mx-auto"
      >
        <SectionHeading className="text-center">
          The Free Automation Audit
        </SectionHeading>

        <div className="mt-8 space-y-5 max-w-2xl mx-auto">
          <motion.p
            variants={childVariants}
            className="text-base md:text-lg text-muted leading-relaxed"
          >
            Before any engagement, we offer a no-cost audit of your current
            workflows. We review how your operations actually run, identify
            where automation could reduce friction, and give you a clear,
            written summary of opportunities — whether or not we work together
            afterward.
          </motion.p>
          <motion.p
            variants={childVariants}
            className="text-base md:text-lg text-muted leading-relaxed"
          >
            You walk away with a framework you can act on. No obligation
            attached.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          className="mt-10 grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto"
        >
          {deliverables.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                variants={childVariants}
                className="flex gap-4 items-start"
              >
                <span className="flex-shrink-0 mt-0.5 w-10 h-10 rounded-lg bg-accent-glow border border-accent/20 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </span>
                <span className="text-sm md:text-base text-white/85 leading-relaxed">
                  {item.text}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={childVariants}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <CTAButton onClick={onAuditClick}>
            Request Your Free Audit
          </CTAButton>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
