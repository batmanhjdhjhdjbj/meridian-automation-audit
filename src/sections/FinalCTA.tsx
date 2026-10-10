import { motion } from 'framer-motion';
import { childVariants, containerVariants } from '@/lib/animations';
import { CTAButton } from '@/components/CTAButton';

interface FinalCTAProps {
  onAuditClick: () => void;
}

export function FinalCTA({ onAuditClick }: FinalCTAProps) {
  return (
    <section className="relative py-28 md:py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(91,155,149,0.05), transparent)',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <motion.h2
          variants={childVariants}
          className="text-3xl md:text-5xl font-semibold text-white tracking-tightest leading-[1.15]"
        >
          Ready to see what's possible?
        </motion.h2>

        <motion.p
          variants={childVariants}
          className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-xl mx-auto"
        >
          The audit is free. The conversation is low-pressure. The clarity is
          yours to keep.
        </motion.p>

        <motion.div
          variants={childVariants}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <CTAButton onClick={onAuditClick}>
            Request an Automation Audit
          </CTAButton>
          <p className="text-sm text-muted-dim">
            We review every request personally. Expect to hear from us within
            one business day.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
