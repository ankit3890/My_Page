"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { galleryItems } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type GalleryItem = {
  id: string;
  type: "image" | "video";
  src: string;
  category: "Blender" | "Unreal Engine";
  title: string;
};


export default function Gallery() {
  const [activeTab, setActiveTab] = useState<"All" | "Unreal Engine" | "Blender">("All");

  const renderItems = galleryItems.filter(item => ["Unreal Engine", "Blender"].includes(item.category));

  const filteredItems = activeTab === "All" 
    ? renderItems 
    : renderItems.filter(item => item.category === activeTab);

  

  return (
    <section id="gallery" className="py-24 px-6 bg-black relative">
       {/* (Keep existing JSX up to motion.div grid) */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <SectionHeading title="Visual Gallery" subtitle="Renders & Environments" center />
          
          <div className="flex bg-white/5 p-1 rounded-full border border-white/10 mt-6">
            {(["All", "Unreal Engine", "Blender"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? "bg-neon-cyan text-black shadow-[0_0_20px_rgba(0,243,255,0.3)]" 
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                className="relative break-inside-avoid rounded-xl overflow-hidden group border border-white/5 bg-neutral-900"
              >
                <Link href={`/work/${item.id}`}>
                  <div className="relative aspect-video w-full cursor-pointer">
                    {(item as any).heroVideo ? (
                      <video 
                        src={(item as any).heroVideo} 
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
                      />
                    ) : (
                      <Image src={item.src} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    )}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-2">
                      <span className="text-white text-sm font-bold tracking-widest uppercase">View Project</span>
                      <ArrowRight className="text-neon-cyan" size={20} />
                    </div>
                  </div>
                </Link>
                <div className="p-4 bg-white/5 absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                   <h4 className="text-white font-bold">{item.title}</h4>
                   <span className="text-xs text-neon-cyan">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        

      </div>
    </section>
  );
}
