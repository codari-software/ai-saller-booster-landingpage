import { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa6";

const faqData = [
  {
    question: "Eu não tenho tempo, funciona pra mim?",
    answer:
      "Exatamente por isso foi criado. A ferramenta faz em 15 segundos o que você levaria 1 hora. É para quem NÃO tem tempo.",
  },
  {
    question: "Eu não sei usar IA, é difícil?",
    answer:
      "É mais fácil que pedir um Uber. Você só clica em botões. Não precisa digitar prompts complexos nem entender de tecnologia.",
  },
  {
    question: "E se não funcionar no meu negócio?",
    answer:
      "A IA foi treinada em mais de 50 nichos diferentes. Se você vende produtos ou serviços, ela funciona. E se não gostar, tem a garantia de 7 dias.",
  },
  {
    question: "Por que é tão barato?",
    answer:
      "Estamos em fase de crescimento acelerado. O preço vai subir em breve, mas quem entrar agora garante o valor promocional para sempre.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqData.map((item, i) => (
            <AccordionItem
              key={i}
              index={i}
              isOpen={openIndex === i}
              question={item.question}
              answer={item.answer}
              onClick={() => toggleFAQ(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface AccordionItemProps {
  index: number;
  isOpen: boolean;
  question: string;
  answer: string;
  onClick: () => void;
}

const AccordionItem = ({
  isOpen,
  question,
  answer,
  onClick,
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`border rounded-xl p-4 cursor-pointer transition bg-slate-50 ${
        isOpen ? "bg-white border-indigo-200 shadow-sm" : "border-slate-200"
      }`}
    >
      <div
        className="flex justify-between items-center"
        onClick={onClick}
      >
        <h3 className="font-bold text-slate-800">{question}</h3>

        <FaChevronDown
          className={`text-indigo-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <p className="text-slate-600 mt-4 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQSection;
