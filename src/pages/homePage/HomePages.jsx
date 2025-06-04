import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { NewsGrid } from "../../components/NewSection/NewsGrid";
import { BreakingNews } from "../../components/NewSection/BreakingNews";
import './HomePages.css';

import LogoAgendamento from '../../../assets/agendamento.png';
import LogoBoletim from '../../../assets/boletimOcorrencia.png';
import LogoChat from '../../../assets/chat.png';
import LogoServico from '../../../assets/servico.png';

import { useNavigate } from 'react-router-dom';

export function HomePages() {
  const navigate = useNavigate();

  const handleClick = (next) => {
    navigate(`/chat?next=${next}`);
  };

  return (
    <div>
      <Header />

      <BreakingNews />

      <section className="buttons-section">
        <div className="button-item" onClick={() => handleClick('chat1')}>
          <img src={LogoChat} alt="Chat" />
          <p>Chat</p>
        </div>

        <div className="button-item" onClick={() => handleClick('mapa')}>
          <img src={LogoServico} alt="Serviço" />
          <p>Serviço</p>
        </div>

        <div className="button-item" onClick={() => handleClick('chat2')}>
          <img src={LogoBoletim} alt="Boletim de Ocorrência" />
          <p>Boletim de Ocorrência</p>
        </div>

        <div className="button-item" onClick={() => handleClick('agenda')}>
          <img src={LogoAgendamento} alt="Agendamento" />
          <p>Agendamento</p>
        </div>
      </section>

      <h2 className="title-news">ÚLTIMAS NOTÍCIAS</h2>
      <NewsGrid />

      <div className="imgbanner">
        <img src="/assets/bannerHome.png" alt="Banner" />
      </div>

      <Footer />
    </div>
  );
}
