import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar404 from "@/components/NavBar404";
import Tartaruga404 from "@/assets/Tartaruga 3.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col h-screen bg-[#f1f6ff]">
      <NavBar404 />
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            height: 100%;
          }

          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-bounce-slow {
            animation: bounce-slow 3s infinite ease-in-out;
          }
        `}
      </style>

      {/* Container Central */}
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-14">
          {/* Imagem */}
          <img
            src={Tartaruga404}
            alt="Mascote Baby Bolha"
            className="w-36 sm:w-48 md:w-60 lg:w-72 h-auto animate-bounce-slow select-none"
          />

          {/* Texto */}
          <div className="text-center md:text-left">
            <h1 className="text-[90px] sm:text-[110px] md:text-[130px] lg:text-[150px] font-extrabold text-red-600 leading-none mb-2 drop-shadow-lg">
              404
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium mb-6">
              Oops! Página não encontrada.
            </p>
            <a
              href="/"
              className="inline-block bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 transition-all duration-300"
            >
              Voltar ao Início
            </a>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-3 w-full text-center text-sm text-gray-500 mb-16">
        © 2025 Baby Bolha — Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default NotFound;