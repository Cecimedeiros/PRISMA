import { useState } from "react";
import Footer from "../../components/Footer/Footer";  // Corrigido para o caminho correto
import Header from "../../components/Header/Header";  // Corrigido para o caminho correto
import { NewsGrid } from "../../components/NewSection/NewsGrid";  // Corrigido para o caminho correto
import { BreakingNews } from "../../components/NewSection/BreakingNews";  // Corrigido para o caminho correto
import TelaChat from "../telaChat/telaChat.jsx";  // Ajuste o caminho correto
import TelaMapa from "../telaMapa/telaMapa.jsx";  // Sem a vírgula extra

export function HomePages() {
  const [showChat, setShowChat] = useState(false);
  const [showMapa, setShowMapa] = useState(false);

  return (
    <>
      {showChat ? (  // Exibe o TelaChat se showChat for true
        <TelaChat />
      ) : showMapa ? (  // Exibe o TelaMapa se showMapa for true
        <TelaMapa />
      ) : (  // Exibe a HomePage se nenhum dos dois for true
        <div>
          <Header />
          <BreakingNews />

          {/* Botões para alternar entre as páginas */}
          <button onClick={() => setShowChat(true)}>
            Ir para o Chat
          </button>

          <button onClick={() => setShowMapa(true)}>
            Ir para o Mapa
          </button>

          <NewsGrid />
          
          <div className="banner-container">
            <img src="/assets/bannerHome.png" alt="Banner Home" className="banner-home" />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
