import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, X, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const WEEKDAY_SLOTS = ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"];
const WEEKEND_SLOTS = ["4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"];

const getNextDays = (count: number) => {
  const days: Date[] = [];
  const today = new Date();
  for (let i = 1; days.length < count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
};

const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-IN", { weekday: "short", month: "short", day: "numeric" });

const buildGoogleCalendarUrl = (date: Date, timeSlot: string) => {
  const [time, meridian] = timeSlot.split(" ");
  const [h, m] = time.split(":").map(Number);
  let hours = h;
  if (meridian === "PM" && hours !== 12) hours += 12;
  if (meridian === "AM" && hours === 12) hours = 0;

  // IST is UTC+5:30, so subtract 5:30 to get UTC
  const start = new Date(date);
  start.setHours(hours, m, 0, 0);
  const startUTC = new Date(start.getTime() - (5 * 60 + 30) * 60 * 1000);
  const endUTC = new Date(startUTC.getTime() + 30 * 60 * 1000);

  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "CivicGuard Investor Discussion",
    details:
      "Investor discussion call with Sahil Ramteke, Founder of CivicGuard.\n\nPreferred timezone: IST (Indian Standard Time)\n\nContact: sahilramteke001@gmail.com\nWhatsApp: +49 15563 595530",
    location: "Google Meet (link will be added)",
    dates: `${fmt(startUTC)}/${fmt(endUTC)}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

interface Props {
  open: boolean;
  onClose: () => void;
}

const ScheduleCallDialog = ({ open, onClose }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [step, setStep] = useState<"details" | "schedule">("details");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const days = getNextDays(10);

  const slots = selectedDate
    ? isWeekend(selectedDate)
      ? WEEKEND_SLOTS
      : WEEKDAY_SLOTS
    : [];

  const handleCloseInner = () => {
    onClose();
    setTimeout(() => {
      setStep("details");
      setSelectedDate(null);
      setName("");
      setEmail("");
      setCompany("");
      setError("");
    }, 300);
  };

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim()) return setError("Name is required");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Valid email is required");

    setSubmitting(true);
    try {
      await supabase.from("call_requests").insert({
        name: name.trim(),
        email: email.trim(),
        company: company.trim() || null,
      });
    } catch (err) {
      console.error("call_requests insert failed", err);
    }
    setSubmitting(false);
    setStep("schedule");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Dialog */}
          <motion.div
            className="glass-card relative z-10 w-full max-w-lg p-8 rounded-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-foreground">Schedule Investor Call</h3>
                <p className="text-xs text-muted-foreground">All times in IST (Indian Standard Time)</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-1">
              <Clock className="w-3.5 h-3.5 inline mr-1" />
              Weekdays: 10:00 AM – 12:00 PM IST &nbsp;·&nbsp; Weekends: 4:00 PM – 6:00 PM IST
            </p>

            {/* Date selection */}
            <p className="text-sm font-semibold text-foreground mt-5 mb-3">Select a date</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {days.map((d, i) => {
                const active = selectedDate?.toDateString() === d.toDateString();
                const weekend = isWeekend(d);
                return (
                  <motion.button
                    key={i}
                    onClick={() => setSelectedDate(d)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium transition-all border ${
                      active
                        ? "bg-primary/20 border-primary/50 text-primary"
                        : "border-border bg-secondary/30 text-muted-foreground hover:border-primary/30"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="block">{formatDate(d)}</span>
                    <span className={`text-[10px] ${weekend ? "text-accent" : "text-muted-foreground/60"}`}>
                      {weekend ? "Weekend" : "Weekday"}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Time slots */}
            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm font-semibold text-foreground mb-3">Pick a time slot</p>
                <div className="grid grid-cols-2 gap-2">
                  {slots.map((slot) => {
                    const url = buildGoogleCalendarUrl(selectedDate, slot);
                    return (
                      <motion.a
                        key={slot}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border bg-secondary/20 text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all group"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Clock className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                        {slot} IST
                        <ExternalLink className="w-3 h-3 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
                <p className="text-xs text-muted-foreground/60 mt-3 text-center">
                  Clicking a slot opens Google Calendar to create the invite
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScheduleCallDialog;
