import { useState } from "react";

export default function FAQ() {
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
        "Funcionários e Gerentes entram via CPF e senha. Cada tipo de usuário é direcionado para sua própria área.",
    },
    {
      pergunta: "Meus dados estão seguros?",
      resposta:
        "Sim! Utilizamos sistema de autenticação, criptografia de senha e protocolos HTTPS para garantir segurança.",
    },
    {
      pergunta: "É possível recuperar senha?",
      resposta:
        "Sim. Basta clicar em 'Esqueci minha senha' na tela de login. Você será redirecionado para redefinição.",
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-10 flex justify-center items-start mt-10">

      <div className="max-w-4xl w-full bg-white/60 shadow-xl backdrop-blur-xl rounded-3xl p-10 border border-gray-300">

        {/* Título */}
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
          Perguntas Frequentes
        </h1>
        <p className="text-gray-700 mb-10">
          Aqui você encontra respostas para as dúvidas mais comuns sobre o
          sistema.
        </p>

        {/* FAQ LIST */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md border border-gray-200 rounded-xl p-4 transition"
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

              {/* RESPOSTA */}
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
  );
}
