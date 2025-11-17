import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const CadastroFuncionario = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    cpf: "",
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    departamento: "",
    dt_nascimento: "",
    id_gerente: "",
    id_departamento: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
     const response = await fetch("http://localhost:8080/Funcionarios", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
    });


      const result = await response.text();
      console.log("Resposta do backend:", result);

      if (!response.ok) {
    const errorText = await response.text();
    alert("Erro do servidor: " + errorText);
    return;
}


      navigate("/sucesso");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao conectar ao servidor.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#dff1ff]">

      {/* BACKGROUND TECH-LINES ESQUERDA */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-[url('/tech-lines.png')] bg-cover opacity-100"></div>

      {/* BACKGROUND TECH-LINES DIREITA */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/tech-lines.png')] bg-cover opacity-100"></div>

      {/* CARD DO FORMULÁRIO */}
      <div className="relative bg-white w-full max-w-2xl p-10 rounded-3xl shadow-2xl z-20 border border-gray-200">

        {/* LINK PARA GERENTE */}
        <p className="text-right text-sm mb-5">
          <Link to="/cadastro-gerente" className="text-blue-600 hover:underline">
            Sou gerente → Acessar cadastro
          </Link>
        </p>

        {/* LOGO */}
        <div className="flex justify-center mb-4">
          <img src="/logo-ia.png" alt="Logo IA" className="w-20 drop-shadow-lg" />
        </div>

        {/* TÍTULO */}
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-2">
          👤 É novo? Cadastre-se abaixo
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Preencha o formulário corretamente para criar sua conta.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Nome Completo */}
          <div>
            <label className="block font-medium mb-1">Nome Completo</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* CPF */}
          <div>
            <label className="block font-medium mb-1">CPF</label>
            <input
              type="text"
              name="cpf"
              value={form.cpf}
              onChange={handleChange}
              placeholder="000.000.000-00"
              className="w-full p-3 border rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Telefone */}
          <div>
            <label className="block font-medium mb-1">Telefone</label>
            <input
              type="text"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              className="w-full p-3 border rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* E-mail */}
          <div>
            <label className="block font-medium mb-1">E-mail</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Senha */}
          <div>
            <label className="block font-medium mb-1">Senha</label>
            <input
              type="password"
              name="senha"
              value={form.senha}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Departamento */}
          <div>
            <label className="block font-medium mb-1">Departamento</label>
            <input
              type="text"
              name="departamento"
              value={form.departamento}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Data de nascimento */}
          <div>
            <label className="block font-medium mb-1">Data de Nascimento</label>
            <input
              type="date"
              name="dt_nascimento"
              value={form.dt_nascimento}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* ID Gerente */}
          <div>
            <label className="block font-medium mb-1">ID do Gerente</label>
            <input
              type="number"
              name="id_gerente"
              value={form.id_gerente}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* ID Departamento */}
          <div>
            <label className="block font-medium mb-1">ID do Departamento</label>
            <input
              type="number"
              name="id_departamento"
              value={form.id_departamento}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold hover:scale-105 transition-all shadow-md"
          >
            Cadastrar Funcionário
          </button>
        </form>

      </div>
    </div>
  );
};

export default CadastroFuncionario;
