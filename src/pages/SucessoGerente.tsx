import { useLocation, useNavigate } from "react-router-dom";

const SucessoGerente = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const nome = location.state?.nome || "Gerente";

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/tech-lines.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 1,
      }}
    >
      <div
        className="
          bg-white/90 backdrop-blur-xl p-12 rounded-3xl shadow-2xl
          max-w-xl w-full text-center border border-gray-200
        "
      >
        {/* Ícone */}
        <div className="flex justify-center mb-4">
          <img
            src="/check.png"
            alt="Sucesso"
            className="w-20 h-20 drop-shadow-lg"
          />
        </div>

        {/* Título */}
        <h1 className="text-3xl font-extrabold text-green-600 mb-2">
          Gerente cadastrado!
        </h1>

        {/* Mensagem */}
        <p className="text-gray-700 text-lg mb-6">
          O gerente <span className="font-semibold text-blue-700">{nome}</span> foi cadastrado com sucesso.
        </p>

        {/* Botão */}
        <button
          onClick={() => navigate("/")}
          className="
            px-10 py-3 rounded-xl text-white font-semibold
            bg-gradient-to-r from-blue-600 to-indigo-700
            hover:scale-[1.04] shadow-lg transition-all
          "
        >
          Voltar ao início
        </button>
      </div>
    </div>
  );
};

export default SucessoGerente;
