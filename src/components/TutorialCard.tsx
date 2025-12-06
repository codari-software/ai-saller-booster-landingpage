import { TutorialCardType } from "../@types/TutorialCardType.js";

const TutorialCard = ({ step, title, children }: TutorialCardType) => {
  return (
    <div className="rounded-2xl border-1 border-slate-700 bg-slate-800 text-center py-[25px] h-[210px] max-lg:w-[70%]">
      <h3 className="text-indigo-400 text-4xl pb-[16px]">{step}</h3>
      <h4 className="text-white text-xl font-bold w-[70%] m-auto pb-[8px]">
        {title}
      </h4>
      <p className="text-slate-400 text-sm w-[67%] m-auto">{children}</p>
    </div>
  );
};

export default TutorialCard;
