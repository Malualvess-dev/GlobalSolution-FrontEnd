import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Tarefa {
  id_tarefa: number;
  nome_tarefa: string;
  epico: string;
  departamento: string;
  prioridade: string;
}

export default function TelaInicialFuncionario() {
  const navigate = useNavigate();
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [acao, setAcao] = useState<"excluir" | "concluir" | null>(null);
  const [tarefaSelecionada, setTarefaSelecionada] = useState<number | null>(null);

  // Estado para abrir/fechar menu
  const [open, setOpen] = useState(false);

  // ---------------- GET -------------------
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

  // ---------------- DELETE -------------------
  async function excluirTarefa(id: number) {
    try {
      await fetch(`http://localhost:8080/Tarefas/${id}`, {
        method: "DELETE",
      });
      carregarTarefas();
    } catch (error) {
      console.log("Erro ao excluir:", error);
    }
  }

  // ---------------- CONCLUIR -------------------
  async function concluirTarefa(id: number) {
    try {
      await fetch(`http://localhost:8080/Tarefas/${id}`, {
        method: "DELETE",
      });
      carregarTarefas();
    } catch (error) {
      console.log("Erro ao concluir:", error);
    }
  }

  // ---------------- ABRIR MODAL -------------------
  function abrirModal(id: number, tipo: "excluir" | "concluir") {
    setTarefaSelecionada(id);
    setAcao(tipo);
    setModalOpen(true);
  }

  // ---------------- CONFIRMAR AÇÃO -------------------
  function confirmarAcao() {
    if (!tarefaSelecionada || !acao) return;

    if (acao === "excluir") excluirTarefa(tarefaSelecionada);
    if (acao === "concluir") concluirTarefa(tarefaSelecionada);

    setModalOpen(false);
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 to-blue-200 text-gray-900 relative">

      {/* Fundo tech */}
      <div className="absolute inset-0 bg-[url('/tech-lines.png')] bg-cover opacity-30 pointer-events-none"></div>

      {/* ---------------- BOTÃO DO MENU ---------------- */}
      <button
        onClick={() => setOpen(!open)}
        className="absolute top-6 left-6 z-30 p-3 rounded-xl bg-white/80 shadow border border-gray-300 hover:scale-105 transition"
      >
        <img src="/menu.jpeg" alt="menu" className="w-6" />
      </button>

      {/* ---------------- SIDEBAR EM CASCATA ---------------- */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72
          bg-white/80 backdrop-blur-xl border-r border-gray-300
          p-10 flex flex-col gap-8 shadow-xl z-20
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <h1 className="text-3xl font-extrabold text-center text-blue-700">
          Menu
        </h1>

        <nav className="flex flex-col gap-5 text-gray-700 font-semibold text-lg">
          <button className="text-gray-700 hover:text-blue-500 font-medium transition relative
                before:absolute before:-bottom-1 before:left-0 before:h-[2px]
                before:w-0 before:bg-blue-500 before:transition-all before:duration-300
                hover:before:w-full">Gerenciador de Humor</button>
          <button className="text-gray-700 hover:text-blue-500 font-medium transition relative
                before:absolute before:-bottom-1 before:left-0 before:h-[2px]
                before:w-0 before:bg-blue-500 before:transition-all before:duration-300
                hover:before:w-full">FAQ</button>
          <button className="text-gray-700 hover:text-blue-500 font-medium transition relative
                before:absolute before:-bottom-1 before:left-0 before:h-[2px]
                before:w-0 before:bg-blue-500 before:transition-all before:duration-300
                hover:before:w-full">Integrantes</button>
          <button className="text-gray-700 hover:text-blue-500 font-medium transition relative
                before:absolute before:-bottom-1 before:left-0 before:h-[2px]
                before:w-0 before:bg-blue-500 before:transition-all before:duration-300
                hover:before:w-full">Sobre</button>
          <button className="text-gray-700 hover:text-blue-500 font-medium transition relative
                before:absolute before:-bottom-1 before:left-0 before:h-[2px]
                before:w-0 before:bg-blue-500 before:transition-all before:duration-300
                hover:before:w-full">Contato</button>
        </nav>
      </aside>

      {/* ---------------- CONTEÚDO ---------------- */}
      <main className="flex-1 p-14 relative z-10">

        {/* BOTÕES (CRIAR / ATUALIZAR) */}
        <div className="flex justify-center gap-4 mb-10">

          <button
            onClick={() => navigate("/criar-tarefa")}
            className="
              px-6 py-2 rounded-lg font-semibold text-white
              bg-gradient-to-r from-blue-500 to-indigo-600
              shadow-md hover:shadow-lg hover:scale-105 transition
            "
          >
            Criar tarefa
          </button>

          <button
            onClick={carregarTarefas}
            className="
              px-6 py-2 rounded-lg font-semibold
              bg-white text-gray-800 border border-gray-300 shadow
              hover:scale-105 transition
            "
          >
            Listar tarefas
          </button>
        </div>

        {/* TÍTULO */}
        <h2 className="text-center text-4xl font-extrabold text-blue-800 mb-4">
          Listagem de Tarefas
        </h2>

        <div className="max-w-4xl mx-auto h-[2px] bg-blue-400/40 mb-10"></div>

        {/* LISTA */}
        {tarefas.length === 0 ? (
          <p className="text-center text-blue-800 opacity-70 text-lg">
            Nenhuma tarefa criada ainda.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-10 px-10">

            {tarefas.map((tarefa) => (
              <div
                key={tarefa.id_tarefa}
                className="p-6 rounded-2xl bg-white shadow-xl border border-gray-200"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-blue-700">
                    {tarefa.nome_tarefa}
                  </h3>

                  <div className="flex gap-2">
                    <button
                      onClick={() => abrirModal(tarefa.id_tarefa, "excluir")}
                      className="
                        px-4 py-1 rounded-lg font-semibold text-sm
                        bg-red-500 text-white shadow
                        hover:bg-red-600 hover:scale-105 transition
                      "
                    >
                      Excluir
                    </button>

                    <button
                      onClick={() => abrirModal(tarefa.id_tarefa, "concluir")}
                      className="
                        px-4 py-1 rounded-lg font-semibold text-sm
                        bg-green-500 text-white shadow
                        hover:bg-green-600 hover:scale-105 transition
                      "
                    >
                      Concluir
                    </button>
                  </div>
                </div>

                <p className="text-gray-700"><b>📌 Épico:</b> {tarefa.epico}</p>
                <p className="text-gray-700"><b>🏢 Departamento:</b> {tarefa.departamento}</p>
                <p className="text-gray-700"><b>⚡ Prioridade:</b> {tarefa.prioridade}</p>
              </div>
            ))}

          </div>
        )}
      </main>

      {/* ---------------- MODAL BONITO ---------------- */}
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
