"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import foto1 from "@/assets/foto1.jpg";
import foto2 from "@/assets/foto2.jpg";

const Gallery = () => {
  const slides = [
    {
      title: "Piscina Olímpica",
      description: "50m aquecida e coberta",
      text: "Nossa piscina olímpica é o coração da academia — aquecida, coberta e perfeita para treinos e aulas em qualquer estação.",
      image: foto1,
    },
    {
      title: "Aulas Infantis",
      description: "Ambiente seguro e divertido",
      text: "As aulas infantis são focadas em segurança e diversão, com instrutores especializados e estrutura adaptada para crianças.",
      image: foto2,
    },
    {
      title: "Hidroginástica",
      description: "Exercícios em grupo",
      text: "Atividades dinâmicas e alegres que fortalecem o corpo e aliviam o estresse, com turmas para todas as idades.",
      image: foto1,
    },
    {
      title: "Área de Convivência",
      description: "Espaço para relaxar",
      text: "Após o treino, relaxe em nosso lounge com cafeteria e ambiente acolhedor para toda a família.",
      image: foto2,
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < slides.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      setCurrent(0); 
    }
  };

  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-blue-50 via-white to-yellow-50"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Stack de Imagens */}
        <div className="relative w-full lg:w-1/2 h-[420px] md:h-[480px] flex justify-center items-center">
          {slides.map((slide, index) => (
            <AnimatePresence key={index}>
              {index >= current && (
                <motion.div
                  key={slide.image}
                  initial={{ opacity: 0, y: 50, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -60, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute w-11/12 h-full rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={handleNext}
                  style={{
                    zIndex: slides.length - index,
                    transform: `translateY(${(index - current) * 8}px)`,
                  }}
                >
                  <motion.img
                    src={slide.image}
                    alt={slide.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Texto lateral */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h2
            key={slides[current].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-500 bg-clip-text bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400"
          >
            {slides[current].title}
          </motion.h2>

          <motion.p
            key={slides[current].description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-700 text-lg mb-4"
          >
            {slides[current].description}
          </motion.p>

          <motion.p
            key={slides[current].text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 leading-relaxed mb-8"
          >
            {slides[current].text}
          </motion.p>

          <motion.button
            onClick={handleNext}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-red-600 text-white font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Próxima Imagem
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
