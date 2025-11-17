import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CadastroGerente = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    cpf: "",
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    departamento: "",
    dt_nascimento: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/Gerentes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        alert("Erro ao conectar ao servidor.");
        return;
      }

      navigate("/sucesso-gerente", {
        state: { nome: form.nome }
      });

    } catch (error) {
      alert("Erro ao enviar dados.");
    }
  };

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
      <div className="
        w-full max-w-2xl bg-white/80 backdrop-blur-xl 
        p-10 rounded-3xl shadow-xl border border-gray-200
      ">
        
        {/* Link para cadastro de funcionário */}
        <div className="text-right text-sm mb-4">
          <a
            href="/cadastro-funcionario"
            className="text-blue-600 hover:underline"
          >
            Não sou gerente → Cadastro Funcionário
          </a>
        </div>
        
        {/* Ícone */}
        <div className="flex justify-center mb-4">
          <img src="/logo-ia.png" alt="AI Icon" className="w-16 h-16" />
        </div>

        {/* Título */}
        <h2 className="text-center text-3xl font-bold text-gray-900">
          👔 Cadastro de Gerente
        </h2>

        <p className="text-center text-gray-600 mt-2 mb-8">
          Preencha o formulário corretamente para criar sua conta de gerente.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-sm text-gray-700 font-semibold">Nome Completo</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              className="w-full p-3 mt-1 bg-white border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-semibold">CPF</label>
            <input
              type="text"
              name="cpf"
              value={form.cpf}
              onChange={handleChange}
              placeholder="000.000.000-00"
              className="w-full p-3 mt-1 bg-white border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-semibold">E-mail</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 mt-1 bg-white border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-semibold">Telefone</label>
            <input
              type="text"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              className="w-full p-3 mt-1 bg-white border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-semibold">Senha</label>
            <input
              type="password"
              name="senha"
              value={form.senha}
              onChange={handleChange}
              className="w-full p-3 mt-1 bg-white border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-semibold">Departamento</label>
            <input
              type="text"
              name="departamento"
              value={form.departamento}
              onChange={handleChange}
              className="w-full p-3 mt-1 bg-white border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-semibold">Data de Nascimento</label>
            <input
              type="date"
              name="dt_nascimento"
              value={form.dt_nascimento}
              onChange={handleChange}
              className="w-full p-3 mt-1 bg-white border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="
              w-full py-3 mt-4 rounded-xl text-white font-semibold
              bg-gradient-to-r from-blue-600 to-indigo-700
              shadow-lg hover:scale-[1.03] transition
            "
          >
            Cadastrar Gerente
          </button>
        </form>

      </div>
    </div>
  );
};

export default CadastroGerente;
