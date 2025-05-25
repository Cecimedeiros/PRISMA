import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './orientacoes.css';

import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import avatar from '/assets/prima.png'; 

function Orientacoes() {
  const pdfRef = useRef();

  const gerarPDF = () => {
    const input = pdfRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 5, 5, pdfWidth - 10, pdfHeight);
      pdf.save('boletim-de-ocorrencia.pdf');
    });
  };

  return (
    <>
      <Header />
      <div className="container-orientacoes">
        <div className="card-orientacoes" ref={pdfRef}>
          <div className="mensagem-topo">
            <img src={avatar} alt="Atendente" />
            <div className="texto-box">
              <h3>🔴 O que não pode ser registrado online:</h3>
              <ol>
                <li><b>Crimes em andamento ou que acabaram de acontecer</b></li>
                <li><b>Crimes com violência ou ameaça</b></li>
                <li><b>Casos que envolvem lesão corporal</b></li>
                <li><b>Crimes que exigem exame de corpo de delito</b></li>
                <li><b>Fatos com autoria conhecida (em alguns estados)</b></li>
                <li><b>Desaparecimento de menores de idade</b></li>
                <li><b>Falsidade ideológica, estelionato bancário complexo ou crimes digitais mais graves</b></li>
              </ol>
            </div>
          </div>

          <div className="campo-enviar">
            <img src={avatar} alt="Usuário" />
            <div className="mensagem-usuario">
              Me conte um pouco o que aconteceu com você
            </div>
          </div>

          <div className="input-enviar">
            <input type="text" placeholder="Descreva sua ocorrência aqui..." />
            <button onClick={gerarPDF}></button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Orientacoes;
