import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoPrincipal from "@/assets/babyBolhaLogo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Cursos", href: "#courses" },
    { label: "Galeria", href: "#gallery" },
    { label: "Instrutores", href: "#instructors" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src={logoPrincipal}
            alt="Baby Bolha"
            className="w-32 md:w-36 h-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-semibold transition-colors duration-200 px-3 py-2 rounded-md ${
                isScrolled
                  ? "text-blue-900 hover:bg-red-100"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {item.label}
            </a>
          ))}
          <Button
            className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 ${
              isScrolled
                ? "bg-red-700 text-white hover:bg-red-800"
                : "bg-yellow-400 text-blue-900 hover:bg-yellow-500"
            }`}
          >
            Matricule-se
          </Button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 ${
            isScrolled ? "text-blue-900" : "text-white"
          }`}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-2 bg-white/95 backdrop-blur-md rounded-lg shadow-lg mx-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-blue-900 font-semibold hover:bg-red-100 transition-all"
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
