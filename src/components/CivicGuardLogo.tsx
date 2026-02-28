import { motion } from "framer-motion";
import logoImg from "@/assets/civicguard-logo.png";

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
      <img
        src={logoImg}
        alt="CivicGuard logo"
        width={size}
        height={size}
        className="object-contain"
      />
      {showText && (
        <span className="text-xl font-bold font-display text-gradient-blue tracking-tight">
          CivicGuard
        </span>
      )}
    </motion.div>
  );
};

export default CivicGuardLogo;
