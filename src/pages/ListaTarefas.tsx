import { useEffect, useState } from "react";

interface Tarefa {
  id_tarefa: number;
  nome_tarefa: string;
  epico: string;
  departamento: string;
  prioridade: string;
}

export default function TelaListaTarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [acao, setAcao] = useState<"excluir" | "concluir" | null>(null);
  const [tarefaSelecionada, setTarefaSelecionada] = useState<number | null>(null);

  // ---------------- CARREGAR TAREFAS ----------------
  async function carregarTarefas() {
    try {
      const response = await fetch("http://localhost:8080/Tarefas");
      const data = await response.json();
      setTarefas(data);
    } catch (error) {
      console.log("Erro ao carregar tarefas:", error);
    }
  }

  useEffect(() => {
    carregarTarefas();
  }, []);

  // ---------------- EXCLUIR ----------------
  async function excluirTarefa(id: number) {
    try {
      await fetch(`http://localhost:8080/Tarefas/${id}`, {
        method: "DELETE",
      });
      carregarTarefas();
    } catch (error) {
      console.log("Erro ao excluir tarefa:", error);
    }
  }

  // ---------------- CONCLUIR ----------------
  async function concluirTarefa(id: number) {
    try {
      await fetch(`http://localhost:8080/Tarefas/${id}`, {
        method: "DELETE",
      });
      carregarTarefas();
    } catch (error) {
      console.log("Erro ao concluir tarefa:", error);
    }
  }

  // ---------------- ABRIR MODAL ----------------
  function abrirModal(id: number, tipo: "excluir" | "concluir") {
    setTarefaSelecionada(id);
    setAcao(tipo);
    setModalOpen(true);
  }

  // ---------------- CONFIRMAR AÇÃO ----------------
  function confirmarAcao() {
    if (!tarefaSelecionada || !acao) return;

    if (acao === "excluir") excluirTarefa(tarefaSelecionada);
    if (acao === "concluir") concluirTarefa(tarefaSelecionada);

    setModalOpen(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-10">

      {/* TÍTULO */}
      <h1 className="text-center text-5xl font-extrabold text-blue-700 mb-10">
        Lista Completa de Tarefas
      </h1>

      {/* LINHA DECORATIVA */}
      <div className="max-w-4xl mx-auto h-[4px] bg-blue-500/40 rounded-full mb-12"></div>

      {/* LISTAGEM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {tarefas.map((t) => (
          <div
            key={t.id_tarefa}
            className="
              p-7 rounded-2xl bg-white 
              shadow-[0_4px_20px_rgba(0,0,0,0.12)] 
              border border-gray-200 
              hover:shadow-[0_6px_28px_rgba(0,0,0,0.18)]
              hover:-translate-y-1 
              transition-all duration-300
            "
          >
            {/* TÍTULO */}
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              {t.nome_tarefa}
            </h2>

            {/* INFORMAÇÕES */}
            <p className="text-gray-800 text-lg"><b>ID:</b> {t.id_tarefa}</p>
            <p className="text-gray-800 text-lg"><b>Épico:</b> {t.epico}</p>
            <p className="text-gray-800 text-lg"><b>Departamento:</b> {t.departamento}</p>
            <p className="text-gray-800 text-lg"><b>Prioridade:</b> {t.prioridade}</p>

            <div className="w-full h-[1px] bg-gray-300 my-4"></div>

            {/* BOTÕES */}
            <div className="flex gap-4">
              <button
                onClick={() => abrirModal(t.id_tarefa, "excluir")}
                className="
                  flex-1 py-2 rounded-lg bg-red-500 text-white font-semibold
                  shadow hover:bg-red-600 hover:scale-105 transition
                "
              >
                Excluir
              </button>

              <button
                onClick={() => abrirModal(t.id_tarefa, "concluir")}
                className="
                  flex-1 py-2 rounded-lg bg-green-500 text-white font-semibold
                  shadow hover:bg-green-600 hover:scale-105 transition
                "
              >
                Concluir
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* ---------------- MODAL ---------------- */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center border border-gray-200 animate-fadeIn">

            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {acao === "excluir" ? "Excluir tarefa?" : "Concluir tarefa?"}
            </h2>

            <p className="text-gray-600 mb-6">
              Tem certeza que deseja realizar esta ação?
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={confirmarAcao}
                className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 hover:scale-105 transition"
              >
                Confirmar
              </button>

              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold shadow hover:bg-gray-300 hover:scale-105 transition"
              >
                Cancelar
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
