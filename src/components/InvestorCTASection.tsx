import ScrollReveal from "./ScrollReveal";

const InvestorCTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-20"
        style={{ background: "radial-gradient(ellipse, hsl(210 100% 55% / 0.4), transparent 70%)" }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display mb-6">
            Invest in the Future of{" "}
            <span className="text-gradient-blue">Urban Governance.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Join us in building the civic infrastructure layer for the world's cities.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary-glow text-base animate-pulse-glow">
              Download Executive Summary
            </button>
            <button className="btn-outline-glow text-base">
              Schedule Investor Discussion
            </button>
            <button className="btn-outline-glow text-base">
              Partner With Us
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InvestorCTASection;
