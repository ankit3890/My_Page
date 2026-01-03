"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Software" | "Website" | "Tool" | "Experiment";
  image: string;
  link: string;
  github?: string;
  tech: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative break-inside-avoid rounded-xl overflow-hidden group border border-white/5 bg-neutral-900 aspect-video"
    >
      <Link href={project.link} target={project.link.startsWith("http") ? "_blank" : "_self"}>
        <div className="relative w-full h-full cursor-pointer">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-2">
            <span className="text-white text-sm font-bold tracking-widest uppercase">View Project</span>
            <ArrowUpRight className="text-neon-cyan" size={20} />
          </div>
        </div>
      </Link>
      
      <div className="p-4 bg-white/5 absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm">
         <h4 className="text-white font-bold">{project.title}</h4>
         <span className="text-xs text-neon-cyan">{project.category}</span>
      </div>
    </motion.div>
  );
}
