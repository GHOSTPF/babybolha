import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoPrincipal from "@/assets/babyBolhaLogo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Cursos", href: "#courses" },
    { label: "Galeria", href: "#gallery" },
    { label: "Instrutores", href: "#instructors" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src={logoPrincipal}
            alt="Baby Bolha"
            className="w-32 md:w-36 h-auto object-contain"
          />
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative font-semibold text-blue-900 transition-all duration-300 px-3 py-2 rounded-md hover:text-white group"
            >
              {/* Badge vermelho aparece apenas no hover */}
              <span className="absolute inset-0 rounded-md bg-red-600 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center -z-10"></span>
              {item.label}
            </a>
          ))}

          <Button className="px-6 py-2 font-semibold rounded-full bg-red-700 text-white hover:bg-red-800 transition-all duration-300">
            Matricule-se
          </Button>
        </div>

        {/* Botão Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-blue-900 p-2"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 pb-4 space-y-2 bg-white rounded-lg shadow-lg mx-4 border border-red-100">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-blue-900 font-semibold rounded-md hover:bg-red-600 hover:text-white transition-all"
            >
              {item.label}
            </a>
          ))}
          <div className="px-4 pt-2">
            <Button className="w-full bg-red-700 text-white hover:bg-red-800 rounded-full font-semibold">
              Matricule-se
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
