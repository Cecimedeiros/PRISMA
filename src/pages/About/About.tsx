import React from 'react';

const PrismaProject: React.FC = () => {
  return (
    <section className="p-6 max-w-4xl mx-auto text-[#333] font-sans">
      <h1 className="text-3xl font-bold mb-4">🔎 Projeto P.R.I.S.M.A</h1>
      <p className="mb-6">
        <strong>P.R.I.S.M.A</strong> (Plataforma Responsiva de Inteligência para Segurança, Monitoramento e Atendimento) é uma aplicação web desenvolvida para auxiliar os cidadãos do estado de Pernambuco no acesso a informações verídicas e atualizadas sobre serviços da Polícia Civil. Com um assistente virtual integrado, a plataforma presta atendimento humanizado e orienta os usuários de forma prática.
      </p>

      <h2 className="text-2xl font-semibold mb-2">⚙️ Tecnologias Utilizadas</h2>
      <ul className="list-disc pl-5 mb-6">
        <li>TypeScript</li>
        <li>React com Vite</li>
        <li>HTML5 e CSS3</li>
        <li>JavaScript (suporte geral)</li>
        <li>Trello (gestão de tarefas)</li>
        <li>Figma (prototipação)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">🔹 Funcionalidades</h2>
      <ul className="list-disc pl-5 mb-6">
        <li>Chatbot Prisma – assistente virtual inteligente</li>
        <li>Mapa interativo com filtros por tipo de unidade e serviço</li>
        <li>Secury News – notícias sobre segurança em Pernambuco</li>
        <li>Registro de boletins de ocorrência e denúncias online</li>
        <li>Agendamento de atendimentos presenciais</li>
        <li>Formulário de feedback sobre a plataforma</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">📹 Demonstrações</h2>
      <ul className="list-disc pl-5 mb-6">
        <li>Tela Inicial da Plataforma</li>
        <li>Tela Principal do Chatbot</li>
        <li>Tela do Quadro Kanban</li>
        <li>Diagrama de atividades do sistema</li>
        <li>Issues/Bugs tracker</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">🚀 Status do Projeto</h2>
      <ul className="list-disc pl-5 mb-6">
        <li>✅ Problematização e definição da solução</li>
        <li>✅ Personas e mapas de empatia</li>
        <li>✅ Jornada do usuário e histórias</li>
        <li>✅ Prototipação com Figma</li>
        <li>⭕ Desenvolvimento do código</li>
        <li>⭕ Testes funcionais</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">🤝 Programação em Pares</h2>
      <p className="mb-6">
        Durante a conexão das telas e botões, observamos problemas de navegação. Adotamos a técnica de <strong>programação em pares</strong> para revisar e corrigir os erros de forma colaborativa e eficiente.
      </p>

      <h2 className="text-2xl font-semibold mb-2">👩‍💻 Equipe</h2>
      <ul className="list-disc pl-5 mb-6">
        <li>Cecília Medeiros</li>
        <li>Beatriz Paredes</li>
        <li>Catarina Loureiro</li>
        <li>Isabela Batista</li>
        <li>Melissa Filgueiras</li>
      </ul>
    </section>
  );
};

export default PrismaProject;
