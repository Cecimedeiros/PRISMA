import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './confirmacao.css';
import { useNavigate } from 'react-router-dom';
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import avatar from '/assets/prima.png'; 

function Confirmacao() {

  const navigate = useNavigate(); 

  const handleSend = () => {
    navigate('/feedback');
  };
  const pdfRef = useRef();

  const gerarPDF = () => {
    const input = pdfRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 5, 5, pdfWidth - 10, pdfHeight);
      pdf.save('comprovante-boletim.pdf');
    });
  };

  return (
    <>
      <Header />
      <div className="container-confirmacao">
        <div className="card-confirmacao" ref={pdfRef}>
          <div className="mensagem-topo">
            <img src={avatar} alt="Atendente" />
            <div className="texto-confirmacao">
              <p className="sucesso">
                ✅ <b>Seu boletim foi registrado com sucesso!</b>
              </p>
              <p>
                • O seu número do protocolo é: <b>000.000.000.1</b>
              </p>
              <p>
                Deseja registrar outro boletim ou acessar outro serviço?
              </p>
            </div>
          </div>

          
          <div className="btn-container">
            <button className="btn-baixar" onClick={gerarPDF}>Baixar Boletim ⤓</button>
          </div>

          <div className="input-enviar">
            <input type="text" placeholder="Escreva algo aqui..." />
            <button className="send-button" onClick={handleSend}>&#9658;</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Confirmacao;
