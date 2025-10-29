import { Baby, Heart, Users, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import tartaruga2 from "@/assets/Tartaruga 4.png";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Amor e Cuidado",
      description:
        "Cada bebê é acolhido com carinho, segurança e atenção individual em cada aula.",
      color: "from-pink-400 to-red-400",
    },
    {
      icon: Baby,
      title: "Desenvolvimento",
      description:
        "Estimulamos o desenvolvimento motor, social e emocional por meio da água.",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Users,
      title: "Família e Conexão",
      description:
        "As famílias participam ativamente, criando laços e memórias inesquecíveis.",
      color: "from-yellow-400 to-amber-400",
    },
    {
      icon: Star,
      title: "Experiência Única",
      description:
        "Ambiente preparado para que cada mergulho seja um momento de descoberta e alegria.",
      color: "from-blue-500 to-indigo-400",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-pink-50"
    >
      {/* Wave superior */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[1px] text-blue-50">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-20 fill-current"
        >
          <path d="M0,80 C480,160 960,0 1440,80 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-10 mb-16">
          <div className="flex justify-start md:pl-20">
            <img
              src={tartaruga2}
              alt="Sobre a Baby Bolha"
              className="w-56 md:w-72 h-auto object-contain"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
              Sobre a <span className="text-red-600">Baby Bolha</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              A Baby Bolha nasceu com o propósito de unir bebês e famílias através
              da natação afetiva. Em um ambiente acolhedor e seguro, criamos
              experiências únicas de aprendizado, vínculo e diversão na água.
            </p>
          </div>
        </div>


        {/* Valores */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-white/80 backdrop-blur-lg border border-slate-100 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-10`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 shadow-md`}
                  >
                    <Icon className="text-white" size={26} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-blue-700">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Estrutura */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-10 md:p-14 shadow-md border border-slate-100">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Coluna da lista */}
            <div>
              <h3 className="text-3xl font-extrabold mb-6 text-blue-800">
                Nossa Estrutura
              </h3>
              <ul className="space-y-3 text-slate-700">
                {[
                  "Piscinas aquecidas e tratadas especialmente para bebês",
                  "Ambiente seguro e com temperatura controlada",
                  "Professores especializados em natação infantil",
                  "Espaço família com área de convivência",
                  "Estacionamento e vestiários adaptados",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-yellow-500 text-lg mt-0.5">★</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna de estatísticas */}
            <div className="space-y-5">
              <div className="bg-gradient-to-r from-blue-100/70 to-cyan-100/70 p-6 rounded-xl text-center shadow-sm">
                <div className="text-4xl font-extrabold text-blue-700 mb-2">
                  +300 Bebês
                </div>
                <p className="text-slate-600">
                  Já vivenciaram momentos incríveis conosco
                </p>
              </div>
              <div className="bg-gradient-to-r from-pink-100/70 to-red-100/70 p-6 rounded-xl text-center shadow-sm">
                <div className="text-4xl font-extrabold text-pink-600 mb-2">
                  10 Instrutores
                </div>
                <p className="text-slate-600">
                  Apaixonados pelo desenvolvimento infantil
                </p>
              </div>
              <div className="bg-gradient-to-r from-yellow-100/70 to-amber-100/70 p-6 rounded-xl text-center shadow-sm">
                <div className="text-4xl font-extrabold text-yellow-600 mb-2">
                  7 Dias
                </div>
                <p className="text-slate-600">Abertos durante toda a semana</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave inferior */}
      <div className="absolute bottom-0 left-0 right-0 text-pink-50">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-20 fill-current rotate-180"
        >
          <path d="M0,80 C480,160 960,0 1440,80 L1440,0 L0,0 Z" />
        </svg>
      </div>
    </section>
  );
};

export default About;
