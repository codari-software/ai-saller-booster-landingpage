const HistorySection = () => {
  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm">
          <i className="fa-solid fa-quote-left text-4xl text-slate-200 mb-4 block"></i>
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            "O problema não era o produto… era como eu falava."
          </h3>
          <div className="prose text-slate-600 mb-8">
            <p className="mb-4">
              Minha rotina era insana. Cliente chamando no WhatsApp, eu ocupado
              atendendo na loja. Quando eu respondia 2 horas depois, ele já
              tinha comprado no concorrente.
            </p>
            <p className="mb-4">
              A ansiedade batia forte toda noite. Eu sabia que estava deixando
              dinheiro na mesa, mas não tinha tempo para ser um "marketeiro" e
              empresário ao mesmo tempo.
            </p>
            <p>
              Quando testei a IA pela primeira vez, quase chorei de alívio. Ela
              respondeu 10 clientes em 2 minutos. Fechei 3 vendas enquanto
              tomava café. <strong>Foi ali que tudo mudou.</strong>
            </p>
          </div>
          <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-xl font-bold text-slate-500">
              RP
            </div>
            <div>
              <div className="font-bold text-slate-900">Nota do Criador</div>
              <div className="text-sm text-slate-500">
                "Fiz essa plataforma pra quem trabalha duro e merece vender
                mais."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
