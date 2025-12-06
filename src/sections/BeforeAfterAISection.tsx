import {
  FaClock,
  FaUserInjured,
  FaStoreSlash,
  FaMoneyBillWave,
  FaRobot,
  FaBolt,
  FaChartLine,
  FaCalendarCheck,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { FaCalendarXmark } from "react-icons/fa6";

const BeforeAfterAISection = () => {
  return (
    <section className="bg-slate-100 p-[64px]">
      <h2 className="text-slate-800 text-3xl font-bold text-center mb-[40px]">
        Antes vs Depois da IA
      </h2>
      <div className="flex w-full max-md:flex-col">
        <div
          className="p-[32px] bg-slate-300 rounded-l-2xl shadow-lg border-r-4 border-indigo-500 
        w-[50%] max-md:border-none max-md:w-full max-md:rounded-2xl"
        >
          <h3 className="text-slate-600 font-bold text-xl uppercase spac tracking-wider pb-[24px]">
            Modo Antigo
          </h3>
          <ul>
            <li className="flex items-center gap-[16px] text-slate-600 text-base mb-[16px]">
              <FaClock className="text-slate-500" />
              Demorar para responder
            </li>
            <li className="flex items-center gap-[16px] text-slate-600 text-base mb-[16px]">
              <FaUserInjured className="text-slate-500" />
              Parecer amador
            </li>
            <li className="flex items-center gap-[16px] text-slate-600 text-base mb-[16px]">
              <FaStoreSlash className="text-slate-500" />
              Perder clientes
            </li>
            <li className="flex items-center gap-[16px] text-slate-600 text-base mb-[16px]">
              <FaMoneyBillWave className="text-slate-500" />
              Anúncios que queimam verba
            </li>
            <li className="flex items-center gap-[16px] text-slate-600 text-base mb-[16px]">
              <FaCalendarXmark className="text-slate-500" />
              Postar 1x por semana
            </li>
          </ul>
        </div>
        <div className="p-[32px] w-[50%] shadow-lg relative max-md:w-full max-md:rounded-2xl">
          <div className="absolute top-0 right-0 bg-indigo-500 text-white px-[12px] py-[4px] rounded-bl-2xl rounded-tr-2xl">
            <p>SEU FUTURO</p>
          </div>
          <h3 className="text-indigo-600 text-xl font-bold tracking-wider uppercase mb-[24px]">Com AI Seller Booster</h3>
          <ul>
            <li className="flex items-center gap-[16px] text-slate-800 text-base mb-[16px] font-medium">
              <FaRobot className="text-green-500" />
              Atendimento Profissional
            </li>
            <li className="flex items-center gap-[16px] text-slate-800 text-base mb-[16px] font-medium">
              <FaBolt className="text-green-500" />
              Respostas automáticas e rápidas
            </li>
            <li className="flex items-center gap-[16px] text-slate-800 text-base mb-[16px] font-medium">
              <FaChartLine className="text-green-500" />
              Anúncios que convertem
            </li>
            <li className="flex items-center gap-[16px] text-slate-800 text-base mb-[16px] font-medium">
              <FaCalendarCheck className="text-green-500" />
              Conteúdo Diário Infinito
            </li>
            <li className="flex items-center gap-[16px] text-slate-800 text-base mb-[16px] font-medium">
              <FaUmbrellaBeach className="text-green-500" />
              Mais tempo livre
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterAISection;
