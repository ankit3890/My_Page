"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  center?: boolean;
}

export default function SectionHeading({ title, subtitle, className, center = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : "text-start"} ${className}`}>
      {subtitle && (
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-neon-purple text-sm font-bold tracking-widest uppercase mb-4"
        >
          {subtitle}
        </motion.h2>
      )}
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white"
      >
        {title}
      </motion.h3>
    </div>
  );
}
