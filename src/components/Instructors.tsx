import { Card } from "@/components/ui/card";
import { Award, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import instructor3 from "@/assets/instructor-3.jpg";

const Instructors = () => {
  const instructors = [
    {
      name: "Ana Carolina Silva",
      specialty: "Natação Infantil",
      experience: "12 anos de experiência",
      certifications: ["CREF", "Salva-vidas", "Pedagogia Aquática"],
      image: instructor1,
    },
    {
      name: "Ana Carolina Silva",
      specialty: "Natação Infantil",
      experience: "12 anos de experiência",
      certifications: ["CREF", "Salva-vidas", "Pedagogia Aquática"],
      image: instructor1,
    },
    {
      name: "Roberto Martins",
      specialty: "Natação Competitiva",
      experience: "15 anos de experiência",
      certifications: ["CREF", "Ex-atleta profissional", "Treinador Nível 3"],
      image: instructor2,
    },
    {
      name: "Juliana Costa",
      specialty: "Hidroginástica",
      experience: "8 anos de experiência",
      certifications: ["CREF", "Educação Física", "Especialista em Terceira Idade"],
      image: instructor3,
    },
    {
      name: "Juliana Costa",
      specialty: "Hidroginástica",
      experience: "8 anos de experiência",
      certifications: ["CREF", "Educação Física", "Especialista em Terceira Idade"],
      image: instructor3,
    },
    {
      name: "Juliana Costa",
      specialty: "Hidroginástica",
      experience: "8 anos de experiência",
      certifications: ["CREF", "Educação Física", "Especialista em Terceira Idade"],
      image: instructor3,
    },
    {
      name: "Juliana Costa",
      specialty: "Hidroginástica",
      experience: "8 anos de experiência",
      certifications: ["CREF", "Educação Física", "Especialista em Terceira Idade"],
      image: instructor3,
    },
  ];

  return (
    <section id="instructors" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl text-black md:text-5xl font-bold mb-6">
            Nossos <span className="text-red-600">Instrutores</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Profissionais certificados e apaixonados pelo ensino, prontos para
            guiar você em sua jornada aquática.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mb-1 !pb-5"
        >
          {instructors.map((instructor, index) => (
            <SwiperSlide key={index} style={{ marginTop: "10px" }}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 scale-95">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">{instructor.name}</h3>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm font-bold">5.0</span>
                    </div>
                  </div>
                  <p className="text-primary font-medium mb-1">{instructor.specialty}</p>
                  <p className="text-sm text-foreground/70 mb-4">{instructor.experience}</p>
                  <div className="space-y-2">
                    {instructor.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Award size={14} className="text-accent" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="glass-effect rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Equipe Completa de Profissionais
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Além dos instrutores destacados, contamos com uma equipe completa de
            20+ profissionais certificados, incluindo salva-vidas, fisioterapeutas e
            equipe de apoio sempre à disposição.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
              Todos com CREF
            </div>
            <div className="px-6 py-3 rounded-full bg-secondary/10 text-secondary font-medium">
              Treinamento Contínuo
            </div>
            <div className="px-6 py-3 rounded-full bg-accent/10 text-accent font-medium">
              Primeiros Socorros
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
