"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = "primary", className, onClick, ...props }: ButtonProps) {
  const baseStyles = "relative px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group";
  
  const variants = {
    primary: "bg-white text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
    outline: "border border-neutral-700 hover:border-white text-white bg-transparent hover:bg-white/5",
    ghost: "text-neutral-400 hover:text-white hover:bg-white/5"
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
      )}
    </motion.button>
  );
}
