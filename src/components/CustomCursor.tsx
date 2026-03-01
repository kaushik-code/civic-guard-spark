import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  // Ultra-responsive main cursor
  const springConfig = { damping: 12, stiffness: 800, mass: 0.1 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  // Smooth outer ring
  const ringConfig = { damping: 20, stiffness: 300, mass: 0.3 };
  const ringX = useSpring(cursorX, ringConfig);
  const ringY = useSpring(cursorY, ringConfig);

  // Magnetic glow
  const glowConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const glowX = useSpring(cursorX, glowConfig);
  const glowY = useSpring(cursorY, glowConfig);

  const handleMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    setTrail(prev => {
      const next = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
      return next.slice(-6);
    });
  }, [cursorX, cursorY]);

  useEffect(() => {
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("a, button, [role='button'], .glass-card, .btn-primary-glow, .btn-outline-glow, input, textarea"));
    };
    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [handleMove]);

  return (
    <>
      {/* Trail particles */}
      {trail.map((point, i) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 pointer-events-none z-[9996] rounded-full"
          initial={{ opacity: 0.6, scale: 1, x: point.x - 2, y: point.y - 2 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            width: 4,
            height: 4,
            background: `hsl(${isHovering ? "160 70% 55%" : "210 100% 65%"} / ${0.3 + i * 0.08})`,
          }}
        />
      ))}

      {/* Ambient glow (furthest layer) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9996]"
        style={{ x: glowX, y: glowY }}
      >
        <motion.div
          className="rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isHovering ? 80 : 50,
            height: isHovering ? 80 : 50,
            opacity: isClicking ? 0.15 : 0.08,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{
            background: isHovering
              ? "radial-gradient(circle, hsl(160 70% 50% / 0.3), transparent 70%)"
              : "radial-gradient(circle, hsl(210 100% 60% / 0.25), transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{
            width: isClicking ? 20 : isHovering ? 48 : 30,
            height: isClicking ? 20 : isHovering ? 48 : 30,
            opacity: isClicking ? 0.5 : 0.8,
            rotate: isHovering ? 180 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          style={{
            border: "1px solid",
            borderColor: isHovering
              ? "hsl(160 70% 55% / 0.6)"
              : "hsl(210 100% 65% / 0.25)",
            background: isHovering
              ? "radial-gradient(circle, hsl(160 70% 50% / 0.06), transparent)"
              : "transparent",
            backdropFilter: isHovering ? "blur(2px)" : "none",
          }}
        />
      </motion.div>

      {/* Core dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x, y }}
      >
        <motion.div
          className="rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isClicking ? 4 : isHovering ? 6 : 6,
            height: isClicking ? 4 : isHovering ? 6 : 6,
            opacity: 1,
          }}
          transition={{ type: "spring", stiffness: 800, damping: 25 }}
          style={{
            background: isHovering
              ? "hsl(160 70% 60%)"
              : "hsl(210 100% 70%)",
            boxShadow: isHovering
              ? "0 0 12px hsl(160 70% 55% / 0.8), 0 0 24px hsl(160 70% 50% / 0.3)"
              : "0 0 10px hsl(210 100% 60% / 0.7), 0 0 20px hsl(210 100% 55% / 0.2)",
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
