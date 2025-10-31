import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Baby, Users, Waves, Heart, Trophy, Dumbbell } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      icon: Baby,
      title: "Natação para Bebês",
      age: "6 meses - 3 anos",
      description:
        "Estimule o desenvolvimento motor e fortaleça o vínculo com seu bebê em aulas seguras e divertidas.",
      features: ["Pais participam", "Piscina aquecida", "Ambiente tranquilo"],
      color: "from-blue-700 to-blue-500",
    },
    {
      icon: Users,
      title: "Natação Infantil",
      age: "4 - 10 anos",
      description:
        "Aprendizado através de brincadeiras aquáticas que despertam confiança, coordenação e amor pela água.",
      features: ["Turmas reduzidas", "Método lúdico", "Acompanhamento constante"],
      color: "from-red-600 to-red-500",
    },
    {
      icon: Waves,
      title: "Natação Juvenil",
      age: "11 - 17 anos",
      description:
        "Aprimoramento técnico com foco em desempenho, disciplina e superação de limites.",
      features: ["Treinos técnicos", "Avaliação periódica", "Instrutores certificados"],
      color: "from-yellow-500 to-amber-400",
    },
    {
      icon: Heart,
      title: "Hidroginástica",
      age: "Todas as idades",
      description:
        "Exercícios aeróbicos com música e alegria! Melhore sua saúde com baixo impacto nas articulações.",
      features: ["Música animada", "Aulas energéticas", "Ambiente acolhedor"],
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: Trophy,
      title: "Natação Competitiva",
      age: "8+ anos",
      description:
        "Preparação de alto nível com treinos intensivos e foco em performance e conquistas.",
      features: ["Treinos diários", "Acompanhamento técnico", "Equipe motivadora"],
      color: "from-red-700 to-rose-500",
    },
    {
      icon: Dumbbell,
      title: "Hidroterapia",
      age: "Todas as idades",
      description:
        "Sessões terapêuticas na água para reabilitação e fortalecimento com acompanhamento especializado.",
      features: ["Sessões individuais", "Fisioterapeutas", "Equipamentos modernos"],
      color: "from-yellow-400 to-orange-400",
    },
  ];

  return (
    <section id="courses" className="relative py-24 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-yellow-50">
      {/* Top wave separator */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[1px]">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20 text-blue-50 fill-current">
          <path d="M0,80 C480,160 960,0 1440,80 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-800">
            Nossos <span className="text-red-600">Cursos</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Aprender a nadar é descobrir liberdade. Nossos programas unem
            segurança, diversão e resultados para todas as idades.
          </p>
        </div>

        {/* Cursos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => {
            const Icon = course.icon;
            return (
              <Card
                key={i}
                className="relative p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
              >
                {/* Glow */}
                <div
                  className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${course.color} opacity-10 rounded-full blur-2xl`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-blue-800 mb-1">
                    {course.title}
                  </h3>
                  <p className="text-sm font-medium text-red-600 mb-4">
                    {course.age}
                  </p>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {course.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="text-yellow-500">★</span> {f}
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-red-600 text-white font-semibold hover:bg-red-700 transition">
                    Saiba Mais
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-white/80 backdrop-blur-md rounded-2xl shadow-lg px-10 py-8 border border-slate-100">
            <p className="text-lg mb-4 text-slate-700">
              Não encontrou o curso ideal? Fale com nossa equipe e encontre o melhor plano para você!
            </p>
            <Button
              size="lg"
              className="bg-red-700 text-white hover:bg-red-800 font-semibold"
            >
              Falar com Consultor
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20 text-yellow-50 fill-current rotate-180">
          <path d="M0,80 C480,160 960,0 1440,80 L1440,0 L0,0 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Courses;
