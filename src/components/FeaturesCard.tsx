import { FeaturesCardType } from "../@types/FeaturesCardType.js";

const FeaturesCard = ({ icon, title, children }: FeaturesCardType) => {
  return (
    <div className="border-2 border-gray-200 p-[25px] w-[30%] mr-[32px] mb-[32px] rounded-xl max-lg:w-[90%]">
      {icon}
      <h3 className="text-slate-800 font-bold text-xl mb-[8px] mt-[16px] w-[78%]">
        {title}
      </h3>
      <p>{children}</p>
    </div>
  );
};

export default FeaturesCard;
