import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "R. Bancário Francisco Mendes Sobreira - 145, João Pessoa-PB",
      color: "bg-blue-500",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(83) 98897-2308",
      color: "bg-yellow-400",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@babybolha.com.br",
      color: "bg-red-500",
    },
    {
      icon: Clock,
      title: "Horário | Atendimento",
      content: "Ter-Sex: 8h-18h | Sáb: 7h-12h | Atendimento em Domicílio",
      color: "bg-blue-400",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#F3F8FF]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            Entre em <span className="text-red-500">Contato</span>
          </h2>
          <p className="text-lg text-slate-600">
            Tire suas dúvidas, agende uma visita ou fale conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8 shadow-md border border-slate-200 bg-white">
            <h3 className="text-2xl font-bold mb-6 text-blue-600">
              Envie uma Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <Input
                type="tel"
                placeholder="Seu telefone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
              <Textarea
                placeholder="Sua mensagem"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                required
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300"
                size="lg"
              >
                Enviar Mensagem
              </Button>
            </form>

            {/* --- INSTAGRAM EMBED --- */}
            <div className="mt-8 border-t-4 border-yellow-400 rounded-xl overflow-hidden">
              <iframe
                src="https://www.instagram.com/babybolha/embed"
                width="100%"
                height="480"
                allowtransparency="true"
                frameBorder="0"
                scrolling="no"
                className="rounded-lg"
              ></iframe>
            </div>
          </Card>

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="p-6 border border-slate-200 hover:shadow-md transition-all duration-300 bg-white"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${info.color}`}
                    >
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-slate-800">
                        {info.title}
                      </h4>
                      <p className="text-slate-600">{info.content}</p>
                    </div>
                  </div>
                </Card>
              );
            })}

            <Card className="overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="aspect-video">
                <iframe
                  title="Mapa Baby Bolha"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.578884631023!2d-34.8577023!3d-7.114775899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acc29f06f9c5d1%3A0x7d6de5a25c9a3b2d!2sR.%20Banc%C3%A1rio%20Francisco%20Mendes%20Sobreira%2C%20145%20-%20Pedro%20Gondim%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058031-270!5e0!3m2!1spt-BR!2sbr!4v1730200000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
