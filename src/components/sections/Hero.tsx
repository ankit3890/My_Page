"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import Button from "@/components/ui/Button";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.2
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black opacity-80" />
      
      {/* Floating Elements / Glows */}
      <motion.div 
        style={{ y: y1, x: -100 }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse" 
      />
      <motion.div 
        style={{ y: y2, x: 100 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-pulse delay-1000" 
      />

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-6 px-4">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.5 }}
           className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-neon-cyan max-w-[80vw]">
            Developer | 3D Artist | Unreal Engine
          </span>
        </motion.div>

        <h1 ref={textRef} className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9]">
          BUILDING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
            WORLDS.
          </span>
        </h1>

        <p className="max-w-xl text-neutral-400 text-lg md:text-xl mt-4 leading-relaxed">
          Crafting immersive digital experiences and cinematic visuals 
          that bridge the gap between imagination and reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}>
            View Projects <ArrowRight size={18} />
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth'})}>
            Explore 3D Work <Play size={16} className="ml-1" />
          </Button>
        </div>
      </div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
    </section>
  );
}
