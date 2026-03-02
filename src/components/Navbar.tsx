import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import CivicGuardLogo from "./CivicGuardLogo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Market", href: "#market" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled
          ? "1px solid hsl(210 40% 93% / 0.06)"
          : "1px solid transparent",
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] origin-left"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, hsl(210 100% 55%), hsl(190 100% 45%), hsl(160 70% 45%))",
          boxShadow: "0 0 12px hsl(210 100% 55% / 0.5), 0 0 4px hsl(160 70% 45% / 0.3)",
        }}
      />

      {/* Background layer */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: scrolled ? 1 : 0,
          background: "hsl(220 45% 6% / 0.85)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 cursor-none"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <CivicGuardLogo size={32} showText />
        </motion.button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-none"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
              <motion.span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 rounded-full"
                style={{ background: "linear-gradient(90deg, hsl(210 100% 55%), hsl(160 70% 45%))" }}
                whileHover={{ width: "60%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}

          <motion.button
            onClick={() => scrollTo("#contact")}
            className="ml-3 px-5 py-2 text-sm font-semibold rounded-xl cursor-none"
            style={{
              background: "linear-gradient(135deg, hsl(210 100% 55%), hsl(190 100% 45%))",
              color: "hsl(220 45% 6%)",
            }}
            whileHover={{ scale: 1.05, y: -1, boxShadow: "0 0 30px hsl(210 100% 55% / 0.4)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Invest Now
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          className="md:hidden text-foreground cursor-none p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 border-t"
            style={{
              background: "hsl(220 45% 6% / 0.95)",
              backdropFilter: "blur(24px)",
              borderColor: "hsl(210 40% 93% / 0.06)",
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/30 cursor-none"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
