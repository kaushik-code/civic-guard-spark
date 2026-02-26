import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 4.4, suffix: "B+", label: "Urban Population by 2030" },
  { value: 2.5, suffix: "T", label: "Smart City Spending (USD)", prefix: "$" },
  { value: 350, suffix: "B", label: "GovTech Market by 2030", prefix: "$" },
];

const MarketSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      {/* Glowing orb background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(210 100% 55% / 0.3), transparent 70%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-widest text-center mb-3">For Investors</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-center mb-4">
            A Multi-Billion Dollar{" "}
            <span className="text-gradient-blue">Civic Infrastructure</span> Opportunity
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg max-w-2xl mx-auto">
            The convergence of urbanization, AI, and civic demand creates an unprecedented market.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="glass-card p-8 text-center glow-blue">
                <p className="text-5xl md:text-6xl font-bold font-display text-gradient-blue mb-2">
                  <AnimatedCounter end={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="text-muted-foreground font-medium">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
