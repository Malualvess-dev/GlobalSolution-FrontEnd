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
    <div className="min-h-screen p-10 bg-[#020617] bg-gradient-to-br from-[#0a0f24] to-[#041029] relative overflow-hidden">

      {/* EFEITO DE LINHAS TECH */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/tech-lines.png')] bg-cover"></div>

      {/* BRILHOS GRADIENTES */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/20 blur-[140px] rounded-full"></div>

      {/* TÍTULO */}
      <h1 className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg mb-10">
        Lista Completa de Tarefas
      </h1>

      {/* LINHA FUTURISTA */}
      <div className="mx-auto w-64 h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full shadow-[0_0_12px_#3b82f6] mb-12"></div>

      {/* LISTAGEM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 relative">
        {tarefas.map((t) => (
          <div
            key={t.id_tarefa}
            className="
              p-7 rounded-2xl 
              backdrop-blur-xl bg-white/10
              border border-white/10 
              shadow-[0_0_18px_rgba(0,0,0,0.4)]
              hover:shadow-[0_0_30px_rgba(0,162,255,0.5)]
              hover:border-blue-400/40
              transition-all duration-300 hover:-translate-y-1
            "
          >
            {/* TÍTULO */}
            <h2 className="text-2xl font-bold text-blue-300 drop-shadow mb-4">
              {t.nome_tarefa}
            </h2>

            {/* INFORMAÇÕES */}
            <p className="text-gray-200 text-lg"><b className="text-blue-300">ID:</b> {t.id_tarefa}</p>
            <p className="text-gray-200 text-lg"><b className="text-blue-300">Épico:</b> {t.epico}</p>
            <p className="text-gray-200 text-lg"><b className="text-blue-300">Departamento:</b> {t.departamento}</p>
            <p className="text-gray-200 text-lg"><b className="text-blue-300">Prioridade:</b> {t.prioridade}</p>

            <div className="w-full h-[1px] bg-white/20 my-4"></div>

            {/* BOTÕES */}
            <div className="flex gap-4">
              <button
                onClick={() => abrirModal(t.id_tarefa, "excluir")}
                className="
                  flex-1 py-2 rounded-lg 
                  bg-red-600/80 text-white font-semibold
                  shadow hover:bg-red-500 hover:scale-105
                  transition border border-red-400/40
                "
              >
                Excluir
              </button>

              <button
                onClick={() => abrirModal(t.id_tarefa, "concluir")}
                className="
                  flex-1 py-2 rounded-lg 
                  bg-green-600/80 text-white font-semibold
                  shadow hover:bg-green-500 hover:scale-105
                  transition border border-green-400/40
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
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-[#0b1120] p-8 rounded-2xl border border-blue-400/40 shadow-[0_0_30px_rgba(0,162,255,0.4)] max-w-sm w-full text-center">

            <h2 className="text-xl font-bold text-blue-300 mb-4">
              {acao === "excluir" ? "Excluir tarefa?" : "Concluir tarefa?"}
            </h2>

            <p className="text-gray-300 mb-6">
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
                className="px-5 py-2 rounded-lg bg-gray-300 text-gray-900 font-semibold shadow hover:bg-gray-400 hover:scale-105 transition"
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
