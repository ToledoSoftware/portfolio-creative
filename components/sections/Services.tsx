"use client";

import { motion } from "framer-motion";
import { Palette, Camera, PenTool, Monitor, Share2, Lightbulb } from "lucide-react";

//MOCK DATA DOS SERVIÇOS

const services = [
  {
    icon: <Camera size={32} />,
    title: "Fotografia",
    description: "Sessões fotográficas profissionais para produtos, eventos ou retratos corporativos.",
  },
  {
    icon: <Palette size={32} />,
    title: "Design Gráfico",
    description: "Criação de identidade visual, logótipos e materiais publicitários impactantes.",
  },
  {
    icon: <PenTool size={32} />,
    title: "Redação Criativa",
    description: "Textos persuasivos (Copywriting) para sites, blogs e redes sociais.",
  },
  {
    icon: <Monitor size={32} />,
    title: "Web Design",
    description: "Layouts modernos e funcionais para apresentar a sua marca na web.",
  },
  {
    icon: <Share2 size={32} />,
    title: "Social Media",
    description: "Gestão e estratégia de conteúdo para crescer o seu público no Instagram/TikTok.",
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Consultoria",
    description: "Ajuda estratégica para definir o posicionamento da sua marca no mercado.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-accent font-medium tracking-wider uppercase text-sm mb-3">Serviços</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Como posso ajudar?</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all group"
            >
              <div className="mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}