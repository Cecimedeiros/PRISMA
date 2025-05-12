import { useState } from "react";
import Footer from "../../components/Footer/Footer";  
import Header from "../../components/Header/Header";  
import { NewsGrid } from "../../components/NewSection/NewsGrid";  
import { BreakingNews } from "../../components/NewSection/BreakingNews";  
import TelaChat from "../telaChat/telaChat.jsx";  
import TelaMapa from "../telaMapa/telaMapa.jsx";  
import About from "../About/About.tsx";  
import Contact from "../contatos/Contact.tsx";

export function HomePages() {
  const [showChat, setShowChat] = useState(false);
  const [showMapa, setShowMapa] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      {showChat ? (  
        <TelaChat />
      ) : showMapa ? (  
        <TelaMapa />
      ) : showAbout ?(
        <About/>
      ) : showContact ? (
        <Contact/>
      ) : (  
        <div>
          <Header />
          <BreakingNews />

          {/* Botões para alternar entre as páginas */}
          
          <button onClick={() => setShowAbout(true)}>
            Sobre o Projeto
          </button>

          <button onClick={() => setShowChat(true)}>
            Ir para o Chat
          </button>

          <button onClick={() => setShowMapa(true)}>
            Ir para o Mapa
          </button>

          <button onClick={() => setShowContact(true)}>
            Contato
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
