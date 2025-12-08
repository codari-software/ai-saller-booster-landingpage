import { useEffect, useState } from "react";

const CooldownSection = () => {
  const INITIAL_TIME = 15 * 60;
  const STORAGE_KEY = 'cooldown_end_time';

  const getInitialEndTime = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const endTime = parseInt(stored, 10);
      if (endTime > Date.now()) {
        return endTime;
      }
    }
    const newEndTime = Date.now() + INITIAL_TIME * 1000;
    localStorage.setItem(STORAGE_KEY, newEndTime.toString());
    return newEndTime;
  };

  const [endTime, setEndTime] = useState(getInitialEndTime);
  const [timeLeft, setTimeLeft] = useState(
    Math.max(0, Math.floor((endTime - Date.now()) / 1000))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = Math.floor((endTime - Date.now()) / 1000);
      
      if (remaining <= 0) {
        const newEndTime = Date.now() + INITIAL_TIME * 1000;
        setEndTime(newEndTime);
        localStorage.setItem(STORAGE_KEY, newEndTime.toString());
        setTimeLeft(INITIAL_TIME);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

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
          "Para garantir a estabilidade da IA, trabalhamos com ciclos de acesso
          limitados."
        </p>
      </div>
    </section>
  );
};

export default CooldownSection;