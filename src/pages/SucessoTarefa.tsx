import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SucessoTarefa() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/TelaInicialFuncionario");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 text-gray-900 relative">

      {/* fundo tech */}
      <div className="absolute inset-0 bg-[url('/tech-lines.png')] bg-cover opacity-20"></div>

      <div className="relative z-10 bg-white/70 p-10 rounded-2xl shadow-xl border backdrop-blur-md text-center max-w-xl">

        <img src="/iconeSegurança.png" className="w-20 mx-auto mb-4" />

        <h1 className="text-3xl font-extrabold text-blue-700 mb-3">
          Tarefa Criada!
        </h1>

        <p className="text-gray-700 text-lg">
          Sua tarefa foi registrada com sucesso.  
          <br />
          Você será redirecionado em instantes...
        </p>

      </div>
    </div>
  );
}
