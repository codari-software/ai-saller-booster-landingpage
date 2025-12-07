import { FaShieldHalved } from "react-icons/fa6";

const GarantiaSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="inline-block p-4 rounded-full bg-green-100 text-green-600 text-4xl mb-4">
          <FaShieldHalved />
        </div>
        <h3 className="text-2xl font-bold mb-4">Garantia Blindada de 7 Dias</h3>
        <p className="text-slate-600">
          Sem perguntas, sem burocracia. Se você não sentir que sua
          produtividade aumentou ou que o atendimento ficou mais fácil,
          <strong>cancelar é 1 clique</strong>. Risco zero para você.
        </p>
      </div>
    </section>
  );
};

export default GarantiaSection;
