import { Linkedin, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FounderSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-5" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-6">The Visionary</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-4 tracking-tight">
            SAHIL RAMTEKE
          </h2>
          <p className="text-primary text-lg font-medium mb-8">Founder & Civic Innovation Architect</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            A visionary builder at the intersection of civic technology and participatory governance. 
            Sahil is architecting the next generation of citizen-powered compliance infrastructure — 
            systems that make cities smarter, governments more accountable, and citizens more empowered.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex gap-4 justify-center">
            <a href="#" className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors group">
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors group">
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FounderSection;
