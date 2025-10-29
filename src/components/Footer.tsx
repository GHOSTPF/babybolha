import { Waves, Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";
import tartaruga1 from "@/assets/Tartaruga 1.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#E8F3FF] border-t border-blue-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="text-slate-600 mb-4">
              Criando momentos de alegria e aprendizado na água para todas as idades
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, color: "bg-blue-200 hover:bg-blue-300" },
                { icon: Instagram, color: "bg-red-200 hover:bg-red-300" },
                { icon: Youtube, color: "bg-yellow-200 hover:bg-yellow-300" },
                { icon: Mail, color: "bg-blue-200 hover:bg-blue-300" },
              ].map(({ icon: Icon, color }, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${color}`}
                >
                  <Icon size={20} className="text-blue-700" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-blue-700">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Início", "Sobre Nós", "Cursos", "Instrutores"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-red-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cursos */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-blue-700">Cursos</h4>
            <ul className="space-y-2 text-slate-600">
              <li>Natação Infantil</li>
              <li>Natação Juvenil</li>
              <li>Natação Adulto</li>
              <li>Hidroginástica</li>
              <li>Natação Competitiva</li>
              <li>Hidroterapia</li>
            </ul>
          </div>

          {/* Horários */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-blue-700">Horários</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex justify-between">
                <span>Terça - Sexta:</span>
                <span className="font-medium text-blue-700">8h - 18h</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span className="font-medium text-blue-700">7h - 12h</span>
              </li>
            </ul>
            <div className="mt-4 p-4 rounded-lg bg-yellow-100 border border-yellow-300 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Phone size={18} className="text-red-500" />
                <p className="text-sm font-medium text-slate-700">
                  (83) 98897-2308
                </p>
              </div>
              <p className="text-sm text-slate-700">contato@babybolha.com.br</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center">
            <img
              src={tartaruga1}
              alt="Baby Bolha"
              className="w-20 md:w-24 h-auto object-contain"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">
              © {currentYear} <span className="text-blue-700 font-semibold">BabyBolha</span>. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
