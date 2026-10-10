import { motion } from 'framer-motion';
import { childVariants, containerVariants } from '@/lib/animations';
import { SectionWrapper } from '@/components/SectionWrapper';
import { SectionHeading } from '@/components/SectionHeading';

const stats = [
  {
    value: '12+',
    label: 'Years',
    description: 'Combined experience in systems design and data architecture',
  },
  {
    value: '40+',
    label: 'Automations',
    description: 'Running in production across client operations',
  },
  {
    value: '8',
    label: 'Industries',
    description: 'From logistics and finance to healthcare and professional services',
  },
  {
    value: 'Certified',
    label: 'Team',
    description: 'Credentials in automation platforms, data engineering, and AI integration',
  },
];

const logos = ['Client', 'Client', 'Client', 'Client', 'Client', 'Client'];

export function Credibility() {
  return (
    <SectionWrapper>
      <SectionHeading>Built on experience. Proven in production.</SectionHeading>

      <motion.div
        variants={containerVariants}
        className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={childVariants}
            className="rounded-xl border border-ink-border-light bg-ink-charcoal/60 p-6 md:p-7 hover:border-ink-border-light/80 transition-colors"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-3xl md:text-4xl font-semibold text-white tracking-tightest">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-accent">
                {stat.label}
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed mt-3">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        variants={childVariants}
        className="mt-12 text-lg text-muted-dim italic max-w-3xl"
      >
        "We've worked with operators who thought automation wasn't possible for
        their business. It usually is."
      </motion.p>

      <motion.div
        variants={childVariants}
        className="mt-12"
      >
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="h-14 rounded-lg border border-ink-border bg-ink-charcoal/40 flex items-center justify-center"
            >
              <span className="text-xs text-muted-dim/60 font-medium uppercase tracking-wider">
                {logo}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-dim/70 mt-4">
          Representative industries. Client names available upon request.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
