import { Shield, Clock, Users, DollarSign, AlertTriangle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const problems = [
  { icon: Shield, label: "Understaffed enforcement systems", detail: "Cities lack the manpower to monitor every street and intersection." },
  { icon: Clock, label: "Slow municipal response", detail: "Complaint resolution takes weeks — citizens lose faith in the system." },
  { icon: Users, label: "Public frustration & disengagement", detail: "Without a voice, citizens disengage from civic participation entirely." },
  { icon: DollarSign, label: "Revenue leakage from uncollected fines", detail: "Billions in violations go undetected and unprosecuted every year." },
  { icon: AlertTriangle, label: "Weak civic participation", detail: "No incentive structure exists to reward citizens who help their city." },
];

const ProblemSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-center mb-4">
            Governments <span className="text-gradient-blue">Can't Be Everywhere.</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg max-w-2xl mx-auto">
            Urban governance faces systemic challenges that no amount of hiring can solve. The answer isn't more enforcers — it's empowered citizens.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 h-full"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-foreground font-semibold text-lg mb-2">{item.label}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
