import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function AtualizarSenha() {

  const [tipo, setTipo] = useState("funcionario");
  const [id, setId] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const atualizarSenha = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id || !senha) {
      setMsg("⚠ Preencha todos os campos!");
      return;
    }

    const rota =
      tipo === "funcionario"
        ? `http://localhost:8080/Funcionarios/${id}`
        : `http://localhost:8080/Gerentes/${id}`;

    try {
      const resposta = await fetch(rota, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ senha }),
      });

      if (resposta.ok) {
        navigate("/senhaAlterada");
      } else {
        const erro = await resposta.text();
        setMsg("❌ " + erro);
      }
    } catch (error) {
      setMsg("Erro ao conectar ao servidor.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6f5ff] relative">

      {/* FUNDO TECH IGUAL AO LOGIN */}
      <div
        className="
          absolute inset-0 
            bg-[url('/tech-lines.png')] 
            bg-cover
            opacity-100
            pointer-events-none
        "
      ></div>

      {/* CARD */}
      <div className="relative bg-white p-10 rounded-3xl shadow-xl w-[540px] z-10">

        {/* HOME / VOLTAR */}
        <div className="absolute left-6 top-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
          >
            <img src="/iconeCasinha.png" alt="Home" className="w-6 h-6" />
            <span className="font-medium text-sm">Voltar</span>
          </Link>
        </div>

        {/* Ícone */}
        <div className="flex justify-center mb-4 mt-8">
          <img
            src="/iconeSegurança.png"
            alt="Ícone Login"
            className="w-16"
          />
        </div>

        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-2">
          Atualizar Senha
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Escolha o tipo de usuário e atualize sua senha.
        </p>

        {/* FORM */}
        <form onSubmit={atualizarSenha} className="space-y-4">

          <div>
            <label className="font-medium">Entrar como:</label>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full p-2 border rounded-lg shadow-sm"
            >
              <option value="funcionario">Funcionário</option>
              <option value="gerente">Gerente</option>
            </select>
          </div>

          <div>
            <label className="font-medium">ID:</label>
            <input
              type="number"
              className="w-full p-2 border rounded-lg shadow-sm"
              placeholder="Digite o ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium">Nova Senha:</label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg shadow-sm"
              placeholder="Digite a nova senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="
              w-full bg-gradient-to-r from-blue-500 to-indigo-500
              text-white font-bold py-3 rounded-lg shadow-md
              hover:scale-[1.02] transition-all
            "
          >
            Atualizar Senha
          </button>
        </form>

        {msg && (
          <p className="text-center text-red-600 font-medium mt-4">{msg}</p>
        )}

      </div>
    </div>
  );
}
