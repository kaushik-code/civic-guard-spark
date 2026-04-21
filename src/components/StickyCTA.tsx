import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Calendar } from "lucide-react";
import GatedDownloadModal from "./GatedDownloadModal";
import ScheduleCallDialog from "./ScheduleCallDialog";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.9);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-2 items-end"
          >
            <button
              onClick={() => setDownloadOpen(true)}
              className="group flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm shadow-2xl backdrop-blur-md border transition-all hover:scale-[1.04]"
              style={{
                background: "linear-gradient(135deg, hsl(210 100% 55%), hsl(190 100% 45%))",
                color: "hsl(220 45% 6%)",
                borderColor: "hsl(210 100% 70% / 0.4)",
                boxShadow: "0 10px 40px hsl(210 100% 55% / 0.4)",
              }}
            >
              <Download className="w-4 h-4" />
              Request Deck
            </button>
            <button
              onClick={() => setScheduleOpen(true)}
              className="group flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm backdrop-blur-md border transition-all hover:scale-[1.04]"
              style={{
                background: "hsl(220 35% 12% / 0.85)",
                color: "hsl(210 100% 75%)",
                borderColor: "hsl(210 100% 55% / 0.4)",
                boxShadow: "0 8px 28px hsl(220 45% 2% / 0.6)",
              }}
            >
              <Calendar className="w-4 h-4" />
              Schedule Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile: single combined floating button */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed bottom-4 left-4 right-4 z-40 flex md:hidden gap-2"
          >
            <button
              onClick={() => setDownloadOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full font-semibold text-sm shadow-2xl"
              style={{
                background: "linear-gradient(135deg, hsl(210 100% 55%), hsl(190 100% 45%))",
                color: "hsl(220 45% 6%)",
              }}
            >
              <Download className="w-4 h-4" />
              Deck
            </button>
            <button
              onClick={() => setScheduleOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full font-semibold text-sm backdrop-blur-md border"
              style={{
                background: "hsl(220 35% 12% / 0.9)",
                color: "hsl(210 100% 75%)",
                borderColor: "hsl(210 100% 55% / 0.4)",
              }}
            >
              <Calendar className="w-4 h-4" />
              Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <GatedDownloadModal open={downloadOpen} onClose={() => setDownloadOpen(false)} />
      <ScheduleCallDialog open={scheduleOpen} onClose={() => setScheduleOpen(false)} />
    </>
  );
};

export default StickyCTA;
