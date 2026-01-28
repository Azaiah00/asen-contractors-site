"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({ 
  children, 
  variant = "primary", 
  className = "", 
  ...props 
}: ButtonProps) {
  const variants = {
    primary: "bg-gold-600 text-black hover:bg-gold-500 border-transparent",
    secondary: "bg-white text-black hover:bg-gray-200 border-transparent",
    outline: "bg-transparent text-white border-gold-600/50 hover:bg-gold-600/10",
  };

  return (
    <motion.button
      className={`
        px-8 py-4 rounded-full font-sans font-semibold text-sm uppercase tracking-widest 
        border transition-all duration-300 flex items-center justify-center gap-2
        ${variants[variant]}
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
