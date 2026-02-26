import { Shield, Clock, Users, DollarSign, AlertTriangle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  { icon: Shield, label: "Understaffed enforcement systems" },
  { icon: Clock, label: "Slow municipal response" },
  { icon: Users, label: "Public frustration & disengagement" },
  { icon: DollarSign, label: "Revenue leakage from uncollected fines" },
  { icon: AlertTriangle, label: "Weak civic participation" },
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
            Urban governance faces systemic challenges that demand a new approach.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card p-6 group hover:border-primary/30 transition-all duration-300">
                <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-foreground font-medium text-lg">{item.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
