import { Lock, EyeOff, Cpu, UserCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: Lock, title: "End-to-End Encryption", desc: "Military-grade encryption protects all citizen data and reports." },
  { icon: EyeOff, title: "Blind Reporting", desc: "Anonymous submission system shields reporter identity completely." },
  { icon: Cpu, title: "AI Fraud Detection", desc: "Deep learning models detect manipulated or fabricated evidence." },
  { icon: UserCheck, title: "Human Review Safeguard", desc: "Every flagged report undergoes mandatory human verification." },
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
            Built with trust as the foundation — every layer protects citizens and institutions.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card p-6 text-center group hover:glow-blue transition-all duration-500 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-bold text-lg font-display mb-2">{f.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
