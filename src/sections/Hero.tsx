import { motion } from 'framer-motion';
import { CTAButton } from '@/components/CTAButton';

interface HeroProps {
  onAuditClick: () => void;
}

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero({ onAuditClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(91,155,149,0.04), transparent)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, #0a0a0a 0%, transparent 30%, transparent 70%, #0a0a0a 100%)',
        }}
      />

      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <motion.h1
          variants={heroItem}
          className="text-4xl md:text-6xl lg:text-[4.5rem] font-semibold text-white leading-[1.1] tracking-tightest"
        >
          Your operations are more expensive than they need to be.
        </motion.h1>

        <motion.p
          variants={heroItem}
          className="mt-7 text-lg md:text-xl text-muted leading-relaxed max-w-[600px] mx-auto"
        >
          Not because your team isn't working hard — but because the systems
          underneath them weren't built for scale. We design automation systems
          that remove the friction, not the people.
        </motion.p>

        <motion.div
          variants={heroItem}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <CTAButton onClick={onAuditClick}>
            Request an Automation Audit
          </CTAButton>
          <p className="text-sm text-muted-dim">
            No commitment. No sales pitch. Just clarity.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
