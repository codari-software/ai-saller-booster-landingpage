import { TutorialCardType } from "../@types/TutorialCardType.js";

const TutorialCard = ({ step, title, children }: TutorialCardType) => {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 h-full border border-slate-700 hover:border-indigo-500 transition">
      <div className="text-4xl text-indigo-400 font-bold mb-4">{step}</div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{children}</p>
    </div>
  );
};

export default TutorialCard;
