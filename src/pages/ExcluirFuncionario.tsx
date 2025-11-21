import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ExcluirFuncionario() {
  const [idExcluir, setIdExcluir] = useState("");
  const navigate = useNavigate();

  async function excluirFuncionario() {
    if (!idExcluir.trim()) {
      alert("Digite o ID do funcionário!");
      return;
    }

    try {
      const resp = await fetch(
        `http://localhost:8080/Funcionarios/${idExcluir}`,
        { method: "DELETE" }
      );

      if (resp.ok) {
        alert("Funcionário excluído com sucesso!");
        navigate("/TelaInicialGerente");
      } else {
        alert("Erro ao excluir funcionário");
      }
    } catch (error) {
      alert("Erro ao excluir funcionário!");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 relative">

      {/* fundo */}
      <div className="absolute inset-0 bg-[url('/tech-lines.png')] bg-cover opacity-30"></div>

      <div className="relative z-10 w-[400px] bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-xl border">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-5">
          Excluir Funcionário
        </h1>

        <input
          type="number"
          placeholder="Digite o ID"
          value={idExcluir}
          onChange={(e) => setIdExcluir(e.target.value)}
          className="w-full p-3 border rounded-xl mb-5"
        />

        <button
          onClick={excluirFuncionario}
          className="w-full py-3 bg-red-600 text-white rounded-xl hover:bg-red-700"
        >
          🗑 Excluir
        </button>

        <button
          onClick={() => navigate("/TelaInicialGerente")}
          className="w-full mt-4 py-3 bg-gray-300 text-gray-800 rounded-xl hover:bg-gray-400"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
