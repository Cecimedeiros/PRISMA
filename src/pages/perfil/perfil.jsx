import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import usuarioLogo from '../../../assets/icons_usuario.png';
import "./perfil.css";

const Perfil = () => {
  const navigate = useNavigate();

  return (
    <div className="pagina-perfil">
      <Header />

      <div className="container-perfil">
        <aside className="sidebar">
          <div className="foto-usuario">
            <img src={usuarioLogo} alt="Usuário" className="imagem-usuario" />
          </div>
          <button className="btn-sidebar">Meu Perfil</button>
          <button className="btn-sidebar">Registro de agendamentos</button>
          <button className="btn-sidebar">Exibição de B.O e denúncias</button>
          <button className="btn-sidebar">Localização e número das unidades</button>
          
          
          <button
            className="btn-sidebar"
            onClick={() => navigate("/unidade")}
          >
            Atualizar informações da unidade
          </button>

          <button className="btn-sidebar">Lembretes mensais</button>
          <button className="btn-sair">Sair</button>
        </aside>

        <main className="conteudo-perfil">
          <h2>Meu Perfil</h2>
          <div className="box-info">
            <div className="secao">
              <h3>Dados Pessoais</h3>
              <div className="linha"><label>Nome completo:</label><span>Beatriz Paredes do Nascimento</span></div>
              <div className="linha"><label>CPF:</label><span>████████████</span></div>
              <div className="linha"><label>Matrícula:</label><span>████████</span></div>
              <div className="linha"><label>Data de nascimento:</label><span>████████</span></div>
              <div className="linha"><label>Sexo:</label><span>██████</span></div>
              <div className="linha"><label>E-mail institucional:</label><span>█████████████</span></div>
              <div className="linha"><label>Telefone institucional ou ramal:</label><span>████████</span></div>
              <div className="linha"><label>Telefone institucional ou ramal:</label><span>████████</span></div>
            </div>

            <div className="secao">
              <h3>Dados Funcionais</h3>
              <div className="linha"><label>Cargo/Função:</label><span>█████████████</span></div>
              <div className="linha"><label>Classe/Patente:</label><span>██████████</span></div>
              <div className="linha"><label>Lotação atual:</label><span>████████████</span></div>
              <div className="linha"><label>Unidade administrativa / regional:</label><span>████████████</span></div>
              <div className="linha"><label>Data de ingresso na corporação:</label><span>████████</span></div>
              <div className="linha"><label>Situação funcional:</label><span>████████</span></div>
              <div className="linha"><label>Número da carteira funcional / identificação policial:</label><span>████████████</span></div>
              <div className="linha"><label>Permissões e perfis de acesso no sistema:</label><span>████████████</span></div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Perfil;

