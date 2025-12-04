import { FaCheckCircle, FaPenNib, FaCheckDouble } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";

const PromiseSection = () => {
  return (
    <section className="py-[64px] pl-[16px]">
      <div className="flex max-md:flex-col max-md:items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-slate-900 text-4xl font-black w-[65%] pb-[24px]">
            Em 15 segundos, você resolve tudo.
          </h2>
          <ul>
            <li className="flex items-center gap-[12px] pb-[16px]">
              <FaCheckCircle className="text-green-500" />
              Respostas profissionais para clientes
            </li>
            <li className="flex items-center gap-[12px] pb-[16px]">
              <FaCheckCircle className="text-green-500" />
              Anúncios prontos para subir no Meta Ads
            </li>
            <li className="flex items-center gap-[12px] pb-[16px]">
              <FaCheckCircle className="text-green-500" />
              Conteúdo diário pronto para copiar
            </li>
            <li className="flex items-center gap-[12px] pb-[16px]">
              <FaCheckCircle className="text-green-500" />
              Scripts de follow-up que convertem
            </li>
            <li className="flex items-center gap-[12px] pb-[16px]">
              <FaCheckCircle className="text-green-500" />
              Argumentos irrefutáveis para objeções
            </li>
          </ul>
        </div>
        <div className="transform rotate-1 bg-indigo-600 text-white p-[32px] rounded-2xl">
          <h3 className="text-2xl text-center font-bold pb-[9px]">
            Tudo Adaptado ao Seu Negócio
          </h3>
          <div className="flex items-center gap-[12px] bg-indigo-500 p-[12px] rounded-lg mb-[12px]">
            <FaWandMagicSparkles />
            <p>IA analisando seu nicho...</p>
          </div>
          <div className="flex items-center gap-[12px] bg-indigo-500 p-[12px] rounded-lg mb-[12px]">
            <FaPenNib />
            <p>Escrevendo copy persuasiva...</p>
          </div>
          <button className="bg-white text-indigo-900 flex items-center w-full p-[16px] justify-center uppercase font-bold rounded-lg">
            <FaCheckDouble className="text-green-500" />
            Pronto para vender!
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
