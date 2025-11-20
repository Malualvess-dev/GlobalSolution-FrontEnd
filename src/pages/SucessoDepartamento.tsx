import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SuccessDepartamento() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/TelaInicialGerente");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center animate-fadeIn">

        <div className="text-green-600 text-5xl mb-4">✔</div>

        <h1 className="text-3xl font-bold text-blue-700 mb-2">
          Departamento Criado!
        </h1>

        <p className="text-gray-600 mb-6">
          O departamento foi cadastrado com sucesso.  
          Você será redirecionado em instantes...
        </p>

        <button
          onClick={() => navigate("/tela-gerente")}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Voltar agora
        </button>

      </div>
    </div>
  );
}
