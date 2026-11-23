"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type ActionLinkProps = {
  href: string;
  className: string;
  children: ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

export function ActionLink({
  href,
  className,
  children,
  target,
  rel,
}: ActionLinkProps) {
  return (
    <motion.a
      href={href}
      className={className}
      target={target}
      rel={rel}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.975, y: 1 }}
      transition={{ type: "spring", stiffness: 520, damping: 34 }}
    >
      {children}
    </motion.a>
  );
}
