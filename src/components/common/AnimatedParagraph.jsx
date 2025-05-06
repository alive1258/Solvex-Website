"use client";
import { motion } from "framer-motion";

export default function AnimatedParagraph({
  text,
  className = "",
  once = false,
  duration = 0.8,
  delay = 0,
  yOffset = 100,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: "easeInOut",
        },
      }}
      viewport={{ once }}
    >
      <p className={className}>{text}</p>
    </motion.div>
  );
}
