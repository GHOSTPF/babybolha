import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Mãe de aluno",
      text: "Meu filho tinha medo de água e em 3 meses estava nadando sozinho! Os instrutores são incríveis, pacientes e muito carinhosos.",
      rating: 5,
    },
    {
      name: "Carlos Oliveira",
      role: "Aluno adulto",
      text: "Comecei do zero aos 45 anos e hoje nado 1km sem parar. A AquaFlow mudou minha vida e minha saúde. Recomendo demais!",
      rating: 5,
    },
    {
      name: "Beatriz Lima",
      role: "Praticante de hidroginástica",
      text: "As aulas de hidroginástica são maravilhosas! Ambiente acolhedor, professora excelente e resultados visíveis. Estou muito satisfeita.",
      rating: 5,
    },
    {
      name: "Pedro Costa",
      role: "Pai de atleta",
      text: "Minha filha treina na equipe competitiva e o progresso é impressionante. Estrutura de primeiro mundo e treinadores muito competentes.",
      rating: 5,
    },
    {
      name: "Joana Ferreira",
      role: "Aluna há 2 anos",
      text: "A melhor escola de natação da região! Piscina sempre limpa, horários flexíveis e equipe super profissional. Só tenho elogios!",
      rating: 5,
    },
    {
      name: "Ricardo Alves",
      role: "Aluno de natação adulta",
      text: "Infraestrutura impecável e atendimento nota 10. As aulas são personalizadas e realmente focam nas necessidades de cada um.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O Que Dizem <span className="text-yellow-500">Nossos Alunos</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Histórias reais de transformação e sucesso na água.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <Quote
                className="absolute top-4 right-4 text-primary/20"
                size={48}
              />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-500"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-foreground/60">
                  {testimonial.role}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center glass-effect rounded-xl p-8 max-w-2xl mx-auto">
          <div className="text-5xl font-bold text-primary mb-2">4.9/5.0</div>
          <div className="text-lg text-foreground/70 mb-4">
            Baseado em 300+ avaliações
          </div>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={24}
                className="text-yellow-500"
                fill="currentColor"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
