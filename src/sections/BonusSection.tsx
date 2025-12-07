import { FaCheckSquare } from "react-icons/fa";

const BonusSection = () => {
  return (
    <section className="py-12 bg-indigo-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-yellow-400">
          🎁 BÔNUS DE PRÉ-VENDA EXCLUSIVA
        </h2>
        <p className="mb-8">Liberados apenas para quem entrar hoje:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <div className="bg-white/10 p-4 rounded-lg flex items-center border border-white/20">
            <FaCheckSquare className="text-green-400 mr-3 text-xl" />
            <span>Pack de 50 Scripts de Venda Prontos</span>
          </div>
          <div className="bg-white/10 p-4 rounded-lg flex items-center border border-white/20">
            <FaCheckSquare className="text-green-400 mr-3 text-xl" />
            <span>10 Ideias de Conteúdo p/ Nicho</span>
          </div>
          <div className="bg-white/10 p-4 rounded-lg flex items-center border border-white/20">
            <FaCheckSquare className="text-green-400 mr-3 text-xl" />
            <span>3 Templates de Storytelling</span>
          </div>
          <div className="bg-white/10 p-4 rounded-lg flex items-center border border-white/20">
            <FaCheckSquare className="text-green-400 mr-3 text-xl" />
            <span>Guia de Pós-Venda Lucrativo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
