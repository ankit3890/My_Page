export interface ProjectDetail {
  id: string;
  title: string;
  category: "Unreal Engine" | "Blender" | "Software" | "Website" | "Tool";
  src: string;
  description: string;
  idea: string;
  software: string[];
  year: string;
  type: "image" | "video";
  github?: string;
}

export const galleryItems: ProjectDetail[] = [
  {
    id: "tunnel",
    title: "Overgrown Tunnel",
    category: "Unreal Engine",
    src: "/images/renders/tunnel.jpg",
    type: "image",
    description: "A post-apocalyptic tunnel scene reclaiming nature.",
    idea: "The concept was to explore the juxtaposition of decaying industrial infrastructure and the resilience of nature. I wanted to capture the quiet beauty of a world left behind, using dynamic lighting to highlight the texture of rust and moss.",
    software: ["Unreal Engine 5", "Quixel Megascans", "Substance Painter"],
    year: "2024"
  },
  {
    id: "portal",
    title: "Mystic Portal",
    category: "Unreal Engine",
    src: "/images/renders/portal.jpg",
    type: "image",
    description: "A fantasy portal opening in a war-torn landscape.",
    idea: "Inspired by high-fantasy lore, this scene depicts a gateway to another dimension opening amidst the chaos of a battlefield. The focus was on particle effects for the portal and volumetric fog to create atmosphere.",
    software: ["Unreal Engine 5", "Niagara VFX", "Blender"],
    year: "2023"
  },
  {
    id: "shrine",
    title: "Hidden Shrine",
    category: "Unreal Engine",
    src: "/images/renders/shrine.jpg",
    type: "image",
    description: "An ancient shrine hidden deep within a mystic forest.",
    idea: "This piece is a study in mood and lighting. I wanted to create a serene, spiritual atmosphere using soft, filtered light and dense vegetation. The shrine itself references traditional eastern architecture.",
    software: ["Unreal Engine 5", "SpeedTree", "ZBrush"],
    year: "2024"
  },
  {
    id: "college-hub",
    title: "College Student Hub",
    category: "Website",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    type: "image",
    description: "A comprehensive platform for college students to manage attendance, track exam marks, and create profiles. Features real-time chat, group discussions, and an important announcement system.",
    idea: "The goal was to centralize the disparate systems students use daily. By combining academic tracking with social features, it boosts engagement and ensures students never miss critical updates.",
    software: ["React", "Node.js", "MongoDB", "Socket.io"],
    year: "2024",
    github: "#"
  },
  {
    id: "ai-assistant",
    title: "AI Floating Assistant",
    category: "Software",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    type: "image",
    description: "Windows productivity tool that pins a floating AI assistant. Features a built-in planner board for project management without context switching.",
    idea: "Designed to solve the friction of alt-tabbing to a browser for AI help. The floating window keeps the assistant context-aware and accessible, while the integrated Kanban board helps artists track their creative pipeline alongside their tools.",
    software: ["Electron", "React", "OpenAI API", "LocalDB"],
    year: "2024",
    github: "#"
  },
  {
    id: "prompt-gen",
    title: "AI Prompt Generator",
    category: "Tool",
    src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
    type: "image",
    description: "Browser extension to generate ready-to-use prompts for various AI models, streamlining the creative workflow.",
    idea: "Prompt engineering can be time-consuming. This extension simplifies it by providing templates and optimizers directly in the browser, helping users get better results from their AI models faster.",
    software: ["JavaScript", "Chrome Extensions API", "NLP"],
    year: "2023",
    github: "#"
  }
];
