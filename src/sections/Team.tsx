import { motion } from 'framer-motion';
import { childVariants, containerVariants } from '@/lib/animations';
import { SectionWrapper } from '@/components/SectionWrapper';
import { SectionHeading } from '@/components/SectionHeading';

const team = [
  {
    initials: 'AM',
    name: 'Alex M.',
    title: 'Automation Architect',
    credential: '12 years in enterprise workflow automation',
  },
  {
    initials: 'JR',
    name: 'Jordan R.',
    title: 'Systems Integration Lead',
    credential: 'Certified in 4 major integration platforms',
  },
  {
    initials: 'ST',
    name: 'Sam T.',
    title: 'Data & AI Engineer',
    credential: 'Former data engineering lead, 3 industries',
  },
];

export function Team() {
  return (
    <SectionWrapper className="bg-ink-charcoal/50">
      <SectionHeading>Who's behind this.</SectionHeading>

      <motion.div
        variants={containerVariants}
        className="mt-14 grid md:grid-cols-3 gap-6"
      >
        {team.map((member) => (
          <motion.div
            key={member.name}
            variants={childVariants}
            className="rounded-xl border border-ink-border-light bg-ink-elevated/50 p-8 text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-ink-charcoal border border-ink-border-light flex items-center justify-center">
              <span className="text-lg font-semibold text-accent-dim tracking-tight">
                {member.initials}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white mt-5 tracking-tight">
              {member.name}
            </h3>
            <p className="text-sm text-accent mt-1">{member.title}</p>
            <p className="text-sm text-muted leading-relaxed mt-4">
              {member.credential}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        variants={childVariants}
        className="mt-12 text-lg text-muted-dim italic"
      >
        "Small team. Deep expertise. We don't take on more than we can do well."
      </motion.p>
    </SectionWrapper>
  );
}
