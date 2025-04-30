import React from 'react';
import './telaChat.css';
import  Footer  from "../../components/Footer/Footer.jsx";
import  Header  from "../../components/Header/Header.jsx";

export default function TelaChat() {
  return (
    <div className="chat-page">
        <Header />
      <div className="chat-container">
        <div className="chat-box">
          <div className="chat-header">
            <img src="../../assets/prima.png" alt="Assistente Prisma" className="chat-avatar" />
            <div className="chat-message">
              <p>
                Olá! <span role="img" aria-label="estrela">✨</span> Sou a <strong>Prisma</strong>, sua assistente da Polícia Civil de Pernambuco.
                Estou aqui para te ajudar de forma segura, rápida e discreta. Como posso te ajudar hoje?
              </p>
              <button className="gov-button">Entrar com gov.br</button>
            </div>
          </div>
        </div>

        <div className="chat-input">
          <input type="text" placeholder="Digite sua mensagem..." />
          <button className="send-button">➤</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}