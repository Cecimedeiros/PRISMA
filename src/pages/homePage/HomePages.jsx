import { useState } from "react";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import { NewsGrid } from "../../components/NewSection/NewsGrid.jsx";
import { BreakingNews } from "../../components/NewSection/BreakingNews.jsx";
import TelaChat from "../telaChat/telaChat.jsx";


export function HomePages() {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {showChat ? (  
        <TelaChat />
      ) : (        
        <div>
          <Header />
          <BreakingNews />
          <NewsGrid />
          
         
          <button onClick={() => setShowChat(true)}>
            Ir para o Chat
          </button>
          <div className="banner-container">
            <img src="/assets/bannerHome.png" alt="Banner Home" className="banner-home" />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
