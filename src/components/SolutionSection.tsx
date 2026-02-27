import { Camera, Cpu, UserCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Capture",
    description: "A citizen spots a violation — illegal parking, broken streetlight, traffic offense. They open CivicGuard, snap a photo or video, and the app auto-tags GPS location and timestamp.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Verification",
    description: "Our AI instantly validates the evidence: license plate recognition, geolocation cross-check, timestamp verification, and deep-learning fraud detection — all in under 10 seconds.",
  },
  {
    icon: UserCheck,
    step: "03",
    title: "Human Approval",
    description: "A government officer reviews the AI-verified report on their dashboard. If confirmed, an official fine is issued — and the citizen earns Civic Credits as a reward.",
  },
];

const SolutionSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-widest text-center mb-3">The Solution</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-center mb-4">
            How <span className="text-gradient-emerald">CivicGuard</span> Works
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg max-w-2xl mx-auto">
            Three simple steps turn any citizen into a city guardian — with AI trust and government authority backing every report.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-px">
            <motion.div
              className="h-full"
              style={{ background: "linear-gradient(90deg, hsl(210 100% 55%), hsl(160 70% 45%))", transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="hidden md:block absolute top-1/2 right-0 w-1/3 h-px" style={{ left: "66.6%" }}>
            <motion.div
              className="h-full"
              style={{ background: "linear-gradient(90deg, hsl(160 70% 45%), hsl(210 100% 55%))" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {steps.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <motion.div
                className="glass-card p-8 text-center group hover:glow-blue transition-all duration-500 relative h-full"
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <div className="text-5xl font-bold text-primary/10 font-display absolute top-4 right-6">{item.step}</div>
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <item.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold font-display mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
