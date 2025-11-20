import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function GerenciadorHumor() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    horas_sono: "",
    ambiente_trabalho: "",
    qtd_agua: "",
    qtd_estresse: "",
    pesquisa_clima: "",
    id_funcionario: "",
  });

  const [msg, setMsg] = useState("");

  // ---------------- HANDLE CHANGE ----------------
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/Gerenciador_Humor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        navigate("/sucesso-humor");
      } else {
        const erro = await response.text();
        setMsg("❌ " + erro);
      }
    } catch (error) {
      setMsg("Erro ao conectar ao servidor.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6f5ff] relative">

      {/* Fundo Tech */}
      <div className="absolute inset-0 bg-[url('/tech-lines.png')] bg-cover opacity-100 pointer-events-none"></div>

      {/* CARD */}
      <div className="relative bg-white p-10 rounded-3xl shadow-xl w-[600px] z-10">

        {/* VOLTAR */}
        <div className="absolute left-6 top-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
          >
            <img src="/iconeCasinha.png" className="w-6 h-6" />
            Voltar
          </button>
        </div>

        {/* TÍTULO */}
        <h1 className="text-3xl font-extrabold text-center text-blue-700 mt-6">
          Gerenciador de Humor
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Preencha as informações para monitorar seu bem-estar no trabalho.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="font-medium">Horas de sono:</label>
            <input
              type="number"
              name="horas_sono"
              value={form.horas_sono}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg shadow-sm"
              placeholder="Ex: 7.5"
              step="0.1"
            />
          </div>

          <div>
            <label className="font-medium">Ambiente de trabalho:</label>
            <input
              type="text"
              name="ambiente_trabalho"
              value={form.ambiente_trabalho}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg shadow-sm"
              placeholder="Ex: Calmo, agitado..."
            />
          </div>

          <div>
            <label className="font-medium">Quantidade de água (copos):</label>
            <input
              type="number"
              name="qtd_agua"
              value={form.qtd_agua}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg shadow-sm"
            />
          </div>

          <div>
            <label className="font-medium">Nível de estresse (0 a 10):</label>
            <input
              type="number"
              name="qtd_estresse"
              value={form.qtd_estresse}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg shadow-sm"
              min="0"
              max="10"
            />
          </div>

          <div>
            <label className="font-medium">Clima organizacional:</label>
            <input
              type="text"
              name="pesquisa_clima"
              value={form.pesquisa_clima}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg shadow-sm"
              placeholder="Ex: Satisfeito, neutro..."
            />
          </div>

          <div>
            <label className="font-medium">ID do Funcionário:</label>
            <input
              type="number"
              name="id_funcionario"
              value={form.id_funcionario}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg shadow-sm"
              placeholder="Digite seu ID"
            />
          </div>

          <button
            type="submit"
            className="
              w-full bg-gradient-to-r from-blue-500 to-indigo-600
              text-white font-bold py-3 rounded-lg shadow-md
              hover:scale-[1.02] transition-all
            "
          >
            Enviar Informações
          </button>
        </form>

        {msg && (
          <p className="text-center text-red-600 font-medium mt-4">{msg}</p>
        )}
      </div>
    </div>
  );
}
