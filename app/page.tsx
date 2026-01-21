"use client";

import { motion } from "framer-motion";
import FluidBackground from "@/components/ui/FluidBackground";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative text-white overflow-x-hidden">
      <FluidBackground />
      
      <section id="hero" className="min-h-screen flex items-center justify-center p-4 relative">
        <div className="max-w-4xl w-full bg-glass backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-accent font-medium tracking-wider uppercase text-sm mb-2">
                    [Sua Profissão Aqui]
                  </h2>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Transformando ideias em <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">arte visual</span>.
                  </h1>
                </motion.div>

                <p className="text-gray-300 text-lg">
                  [Breve descrição sobre quem você é. Ex: Sou um especialista apaixonado por criar experiências digitais únicas e funcionais.]
                </p>

                <div className="flex gap-4">
                  <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition">
                    Ver Portfolio
                  </button>
                  <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
                    Orçamento
                  </button>
                </div>
              </div>

              <div className="relative h-64 md:h-96 flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 md:w-64 md:h-64 border-2 border-dashed border-white/30 rounded-full absolute"
                />
                <div className="w-40 h-40 md:w-56 md:h-56 bg-gradient-to-tr from-gray-700 to-gray-600 rounded-full shadow-lg z-10 flex items-center justify-center text-center p-4">
                  <span className="text-sm text-gray-300">[Sua foto aqui]</span>
                </div>
              </div>
            </div>
        </div>
      </section>

      <Services />
      
      <Projects />

      <Contact />

      <Footer />

    </main>
  );
}