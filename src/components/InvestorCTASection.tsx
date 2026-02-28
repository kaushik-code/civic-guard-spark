import { motion } from "framer-motion";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import ScheduleCallDialog from "./ScheduleCallDialog";

const InvestorCTASection = () => {
  const [scheduleOpen, setScheduleOpen] = useState(false);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Glow background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-20"
        style={{ background: "radial-gradient(ellipse, hsl(210 100% 55% / 0.4), transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.25, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display mb-6">
            Invest in the Future of{" "}
            <span className="text-gradient-blue">Urban Governance.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            CivicGuard is building the civic infrastructure layer for the world's cities. Be part of the movement.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.button
              className="btn-primary-glow text-base animate-pulse-glow"
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              Download Executive Summary
            </motion.button>
            <motion.button
              className="btn-outline-glow text-base"
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              onClick={() => setScheduleOpen(true)}
            >
              Schedule Investor Discussion
            </motion.button>
            <motion.button
              className="btn-outline-glow text-base"
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              Partner With Us
            </motion.button>
          </div>
        </ScrollReveal>

        <ScheduleCallDialog open={scheduleOpen} onClose={() => setScheduleOpen(false)} />
      </div>
    </section>
  );
};

export default InvestorCTASection;
