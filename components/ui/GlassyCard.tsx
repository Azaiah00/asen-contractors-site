"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassyCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  goldBorder?: boolean;
}

export default function GlassyCard({ 
  children, 
  className = "", 
  goldBorder = true,
  ...props 
}: GlassyCardProps) {
  return (
    <motion.div
      className={`
        bg-black/70 backdrop-blur-xl rounded-2xl p-6 md:p-10 select-text
        ${goldBorder ? "border border-gold-600/30" : "border border-white/10"}
        shadow-2xl overflow-hidden relative group
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {/* Subtle gold glow on hover */}
      <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
