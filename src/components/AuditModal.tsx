import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface AuditModalProps {
  open: boolean;
  onClose: () => void;
}

export function AuditModal({ open, onClose }: AuditModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    challenge: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ name: '', company: '', email: '', challenge: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-2xl bg-ink-charcoal border border-ink-border-light p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="flex justify-center mb-6">
                  <CheckCircle2 className="h-12 w-12 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                  Thank you, {form.name || 'there'}.
                </h3>
                <p className="text-muted text-base leading-relaxed max-w-sm mx-auto">
                  We've received your request. We'll review it and reach out
                  within one business day — no sales pitch, just a conversation.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-8 text-muted-dim hover:text-white transition-colors text-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={handleClose}
                  className="absolute top-5 right-5 text-muted-dim hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" strokeWidth={1.5} />
                </button>

                <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">
                  Request an Automation Audit
                </h3>
                <p className="text-muted text-sm mb-8">
                  No commitment. No sales pitch. Just clarity.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-medium text-muted-dim uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-ink-base border border-ink-border-light rounded-lg px-4 py-3 text-white text-sm placeholder:text-muted-dim/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-dim uppercase tracking-wider mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      className="w-full bg-ink-base border border-ink-border-light rounded-lg px-4 py-3 text-white text-sm placeholder:text-muted-dim/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-dim uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-ink-base border border-ink-border-light rounded-lg px-4 py-3 text-white text-sm placeholder:text-muted-dim/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-dim uppercase tracking-wider mb-2">
                      What's your biggest operational challenge?
                    </label>
                    <textarea
                      name="challenge"
                      required
                      rows={4}
                      value={form.challenge}
                      onChange={handleChange}
                      className="w-full bg-ink-base border border-ink-border-light rounded-lg px-4 py-3 text-white text-sm placeholder:text-muted-dim/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors resize-none"
                      placeholder="Tell us about the repetitive work, bottlenecks, or friction points in your operations..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dim text-ink-base font-semibold text-sm px-6 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/10"
                  >
                    Submit Request
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
