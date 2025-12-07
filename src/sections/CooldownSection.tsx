import { useEffect, useState } from "react";

const CooldownSection = () => {
  const INITIAL_TIME = 15 * 60;

  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return INITIAL_TIME; // reinicia quando chega a zero
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `00:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <section className="py-10 bg-red-50 border-t border-red-100 text-center">
      <div className="max-w-md mx-auto px-4">
        <p className="text-red-800 font-bold uppercase tracking-widest text-xs mb-2">
          Próxima janela de acesso fecha em:
        </p>

        <div
          id="countdown"
          className="text-4xl md:text-5xl font-black text-red-600 font-mono mb-6"
        >
          {formatTime(timeLeft)}
        </div>

        <a
          href="#planos"
          className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg animate-pulse-fast transition"
        >
          ENTRAR ANTES QUE FECHE
        </a>

        <p className="text-xs text-red-400 mt-4">
          “Para garantir a estabilidade da IA, trabalhamos com ciclos de acesso
          limitados.”
        </p>
      </div>
    </section>
  );
};

export default CooldownSection;
