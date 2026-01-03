"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/#about" },
  { name: "3D Gallery", href: "/#gallery" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Only run scroll spy on home page
    if (pathname !== "/") return;

    const handleScroll = () => {
      // Logic adjusted to handle absolute hrefs like "/#projects"
      const sections = navLinks.map(link => link.href.substring(2)); // Remove "/#"
      let current = "";

      // Check if user has scrolled to the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveSection("contact");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Relaxed threshold: Check if section top is in the upper half of the viewport
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);

    // If not on home page, let the default link behavior happen (navigate to /#section)
    if (pathname !== "/") {
      return; 
    }

    // If on home page, prevent default and smooth scroll
    e.preventDefault();
    const targetId = href.substring(2); // Remove "/#"
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
      >
        <nav className="bg-black/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center gap-8 shadow-lg shadow-black/20 pointer-events-auto">
          <Link href="/" className="text-xl font-bold tracking-tight hover:text-white/80 transition-colors">
            ANKIT.
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => {
              // Check if active based on section name
              const sectionName = link.href.substring(2);
              const isActive = activeSection === sectionName;
              
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`text-sm font-medium transition-all duration-300 relative ${
                    isActive ? "text-white scale-105" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-neon-cyan shadow-[0_0_10px_rgba(0,243,255,0.8)]" 
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex gap-4 items-center pl-4 border-l border-white/10">
            <Link href="https://github.com/ankit3890" target="_blank" className="text-neutral-400 hover:text-white transition-colors">
              <Github size={18} />
            </Link>
            <Link href="https://www.instagram.com/alex_245a/" target="_blank" className="text-neutral-400 hover:text-white transition-colors">
              <Instagram size={18} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-2xl font-bold text-white hover:text-neon-cyan transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex gap-6 mt-8">
              <Link href="https://github.com/ankit3890" target="_blank" className="text-neutral-400 hover:text-white transition-colors">
                <Github size={24} />
              </Link>
               <Link href="https://www.instagram.com/alex_245a/" target="_blank" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
