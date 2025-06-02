import './telaChat1.css';
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import prismaLogo from '../../../assets/prima.png';
import { useNavigate } from 'react-router-dom';




function ChatPage() {
  const navigate = useNavigate();

  const handleSend = () => {
    navigate('/chat2'); 
  };


  return (
    <main className="chat-main">
      <Header />  

      <section className="chatbox">
        <div className="chat-bubble">
          <div className="avatar">
            <img src={prismaLogo}alt="Atendente virtual" />
          </div>
          <div className="chat-message">
            <p>🔎 O que você deseja hoje?</p>
            <ul>
              <li>📄 Registrar Boletim de Ocorrência (BO) Online</li>
              <li>📂 Consultar BO ou andamento de investigação</li>
              <li>📍 Localizar Delegacia mais próxima</li>
              <li>📞 Falar com um atendente</li>
              <li>❓ Dúvidas frequentes</li>
              <li>📋 Ver meus atendimentos anteriores</li>
            </ul>
          </div>
        </div>
        <div className="chat-input-area">
          <input type="text" placeholder="Digite aqui sua mensagem..." />
          <button className="send-button" onClick={handleSend}>&#9658;</button>
        </div>
      </section>

      <Footer />  
    </main>
  );
}

export default function TelaChat1() {
  return <ChatPage />;
}