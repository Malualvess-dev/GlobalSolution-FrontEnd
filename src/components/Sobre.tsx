
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Sobre() {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#e6f3ff] relative">

      {/* Fundo tech */}
      <div
        className="absolute inset-0 bg-[url('/tech-lines.png')] bg-cover opacity-100 pointer-events-none"
      ></div>

      {/* Conteúdo */}
      <div className="mt-28 w-full max-w-4xl bg-white rounded-3xl shadow-xl p-10 relative z-10">

        {/* Botão Voltar */}
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition"
        >
          <img src="/voltar.jpeg" className="w-5" />
          Voltar
        </button>
      </div>

        {/* Título */}
        <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-4">
          Sobre o Sistema
        </h1>

        <p className="text-center text-gray-600 mb-10 text-lg">
          Nosso sistema foi desenvolvido para tornar o gerenciamento de tarefas mais simples, eficiente e inteligente
          — integrando tecnologia moderna, design intuitivo e segurança avançada.
        </p>

        {/* Sessões */}
        <div className="space-y-8">

          {/* OBJETIVO */}
          <div className="bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-100">
            <h2 className="text-xl font-bold text-blue-700 mb-3">🎯 Qual é o objetivo do sistema?</h2>
            <p className="text-gray-700 leading-relaxed">
              O sistema tem como objetivo facilitar a comunicação e o fluxo de trabalho entre Funcionários e Gerentes,
              permitindo a criação, acompanhamento e conclusão de tarefas de maneira rápida e organizada.
            </p>
          </div>

          {/* FUNCIONAMENTO */}
          <div className="bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-100">
            <h2 className="text-xl font-bold text-blue-700 mb-3">⚙️ Como o sistema funciona?</h2>
            <p className="text-gray-700 leading-relaxed">
              Os usuários podem criar tarefas, visualizar detalhes, marcar como concluídas e excluir quando necessário.
              O sistema se conecta com um banco de dados em tempo real, garantindo atualizações automáticas e alta performance.
            </p>
          </div>

          {/* BENEFÍCIOS */}
          <div className="bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-100">
            <h2 className="text-xl font-bold text-blue-700 mb-3">✨ Principais benefícios</h2>
            <ul className="text-gray-700 leading-relaxed list-disc ml-6 space-y-2">
              <li>Organização clara das tarefas da equipe</li>
              <li>Redução de erros e melhora da produtividade</li>
              <li>Sistema intuitivo, fácil de usar e responsivo</li>
              <li>Design moderno com foco em experiência do usuário</li>
              <li>Integração com banco de dados para atualizações em tempo real</li>
              <li>Fluxo simplificado para Funcionário e Gerente</li>
            </ul>
          </div>

          {/* SEGURANÇA */}
          <div className="bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-100">
            <h2 className="text-xl font-bold text-blue-700 mb-3">🔒 Segurança e integridade</h2>
            <p className="text-gray-700 leading-relaxed">
              O sistema utiliza boas práticas de segurança como criptografia de senhas, rotas dedicadas
              para diferentes perfis e proteção contra alterações indevidas de dados.  
            </p>
          </div>

          {/* TECNOLOGIAS */}
          <div className="bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-100">
            <h2 className="text-xl font-bold text-blue-700 mb-3">🧩 Tecnologias utilizadas</h2>
            <ul className="text-gray-700 leading-relaxed list-disc ml-6 space-y-2">
              <li><b>React + TypeScript</b> (interface moderna e responsiva)</li>
              <li><b>TailwindCSS</b> (estilização rápida e consistente)</li>
              <li><b>Java + Spring Boot</b> (API e regras de negócio)</li>
              <li><b>Banco de dados relacional</b> (armazenamento seguro de dados)</li>
              <li><b>Fetch API</b> (comunicação entre frontend e backend)</li>
            </ul>
          </div>

          {/* EQUIPE */}
          <div className="bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-100">
            <h2 className="text-xl font-bold text-blue-700 mb-3">👥 Quem desenvolveu o projeto?</h2>
            <p className="text-gray-700 leading-relaxed">
              Este projeto foi desenvolvido pela equipe do Global Solution – FIAP, unindo dedicação,
              criatividade e as mais recentes tecnologias de desenvolvimento de software. As informações da equipe estão na página de integrantes
            </p>
          </div>

          {/* MISSÃO */}
          <div className="bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-100">
            <h2 className="text-xl font-bold text-blue-700 mb-3">🚀 Nossa missão</h2>
            <p className="text-gray-700 leading-relaxed">
              Criar soluções inteligentes que simplifiquem processos, incentivem produtividade e ofereçam uma experiência moderna e agradável ao usuário.
            </p>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="w-full mt-16 relative z-20">
        <Footer />
      </div>

    </div>
  );
}
