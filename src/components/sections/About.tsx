"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Box, Layers, Cpu } from "lucide-react";

const skills = [
  { name: "Next.js / React", icon: <Code /> },
  { name: "Unreal Engine 5", icon: <Box /> },
  { name: "Blender 3D", icon: <Layers /> },
  { name: "Creative Dev", icon: <Cpu /> },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} id="about" className="relative min-h-screen bg-black flex items-center py-24 overflow-hidden">
      
      {/* Background Text Marquee */}
      <div className="absolute top-20 left-0 w-full whitespace-nowrap opacity-5 pointer-events-none select-none">
        <motion.div style={{ x }} className="text-[12rem] md:text-[20rem] font-black leading-none text-white">
          CREATOR DEVELOPER ARTIST CREATOR DEVELOPER ARTIST
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10 items-center">
        
        {/* Left: Text Content */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-neon-purple text-sm font-bold tracking-widest uppercase mb-4">About Ankit</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Bridging the gap between <span className="text-gradient">code</span> and <span className="text-gradient">cinema</span>.
            </h3>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-400 text-lg leading-relaxed"
          >
            I am a multidisciplinary creator passionate about interactive storytelling. 
            With a background in software engineering and a love for 3D art, I build websites 
            that feel like movies and virtual worlds that feel real.
            <br /><br />
            Whether it's a high-performance web app or a real-time Unreal Engine environment,
            I obsess over the details that make an experience unforgettable.
          </motion.p>
        </div>

        {/* Right: Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-neon-cyan/50 transition-colors cursor-default"
            >
              <div className="text-neon-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h4 className="text-white font-bold text-lg">{skill.name}</h4>
              <p className="text-neutral-500 text-sm mt-2">Specialized in building scalable solutions.</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
