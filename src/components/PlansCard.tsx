import { PlansCardType } from "../@types/PlansCardType.js";
import { FaCheck } from "react-icons/fa";

const PlansCard = ({
  title,
  price,
  children,
  features,
  button,
  type,
  textColor,
}: PlansCardType) => {
  return type == "normal" ? (
    <div className="p-[24px] bg-slate-800 border-2 border-slate-700 rounded-2xl 
    flex flex-col gap-[16px]">
      <h3 className={textColor + " font-bold text-xl"}>{title}</h3>
      <h4 className="text-slate-500"><span className="text-white text-3xl font-bold">R$ {price}</span>/mês</h4>
      <p className="text-slate-400 w-[90%]">{children}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <FaCheck />
            {feature}
          </li>
        ))}
      </ul>
      <button>{button}</button>
    </div>
  ) : (
    <div>
      <h3>{title}</h3>
      <h4>{price}/mês</h4>
      <p>{children}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <FaCheck />
            {feature}
          </li>
        ))}
      </ul>
      <button>{button}</button>
    </div>
  );
};

export default PlansCard;
