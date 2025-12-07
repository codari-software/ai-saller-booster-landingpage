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
            features={[
              "Respostas prontas",
              "10 anúncios/mês",
              "10 conteúdos/mês",
              "Acesso imediato",
            ]}
            button="Testar Agora"
            type="normal"
            textColor="text-slate-300"
          >
            Para quem quer começar gastando pouco.
          </PlansCard>

          <PlansCard
            title="PRO"
            price={59}
            features={[
              "Tudo do Start",
              "Anúncios Ilimitados",
              "Conteúdo Diário",
              "Follow-up Automático",
              "Roteiros de Vídeos Virais",
            ]}
            button="Quero Este Plano"
            type="highlighted"
          >
            O melhor custo-benefício para crescer.
          </PlansCard>

          <PlansCard
            title="Turbo"
            price={99}
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
          >
            Para dominar o mercado.
          </PlansCard>

        </div>
      </div>
    </section>
  );
};

export default PlansSection;
