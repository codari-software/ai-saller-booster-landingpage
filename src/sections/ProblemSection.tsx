import { IoMdClose } from "react-icons/io";

const ProblemSection = () => {
    return (
        <section className="bg-slate-100 mt-[48px] py-[64px]">
            <h2 className="text-center text-3xl font-bold pb-[32px]">Você perde vendas todos os dias sem perceber.</h2>
            <div className="m-auto w-[80%] border-l-4 border-red-500 rounded-lg p-[32px] bg-white shadow-2xl">
                <h5 className="text-slate-800 text-lg font-medium pb-[24px]">Se você:</h5>
                <div className="flex justify-between w-[80%] text-slate-600 text-base max-md:flex-col max-md:items-center max-md:w-full">
                    <ul>
                        <li className="flex items-center gap-[18px] pb-[20px]">
                            <IoMdClose className="text-xl font-black text-red-500" />
                            <p>Demora para responder</p>
                        </li>
                        <li className="flex items-center gap-[18px] pb-[20px]">
                            <IoMdClose className="text-xl font-black text-red-500" />
                            <p>Não sabe o que postar</p>
                        </li>
                        <li className="flex items-center gap-[18px] max-md:pb-[20px]">
                            <IoMdClose className="text-xl font-black text-red-500" />
                            <p>Não sabe quebrar objeções</p>
                        </li>
                    </ul>
                    <ul>
                        <li className="flex items-center gap-[18px] pb-[20px]">
                            <IoMdClose className="text-xl font-black text-red-500" />
                            <p>Não sabe criar anúncios</p>
                        </li>
                        <li className="flex items-center gap-[18px] pb-[20px]">
                            <IoMdClose className="text-xl font-black text-red-500" />
                            <p>Esquece de fazer follow-up</p>
                        </li>
                        <li className="flex items-center gap-[18px]">
                            <IoMdClose className="text-xl font-black text-red-500" />
                            <p>Está sempre sem tempo</p>
                        </li>
                    </ul>
                </div>
                <p className="pt-[60px] text-center text-red-600 font-bold text-xl">...então você está literalmente queimando dinheiro.</p>
            </div>
        </section>
    )
}

export default ProblemSection;