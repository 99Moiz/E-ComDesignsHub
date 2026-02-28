import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StatItemProps {
  value: string;
  label: string;
  index: number;
}

const StatItem = ({ value, label, index }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="text-center"
    >
      <div className="text-3xl md:text-5xl font-heading font-bold text-gradient mb-2">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
};

export default StatItem;
