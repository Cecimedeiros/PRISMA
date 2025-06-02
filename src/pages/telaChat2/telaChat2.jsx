import './telaChat2.css';
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import prismaLogo from '../../../assets/prima.png';
import usuarioLogo from '../../../assets/icons_usuario.png';
import { useNavigate } from 'react-router-dom';


function ChatPage() {
  const navigate = useNavigate(); 

  const handleSend = () => {
    navigate('/orientacoes');
  };

  return (
    <main className="chat-main">
      <Header />

      <section className="chatbox">
        <div className="chat-container">
          <div className="chat-bubble">
            <div className="avatar">
              <img src={prismaLogo} alt="Atendente virtual" />
            </div>
            <div className="chat-message">
              <p><strong>🔎 O que você deseja hoje?</strong></p>
              <ul>
                <li>1. Registrar Boletim de Ocorrência (BO) Online</li>
                <li>2. Consultar BO ou andamento de investigação</li>
                <li>3. Localizar Delegacia mais próxima</li>
                <li>4. Falar com um atendente</li>
                <li>5. Dúvidas frequentes</li>
                <li>6. Ver meus atendimentos anteriores</li>
              </ul>
            </div>
          </div>
          
          <div className="chat-response user">
            <div className="user-avatar">
                <img src={usuarioLogo} alt="Usuário" />
            </div>
            <div className="bubble-response">
                1. Registrar Boletim de Ocorrência (BO) Online
            </div>
        </div>


          <div className="chat-input-area">
            <input type="text" placeholder="Digite aqui sua mensagem..." />
            <button className="send-button" onClick={handleSend}>&#9658;</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function TelaChat2() {
  return <ChatPage />;
}
