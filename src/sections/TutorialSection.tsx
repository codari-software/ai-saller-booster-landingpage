import TutorialCard from "../components/TutorialCard.js";
import { FaChevronRight } from "react-icons/fa";

const TutorialSection = () => {
  return (
    <section id="demo" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Veja como é simples (e por que todos usam)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="relative">
            <TutorialCard step={1} title="Escolha o Negócio">
              Ex: Barbearia, estética, loja de roupas, serviços...
            </TutorialCard>
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-slate-600 z-10">
              <FaChevronRight />
            </div>
          </div>

          <div className="relative">
            <TutorialCard step={2} title="Escolha o Tom">
              "Mais sério", "Mais engraçado", "Agressivo de vendas"
            </TutorialCard>
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-slate-600 z-10">
              <FaChevronRight />
            </div>
          </div>

          <div className="relative">
            <TutorialCard step={3} title="Clique em Gerar">
              A IA cria toda a estratégia e textos em segundos.
            </TutorialCard>
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-slate-600 z-10">
              <FaChevronRight />
            </div>
          </div>

          <div className="relative">
            <TutorialCard step={4} title="Copie e Venda">
              Apenas cole no WhatsApp ou Instagram e lucre.
            </TutorialCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorialSection;
