import { Linkedin, Mail, ArrowUpRight, MapPin, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import CivicGuardLogo from "./CivicGuardLogo";
import WhatsAppIcon from "./WhatsAppIcon";

const socialLinks = [
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/sahil-r-aa104512a/",
    label: "LinkedIn",
    hoverBg: "hover:bg-[#0A66C2]/15 hover:border-[#0A66C2]/30",
    hoverColor: "group-hover:text-[#0A66C2]",
  },
  {
    Icon: null,
    href: "https://wa.me/4915563595530",
    label: "WhatsApp",
    hoverBg: "hover:bg-[#25D366]/15 hover:border-[#25D366]/30",
    hoverColor: "group-hover:text-[#25D366]",
    isWhatsApp: true,
  },
  {
    Icon: Mail,
    href: "mailto:sahilramteke001@gmail.com",
    label: "Email",
    hoverBg: "hover:bg-[#EA4335]/15 hover:border-[#EA4335]/30",
    hoverColor: "group-hover:text-[#EA4335]",
  },
];

const footerLinks = [
  { label: "Investment Deck", href: "#" },
  { label: "How It Works", href: "#solution" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "mailto:sahilramteke001@gmail.com" },
];

const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, hsl(210 100% 55% / 0.4), hsl(160 70% 45% / 0.4), transparent)" }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10" style={{ background: "radial-gradient(ellipse, hsl(210 100% 55% / 0.5), transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8">
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
              {socialLinks.map(({ Icon, href, label, hoverBg, hoverColor, isWhatsApp }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className={`w-11 h-11 rounded-xl border border-border bg-secondary/50 flex items-center justify-center transition-all duration-300 group ${hoverBg}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {isWhatsApp ? (
                    <WhatsAppIcon size={16} className={`text-muted-foreground transition-colors duration-300 ${hoverColor}`} />
                  ) : Icon ? (
                    <Icon className={`w-4 h-4 text-muted-foreground transition-colors duration-300 ${hoverColor}`} />
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
              <a href="mailto:sahilramteke001@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#EA4335] transition-colors duration-300">
                <Mail className="w-4 h-4 text-[#EA4335]" />
                sahilramteke001@gmail.com
              </a>
              <a href="https://wa.me/4915563595530" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#25D366] transition-colors duration-300">
                <WhatsAppIcon size={16} className="text-[#25D366]" />
                +49 15563 595530
              </a>
              <a href="https://www.linkedin.com/in/sahil-r-aa104512a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#0A66C2] transition-colors duration-300">
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                LinkedIn Profile
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Germany
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CivicGuard. All rights reserved.
          </p>

          {/* Built by credit with hover card */}
          <HoverCard openDelay={200} closeDelay={300}>
            <HoverCardTrigger asChild>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5 cursor-pointer">
                <Code2 className="w-3 h-3" />
                Built & maintained by{" "}
                <span className="text-foreground font-semibold hover:text-primary transition-colors duration-300">
                  Kaushik Khobragade
                </span>
              </p>
            </HoverCardTrigger>
            <HoverCardContent side="top" align="end" className="w-80 rounded-xl border border-border bg-card/95 backdrop-blur-xl p-5 shadow-2xl shadow-primary/10">
              <div className="flex items-start gap-4">
                <a href="https://www.linkedin.com/in/kaushik-khobragade" target="_blank" rel="noopener noreferrer" className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                    KK
                  </div>
                </a>
                <div className="min-w-0">
                  <a href="https://www.linkedin.com/in/kaushik-khobragade" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-foreground hover:text-primary transition-colors">
                    Kaushik Khobragade
                  </a>
                  <p className="text-xs text-primary font-medium mt-0.5">DevOps Engineer</p>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    Designed, built & maintains this website end-to-end.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <a
                  href="https://www.linkedin.com/in/kaushik-khobragade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#0A66C2]/10 border border-[#0A66C2]/20 text-[#0A66C2] text-xs font-medium hover:bg-[#0A66C2]/20 transition-colors duration-200"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  View Profile
                </a>
                <a
                  href="mailto:kaushik.khobragade@outlook.com"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-secondary border border-border text-foreground text-xs font-medium hover:bg-accent transition-colors duration-200"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Contact
                </a>
              </div>
            </HoverCardContent>
          </HoverCard>

          <p className="text-xs text-muted-foreground">
            Building the future of <span className="text-gradient-blue font-semibold">civic infrastructure</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
