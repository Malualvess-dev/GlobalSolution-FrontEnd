import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Contato() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 relative flex flex-col">

      {/* Fundo Tech */}
      <div
        className="
          absolute inset-0 
          bg-[url('/tech-lines.png')] 
          bg-cover opacity-100
        "
      ></div>

      {/* Conteúdo */}
      <div className="flex justify-center mt-24 mb-10 z-10 px-6">
        <div className="max-w-4xl w-full bg-white/70 backdrop-blur-xl p-12 rounded-3xl shadow-xl border border-gray-300">

        {/* Botão Voltar */}
      <div className="absolute top-10 left-10 z-20">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition"
        >
          <img src="/voltar.jpeg" alt="voltar" className="w-5" />
          Voltar
        </button>
      </div>

          {/* Título */}
          <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-4">
            Entre em Contato
          </h1>

          <p className="text-center text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
            Estamos aqui para ajudar! Envie sua mensagem ou consulte abaixo nossas formas de contato.
          </p>

          {/* Cards de Contato */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            <div className="bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-100 flex flex-col items-center">
              <span className="text-4xl">📧</span>
              <h3 className="font-bold text-blue-700 mt-2">E-mail</h3>
              <p className="text-gray-700 text-center mt-1">suporte@empresa.com</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-100 flex flex-col items-center">
              <span className="text-4xl">📞</span>
              <h3 className="font-bold text-blue-700 mt-2">Telefone</h3>
              <p className="text-gray-700 text-center mt-1">(11) 99999-9999</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-100 flex flex-col items-center">
              <span className="text-4xl">📍</span>
              <h3 className="font-bold text-blue-700 mt-2">Endereço</h3>
              <p className="text-gray-700 text-center mt-1">
                São Paulo, Brasil
              </p>
            </div>

          </div>

          {/* Formulário de Contato */}
          <form className="space-y-6">
            <div>
              <label className="font-semibold text-gray-700">Seu Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">Seu E-mail</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">Mensagem</label>
              <textarea
                placeholder="Digite sua mensagem..."
                rows={4}
                className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="button"
              className="
                w-full mt-8 py-3 text-white text-lg font-semibold rounded-lg
              bg-gradient-to-r from-blue-500 to-indigo-600
              shadow-[0_0_10px_rgba(59,130,246,0.7)]
              hover:shadow-[0_0_20px_rgba(59,130,246,1)]
              hover:scale-[1.03]
              transition-all duration-300
              animate-pulse
              "
            >
              Enviar Mensagem
            </button>
          </form>

        </div>
      </div>

       {/* 🔹 FOOTER */}
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
