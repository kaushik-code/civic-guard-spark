import { motion } from "framer-motion";
import heroCity from "@/assets/hero-city.png";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <motion.img
          src={heroCity}
          alt="Smart city with digital infrastructure"
          className="w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(220 45% 6% / 0.4) 0%, hsl(220 45% 6% / 0.75) 50%, hsl(220 45% 6% / 1) 100%)" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Animated data lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px"
            style={{
              top: `${18 + i * 15}%`,
              width: "100%",
              background: i % 2 === 0
                ? "linear-gradient(90deg, transparent 20%, hsl(210 100% 55% / 0.4), transparent 80%)"
                : "linear-gradient(90deg, transparent 20%, hsl(160 70% 45% / 0.3), transparent 80%)",
            }}
            animate={{ x: ["-50%", "50%"] }}
            transition={{ duration: 8 + i * 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.8 }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`p-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${12 + (i * 11) % 76}%`,
              top: `${20 + (i * 13) % 60}%`,
              background: i % 2 === 0 ? "hsl(210 100% 55% / 0.5)" : "hsl(160 70% 45% / 0.5)",
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 4 + i * 0.6, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight tracking-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Turning Citizens Into{" "}
          <span className="text-gradient-blue">City Guardians.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            CivicGuard empowers everyday citizens to report civic violations — from illegal parking to broken infrastructure — using just their smartphone.
          </p>
          <p className="text-base md:text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            AI verifies each report. Government officers approve fines. Citizens earn <span className="text-accent font-semibold">Civic Credits</span> — real rewards for making their city better.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.button
            className="btn-primary-glow text-base animate-pulse-glow"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Request Investment Deck
          </motion.button>
          <motion.button
            className="btn-outline-glow text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Schedule Investor Call
          </motion.button>
        </motion.div>

        {/* Floating phone mockup */}
        <ScrollReveal delay={0.3}>
          <div className="animate-float mx-auto max-w-sm">
            <motion.div
              className="glass-card p-6 rounded-2xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-3 h-3 rounded-full bg-accent"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-sm text-muted-foreground">Live Capture</span>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4 mb-3">
                <div className="text-xs text-muted-foreground mb-1">🚗 Traffic Violation Detected</div>
                <div className="text-sm font-medium text-foreground">AI Scanning License Plate...</div>
                <motion.div
                  className="h-1 rounded-full mt-2"
                  style={{ background: "linear-gradient(90deg, hsl(210 100% 55%), hsl(160 70% 45%))" }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <motion.div
                className="text-center py-2 rounded-lg font-bold text-accent text-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Civic Credits +25 ✓
              </motion.div>
            </motion.div>
          </div>
        </ScrollReveal>

        <motion.p
          className="mt-12 text-sm text-muted-foreground tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          A Vision by{" "}
          <span className="text-foreground font-bold text-base tracking-wider">SAHIL RAMTEKE</span>
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
