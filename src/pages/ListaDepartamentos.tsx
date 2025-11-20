import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Departamento {
  id_departamento: number;
  nome_departamento: string;
  id_gerente: number;
}

export default function ListarDepartamentos() {
  const navigate = useNavigate();
  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [departamentoSelecionado, setDepartamentoSelecionado] = useState<number | null>(null);

  // ------- CARREGAR LISTA -------
  async function carregarDepartamentos() {
    try {
      const response = await fetch("http://localhost:8080/Departamentos");
      const data = await response.json();
      setDepartamentos(data);
    } catch (error) {
      console.log("Erro ao carregar departamentos:", error);
    }
  }

  useEffect(() => {
    carregarDepartamentos();
  }, []);

  function confirmarExclusao(id: number) {
    setDepartamentoSelecionado(id);
    setModalOpen(true);
  }

  // ------- EXCLUIR COM MODAL DE SUCESSO -------
  async function excluirDepartamento() {
    if (departamentoSelecionado == null) return;

    try {
      await fetch(
        `http://localhost:8080/Departamentos/${departamentoSelecionado}`,
        { method: "DELETE" }
      );

      carregarDepartamentos();

      // modal de sucesso
      setModalSuccess(true);
      setTimeout(() => setModalSuccess(false), 2000);

    } catch (error) {
      console.log("Erro ao excluir:", error);
    }

    setModalOpen(false);
    setDepartamentoSelecionado(null);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-10 relative">

      {/* Fundo Tech */}
      <div className="absolute inset-0 bg-[url('/tech-lines.png')] opacity-20 pointer-events-none"></div>

      {/* Botão Voltar */}
      <button
        onClick={() => navigate("/TelaInicialGerente")}
        className="px-4 py-2 mb-6 bg-gray-300 rounded-lg hover:bg-gray-400 shadow relative z-10"
      >
        ← Voltar
      </button>

      <h1 className="text-4xl font-extrabold text-blue-800 mb-8 relative z-10">
        Lista de Departamentos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

        {departamentos.map((dep) => (
          <div
            key={dep.id_departamento}
            className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 
                       hover:shadow-2xl hover:scale-[1.02] transition duration-200"
          >
            <p className="text-lg"><b>ID Departamento:</b> {dep.id_departamento}</p>
            <p className="text-lg"><b>Nome:</b> {dep.nome_departamento}</p>
            <p className="text-lg"><b>ID Gerente:</b> {dep.id_gerente}</p>

            <div className="flex gap-4 mt-4">

              <button
                onClick={() => confirmarExclusao(dep.id_departamento)}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg 
                           hover:bg-red-600 shadow"
              >
                🗑 Excluir
              </button>
            </div>
          </div>
        ))}

      </div>

      {/* ===== MODAL CONFIRMAÇÃO ===== */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-[350px]">

            <h2 className="text-xl font-bold text-red-600 mb-4">
              Confirmar Exclusão
            </h2>

            <p className="mb-6 text-gray-700">
              Tem certeza que deseja excluir este departamento?
            </p>

            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancelar
              </button>

              <button
                onClick={excluirDepartamento}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Excluir
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ===== MODAL DE SUCESSO ===== */}
      {modalSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-[320px] text-center">
            <h2 className="text-green-600 text-xl font-bold mb-2">Sucesso!</h2>
            <p className="text-gray-700">Departamento excluído com sucesso.</p>
          </div>
        </div>
      )}

    </div>
  );
}
