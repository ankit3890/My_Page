"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading"; // Reuse heading style if possible, or inline it
import ProjectCard, { Project } from "@/components/ui/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

// Dummy Data
const projects: Project[] = [
  {
    id: "college-hub",
    title: "College Student Hub",
    description: "A comprehensive platform for college students to manage attendance, track exam marks, and create profiles. Features real-time chat, group discussions, and an important announcement system.",
    category: "Website",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    link: "/work/college-hub",
    github: "#",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"]
  },
  {
    id: "ai-assistant",
    title: "AI Floating Assistant",
    description: "Windows productivity software that pins a floating AI assistant on top of other windows. Reduces context switching and features a built-in planner board for creative project management.",
    category: "Software",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    link: "/work/ai-assistant",
    github: "#",
    tech: ["Electron", "React", "OpenAI API", "LocalDB"]
  },
  {
    id: "prompt-gen",
    title: "AI Prompt Generator",
    description: "Browser extension designed to instantly generate ready-to-use prompts for various AI models, streamlining the creative workflow for users.",
    category: "Tool",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
    link: "/work/prompt-gen",
    github: "#",
    tech: ["JavaScript", "Chrome API", "Natural Language Processing"]
  },

];

const categories = ["All", "Software", "Website", "Experiment", "Tool"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
             <h2 className="text-neon-purple text-sm font-bold tracking-widest uppercase mb-4">Selected Work</h2>
             <h3 className="text-4xl md:text-5xl font-bold text-white">Recent Projects</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  filter === cat 
                    ? "bg-white text-black border-white" 
                    : "bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
            <Button variant="outline" onClick={() => window.open('https://github.com/ankit3890', '_blank')}>
                View All on GitHub
            </Button>
        </div>

      </div>
    </section>
  );
}
