import FeaturesCard from "../components/FeaturesCard.js";
import {
  FaFire,
  FaBullseye,
  FaTiktok,
  FaCommentsDollar,
  FaTemperatureHigh,
} from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section className="py-[64px]">
      <h2 className="text-center text-slate-800 text-3xl font-bold">
        Novas Features (Inclusas Hoje)
      </h2>
      <div className="flex flex-wrap mt-[48px] ml-[16px] max-md:flex-col max-md:items-center">
        <FeaturesCard
          icon={<FaFire className="text-3xl text-red-500" />}
          title="Acelerador de Conversões"
        >
          Sistema que cria respostas "dominantes" com gatilhos de urgência e
          autoridade instantânea.
        </FeaturesCard>
        <FeaturesCard icon={<FaBullseye className="text-3xl text-blue-500" />} title="IA de Anúncios Avançada">
          Copy + Sugestão de Criativo + Segmentação de Público (Quente e Frio).
        </FeaturesCard>
        <FeaturesCard icon={<FaTiktok className="text-3xl text-pink-500" />} title="Roteirista de Vídeos">
          Scripts de 15s, 30s e 60s com Hook viral, corpo e CTA.
        </FeaturesCard>
        <FeaturesCard icon={<FaCommentsDollar className="text-3xl text-purple-500" />} title="Chat Anti-Perda">
          A IA gera o Follow-up perfeito: suave, forte ou de quebra de objeção.
        </FeaturesCard>
        <FeaturesCard
          icon={<FaTemperatureHigh className="text-3xl text-orange-500" />}
          title="Heatmap de Clientes (Mini CRM)"
        >
          A IA sugere quem está quente para comprar e quem precisa de atenção.
        </FeaturesCard>
      </div>
    </section>
  );
};

export default FeaturesSection;
