import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function FAQ() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      pergunta: "Como funcionam as tarefas do sistema?",
      resposta:
        "As tarefas podem ser criadas pelo funcionário ou gerente. Cada tarefa possui nome, épico, departamento e prioridade.",
    },
    {
      pergunta: "Posso editar uma tarefa criada?",
      resposta:
        "No momento, apenas exclusão e conclusão estão disponíveis. A edição de tarefas será adicionada em uma próxima atualização.",
    },
    {
      pergunta: "O que acontece ao concluir uma tarefa?",
      resposta:
        "A tarefa é movida para a lista de tarefas concluídas, e deixa de aparecer na listagem principal.",
    },
    {
      pergunta: "Como funciona o login de Funcionário e Gerente?",
      resposta:
        "Funcionários entram via CPF e senha. Gerentes utilizam email e senha. Cada tipo de usuário é direcionado para sua própria área.",
    },
    {
      pergunta: "Meus dados estão seguros?",
      resposta:
        "Sim! Utilizamos sistema de autenticação, criptografia de senha e protocolos HTTPS para garantir segurança.",
    },
    {
      pergunta: "É possível recuperar senha?",
      resposta:
        "Sim. Basta clicar em 'Esqueci minha senha' na tela de login para redefinir sua senha.",
    },
    {
      pergunta: "Como posso entrar em contato com a equipe?",
      resposta:
        "No menu principal existe a área 'Contato', onde você encontra e-mail, telefone e suporte técnico.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 relative flex flex-col">

      {/* 🔹 Fundo Tech */}
      <div className="absolute inset-0 bg-[url('/tech-lines.png')] bg-cover opacity-100 pointer-events-none"></div>

      {/* 🔹 Conteúdo Principal */}
      <div className="flex justify-center items-start p-10 relative z-10 flex-1">
        <div className="max-w-4xl w-full bg-white/60 shadow-xl backdrop-blur-xl rounded-3xl p-10 border border-gray-300 relative">

          {/* 🔹 Botão Voltar */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-700 font-semibold mb-6 hover:text-blue-900 transition"
          >
            <img src="/voltar.jpeg" alt="voltar" className="w-5" />
            Voltar
          </button>

          {/* 🔹 Título */}
          <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
            Perguntas Frequentes
          </h1>

          <p className="text-gray-700 mb-10">
            Aqui você encontra respostas para as dúvidas mais comuns sobre o sistema.
          </p>

          {/* 🔹 Lista FAQ */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-md border border-gray-200 rounded-xl p-4 transition relative z-10"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left flex justify-between items-center"
                >
                  <span className="text-lg font-semibold text-blue-700">
                    {faq.pergunta}
                  </span>

                  <span
                    className={`
                      font-bold text-xl transition-transform
                      ${openIndex === index ? "rotate-180 text-blue-700" : "text-gray-500"}
                    `}
                  >
                    ▼
                  </span>
                </button>

                {openIndex === index && (
                  <p className="mt-3 text-gray-700 border-t pt-3">
                    {faq.resposta}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 🔹 FOOTER */}
      <div className="relative z-20">
        <Footer />
      </div>

    </div>
  );
}
