"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  type: "image" | "video";
  title?: string;
}

export default function Lightbox({ isOpen, onClose, src, type, title }: LightboxProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <button 
             onClick={onClose}
             className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {type === "video" ? (
               <iframe 
                 src={src} 
                 className="w-full h-full" 
                 allow="autoplay; fullscreen"
                 allowFullScreen
                 title={title || "Video"}
               />
            ) : (
               <Image 
                 src={src} 
                 alt={title || "Lightbox Image"} 
                 fill 
                 className="object-contain" 
                 quality={100}
               />
            )}
            
            {title && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-bold text-lg">{title}</h3>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
