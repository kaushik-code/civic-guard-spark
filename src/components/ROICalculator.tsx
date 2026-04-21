import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { TrendingUp, Users, ShieldCheck, Coins } from "lucide-react";

const formatCompact = (n: number) => {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return n.toFixed(0);
};

const ROICalculator = () => {
  const [population, setPopulation] = useState(2_000_000); // 2M
  const [adoptionPct, setAdoptionPct] = useState(3); // 3%
  const [reportsPerUser, setReportsPerUser] = useState(2); // per month
  const [avgFineUsd, setAvgFineUsd] = useState(15); // USD per validated report

  const projections = useMemo(() => {
    const activeReporters = Math.round(population * (adoptionPct / 100));
    const monthlyReports = activeReporters * reportsPerUser;
    const verifiedRate = 0.72; // ~72% AI + officer approved
    const verifiedReports = Math.round(monthlyReports * verifiedRate);
    const monthlyRevenue = verifiedReports * avgFineUsd;
    const platformShare = 0.15; // 15% civic-tech platform fee
    const platformRevenue = monthlyRevenue * platformShare;
    const annualPlatformRevenue = platformRevenue * 12;
    const creditsIssued = verifiedReports * 25; // 25 credits per report

    return {
      activeReporters,
      verifiedReports,
      monthlyRevenue,
      annualPlatformRevenue,
      creditsIssued,
    };
  }, [population, adoptionPct, reportsPerUser, avgFineUsd]);

  return (
    <section id="roi" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.07]" />
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(160 70% 45% / 0.4), transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <p className="text-accent font-semibold text-sm uppercase tracking-widest text-center mb-3">
            Impact Calculator
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-center mb-4">
            Project Your City's{" "}
            <span className="text-gradient-emerald">Civic ROI</span>
          </h2>
          <p className="text-muted-foreground text-center mb-14 text-lg max-w-2xl mx-auto">
            Drag the sliders. See revenue, reports, and citizen engagement model in real time.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Sliders */}
          <ScrollReveal className="lg:col-span-2">
            <div className="glass-card p-8 space-y-8">
              <SliderRow
                label="City Population"
                value={`${formatCompact(population)} citizens`}
                min={100_000}
                max={20_000_000}
                step={100_000}
                current={population}
                onChange={setPopulation}
              />
              <SliderRow
                label="Active Reporter Adoption"
                value={`${adoptionPct}%`}
                min={1}
                max={25}
                step={1}
                current={adoptionPct}
                onChange={setAdoptionPct}
              />
              <SliderRow
                label="Reports per User / Month"
                value={`${reportsPerUser}`}
                min={1}
                max={10}
                step={1}
                current={reportsPerUser}
                onChange={setReportsPerUser}
              />
              <SliderRow
                label="Avg Fine Value"
                value={`$${avgFineUsd}`}
                min={5}
                max={100}
                step={5}
                current={avgFineUsd}
                onChange={setAvgFineUsd}
              />
            </div>
          </ScrollReveal>

          {/* Results */}
          <ScrollReveal delay={0.15} className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 gap-5">
              <ResultCard
                icon={<Users className="w-5 h-5" />}
                label="Active Citizen Reporters"
                value={formatCompact(projections.activeReporters)}
                tone="blue"
              />
              <ResultCard
                icon={<ShieldCheck className="w-5 h-5" />}
                label="Verified Reports / Month"
                value={formatCompact(projections.verifiedReports)}
                tone="emerald"
              />
              <ResultCard
                icon={<Coins className="w-5 h-5" />}
                label="Civic Credits Issued / Month"
                value={formatCompact(projections.creditsIssued)}
                tone="emerald"
              />
              <ResultCard
                icon={<TrendingUp className="w-5 h-5" />}
                label="Monthly Fine Recovery"
                value={`$${formatCompact(projections.monthlyRevenue)}`}
                tone="blue"
              />

              <motion.div
                key={projections.annualPlatformRevenue}
                initial={{ scale: 0.97, opacity: 0.6 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="sm:col-span-2 glass-card glow-blue p-7 text-center relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(210 100% 55% / 0.3), hsl(160 70% 45% / 0.3))",
                  }}
                />
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 relative">
                  Projected Annual Platform Revenue
                </p>
                <p className="text-5xl md:text-6xl font-bold font-display text-gradient-blue counter-value relative">
                  ${formatCompact(projections.annualPlatformRevenue)}
                </p>
                <p className="text-xs text-muted-foreground/70 mt-2 relative">
                  Based on a 15% civic-tech platform share of recovered fines.
                </p>
              </motion.div>
            </div>

            <p className="text-[11px] text-muted-foreground/50 mt-4 text-center">
              Illustrative projections. Verification rate ~72% (AI + officer approval).
              Adjust sliders to model different markets.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const SliderRow = ({
  label,
  value,
  min,
  max,
  step,
  current,
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  current: number;
  onChange: (n: number) => void;
}) => (
  <div>
    <div className="flex items-baseline justify-between mb-3">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <span className="text-sm font-bold text-primary tabular-nums">{value}</span>
    </div>
    <Slider
      min={min}
      max={max}
      step={step}
      value={[current]}
      onValueChange={(v) => onChange(v[0])}
    />
  </div>
);

const ResultCard = ({
  icon,
  label,
  value,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone: "blue" | "emerald";
}) => (
  <motion.div
    key={value}
    initial={{ y: 6, opacity: 0.7 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    className="glass-card p-6"
  >
    <div className="flex items-center gap-2 mb-3">
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center ${
          tone === "blue" ? "bg-primary/15 text-primary" : "bg-accent/15 text-accent"
        }`}
      >
        {icon}
      </div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
    <p
      className={`text-3xl md:text-4xl font-bold font-display counter-value ${
        tone === "blue" ? "text-gradient-blue" : "text-gradient-emerald"
      }`}
    >
      {value}
    </p>
  </motion.div>
);

export default ROICalculator;
