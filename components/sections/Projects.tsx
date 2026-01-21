"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Camera, PenTool, Image as ImageIcon, Video } from "lucide-react";

// --- DADOS DO TEMPLATE---
const projects = [
  {
    id: 1,
    title: "Campanha Neon Vibes",
    category: "Fotografia",
    image: null,
    gradient: "from-purple-500 to-pink-500", 
    description: "Sessão fotográfica urbana noturna focada em luzes neon e moda streetwear.",
    tags: ["Retrato", "Urbano", "Edição"],
    link: "#"
  },
  {
    id: 2,
    title: "Minimal Brand Identity",
    category: "Design",
    image: null, 
    gradient: "from-gray-200 to-gray-400",
    description: "Rebranding completo para uma startup de arquitetura sustentável.",
    tags: ["Logo", "Papelaria", "Social Media"],
    link: "#"
  },
  {
    id: 3,
    title: "Editorial: O Futuro",
    category: "Redação",
    image: null,
    gradient: "from-blue-400 to-cyan-300",
    description: "Série de artigos para revista digital sobre tendências tecnológicas.",
    tags: ["Copywriting", "SEO", "Blog"],
    link: "#"
  },
  {
    id: 4,
    title: "Videoclipe 'Summer'",
    category: "Vídeo",
    image: null,
    gradient: "from-yellow-400 to-orange-500",
    description: "Direção de arte e edição para videoclipe de banda independente.",
    tags: ["Direção", "Color Grading", "4K"],
    link: "#"
  },
  {
    id: 5,
    title: "App Fitness UI",
    category: "Design",
    image: null,
    gradient: "from-emerald-400 to-teal-500",
    description: "Prototipagem de interface para aplicação de saúde e bem-estar.",
    tags: ["UI/UX", "Figma", "Mobile"],
    link: "#"
  },
  {
    id: 6,
    title: "Coleção Outono/Inverno",
    category: "Fotografia",
    image: null,
    gradient: "from-red-800 to-red-500",
    description: "Lookbook comercial para marca de vestuário local.",
    tags: ["Moda", "Estúdio", "Comercial"],
    link: "#"
  }
];

const categories = ["Todos", "Design", "Fotografia", "Redação", "Vídeo"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-accent font-medium tracking-wider uppercase text-sm mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">Trabalhos Selecionados</h3>
          </motion.div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-accent border-accent text-white"
                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Visual */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-secondary border border-white/10"
              >
                {/* Imagem / Fallback */}
                <div className={`h-64 w-full relative overflow-hidden bg-gradient-to-br ${project.image ? '' : project.gradient}`}>
                  {project.image && (
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  )}
                  
                  {/* Overlay Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a href={project.link} className="px-6 py-3 bg-white text-black rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Ver Projeto <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <span className="text-accent text-xs font-bold uppercase">{project.category}</span>
                  <h4 className="text-xl font-bold text-white mt-2 mb-2">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-300">#{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}