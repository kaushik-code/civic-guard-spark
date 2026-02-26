import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const milestones = [
  { year: "2026", title: "Platform Launch", desc: "CivicGuard launches in 3 pilot cities — real-time citizen reporting goes live with AI-powered verification." },
  { year: "2027", title: "National Expansion", desc: "Scale to 25+ cities. Government partnerships formalized. Civic Credits economy activates with tangible rewards." },
  { year: "2028", title: "AI Maturity & Trust", desc: "Deep learning models exceed 99% fraud detection accuracy. Citizen trust scores become a recognized civic metric." },
  { year: "2029", title: "Global Rollout", desc: "International expansion begins. CivicGuard becomes the infrastructure layer for participatory governance worldwide." },
];

const WhyNowSection = () => {
  return (
    <section className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-widest text-center mb-3">The Roadmap</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-center mb-6">
            Why <span className="text-gradient-emerald">Now?</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg max-w-2xl mx-auto">
            The convergence of AI, smartphones, and civic demand creates a once-in-a-generation window to transform urban governance.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, hsl(210 100% 55%), hsl(160 70% 45%))" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {milestones.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-16 md:pl-0`}>
                  <motion.span
                    className="inline-block text-primary font-bold font-display text-lg px-3 py-1 rounded-md bg-primary/10"
                    whileHover={{ scale: 1.05 }}
                  >
                    {m.year}
                  </motion.span>
                  <h4 className="text-xl font-bold font-display mt-2 mb-2">{m.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
                {/* Dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-2 border-primary bg-background z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2, type: "spring", stiffness: 300 }}
                />
                <div className="flex-1 hidden md:block" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
