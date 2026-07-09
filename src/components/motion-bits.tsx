"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, type CSSProperties, type ReactNode } from "react";

/** Giant section word — drifts a touch on scroll, crops off the edge. */
export function GiantWord({
  children,
  vw,
  className = "",
}: {
  children: ReactNode;
  vw: number; // font-size in vw units, tuned per word length
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [36, -36]);

  return (
    <motion.h2
      ref={ref}
      className={"giant " + className}
      style={
        {
          fontSize: `clamp(56px, ${vw}vw, 560px)`,
          y: reduce ? 0 : y,
        } as CSSProperties
      }
    >
      {children}
    </motion.h2>
  );
}

/** Fade-and-rise once when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.2, 0.65, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
