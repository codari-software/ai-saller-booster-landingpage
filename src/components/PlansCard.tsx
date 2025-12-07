import { FaCheck } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { PlansCardType } from "../@types/PlansCardType.js";

const PlansCard = ({
  title,
  price,
  features,
  button,
  link,
  children,
  type = "normal",
  textColor = "text-slate-300"
}: PlansCardType) => {
  const isHighlight = type === "highlighted";

  return (
    <div
      className={
        isHighlight
          ? "bg-white text-slate-900 rounded-2xl p-8 transform scale-105 shadow-2xl shadow-indigo-500/20 relative z-10 border-2 border-indigo-500"
          : "bg-slate-800 rounded-2xl p-6 border border-slate-700"
      }
    >
      {isHighlight && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
          Mais Vendido (73%)
        </div>
      )}

      <h3
        className={`text-xl font-bold ${
          isHighlight ? "text-indigo-700 text-2xl" : textColor
        }`}
      >
        {title}
      </h3>

      <div className="my-4">
        <span
          className={isHighlight ? "text-5xl font-black" : "text-3xl font-bold"}
        >
          R$ {price}
        </span>
        <span className="text-slate-500">/mês</span>
      </div>

      <p
        className={
          isHighlight
            ? "text-sm text-slate-600 mb-6 font-medium"
            : "text-sm text-slate-400 mb-6"
        }
      >
        {children}
      </p>

      <ul
        className={
          isHighlight
            ? "space-y-4 mb-8 text-sm font-medium"
            : "space-y-3 mb-8 text-sm text-slate-300"
        }
      >
        {features.map((item, index) => (
          <li key={index} className="flex items-center">
            {isHighlight ? (
              <FaCircleCheck className="text-green-500 mr-2" />
            ) : (
              <FaCheck className="text-green-500 mr-2" />
            )}
            {item}
          </li>
        ))}
      </ul>

      <a
        href={link}
        target="_blank"
        className={
          isHighlight
            ? "w-full block text-center py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            : "w-full block text-center py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition font-bold text-white"
        }
      >
        {button}
      </a>
    </div>
  );
};

export default PlansCard;
