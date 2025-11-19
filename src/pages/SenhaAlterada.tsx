import { useNavigate } from "react-router-dom";

export default function SenhaAlterada() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6f5ff] relative overflow-hidden">

      {/* Fundo Tech */}
      <div
        className="
          absolute inset-0
          bg-[url('/src/assets/tech-lines.png')]
          bg-cover
          bg-center
          opacity-100
          pointer-events-none
        "
      ></div>

      {/* CARD */}
      <div
        className="
          relative bg-white p-10 rounded-3xl shadow-2xl w-[520px] z-10 
          text-center animate-fadeInUp
        "
      >
        {/* Ícone de sucesso */}
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center shadow-md">
            <span className="text-green-600 text-5xl">✔</span>
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-green-600 mb-3">
          Senha alterada com sucesso!
        </h1>

        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Sua senha foi atualizada com sucesso.  
          Agora você já pode fazer login com sua nova credencial.
        </p>

        {/* Botão */}
        <button
          className="
            w-full bg-gradient-to-r from-blue-500 to-indigo-600 
            text-white py-3 rounded-xl shadow-lg font-semibold
            hover:scale-[1.03] hover:from-blue-600 hover:to-indigo-700
            transition-all duration-300
          "
          onClick={() => navigate("/login")}
        >
          Voltar ao Login
        </button>
      </div>

      {/* Animação personalizada */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.7s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
