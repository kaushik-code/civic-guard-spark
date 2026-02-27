import { Lock, EyeOff, Cpu, UserCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const features = [
  { icon: Lock, title: "End-to-End Encryption", desc: "All citizen data, photos, and reports are encrypted at rest and in transit — zero exposure." },
  { icon: EyeOff, title: "Blind Reporting", desc: "Reporter identity is never shared with violators. Complete anonymity, zero retaliation risk." },
  { icon: Cpu, title: "AI Fraud Detection", desc: "Deep learning models detect manipulated images, duplicate reports, and fabricated evidence in real time." },
  { icon: UserCheck, title: "Human Review Safeguard", desc: "No fine is issued without a human government officer reviewing and approving the AI's findings." },
];

const TrustSection = () => {
  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-center mb-4">
            Transparent. Secure. <span className="text-gradient-blue">Accountable.</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg max-w-2xl mx-auto">
            Trust is everything. CivicGuard is built so citizens feel safe reporting, and governments can trust the evidence.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className="glass-card p-6 text-center group hover:glow-blue transition-all duration-500 h-full"
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 8 }}
                >
                  <f.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h4 className="font-bold text-lg font-display mb-2 text-foreground">{f.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
