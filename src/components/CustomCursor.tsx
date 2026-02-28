import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Faster, snappier spring for the main dot
  const springConfig = { damping: 18, stiffness: 600, mass: 0.2 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  // Slightly lagging ring for premium trail feel
  const ringConfig = { damping: 28, stiffness: 350, mass: 0.4 };
  const ringX = useSpring(cursorX, ringConfig);
  const ringY = useSpring(cursorY, ringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], .glass-card, .btn-primary-glow, .btn-outline-glow")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main dot - premium crosshair style */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x, y }}
      >
        <motion.div
          className="rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isClicking ? 6 : isHovering ? 0 : 8,
            height: isClicking ? 6 : isHovering ? 0 : 8,
            opacity: isHovering ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          style={{
            background: "hsl(210 100% 70%)",
            boxShadow: "0 0 8px hsl(210 100% 60% / 0.6)",
          }}
        />
      </motion.div>

      {/* Premium ring with gradient border */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{
            width: isClicking ? 16 : isHovering ? 56 : 32,
            height: isClicking ? 16 : isHovering ? 56 : 32,
            opacity: isClicking ? 0.4 : 1,
            rotate: isHovering ? 90 : 0,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
          style={{
            border: "1.5px solid",
            borderColor: isHovering
              ? "hsl(160 70% 50% / 0.7)"
              : "hsl(210 100% 60% / 0.35)",
            background: isHovering
              ? "radial-gradient(circle, hsl(160 70% 50% / 0.08), transparent)"
              : "transparent",
            mixBlendMode: "screen",
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
