"use client";

import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-black/40 backdrop-blur-md border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-gray-500 text-sm text-center md:text-left">
          <p>© {new Date().getFullYear()} Seu Portfolio. Todos os direitos reservados.</p>
          <p className="text-xs mt-1">Desenvolvido com Next.js & Tailwind CSS  por Emmanuel Toledo :)</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
            <Github size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}