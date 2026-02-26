import { motion } from "framer-motion";
import heroCity from "@/assets/hero-city.png";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroCity}
          alt="Smart city with digital infrastructure"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(220 45% 6% / 0.3) 0%, hsl(220 45% 6% / 0.7) 40%, hsl(220 45% 6% / 1) 100%)" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-15" />

      {/* Animated data lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px"
            style={{
              top: `${15 + i * 13}%`,
              width: "100%",
              background: i % 2 === 0
                ? "linear-gradient(90deg, transparent, hsl(210 100% 55% / 0.5), transparent)"
                : "linear-gradient(90deg, transparent, hsl(160 70% 45% / 0.4), transparent)",
            }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 5 + i * 0.8, repeat: Infinity, ease: "linear", delay: i * 0.7 }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`p-${i}`}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${10 + (i * 7) % 80}%`,
              top: `${15 + (i * 11) % 70}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <ScrollReveal>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Turning Citizens Into{" "}
            <span className="text-gradient-blue">City Guardians.</span>
          </motion.h1>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            CivicGuard empowers everyday citizens to report civic violations — from illegal parking to broken infrastructure — using just their smartphone.
          </p>
          <p className="text-base md:text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            AI verifies each report. Government officers approve fines. Citizens earn <span className="text-accent font-semibold">Civic Credits</span> — real rewards for making their city better.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              className="btn-primary-glow text-base animate-pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Request Investment Deck
            </motion.button>
            <motion.button
              className="btn-outline-glow text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Schedule Investor Call
            </motion.button>
          </div>
        </ScrollReveal>

        {/* Floating phone mockup */}
        <ScrollReveal delay={0.4}>
          <div className="animate-float mx-auto max-w-sm">
            <motion.div
              className="glass-card p-6 rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-3 h-3 rounded-full bg-accent"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm text-muted-foreground">Live Capture</span>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 mb-3">
                <div className="text-xs text-muted-foreground mb-1">🚗 Traffic Violation Detected</div>
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
            </motion.div>
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
