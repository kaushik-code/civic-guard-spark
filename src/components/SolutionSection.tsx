import { Camera, Cpu, UserCheck, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Capture",
    description: "Citizens report violations using their smartphone — photos, videos, and location data.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Verification",
    description: "AI validates timestamp, geolocation, license plate recognition, and runs fraud detection.",
  },
  {
    icon: UserCheck,
    step: "03",
    title: "Human Approval",
    description: "Government officer reviews the AI-verified report and issues a fine if confirmed.",
  },
];

const SolutionSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-widest text-center mb-3">The Solution</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-center mb-16">
            How <span className="text-gradient-emerald">CivicGuard</span> Works
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
          </div>
          <div className="hidden md:block absolute top-1/2 right-0 w-1/3 h-px" style={{ left: "66.6%" }}>
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-primary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {steps.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.2}>
              <div className="glass-card p-8 text-center group hover:glow-blue transition-all duration-500 relative">
                <div className="text-5xl font-bold text-primary/10 font-display absolute top-4 right-6">{item.step}</div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-display mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
