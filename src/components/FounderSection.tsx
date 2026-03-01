import { Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import WhatsAppIcon from "./WhatsAppIcon";

const socials = [
  { Icon: Linkedin, href: "https://www.linkedin.com/in/sahil-r-aa104512a/", label: "LinkedIn", glow: "hover:shadow-[0_0_20px_hsl(210_100%_55%/0.4)]" },
  { Icon: null, href: "https://wa.me/4915563595530", label: "WhatsApp", glow: "hover:shadow-[0_0_20px_hsl(142_70%_45%/0.4)]", isWhatsApp: true },
  { Icon: Mail, href: "mailto:sahilramteke001@gmail.com", label: "Email", glow: "hover:shadow-[0_0_20px_hsl(0_80%_55%/0.4)]" },
];

const FounderSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-5" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-6">The Visionary</p>
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-4 tracking-tight"
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "-0.02em" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            SAHIL RAMTEKE
          </motion.h2>
          <p className="text-primary text-lg font-medium mb-8">Founder & Civic Innovation Architect</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            A visionary builder at the intersection of civic technology and participatory governance. 
            Sahil is architecting a future where every citizen has a stake in their city's well-being — 
            and the tools to make a real difference.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex gap-4 justify-center">
            {socials.map(({ Icon, href, label, glow, isWhatsApp }, i) => (
              <motion.a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className={`w-12 h-12 rounded-xl border border-border bg-secondary/50 flex items-center justify-center transition-all duration-300 group ${glow}`}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                {isWhatsApp ? (
                  <WhatsAppIcon size={18} className="text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                ) : Icon ? (
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                ) : null}
              </motion.a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FounderSection;
