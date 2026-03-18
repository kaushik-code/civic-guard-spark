import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, User, Mail, Building2, ArrowRight, CheckCircle } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const GatedDownloadModal = ({ open, onClose }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);

    // Trigger download after brief delay
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/CivicGuard-MVP-Walkthrough.pdf";
      link.download = "CivicGuard-MVP-Walkthrough.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 800);
  };

  const handleClose = () => {
    onClose();
    // Reset after animation
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setCompany("");
      setErrors({});
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Dialog */}
          <motion.div
            className="glass-card relative z-10 w-full max-w-md p-8 rounded-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Glow accent */}
            <div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: "hsl(var(--glow-blue))" }}
            />

            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Download className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-display text-foreground">
                        Get the MVP Walkthrough
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Enter your details to download
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          maxLength={100}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-secondary/20 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-xs text-destructive mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@venture.capital"
                          maxLength={255}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-secondary/20 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                        Company / Fund
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Sequoia Capital"
                          maxLength={100}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-secondary/20 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      className="btn-primary-glow w-full text-sm flex items-center justify-center gap-2 mt-2"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      Download MVP Walkthrough
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>

                    <p className="text-[10px] text-muted-foreground/50 text-center mt-2">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                  >
                    <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-2">
                    Download Started!
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your MVP Walkthrough is downloading now.
                  </p>
                  <p className="text-xs text-muted-foreground/60">
                    Didn't start?{" "}
                    <a
                      href="/CivicGuard-MVP-Walkthrough.pdf"
                      download
                      className="text-primary hover:underline"
                    >
                      Click here to download manually
                    </a>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GatedDownloadModal;
