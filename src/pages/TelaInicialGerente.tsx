import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Funcionario {
  id_funcionario: number;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  departamento: string;
  dt_nascimento: string;
  id_gerente: number;
  id_departamento: number;
}

export default function TelaGerente() {
  const navigate = useNavigate();

  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [openMenu, setOpenMenu] = useState(false);

  // Modal criar departamento
  const [modalDeptOpen, setModalDeptOpen] = useState(false);
  const [novoDept, setNovoDept] = useState("");
  const [idGerenteInput, setIdGerenteInput] = useState("");

  // Modal excluir funcionário
  const [modalExcluir, setModalExcluir] = useState(false);
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState<number | null>(null);

  // -------- CARREGAR FUNCIONÁRIOS --------
  async function carregarFuncionarios() {
    try {
      const response = await fetch("http://localhost:8080/Funcionarios");
      const data = await response.json();
      setFuncionarios(data);
    } catch (error) {
      console.log("Erro ao carregar funcionários:", error);
    }
  }

  useEffect(() => {
    carregarFuncionarios();
  }, []);

  // -------- ABRIR MODAL DE CONFIRMAR EXCLUSÃO --------
  function abrirModalExcluir(id: number) {
    setFuncionarioSelecionado(id);
    setModalExcluir(true);
  }

  // -------- CONFIRMAR EXCLUSÃO --------
  async function confirmarExclusao() {
    if (funcionarioSelecionado == null) return;

    try {
      const resp = await fetch(`http://localhost:8080/Funcionarios/${funcionarioSelecionado}`, {
        method: "DELETE",
      });

      if (resp.ok) {
        setModalExcluir(false);
        carregarFuncionarios();
      } else {
        console.log("Erro ao excluir funcionário:", await resp.text());
      }
    } catch (error) {
      console.log("Erro ao excluir funcionário:", error);
    }
  }

  // -------- CRIAR DEPARTAMENTO --------
  async function criarDepartamento(e: React.FormEvent) {
    e.preventDefault();

    if (!novoDept.trim() || !idGerenteInput.trim()) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const resp = await fetch("http://localhost:8080/Departamentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome_departamento: novoDept,
          id_gerente: Number(idGerenteInput)
        }),
      });

      if (resp.ok) {
        navigate("/sucesso-departamento");
        setModalDeptOpen(false);
      } else {
        alert("Erro ao criar departamento");
      }

    } catch (error) {
      console.log("Erro:", error);
    }
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 to-blue-200 text-gray-900 relative">

      {/* Fundo tech */}
      <div className="absolute inset-0 bg-[url('/tech-lines.png')] bg-cover opacity-30 pointer-events-none"></div>

      {/* Botão menu */}
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="absolute top-6 left-6 z-30 p-3 rounded-xl bg-white shadow border hover:scale-105 transition">
        <img src="/menu.jpeg" alt="menu" className="w-6" />
      </button>

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72
          bg-white/80 backdrop-blur-xl border-r border-gray-300
          p-10 flex flex-col gap-8 shadow-xl z-20
          transform transition-transform duration-300
          ${openMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <h1 className="text-3xl font-extrabold text-center text-blue-700">Menu</h1>

        <nav className="flex flex-col gap-5 text-gray-700 font-semibold text-lg">
          <button onClick={() => navigate("/humor")} className="hover:text-blue-600">Gerenciador Humor</button>
          <button onClick={() => navigate("/faq")} className="hover:text-blue-600">FAQ</button>
          <button onClick={() => navigate("/integrantes")} className="hover:text-blue-600">Integrantes</button>
          <button onClick={() => navigate("/sobre")} className="hover:text-blue-600">Sobre</button>
          <button onClick={() => navigate("/contato")} className="hover:text-blue-600">Contato</button>
          <button onClick={() => navigate("/lista-departamento")} className="hover:text-blue-600">Departamento</button>
          <button onClick={() => navigate("/login")} className="hover:text-red-600">Logout</button>
          <button onClick={() => navigate("/lista-tarefas")} className="hover:text-red-600">Lista de tarefas</button>
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 p-14 relative z-10">

        <h2 className="text-center text-4xl font-extrabold text-blue-800 mb-10">
          Painel do Gerente
        </h2>

        {/* Botões principais */}
        <div className="flex justify-center gap-6 mb-10">
          <button
            onClick={() => navigate("/cadastro-funcionario")}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow hover:scale-105">
            ➕ Cadastrar Funcionário
          </button>

          <button
            onClick={() => setModalDeptOpen(true)}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow hover:scale-105">
            🏢 Criar Departamento
          </button>

          <button
            onClick={carregarFuncionarios}
            className="px-6 py-3 rounded-lg bg-white text-gray-700 border shadow hover:scale-105">
            🔄 Atualizar lista
          </button>
        </div>

        {/* LISTAGEM */}
        <div className="grid grid-cols-2 gap-10 px-10">
          {funcionarios.map(f => (
            <div
              key={f.id_funcionario}
              className="p-6 bg-white shadow-xl border border-gray-300 rounded-2xl">

              <h3 className="text-2xl font-bold text-blue-700 mb-3">{f.nome}</h3>

              <p><b>CPF:</b> {f.cpf}</p>
              <p><b>Email:</b> {f.email}</p>
              <p><b>Telefone:</b> {f.telefone}</p>
              <p><b>Departamento:</b> {f.departamento}</p>
              <p><b>Nascimento:</b> {f.dt_nascimento}</p>
              <p><b>ID Gerente:</b> {f.id_gerente}</p>
              <p><b>ID Departamento:</b> {f.id_departamento}</p>

              <div className="flex gap-3 mt-5">

                <button
                  onClick={() => navigate(`/editarFuncionario/${f.id_funcionario}`)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 shadow">
                  ✏ Editar
                </button>

                <button
                  onClick={() => abrirModalExcluir(f.id_funcionario)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow">
                  🗑 Excluir
                </button>

              </div>
            </div>
          ))}
        </div>

      </main>

      {/* MODAL EXCLUSÃO */}
      {modalExcluir && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-[380px]">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Confirmar Exclusão</h2>
            <p className="mb-6">Tem certeza que deseja excluir este funcionário?</p>

            <div className="flex gap-4 justify-between">

              <button
                onClick={() => setModalExcluir(false)}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400">
                Cancelar
              </button>

              <button
                onClick={confirmarExclusao}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Excluir
              </button>

            </div>
          </div>
        </div>
      )}

      {/* MODAL CRIAR DEPARTAMENTO */}
      {modalDeptOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-40">

          <div className="bg-white p-8 rounded-3xl shadow-xl w-[380px]">
            <h2 className="text-xl font-bold mb-4 text-blue-700">
              Criar Departamento
            </h2>

            <form onSubmit={criarDepartamento} className="space-y-4">

              <input
                type="text"
                value={novoDept}
                onChange={(e) => setNovoDept(e.target.value)}
                placeholder="Nome do departamento"
                className="w-full p-2 border rounded-lg"
              />

              <input
                type="number"
                value={idGerenteInput}
                onChange={(e) => setIdGerenteInput(e.target.value)}
                placeholder="ID do gerente"
                className="w-full p-2 border rounded-lg"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Criar
              </button>

              <button
                onClick={() => setModalDeptOpen(false)}
                type="button"
                className="w-full bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400">
                Cancelar
              </button>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
