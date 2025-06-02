import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePages as Home } from "./pages/homePage/HomePages";
import TelaChat from './pages/telaChat/telaChat';
import TelaChat1 from './pages/telaChat1/telaChat1';
import TelaChat2 from './pages/telaChat2/telaChat2';
import Orientacoes from './pages/orientacoes/orientacoes'
import Confirmacao from './pages/confirmacao/confirmacao';
import TelaMapa from './pages/telaMapa/telaMapa'
import Agenda from './pages/Agenda/Agenda'
import About from './pages/About/About'
import Contact  from './pages/contatos/Contact'
import Feedback from './pages/feedback/feedback'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<TelaChat />} />
        <Route path="/chat1" element={<TelaChat1 />} />
        <Route path="/chat2" element={<TelaChat2 />} />
        <Route path="/orientacoes" element={<Orientacoes />} />
        <Route path="/confirmacao" element={<Confirmacao />} />
        <Route path="/mapa" element={<TelaMapa/>} />
        <Route path="/agenda" element={<Agenda/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact  />} />
        <Route path="/feedback" element={<Feedback  />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
