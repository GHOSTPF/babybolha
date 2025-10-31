import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-pool.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Piscina moderna"
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/60 to-red-900/60" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-3xl px-6">
        <div className="inline-block bg-yellow-400 text-blue-900 px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-md">
          15 anos transformando vidas com a natação
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Descubra o Prazer de{" "}
          <span className="text-yellow-400">Nadar</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-8">
          Da primeira braçada ao nado perfeito. Aulas personalizadas com
          instrutores certificados para todas as idades e níveis.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            className="bg-gradient-to-r from-red-700 to-red-800 text-white px-8 py-6 rounded-2xl text-lg font-bold 
            shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out flex items-center justify-center"
          >
            Começar Agora
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>

          <Button
            variant="outline"
            className="bg-yellow-400 text-white hover:text-white font-bold text-lg px-8 py-6 rounded-2xl flex items-center gap-2
            shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out hover:bg-yellow-500 focus:outline-none border-none"
          >
            <Play className="mr-2 w-5 h-5" /> Assistir Vídeo
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
