import { useEffect, useState } from "react";

interface Tarefa {
  id_tarefa: number;
  nome_tarefa: string;
  epico: string;
  departamento: string;
  prioridade: string;
}

export default function ListaTarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [acao, setAcao] = useState<"excluir" | "concluir" | null>(null);
  const [tarefaSelecionada, setTarefaSelecionada] = useState<number | null>(null);

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

  function abrirModal(id: number, tipo: "excluir" | "concluir") {
    setTarefaSelecionada(id);
    setAcao(tipo);
    setModalOpen(true);
  }

  function confirmarAcao() {
    if (!tarefaSelecionada || !acao) return;

    if (acao === "excluir") excluirTarefa(tarefaSelecionada);
    if (acao === "concluir") concluirTarefa(tarefaSelecionada);

    setModalOpen(false);
  }

  return (
    <div className="min-h-screen p-10 relative bg-gradient-to-br from-[#cfe2ff] via-[#bcd0ff] to-[#a3c0ff]">

      {/* BACKGROUND LINES MAIS CLARAS */}
      <div className="absolute inset-0 opacity-25 bg-[url('/tech-lines.png')] bg-cover pointer-events-none"></div>

      {/* TÍTULO MAIS CLARO E VISTOSO */}
      <h1 className="relative text-center text-5xl font-extrabold text-[#3d4fff] mb-10 drop-shadow-[0_0_8px_rgba(61,79,255,0.3)]">
        Lista Completa de Tarefas
      </h1>

      {/* LINHA AZUL CLARA */}
      <div className="relative mx-auto w-72 h-[4px] bg-blue-400/60 rounded-full shadow-[0_0_12px_#60a5fa] mb-12"></div>

      {/* LISTA*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 relative">

        {tarefas.map((t) => (
          <div
            key={t.id_tarefa}
            className="
              p-7 rounded-2xl 
              bg-[#e4ecff]/90 
              border border-blue-300 
              shadow-[0_0_12px_rgba(0,0,0,0.15)]
              hover:shadow-[0_0_18px_rgba(0,0,0,0.25)]
              transition-all duration-300 hover:-translate-y-1
            "
          >
            <h2 className="text-2xl font-bold text-[#2940d3] mb-4 drop-shadow">
              {t.nome_tarefa}
            </h2>

            <p className="text-gray-800 text-lg"><b className="text-blue-700">ID:</b> {t.id_tarefa}</p>
            <p className="text-gray-800 text-lg"><b className="text-blue-700">Épico:</b> {t.epico}</p>
            <p className="text-gray-800 text-lg"><b className="text-blue-700">Departamento:</b> {t.departamento}</p>
            <p className="text-gray-800 text-lg"><b className="text-blue-700">Prioridade:</b> {t.prioridade}</p>

            <div className="w-full h-[1px] bg-blue-300/50 my-4"></div>

            <div className="flex gap-4">
              <button
                onClick={() => abrirModal(t.id_tarefa, "excluir")}
                className="
                  flex-1 py-2 rounded-lg bg-red-500 text-white 
                  font-semibold shadow hover:bg-red-600 hover:scale-105 transition
                "
              >
                Excluir
              </button>

              <button
                onClick={() => abrirModal(t.id_tarefa, "concluir")}
                className="
                  flex-1 py-2 rounded-lg bg-green-500 text-white 
                  font-semibold shadow hover:bg-green-600 hover:scale-105 transition
                "
              >
                Concluir
              </button>
            </div>
          </div>
        ))}

      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center border border-blue-200">

            <h2 className="text-xl font-bold text-blue-700 mb-4">
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
