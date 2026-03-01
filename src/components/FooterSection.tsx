import { Linkedin, Mail, ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import CivicGuardLogo from "./CivicGuardLogo";
import WhatsAppIcon from "./WhatsAppIcon";

const socialLinks = [
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/sahil-r-aa104512a/",
    label: "LinkedIn",
    color: "hover:bg-[hsl(210,100%,55%)]/20 hover:border-[hsl(210,100%,55%)]/40 hover:shadow-[0_0_20px_hsl(210_100%_55%/0.3)]",
  },
  {
    Icon: null,
    href: "https://wa.me/4915563595530",
    label: "WhatsApp",
    color: "hover:bg-[hsl(142,70%,45%)]/20 hover:border-[hsl(142,70%,45%)]/40 hover:shadow-[0_0_20px_hsl(142_70%_45%/0.3)]",
    isWhatsApp: true,
  },
  {
    Icon: Mail,
    href: "mailto:sahilramteke001@gmail.com",
    label: "Email",
    color: "hover:bg-[hsl(0,80%,55%)]/20 hover:border-[hsl(0,80%,55%)]/40 hover:shadow-[0_0_20px_hsl(0_80%_55%/0.3)]",
  },
];

const footerLinks = [
  { label: "Investment Deck", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "Roadmap", href: "#" },
  { label: "Contact", href: "mailto:sahilramteke001@gmail.com" },
];

const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, hsl(210 100% 55% / 0.4), hsl(160 70% 45% / 0.4), transparent)" }} />

      {/* Glow background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10" style={{ background: "radial-gradient(ellipse, hsl(210 100% 55% / 0.5), transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Main footer grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <CivicGuardLogo size={32} />
            <p className="text-muted-foreground text-sm leading-relaxed mt-3 mb-6 max-w-xs">
              Citizen-powered compliance infrastructure transforming how cities govern and citizens participate.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label, color, isWhatsApp }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className={`w-11 h-11 rounded-xl border border-border bg-secondary/50 flex items-center justify-center transition-all duration-300 group ${color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {isWhatsApp ? (
                    <WhatsAppIcon size={16} className="text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                  ) : Icon ? (
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                  ) : null}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-5">Get In Touch</h4>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Founded by <span className="text-foreground font-semibold">Sahil Ramteke</span>
              </p>
              <a href="mailto:sahilramteke001@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                <Mail className="w-4 h-4 text-primary" />
                sahilramteke001@gmail.com
              </a>
              <a href="https://wa.me/4915563595530" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                <WhatsAppIcon size={16} className="text-accent" />
                +49 15563 595530
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Germany
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CivicGuard. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Building the future of <span className="text-gradient-blue font-semibold">civic infrastructure</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
