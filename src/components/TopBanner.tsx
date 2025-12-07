import { IoIosWarning } from "react-icons/io";

const TopBanner = () => {
  return (
    <div className="flex gap-[8px] items-center justify-around bg-amber-100 py-[12px] px-[16px]">
      <div className="flex items-center gap-[16px]">
        <IoIosWarning className="text-yellow-600 text-3xl font-black" />
        <p className="text-yellow-900 text-sm font-bold leading-[20px]">
          ATENÇÃO: Acesso Antecipado com Vagas Limitadas
        </p>
      </div>
      <div className="w-[40%]">
        <div className="flex justify-between w-full">
          <p className="text-yellow-900 text-sm font-bold leading-[20px]">
            Disponibilidade: 17 vagas
          </p>
          <p>63% Ocupado</p>
        </div>
        <div className="h-[10px] bg-yellow-200 rounded-full">
          <div className="h-[10px] bg-gradient-to-r from-red-500 to-red-600 w-[60%] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
