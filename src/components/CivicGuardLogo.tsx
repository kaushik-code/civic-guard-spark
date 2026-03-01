import { motion } from "framer-motion";

interface Props {
  size?: number;
  showText?: boolean;
  className?: string;
}

const CivicGuardLogo = ({ size = 40, showText = true, className = "" }: Props) => {
  return (
    <motion.div
      className={`flex items-center gap-2.5 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {/* Inline SVG logo - dark-mode optimized */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shield-gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(210 100% 60%)" />
            <stop offset="100%" stopColor="hsl(160 70% 50%)" />
          </linearGradient>
          <linearGradient id="city-gradient" x1="20" y1="50" x2="44" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(210 100% 70%)" />
            <stop offset="100%" stopColor="hsl(160 70% 65%)" />
          </linearGradient>
          <filter id="logo-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Shield shape */}
        <path
          d="M32 4 L56 16 V36 C56 48 44 58 32 62 C20 58 8 48 8 36 V16 Z"
          stroke="url(#shield-gradient)"
          strokeWidth="2"
          fill="hsl(210 100% 55% / 0.08)"
          filter="url(#logo-glow)"
        />

        {/* City skyline inside shield */}
        <g fill="url(#city-gradient)">
          {/* Building 1 - tall left */}
          <rect x="18" y="28" width="5" height="18" rx="1" />
          {/* Building 2 - medium */}
          <rect x="25" y="32" width="5" height="14" rx="1" />
          {/* Building 3 - tallest center */}
          <rect x="32" y="24" width="5" height="22" rx="1" />
          {/* Building 4 - short */}
          <rect x="39" y="36" width="5" height="10" rx="1" />
          {/* Antenna on tallest */}
          <rect x="34" y="20" width="1" height="5" />
          <circle cx="34.5" cy="19" r="1.5" fill="hsl(160 70% 55%)" />
        </g>

        {/* Signal waves from antenna */}
        <path
          d="M30 18 Q32 14 34.5 18"
          stroke="hsl(160 70% 55% / 0.5)"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M28 16 Q32 10 37 16"
          stroke="hsl(210 100% 60% / 0.35)"
          strokeWidth="0.6"
          fill="none"
        />
      </svg>

      {showText && (
        <span className="text-xl font-bold font-display text-gradient-blue tracking-tight select-none">
          CivicGuard
        </span>
      )}
    </motion.div>
  );
};

export default CivicGuardLogo;
