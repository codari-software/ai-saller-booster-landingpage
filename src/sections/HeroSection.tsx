import "../styles/hero.css";
import { FaRobot, FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero-bg text-white flex flex-col items-center justify-center">
      <div className="text-indigo-200 flex items-center mt-[80px] gap-[8px] rounded-3xl border-2 border-opacity-30 border-indigo-400 border-spacing-5 px-[16px] py-[6px] bg-indigo-500 bg-opacity-20">
        <FaRobot />
        <p>Tecnologia 100% Automatizada</p>
      </div>
      <div className="text-center text-7xl font-black tracking-[1.8px] py-[24px]">
        <h1>Venda até dormindo.</h1>
        <h1>
          Deixe a{" "}
          <span className="bg-gradient-to-t from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            IA fazer o trabalho
          </span>{" "}
          cansativo.
        </h1>
      </div>
      <p className="text-slate-300 text-center text-2xl w-[60%] pb-[40px]">
        A plataforma definitiva para dobrar vendas no WhatsApp e Instagram —
        mesmo sem tempo, sem saber copy e sem experiência.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <a
          href="#planos"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-10 rounded-xl text-xl transition transform hover:scale-105 shadow-lg shadow-green-500/30 w-full md:w-auto"
        >
          Quero dobrar minhas vendas <br />
          <span className="text-sm font-normal opacity-90">
            Começar por R$ 29/mês
          </span>
        </a>
      </div>
      <div className="flex items-center gap-[4px] text-slate-400 text-sm leading-[20px] underline decoration-solid pt-[23.5px] pb-[96px]">
        <a
          href="#demo"
          className="text-slate-400 hover:text-white underline text-sm transition flex items-center gap-[8px]"
        >
          Ver exemplos gerados pela IA
          <FaArrowDown />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
