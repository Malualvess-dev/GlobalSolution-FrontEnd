import { Link } from "react-router-dom";

export default function TelaInicialFuncionario() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0A0F3D] to-[#310A43] text-white">

      {/* ---------------- SIDEBAR ---------------- */}
      <aside className="w-64 bg-white/10 backdrop-blur-md p-8 flex flex-col gap-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Menu</h1>

        <nav className="flex flex-col gap-4 text-lg">
          <button className="hover:text-purple-300 transition">Gerenciador de Humor</button>
          <button className="hover:text-purple-300 transition">FAQ</button>
          <button className="hover:text-purple-300 transition">Integrantes</button>
          <button className="hover:text-purple-300 transition">Sobre</button>
          <button className="hover:text-purple-300 transition">Contato</button>
        </nav>
      </aside>

      {/* ------------------ MAIN CONTENT ------------------ */}
      <main className="flex-1 p-12">

        {/* BOTÃO SUPERIOR */}
        <div className="w-full flex justify-center mb-10">
          <Link to="/criar-tarefa">
            <button
              className="
                px-10 py-3 rounded-full text-lg font-semibold
                bg-white text-gray-700 shadow-lg
                hover:scale-[1.05] hover:shadow-xl transition-all
              "
            >
              Criar tarefa
            </button>
          </Link>
        </div>

        {/* TÍTULO */}
        <h2 className="text-4xl font-extrabold text-center mb-6">
          Listagem de Tarefas
        </h2>

        <div className="w-full h-[2px] bg-white/20 mb-10"></div>

        {/* MENSAGEM QUANDO NÃO TIVER TAREFAS */}
        <p className="text-center text-gray-300 text-lg mb-10">
          Nenhuma tarefa criada ainda.
        </p>

        {/* ÁREA PARA OS CARDS DE TAREFA */}
        <div className="grid grid-cols-2 gap-8 px-20">

          {/* FUTUROS CARDS AQUI */}
          <div className="bg-white/10 rounded-2xl h-40 shadow-lg border border-white/10"></div>
          <div className="bg-white/10 rounded-2xl h-40 shadow-lg border border-white/10"></div>
          <div className="bg-white/10 rounded-2xl h-40 shadow-lg border border-white/10"></div>
          <div className="bg-white/10 rounded-2xl h-40 shadow-lg border border-white/10"></div>

        </div>

      </main>
    </div>
  );
}
