"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, User, CheckCircle2 } from "lucide-react";

export default function Contact() {
  // Estado do formulário
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  // Estado da UI (Loading, Sucesso, Erro)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Atualiza os campos conforme o utilizador digita
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  // Simula o envio
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Impede o recarregamento da página
    setIsSubmitting(true);

    // Simula espera de 2 segundos (como se fosse uma API real)
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Limpa o formulário
    setFormState({ name: "", email: "", message: "" });

    // Remove a mensagem de sucesso após 5 segundos
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-accent font-medium tracking-wider uppercase text-sm mb-3">Contacto</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Vamos trabalhar juntos?</h3>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Tem um projeto em mente? Preencha o formulário abaixo e entrarei em contacto em breve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Lado Esquerdo: Informações (Decorativo) */}
          <div className="space-y-8 hidden md:block">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h4 className="text-xl font-bold text-white mb-2">Freelance</h4>
              <p className="text-gray-400 text-sm">Disponível para novos projetos.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h4 className="text-xl font-bold text-white mb-2">Email</h4>
              <p className="text-gray-400 text-sm">contato@seuexemplo.com</p>
            </div>
          </div>

          {/* Lado Direito: O Formulário */}
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-secondary/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl"
          >
            {/* Mensagem de Sucesso */}
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-3 text-green-400"
              >
                <CheckCircle2 size={20} />
                <span>Mensagem enviada com sucesso!</span>
              </motion.div>
            )}

            <div className="space-y-4">
              {/* Input Nome */}
              <div className="relative">
                <User className="absolute left-4 top-4 text-gray-500" size={20} />
                <input
                  type="text"
                  name="name"
                  placeholder="Seu Nome"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-gray-600"
                />
              </div>

              {/* Input Email */}
              <div className="relative">
                <Mail className="absolute left-4 top-4 text-gray-500" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu Email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-gray-600"
                />
              </div>

              {/* Textarea Mensagem */}
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-gray-500" size={20} />
                <textarea
                  name="message"
                  placeholder="Como posso ajudar?"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-gray-600 resize-none"
                />
              </div>

              {/* Botão de Envio */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "A enviar..."
                ) : (
                  <>
                    Enviar Mensagem <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}