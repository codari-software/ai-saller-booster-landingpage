import ButtonComponent from "../components/ButtonComponent.js";
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
      <ButtonComponent>
        <p className="text-xl font-bold leading-[28px]">
          Quero dobrar minhas vendas
        </p>
        <p className="text-sm font-normal">Começar por R$ 29/mês</p>
      </ButtonComponent>
      <div className="flex items-center gap-[4px] text-slate-400 text-sm leading-[20px] underline decoration-solid pt-[23.5px] pb-[96px]">
        <p className="cursor-pointer">Ver exemplos gerados pela IA</p>
        <FaArrowDown />
      </div>
    </section>
  );
};

export default HeroSection;
