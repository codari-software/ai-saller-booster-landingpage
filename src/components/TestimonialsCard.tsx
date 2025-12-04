import { FaStar } from "react-icons/fa";
import { TestimonialsType } from "../@types/TestimonialsType.js";

const TestimonialsCard = ({quote, company}: TestimonialsType) => {
  return (
    <div className="w-[20%] max-md:w-[90%] m-auto">
      <div className="flex text-yellow-400 mb-[12px]">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="text-slate-700 text-base italic font-normal pb-[16px]">
        {quote}
      </p>
      <p className="text-slate-900 text-base font-bold">{company}</p>
    </div>
  );
};

export default TestimonialsCard;
