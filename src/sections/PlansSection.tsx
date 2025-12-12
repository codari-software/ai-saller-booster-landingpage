/// <reference types="vite/client" />
import PlansCard from "../components/PlansCard.js";

const PlansSection = () => {
  return (
    <section id="planos" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-4">
          Escolha seu Acelerador
        </h2>
        <p className="text-center text-slate-400 mb-12">
          Preços promocionais por tempo limitado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          <PlansCard
            title="Start"
            price={29}
            oldPrice={39}
            features={[
              "Respostas prontas",
              "10 anúncios/mês",
              "10 conteúdos/mês",
              "Acesso antecipado",
            ]}
            button="Testar Agora"
            type="normal"
            textColor="text-slate-300"
            link={import.meta.env.VITE_KIWIFY_START}
          >
            Para quem quer começar gastando pouco.
          </PlansCard>

          <PlansCard
            title="PRO"
            price={59}
            oldPrice={79}
            features={[
              "Tudo do Start",
              "Anúncios Ilimitados",
              "Conteúdo Diário",
              "Follow-up Automático",
              "Roteiros de Vídeos Virais",
            ]}
            button="Quero Este Plano"
            type="highlighted"
            link={import.meta.env.VITE_KIWIFY_PRO}
          >
            O melhor custo-benefício para crescer.
          </PlansCard>

          <PlansCard
            title="Turbo"
            price={99}
            oldPrice={129}
            features={[
              "Tudo do PRO",
              "Mini CRM IA (Heatmap)",
              "Scripts Personalizados",
              "Suporte Prioritário",
              "Acelerador de Conversões",
            ]}
            button="Dominar Mercado"
            type="normal"
            textColor="text-amber-400"
            link={import.meta.env.VITE_KIWIFY_TURBO}
          >
            Para dominar o mercado.
          </PlansCard>

        </div>
      </div>
    </section>
  );
};

export default PlansSection;
