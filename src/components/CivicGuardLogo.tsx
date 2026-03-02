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
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cg-main" x1="6" y1="4" x2="42" y2="46" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="40%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="cg-fill" x1="12" y1="8" x2="36" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.08" />
          </linearGradient>
          <filter id="cg-glow2" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Shield body */}
        <path
          d="M24 4L40 12V24C40 34 32 42 24 45C16 42 8 34 8 24V12L24 4Z"
          fill="url(#cg-fill)"
          stroke="url(#cg-main)"
          strokeWidth="1.8"
          strokeLinejoin="round"
          filter="url(#cg-glow2)"
        />

        {/* Inner C letterform / arc */}
        <path
          d="M30 17C28.5 15.5 26.5 14.5 24 14.5C19.5 14.5 16 18 16 22.5C16 27 19.5 30.5 24 30.5C26.5 30.5 28.5 29.5 30 28"
          stroke="url(#cg-main)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Guard dot */}
        <circle cx="31" cy="22.5" r="2.5" fill="url(#cg-main)" />

        {/* Signal rings */}
        <path
          d="M34 18.5C35.5 19.5 36.5 21 36.5 22.5C36.5 24 35.5 25.5 34 26.5"
          stroke="#06B6D4"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M36.5 16C38.5 17.5 40 20 40 22.5C40 25 38.5 27.5 36.5 29"
          stroke="#10B981"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.35"
        />
      </svg>

      {showText && (
        <div className="flex flex-col select-none leading-none">
          <span className="text-lg font-bold font-display text-gradient-blue tracking-tight">
            CivicGuard
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default CivicGuardLogo;
