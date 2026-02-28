import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

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
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x, y }}
      >
        <motion.div
          className="rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isClicking ? 8 : isHovering ? 48 : 12,
            height: isClicking ? 8 : isHovering ? 48 : 12,
            opacity: isHovering ? 0.3 : 1,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
          style={{
            background: "hsl(210 100% 65%)",
            boxShadow: isHovering
              ? "0 0 30px hsl(210 100% 55% / 0.5)"
              : "0 0 10px hsl(210 100% 55% / 0.3)",
          }}
        />
      </motion.div>
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: useSpring(cursorX, { damping: 40, stiffness: 200, mass: 0.8 }),
          y: useSpring(cursorY, { damping: 40, stiffness: 200, mass: 0.8 }),
        }}
      >
        <motion.div
          className="rounded-full border -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isClicking ? 20 : isHovering ? 64 : 36,
            height: isClicking ? 20 : isHovering ? 64 : 36,
            borderColor: isHovering ? "hsl(160 70% 45% / 0.6)" : "hsl(210 100% 55% / 0.3)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
