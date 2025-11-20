import { Link } from "react-router-dom";

export default function SucessoHumor() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6f5ff] relative">

      {/* Fundo Tech */}
      <div className="absolute inset-0 bg-[url('/tech-lines.png')] bg-cover opacity-100 pointer-events-none"></div>

      {/* CARD */}
      <div className="relative bg-white p-12 rounded-3xl shadow-xl w-[500px] z-10 text-center">

        {/* Ícone */}
        <div className="flex justify-center mb-6">
          <img src="/iconeSegurança.png" alt="Ícone sucesso" className="w-20" />
        </div>

        <h1 className="text-3xl font-extrabold text-blue-700 mb-3">
          Informações Registradas!
        </h1>

        <p className="text-gray-600 mb-8 text-lg">
          Seu registro de humor foi enviado com sucesso.  
          Obrigado por contribuir com o clima organizacional!
        </p>

        {/* Botão voltar */}
        <Link
          to="/TelaInicialFuncionario"
          className="
            block w-full py-3 rounded-lg font-bold text-white
            bg-gradient-to-r from-blue-500 to-indigo-600
            shadow-md hover:scale-[1.03] transition 
          "
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}
