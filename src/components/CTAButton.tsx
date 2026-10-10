import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export function CTAButton({ onClick, children, className = '' }: CTAButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dim text-ink-base font-semibold text-base px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/10 ${className}`}
    >
      {children}
      <ArrowRight
        className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
        strokeWidth={2}
      />
    </button>
  );
}
