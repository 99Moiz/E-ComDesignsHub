import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.img
        src="/images/logo.jpeg"
        alt="e-comdesignshub"
        className="h-24 w-24 rounded-2xl object-cover shadow-lg"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <motion.p
        className="mt-4 font-heading font-bold text-lg text-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        e-com<span className="text-primary">design</span>shub
      </motion.p>
      <div className="mt-6 w-48 h-1 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
};
export default Preloader;