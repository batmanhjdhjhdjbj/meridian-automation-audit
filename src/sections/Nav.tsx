import { useEffect, useState } from 'react';

interface NavProps {
  onAuditClick: () => void;
}

export function Nav({ onAuditClick }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-base/80 backdrop-blur-md border-b border-ink-border/60'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full border-2 border-accent flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-accent" />
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">
            Meridian
          </span>
        </div>

        <button
          onClick={onAuditClick}
          className="text-sm font-medium text-white border border-ink-border-light hover:border-accent/50 hover:text-accent px-5 py-2.5 rounded-lg transition-all duration-200"
        >
          Request an Audit
        </button>
      </div>
    </nav>
  );
}
