"use client";

import { MotionConfig, motion } from "motion/react";

/** Per-navigation enter transition — a quick editor-like buffer swap. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
