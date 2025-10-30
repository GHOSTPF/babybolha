import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  // 🔧 Altere o número e a mensagem aqui
  const phoneNumber = "5583986669294"; // coloque o número com código do país
  const message = "Olá! Gostaria de saber mais sobre os serviços da Baby Bolha.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div>
        <style>
            {`
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
                }

                .whatsapp-pulse {
                animation: pulse 2s infinite;
                }
            `}
        </style>
        <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110 z-50 flex items-center justify-center whatsapp-pulse"
        aria-label="Contato via WhatsApp"
        >
        <FaWhatsapp size={28} />
        </a>
    </div>
  );
};

export default WhatsappButton;
