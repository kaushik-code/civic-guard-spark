import { motion } from "framer-motion";
import heroCity from "@/assets/hero-city.png";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroCity} alt="Smart city" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(220 45% 6% / 0.4) 0%, hsl(220 45% 6% / 0.85) 60%, hsl(220 45% 6% / 1) 100%)" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Animated data lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              width: "100%",
            }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight tracking-tight mb-6">
            Turning Citizens Into{" "}
            <span className="text-gradient-blue">City Guardians.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            A citizen-powered digital compliance ecosystem transforming urban governance.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="btn-primary-glow text-base animate-pulse-glow">
              Request Investment Deck
            </button>
            <button className="btn-outline-glow text-base">
              Schedule Investor Call
            </button>
          </div>
        </ScrollReveal>

        {/* Floating phone mockup */}
        <ScrollReveal delay={0.4}>
          <div className="animate-float mx-auto max-w-sm">
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">Live Capture</span>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 mb-3">
                <div className="text-xs text-muted-foreground mb-1">Traffic Violation Detected</div>
                <div className="text-sm font-medium">AI Scanning License Plate...</div>
                <motion.div
                  className="h-1 bg-primary rounded-full mt-2"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <motion.div
                className="text-center py-2 rounded-lg font-bold text-accent text-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Civic Credits +25 ✓
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <p className="mt-12 text-sm text-muted-foreground tracking-widest uppercase">
            A Vision by{" "}
            <span className="text-foreground font-bold text-base tracking-wider">SAHIL RAMTEKE</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
