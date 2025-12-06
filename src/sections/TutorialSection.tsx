import TutorialCard from "../components/TutorialCard.js";
import { FaArrowRight } from "react-icons/fa";

const TutorialSection = () => {
  return (
    <section className="bg-slate-900 py-[80px] px-[16px]">
      <h2 className="text-center text-4xl font-bold text-white">Veja como é simples (e por que todos usam)</h2>
      <div className="flex items-center gap-[32px] pt-[48px] max-lg:flex-col">
        <TutorialCard step={1} title="Escolha o Negócio">
          Ex: Barbearia, estética, loja de roupas, serviços...
        </TutorialCard>

        <FaArrowRight className="text-slate-600 text-base font-black max-lg:hidden" />

        <TutorialCard step={2} title="Escolha o Tom">
          "Mais sério", "Mais engraçado", "Agressivo de vendas"
        </TutorialCard>

        <FaArrowRight className="text-slate-600 text-base font-black max-lg:hidden"  />

        <TutorialCard step={3} title="Clique em Gerar">
          A IA cria toda a estratégia e textos em segundos.
        </TutorialCard>

        <FaArrowRight className="text-slate-600 text-base font-black max-lg:hidden"  />

        <TutorialCard step={4} title="Copie e Venda">
          Apenas cole no WhatsApp ou Instagram e lucre.
        </TutorialCard>
      </div>
    </section>
  );
};

export default TutorialSection;
