"use client";

import { motion } from "framer-motion";
import type { ComponentProps } from "react";

type MotionButtonProps = ComponentProps<typeof motion.button>;

type ButtonProps = Omit<MotionButtonProps, "className"> & {
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400";
  const primary =
    "bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 text-white shadow-lg hover:brightness-110";
  const secondary =
    "glass-card text-white border-white/30 hover:border-white/50";

  const classes = `${base} ${variant === "primary" ? primary : secondary} ${className}`;

  return (
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className={classes} {...props} />
  );
}


