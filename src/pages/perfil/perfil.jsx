import React from "react";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import "./perfil.css";

const Perfil = () => {
  return (
    <div className="pagina-perfil">
      <Header />

      <div className="container-perfil">
        <aside className="sidebar">
          <div className="foto-usuario"></div>
          <button className="btn-sidebar selecionado">Meu Perfil</button>
          <button className="btn-sidebar">Registro de agendamentos</button>
          <button className="btn-sidebar">Exibição de B.O e denúncias</button>
          <button className="btn-sidebar">Localização e número das unidades</button>
          <button className="btn-sidebar">Atualizar informações das unidades</button>
          <button className="btn-sidebar">Lembretes mensais</button>
          <button className="btn-sair">Sair</button>
        </aside>

        <main className="conteudo-perfil">
          <h2>Meu Perfil</h2>
          <div className="box-info">
            <div className="secao">
              <h3>Dados Pessoais</h3>
              <div className="linha">
                <label>Nome completo:</label><span>Beatriz Paredes do Nascimento</span>
              </div>
              <div className="linha">
                <label>CPF:</label><span>███████████</span>
              </div>
              <div className="linha">
                <label>Matrícula:</label><span>████████</span>
              </div>
              <div className="linha">
                <label>Data de nascimento:</label><span>██/██/████</span>
              </div>
              <div className="linha">
                <label>Sexo:</label><span>██████</span>
              </div>
              <div className="linha">
                <label>E-mail institucional:</label><span>██████████████</span>
              </div>
              <div className="linha">
                <label>Telefone institucional ou ramal:</label><span>██████████</span>
              </div>
              <div className="linha">
                <label>Telefone institucional ou ramal:</label><span>██████████</span>
              </div>
            </div>

            <div className="secao">
              <h3>Dados Funcionais</h3>
              <div className="linha">
                <label>Cargo/Função:</label><span>██████████</span>
              </div>
              <div className="linha">
                <label>Classe/Patente:</label><span>██████████</span>
              </div>
              <div className="linha">
                <label>Lotação atual:</label><span>████████████</span>
              </div>
              <div className="linha">
                <label>Unidade administrativa / regional:</label><span>██████████████</span>
              </div>
              <div className="linha">
                <label>Data de ingresso na corporação:</label><span>██/██/████</span>
              </div>
              <div className="linha">
                <label>Situação funcional:</label><span>██████████</span>
              </div>
              <div className="linha">
                <label>Número da carteira funcional / identificação policial:</label><span>████████</span>
              </div>
              <div className="linha">
                <label>Permissões e perfis de acesso no sistema:</label><span>████████████</span>
              </div>
            </div>

            <div className="secao">
              <h3>Dados Operacionais</h3>
              <div className="linha">
                <label>Missões/Ocorrências atribuídas:</label><span>████████████</span>
              </div>
              <div className="linha">
                <label>Histórico de ações no sistema:</label><span>████████████</span>
              </div>
              <div className="linha">
                <label>Assinatura digital para documentos:</label><span>████████████</span>
              </div>
              <div className="linha">
                <label>Escalas de plantão:</label><span>████████████</span>
              </div>
              <div className="linha">
                <label>Armas e equipamentos sob responsabilidade:</label><span>████████████</span>
              </div>
              <div className="linha">
                <label>Veículos sob uso ou supervisão:</label><span>████████████</span>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Perfil;
