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
    <section className="py-16 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-10">
          Antes vs Depois da IA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-slate-300 p-8 text-slate-600">
            <h3 className="font-bold text-xl mb-6 uppercase tracking-wider">
              Modo Antigo
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaClock className="text-slate-500 w-8" />
                Demorar para responder
              </li>
              <li className="flex items-center">
                <FaUserInjured className="text-slate-500 w-8" />
                Parecer amador
              </li>
              <li className="flex items-center">
                <FaStoreSlash className="text-slate-500 w-8" />
                Perder clientes
              </li>
              <li className="flex items-center">
                <FaMoneyBillWave className="text-slate-500 w-8 opacity-50" />
                Anúncios que queimam verba
              </li>
              <li className="flex items-center">
                <FaCalendarXmark className="text-slate-500 w-8" />
                Postar 1x por semana
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 border-l-4 border-indigo-500 relative">
            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              SEU FUTURO
            </div>
            <h3 className="font-bold text-xl mb-6 uppercase tracking-wider text-indigo-600">
              Com AI Seller Booster
            </h3>
            <ul className="space-y-4 font-medium">
              <li className="flex items-center">
                <FaRobot className="text-green-500 w-8" />
                Atendimento Profissional
              </li>
              <li className="flex items-center">
                <FaBolt className="text-green-500 w-8" />
                Respostas automáticas e rápidas
              </li>
              <li className="flex items-center">
                <FaChartLine className="text-green-500 w-8" />
                Anúncios que convertem
              </li>
              <li className="flex items-center">
                <FaCalendarCheck className="text-green-500 w-8" />
                Conteúdo Diário Infinito
              </li>
              <li className="flex items-center">
                <FaUmbrellaBeach className="text-green-500 w-8" />
                Mais tempo livre
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterAISection;
