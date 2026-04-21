import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

// Public TopoJSON of world countries (low-res, ~100KB)
const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type Status = "Live" | "Pilot" | "Planned";

interface City {
  name: string;
  country: string;
  coords: [number, number]; // [lng, lat]
  status: Status;
  note: string;
}

const CITIES: City[] = [
  { name: "Pune", country: "India", coords: [73.8567, 18.5204], status: "Pilot", note: "Founder city · MVP rollout Q2 '26" },
  { name: "Mumbai", country: "India", coords: [72.8777, 19.076], status: "Planned", note: "Targeted post-seed expansion" },
  { name: "Delhi", country: "India", coords: [77.209, 28.6139], status: "Planned", note: "Capital region · regulatory pilot" },
  { name: "Bengaluru", country: "India", coords: [77.5946, 12.9716], status: "Planned", note: "Tech-corridor partner discussions" },
  { name: "Berlin", country: "Germany", coords: [13.405, 52.52], status: "Pilot", note: "EU GovTech pilot · Q3 '26" },
  { name: "Munich", country: "Germany", coords: [11.582, 48.1351], status: "Planned", note: "Smart-city consortium outreach" },
  { name: "Hamburg", country: "Germany", coords: [9.9937, 53.5511], status: "Planned", note: "Port-city compliance pilot" },
];

const HIGHLIGHTED_COUNTRIES = new Set(["India", "Germany"]);

const STATUS_STYLES: Record<Status, { dot: string; ring: string; chip: string; label: string }> = {
  Live: {
    dot: "hsl(160 70% 50%)",
    ring: "hsl(160 70% 50% / 0.45)",
    chip: "bg-accent/20 text-accent border-accent/40",
    label: "Live",
  },
  Pilot: {
    dot: "hsl(210 100% 60%)",
    ring: "hsl(210 100% 60% / 0.45)",
    chip: "bg-primary/20 text-primary border-primary/40",
    label: "Pilot",
  },
  Planned: {
    dot: "hsl(45 95% 60%)",
    ring: "hsl(45 95% 60% / 0.4)",
    chip: "bg-yellow-400/15 text-yellow-300 border-yellow-400/30",
    label: "Planned",
  },
};

const PilotCitiesSection = () => {
  const [active, setActive] = useState<City | null>(CITIES[0]);

  return (
    <section id="pilot-cities" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.07]" />
      <div
        className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(210 100% 55% / 0.35), transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-widest text-center mb-3">
            Pilot Cities
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-center mb-4">
            From <span className="text-gradient-blue">Pune to Berlin</span> — A Civic OS Going Global
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg max-w-2xl mx-auto">
            Live pilots, planned rollouts, and partner cities across two continents.
          </p>
        </ScrollReveal>

        {/* Legend */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {(Object.keys(STATUS_STYLES) as Status[]).map((s) => (
              <div
                key={s}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold ${STATUS_STYLES[s].chip}`}
              >
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ background: STATUS_STYLES[s].dot, boxShadow: `0 0 10px ${STATUS_STYLES[s].dot}` }}
                />
                {STATUS_STYLES[s].label}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Map */}
          <ScrollReveal className="lg:col-span-3">
            <div className="glass-card p-4 md:p-6 relative overflow-hidden">
              <ComposableMap
                projection="geoEqualEarth"
                projectionConfig={{ scale: 165, center: [40, 25] }}
                style={{ width: "100%", height: "auto" }}
              >
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const name = geo.properties.name;
                      const highlighted = HIGHLIGHTED_COUNTRIES.has(name);
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          style={{
                            default: {
                              fill: highlighted ? "hsl(210 100% 55% / 0.18)" : "hsl(220 30% 14%)",
                              stroke: highlighted ? "hsl(210 100% 60% / 0.6)" : "hsl(220 25% 22%)",
                              strokeWidth: 0.5,
                              outline: "none",
                            },
                            hover: {
                              fill: highlighted ? "hsl(210 100% 55% / 0.3)" : "hsl(220 30% 18%)",
                              outline: "none",
                            },
                            pressed: { outline: "none" },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>

                {CITIES.map((city) => {
                  const styles = STATUS_STYLES[city.status];
                  const isActive = active?.name === city.name;
                  return (
                    <Marker
                      key={city.name}
                      coordinates={city.coords}
                      onMouseEnter={() => setActive(city)}
                      onClick={() => setActive(city)}
                      style={{ default: { cursor: "pointer" } }}
                    >
                      {/* Outer pulsing ring */}
                      <circle r={isActive ? 9 : 7} fill={styles.ring}>
                        <animate
                          attributeName="r"
                          values={`${isActive ? 9 : 7};${isActive ? 16 : 13};${isActive ? 9 : 7}`}
                          dur="2.4s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.7;0;0.7"
                          dur="2.4s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      {/* Core dot */}
                      <circle
                        r={isActive ? 4 : 3}
                        fill={styles.dot}
                        stroke="hsl(220 45% 6%)"
                        strokeWidth={1}
                        style={{
                          filter: `drop-shadow(0 0 6px ${styles.dot})`,
                        }}
                      />
                    </Marker>
                  );
                })}
              </ComposableMap>
            </div>
          </ScrollReveal>

          {/* Side panel: city list + active detail */}
          <ScrollReveal delay={0.15} className="lg:col-span-2">
            <div className="space-y-4">
              {active && (
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="glass-card glow-blue p-6"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        {active.country}
                      </p>
                      <h3 className="text-2xl font-bold font-display text-foreground">
                        {active.name}
                      </h3>
                    </div>
                    <span
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${STATUS_STYLES[active.status].chip}`}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full inline-block"
                        style={{ background: STATUS_STYLES[active.status].dot }}
                      />
                      {STATUS_STYLES[active.status].label}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{active.note}</p>
                </motion.div>
              )}

              <div className="glass-card p-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 px-2">
                  All Cities
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {CITIES.map((c) => {
                    const isActive = active?.name === c.name;
                    return (
                      <button
                        key={c.name}
                        onMouseEnter={() => setActive(c)}
                        onClick={() => setActive(c)}
                        className={`text-left px-3 py-2 rounded-lg transition-all border ${
                          isActive
                            ? "bg-primary/10 border-primary/40"
                            : "border-transparent hover:bg-secondary/40"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="w-1.5 h-1.5 rounded-full inline-block flex-shrink-0"
                            style={{
                              background: STATUS_STYLES[c.status].dot,
                              boxShadow: `0 0 6px ${STATUS_STYLES[c.status].dot}`,
                            }}
                          />
                          <span className="text-sm font-medium text-foreground truncate">
                            {c.name}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PilotCitiesSection;
