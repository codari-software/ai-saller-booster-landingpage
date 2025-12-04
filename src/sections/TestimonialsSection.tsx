import { FaCheckCircle } from "react-icons/fa";
import TestimonialsCard from "../components/TestimonialsCard.js";

const TestimonialsSection = () => {
  return (
    <section>
      <div className="flex items-center justify-center gap-[4px] w-full pt-[48px] pb-[32px]">
        <FaCheckCircle className="text-green-500" />
        <p className="text-slate-500 text-sm font-semibold uppercase tracking-[0.7px]">
          2.364 pequenos negócios já vendem mais hoje
        </p>
      </div>
      <div className="flex justify-around w-full max-md:block">
        <TestimonialsCard
          quote='"Nunca vendi tanto no WhatsApp. A IA responde melhor do que eu."'
          company="— Clínica Lumi"
        />
        <TestimonialsCard
          quote='"Meus anúncios nunca deram certo… até agora. O texto converte muito."'
          company="— Hamburgueria 7 Sabor"
        />
        <TestimonialsCard
          quote='"Ganho 1 hora por dia só com as respostas prontas de atendimento."'
          company="— Barbearia Monteiro"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
