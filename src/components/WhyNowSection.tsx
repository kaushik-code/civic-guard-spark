import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const milestones = [
  { year: "2023", title: "AI Advancement", desc: "LLMs and computer vision reach production-grade accuracy for civic applications." },
  { year: "2024", title: "Smartphone Penetration", desc: "6.8 billion smartphone users — every citizen becomes a potential data source." },
  { year: "2025", title: "Smart City Initiatives", desc: "Governments worldwide commit $2.5T to digital urban infrastructure." },
  { year: "2026", title: "Citizen Demand", desc: "Public demand for transparency and accountability reaches a tipping point." },
];

const WhyNowSection = () => {
  return (
    <section className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-center mb-16">
            Why <span className="text-gradient-emerald">Now?</span>
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {milestones.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-16 md:pl-0`}>
                  <span className="text-primary font-bold font-display text-lg">{m.year}</span>
                  <h4 className="text-xl font-bold font-display mt-1 mb-2">{m.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
                {/* Dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-2 border-primary bg-background z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2 }}
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
