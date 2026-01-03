"use client";

import { galleryItems } from "@/lib/data";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Layers, Zap, Github, ExternalLink } from "lucide-react";

export default function ProjectPage() {
  const params = useParams();
  const id = params?.id as string;
  const project = galleryItems.find((item) => item.id === id);

  if (!project) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Project not found</div>;
  }

  const is3D = ["Unreal Engine", "Blender"].includes(project.category);

  return (
    <main className="bg-black min-h-screen text-white">
      
      {/* Hero Image */}
      <section className="relative w-full h-[70vh] md:h-[80vh] bg-neutral-900">
        {project.heroVideo ? (
          <video 
            src={project.heroVideo} 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="object-cover w-full h-full"
          />
        ) : (
          <Image 
            src={project.src} 
            alt={project.title} 
            fill 
            className="object-cover" 
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/#gallery" className="inline-flex items-center text-neutral-400 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} className="mr-2" /> Back to Gallery
            </Link>
            <h1 className="text-4xl md:text-7xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <span className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 rounded-full">
                {project.category}
              </span>
              <span className="flex items-center px-3 py-1 bg-white/5 text-neutral-300 rounded-full">
                <Clock size={14} className="mr-2" /> {project.year}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Details Sidebar */}
          <div className="md:col-span-1 space-y-8">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-neutral-900/50 p-6 rounded-2xl border border-white/5 space-y-8"
            >
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Layers size={20} className="mr-2 text-neon-purple" /> 
                  Software Used
                </h3>
                <ul className="space-y-2">
                  {project.software.map((tool) => (
                    <li key={tool} className="text-neutral-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-3" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              {project.github && (
                <div>
                   <h3 className="text-lg font-bold mb-4 flex items-center">
                    <Github size={20} className="mr-2" /> 
                    Source Code
                  </h3>
                  <Link 
                    href={project.github} 
                    target="_blank"
                    className="flex items-center justify-center w-full px-4 py-3 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors"
                  >
                    <Github size={18} className="mr-2" /> View on GitHub
                  </Link>
                </div>
              )}

              {project.demoLink && (
                <div>
                   <h3 className="text-lg font-bold mb-4 flex items-center">
                    <ExternalLink size={20} className="mr-2 text-neon-cyan" /> 
                    {project.demoLabel?.includes("Download") ? "Download" : "Live Demo"}
                  </h3>
                  <Link 
                    href={project.demoLink} 
                    target="_blank"
                    className="flex items-center justify-center w-full px-4 py-3 bg-transparent border border-neon-cyan text-neon-cyan font-bold rounded-lg hover:bg-neon-cyan/10 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" /> {project.demoLabel || "View Live"}
                  </Link>
                </div>
              )}
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            
            {/* Visual Showcase for 3D Projects */}
            {is3D && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-neon-cyan/10"
              >
                 <Image 
                    src={project.src} 
                    alt={project.title} 
                    fill 
                    className="object-cover" 
                 />
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gradient">
                <Zap size={24} className="mr-2" /> The Idea
              </h2>
              <p className="text-neutral-400 leading-relaxed text-lg">
                {project.idea}
              </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="border-t border-white/10 pt-8"
            >
               <h3 className="text-xl font-bold mb-4">Description</h3>
               <p className="text-neutral-500">
                 {project.description}
               </p>
            </motion.div>

            {project.previewImages && project.previewImages.length > 0 && (
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pt-8"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <ExternalLink size={24} className="mr-2 text-neon-cyan" /> 
                  Interface Preview
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.previewImages.map((img, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden border border-white/10 hover:border-neon-cyan/50 transition-colors group">
                      <Image 
                        src={img} 
                        alt={`Preview ${idx + 1}`} 
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

        </div>
      </section>
      
    </main>
  );
}
