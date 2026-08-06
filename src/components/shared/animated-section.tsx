"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { joinClassNames } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={joinClassNames(className)}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      transition={{
        delay: shouldReduceMotion ? 0 : delay,
        duration: 0.35,
        ease: "easeOut",
      }}
      viewport={{ amount: 0.2, once: true }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
