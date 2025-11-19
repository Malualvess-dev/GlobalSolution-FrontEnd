import { useState } from "react";
import { Link } from "react-router-dom";

export default function CriarTarefa() {
  const [form, setForm] = useState({
    nome_tarefa: "",
    epico: "",
    departamento: "",
    prioridade: "Média",
    id_funcionario: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/tarefas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("Tarefa criada com sucesso!");
      } else {
        alert("Erro ao criar tarefa.");
      }
    } catch (err) {
      alert("Erro de conexão com o servidor.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6f5ff] relative">

      {/* Fundo tech */}
      <div className="
        absolute inset-0 
        bg-[url('/tech-lines.png')] 
        bg-cover
        opacity-100
        pointer-events-none
      "></div>

      {/* CARD PRINCIPAL */}
      <div className="relative bg-white p-10 rounded-3xl shadow-xl w-[650px] z-10">

        {/* Voltar */}
        <Link to="/TelaInicialFuncionario" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-5">
          <img src="/iconeCasinha.png" className="w-5" />
          <span className="font-medium">Voltar</span>
        </Link>

        {/* Ícone */}
        <div className="flex justify-center mb-4">
          <img src="/iconeSegurança.png" className="w-16" />
        </div>

        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
          Criar Nova Tarefa
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Preencha os dados abaixo para registrar uma nova tarefa.
        </p>

        <form onSubmit={handleSubmit}>

          {/* Nome */}
          <label className="font-medium text-gray-700">Nome da Tarefa</label>
          <input
            name="nome_tarefa"
            value={form.nome_tarefa}
            onChange={handleChange}
            className="w-full mt-1 mb-4 p-3 rounded-lg border border-gray-300 bg-gray-50"
            placeholder="Digite o nome da tarefa"
            required
          />

          {/* ÉPICO + DEPARTAMENTO */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-medium text-gray-700">Épico</label>
              <input
                name="epico"
                value={form.epico}
                onChange={handleChange}
                className="w-full mt-1 p-3 rounded-lg border border-gray-300 bg-gray-50"
                placeholder="Ex: Sprint..."
              />
            </div>

            <div>
              <label className="font-medium text-gray-700">Departamento</label>
              <input
                name="departamento"
                value={form.departamento}
                onChange={handleChange}
                className="w-full mt-1 p-3 rounded-lg border border-gray-300 bg-gray-50"
                placeholder="Ex: TI, RH..."
              />
            </div>
          </div>

          {/* PRIORIDADE */}
          <label className="font-medium text-gray-700 mt-4 block">Prioridade</label>
          <select
            name="prioridade"
            value={form.prioridade}
            onChange={handleChange}
            className="w-full mt-1 mb-4 p-3 rounded-lg border border-gray-300 bg-gray-50"
          >
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </select>

          {/* ID FUNCIONÁRIO */}
          <label className="font-medium text-gray-700">ID do Funcionário</label>
          <input
            name="id_funcionario"
            value={form.id_funcionario}
            onChange={handleChange}
            className="w-full mt-1 mb-4 p-3 rounded-lg border border-gray-300 bg-gray-50"
            placeholder="Digite seu ID"
            required
          />

          {/* Botão */}
          <button
            type="submit"
            className="
              w-full mt-6 py-3 text-white text-lg font-semibold rounded-lg
              bg-gradient-to-r from-blue-500 to-indigo-600
              shadow-[0_0_10px_rgba(59,130,246,0.7)]
              hover:shadow-[0_0_20px_rgba(59,130,246,1)]
              hover:scale-[1.03]
              transition-all duration-300
              animate-pulse
            "
          >
            Criar Tarefa
          </button>

        </form>
      </div>
    </div>
  );
}
