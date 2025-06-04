import "./Agenda.css";
import { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import Footer from '../../components/Footer/Footer';    
import Header from '../../components/Header/Header';

export default function Agendamento() {
  const [tipoServico, setTipoServico] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  const salvarAgendamento = () => {
    if (!tipoServico || !data || !hora) {
      alert("Preencha todos os campos!");
      return;
    }

    const agendamento = {
      tipoServico,
      data,
      hora,
    };

    const agendamentos = JSON.parse(
      localStorage.getItem("agendamentos") || "[]"
    );
    agendamentos.push(agendamento);
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

    gerarPDF(agendamento);
    alert("Agendamento salvo com sucesso!");
    limparCampos();
  };

  const limparCampos = () => {
    setTipoServico("");
    setData("");
    setHora("");
  };

const gerarPDF = (agendamento: any) => {
  const doc = new jsPDF();

  
  doc.setFontSize(18);
  doc.setTextColor(40, 40, 40);
  doc.text("Comprovante de Agendamento", 105, 20, { align: "center" });

  
  autoTable(doc, {
    startY: 30,
    head: [["Campo", "Informação"]],
    body: [
      ["Tipo de serviço", agendamento.tipoServico],
      ["Data", agendamento.data],
      ["Hora", agendamento.hora],
    ],
    theme: "grid",
    styles: {
      fontSize: 12,
      textColor: [40, 40, 40],
      halign: "center",
      valign: "middle",
    },
    headStyles: {
      fillColor: [22, 160, 133], 
      textColor: 255,            
      fontStyle: "bold",
    },
    bodyStyles: {
      fillColor: [240, 248, 255], 
    },
    alternateRowStyles: {
      fillColor: [255, 255, 255], 
    },
    margin: { top: 30 },
  });

  
  const pageHeight = doc.internal.pageSize.height;
  doc.setFontSize(10);
  doc.text(
    "Polícia Civil de Pernambuco - Documento gerado automaticamente.",
    105,
    pageHeight - 10,
    { align: "center" }
  );

 
  doc.save("comprovante-agendamento.pdf");
};

  return (
    <>
      <Header />
      <div className="container-agendamento">
        <h2>AGENDAMENTO PRESENCIAL</h2>

        <div className="box">
          <div className="box-left">
            <img src="/assets/prima.png" alt="Assistente Prisma" />
            <div className="fala">
              <p>
                Olá cidadão! <b>👮 Sou a Prisma</b>, sua assistente da Polícia
                Civil de Pernambuco. Para agendar um horário presencial na
                delegacia, preencha os campos a seguir.
              </p>
            </div>
          </div>

          <div className="box-right">
            <label>Tipo de serviço:</label>
            <input
              type="text"
              placeholder="Digite o serviço"
              value={tipoServico}
              onChange={(e) => setTipoServico(e.target.value)}
            />

            <label>Data do agendamento:</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />

            <label>Horário:</label>
            <select value={hora} onChange={(e) => setHora(e.target.value)}>
              <option value="">Selecione</option>
              <option value="08:30">08:30</option>
              <option value="09:30">09:30</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:30">16:30</option>
            </select>

            <div className="botoes">
              <button onClick={salvarAgendamento}>SALVAR</button>
              <button
                onClick={() => alert("Funcionalidade futura")}
                className="consulta"
              >
                CONSULTAR AGENDAMENTOS
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
