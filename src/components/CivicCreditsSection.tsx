import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import { Zap, Train, Receipt, FileCheck } from "lucide-react";

const rewards = [
  { icon: Receipt, label: "Utility Bill Discounts", value: "Up to 15% off", detail: "Credits reduce your electricity and water bills." },
  { icon: Train, label: "Metro Fare Discounts", value: "Free monthly pass", detail: "Top guardians ride public transit for free." },
  { icon: Zap, label: "Tax Rebates", value: "₹5,000/year", detail: "Annual tax deductions for consistent contributors." },
  { icon: FileCheck, label: "Fast-track Services", value: "Priority queue", detail: "Skip the line at government offices." },
];

const CivicCreditsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <p className="text-accent font-semibold text-sm uppercase tracking-widest text-center mb-3">Gamified Engagement</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-center mb-4">
            <span className="text-gradient-emerald">Civic Credits</span> System
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg max-w-2xl mx-auto">
            Every verified report earns credits. Credits unlock real-world rewards — turning civic duty into a rewarding habit.
          </p>
        </ScrollReveal>

        {/* Dashboard mockup */}
        <ScrollReveal delay={0.2}>
          <motion.div
            className="glass-card p-8 md:p-10 max-w-4xl mx-auto mb-12 glow-emerald"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Civic Score</p>
                <p className="text-3xl md:text-4xl font-bold text-gradient-emerald font-display">
                  <AnimatedCounter end={847} />
                </p>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Credits Earned</p>
                <p className="text-3xl md:text-4xl font-bold text-gradient-blue font-display">
                  <AnimatedCounter end={2450} />
                </p>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Reputation</p>
                <motion.p
                  className="text-xl md:text-2xl font-bold text-accent font-display"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Guardian
                </motion.p>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Rewards</p>
                <p className="text-3xl md:text-4xl font-bold text-gradient-blue font-display">
                  <AnimatedCounter end={12} />
                </p>
              </div>
            </div>
            {/* Progress bar */}
            <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ background: "linear-gradient(90deg, hsl(210 100% 55%), hsl(160 70% 45%))" }}
                initial={{ width: "0%" }}
                whileInView={{ width: "72%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <p className="text-muted-foreground text-xs mt-2 text-right">72% to next level</p>
          </motion.div>
        </ScrollReveal>

        {/* Reward cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rewards.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className="glass-card p-6 text-center group hover:glow-emerald transition-all duration-500 h-full"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <r.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-1">{r.label}</h4>
                <p className="text-accent text-sm font-medium mb-2">{r.value}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{r.detail}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CivicCreditsSection;
