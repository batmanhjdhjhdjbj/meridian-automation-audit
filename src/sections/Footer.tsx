export function Footer() {
  return (
    <footer className="border-t border-ink-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-accent" />
          </div>
          <span className="text-white font-semibold tracking-tight">
            Meridian
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <p className="text-sm text-muted-dim">
            &copy; 2025 Meridian. All rights reserved.
          </p>
          <p className="text-sm text-muted-dim">hello@meridian.systems</p>
        </div>
      </div>
    </footer>
  );
}
