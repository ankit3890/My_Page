"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full py-12 px-6 border-t border-white/5 bg-black z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-2xl font-bold tracking-tight text-white">ANKIT.</h2>
          <p className="text-neutral-500 text-sm">
            Building digital experiences that defy gravity.
          </p>
        </div>

        <div className="flex gap-6">
          <SocialLink href="https://github.com/ankit3890" icon={<Github size={20} />} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/ankit-kumar-singh-927a81381/" icon={<Linkedin size={20} />} label="LinkedIn" />
          <SocialLink href="https://www.instagram.com/alex_245a/" icon={<Instagram size={20} />} label="Instagram" />
          <SocialLink href="mailto:ankitidea3890@gmail.com" icon={<Mail size={20} />} label="Email" />
        </div>

        <div className="text-neutral-600 text-sm">
          &copy; {currentYear} Ankit Kumar Singh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      className="text-neutral-400 hover:text-white hover:scale-110 transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}
