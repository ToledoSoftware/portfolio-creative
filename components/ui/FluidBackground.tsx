"use client";

export default function FluidBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-background">
      {/* Blob Roxo */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      
      {/* Blob Rosa */}
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      
      {/* Blob Azul */}
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      {/* Camada de ruído (opcional, para textura) */}
      <div className="absolute inset-0 bg-transparent opacity-20 pointer-events-none"></div>
    </div>
  );
}