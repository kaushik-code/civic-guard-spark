import { motion } from "framer-motion";

interface Props {
  size?: number;
  showText?: boolean;
  className?: string;
}

const CivicGuardLogo = ({ size = 40, showText = true, className = "" }: Props) => {
  const scale = size / 48;
  
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.04 }}
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
          <linearGradient id="cg-shield" x1="8" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="cg-inner" x1="16" y1="14" x2="32" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
          <filter id="cg-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Shield outline */}
        <path
          d="M24 3L42 12V26C42 36 33 43 24 46C15 43 6 36 6 26V12L24 3Z"
          stroke="url(#cg-shield)"
          strokeWidth="2"
          fill="none"
          filter="url(#cg-glow)"
          strokeLinejoin="round"
        />

        {/* Inner shield fill */}
        <path
          d="M24 6L39 13.5V26C39 34.5 31.5 40.5 24 43C16.5 40.5 9 34.5 9 26V13.5L24 6Z"
          fill="url(#cg-shield)"
          opacity="0.08"
        />

        {/* Check / network node - center */}
        <circle cx="24" cy="22" r="3" fill="url(#cg-inner)" />
        
        {/* Connection nodes */}
        <circle cx="16" cy="28" r="1.8" fill="#60A5FA" opacity="0.8" />
        <circle cx="32" cy="28" r="1.8" fill="#34D399" opacity="0.8" />
        <circle cx="24" cy="34" r="1.8" fill="#06B6D4" opacity="0.8" />
        <circle cx="18" cy="17" r="1.5" fill="#60A5FA" opacity="0.6" />
        <circle cx="30" cy="17" r="1.5" fill="#34D399" opacity="0.6" />
        
        {/* Connection lines */}
        <line x1="24" y1="22" x2="16" y2="28" stroke="url(#cg-inner)" strokeWidth="0.8" opacity="0.5" />
        <line x1="24" y1="22" x2="32" y2="28" stroke="url(#cg-inner)" strokeWidth="0.8" opacity="0.5" />
        <line x1="24" y1="22" x2="24" y2="34" stroke="url(#cg-inner)" strokeWidth="0.8" opacity="0.5" />
        <line x1="24" y1="22" x2="18" y2="17" stroke="url(#cg-inner)" strokeWidth="0.8" opacity="0.4" />
        <line x1="24" y1="22" x2="30" y2="17" stroke="url(#cg-inner)" strokeWidth="0.8" opacity="0.4" />
        <line x1="16" y1="28" x2="24" y2="34" stroke="url(#cg-inner)" strokeWidth="0.6" opacity="0.3" />
        <line x1="32" y1="28" x2="24" y2="34" stroke="url(#cg-inner)" strokeWidth="0.6" opacity="0.3" />
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
