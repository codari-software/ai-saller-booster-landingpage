const FooterSection = () => {
  return (
    <footer className="py-20 bg-slate-900 text-center px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">
          Só existe uma coisa entre você e suas próximas vendas...
        </h2>
        <p className="text-slate-400 mb-10 text-lg">Clicar nesse botão.</p>

        <a
          href="#planos"
          className="inline-block w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-black text-2xl py-6 px-12 rounded-xl shadow-lg shadow-green-500/40 transition transform hover:scale-105 animate-pulse-fast"
        >
          SIM, EU QUERO VENDER MAIS{" "}
          <i className="fa-solid fa-arrow-right ml-2"></i>
        </a>

        <div className="mt-12 text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Codari Software. Todos os direitos
          reservados. <br />
          <span className="opacity-50">Tecnologia proprietária.</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
