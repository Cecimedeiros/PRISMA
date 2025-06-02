import React from "react";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import usuarioLogo from '../../../assets/icons_usuario.png';
import { useNavigate } from 'react-router-dom';
import "./unidade.css";

const Unidade = () => {
  // Defina o hook useNavigate
  const navigate = useNavigate();

  return (
    <div className="pagina-unidade">
      <Header />

      <div className="container-unidade">
        <aside className="sidebar">
          <div className="foto-usuario">
            <img src={usuarioLogo} alt="Usuário" className="imagem-usuario" />
          </div>
          <button className="btn-sidebar">Meu Perfil</button>
          <button className="btn-sidebar">Registro de agendamentos</button>
          <button className="btn-sidebar">Exibição de B.O e denúncias</button>
          <button className="btn-sidebar">Localização e número das unidades</button>
          <button className="btn-sidebar selecionado">Atualizar informações da unidade</button>
          <button className="btn-sidebar">Lembretes mensais</button>
          <button className="btn-sair" onClick={() => navigate("/")}>
           Sair
          </button>
        </aside>

        <main className="conteudo-unidade">
          <h2>Perfil da Unidade</h2>
          <div className="box-info">
            <div className="secao">
              <h3>Dados Pessoais</h3>
              <div className="linha">
                <label>Nome oficial da unidade:</label><span>████████████████</span>
              </div>
              <div className="linha">
                <label>Tipo da unidade:</label><span>███████████</span>
              </div>
              <div className="linha">
                <label>Endereço completo:</label><span>████████████████████</span>
              </div>
              <div className="linha">
                <label>Telefone institucional e ramal:</label><span>██████████</span>
              </div>
              <div className="linha">
                <label>E-mail institucional:</label><span>████████████████</span>
              </div>
              <div className="linha">
                <label>Horário de funcionamento:</label><span>█████████████</span>
              </div>
              <div className="linha">
                <label>Responsável atual pela unidade:</label><span>█████████████</span>
              </div>
              <div className="linha">
                <label>Equipe vinculada:</label><span>█████████████</span>
              </div>
              <div className="linha">
                <label>Área de atuação/cobertura:</label><span>█████████████</span>
              </div>
              <div className="linha">
                <label>Equipamentos e viaturas designados:</label><span>█████████████</span>
              </div>
              <div className="linha">
                <label>Histórico de transferências e alterações administrativas:</label><span>█████████████</span>
              </div>
            </div>

            <div className="mapa">
              <img src="/assets/mapa.png" alt="Mapa de Pernambuco" />
            </div>

            <div className="botao-atualizar">
              <button>Atualizar informações da unidade</button>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Unidade;

