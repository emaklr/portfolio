"use client";

import type { HTMLAttributes } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  ...attributes
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      {...attributes}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: 0.72,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
