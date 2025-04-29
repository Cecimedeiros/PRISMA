import React from 'react';
import './telaMapa.css'; 
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";

const TelaMapa = () => {
  return (
    <div className="mapa-page">
      <Header />
      <div className="mapa-container">
        <div className="mapa-box">
          <div className="mapa-header">
            <img src="../assets/mapa.png" alt="Mapa de Pernambuco" className="mapa-interativo" />
            <div className="mapa-message">

            </div>
          </div>
          <div className="filtro-container">
    <div className="filtro-grid">
        <select className="filtro-item">
        <option value="">Cidade</option>
        <option value="recife">Recife</option>
        <option value="olinda">Olinda</option>
        {/* ...outras cidades */}
        </select>

    <select className="filtro-item">
      <option value="">Tipo de Serviço</option>
      <option value="rg">Emissão de RG</option>
      <option value="boletim">Boletim de Ocorrência</option>
      {/* ...outros serviços */}
    </select>

    <select className="filtro-item">
      <option value="">Dia da Semana</option>
      <option value="segunda">Segunda-feira</option>
      <option value="terca">Terça-feira</option>
      {/* ...outros dias */}
    </select>

    <select className="filtro-item">
      <option value="">Horário</option>
      <option value="manha">Manhã</option>
      <option value="tarde">Tarde</option>
      <option value="noite">Noite</option>
    </select>
  </div>

  <div className="filtro-busca">
    <input
      type="text"
      placeholder="Buscar por nome da delegacia ou bairro"
      className="filtro-input"
    />
  </div>
</div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TelaMapa;  
