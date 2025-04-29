import "./Footer.css"; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">INSTITUCIONAL</h3>
          <ul className="footer-list">
            <li>Memorial</li>
            <li>História da Polícia</li>
            <li>Missão e Valores</li>
            <li>Horário de Funcionamento</li>
            <li>Quem é quem?</li>
            <li>LGPD - Lei Geral de Proteção de Dados</li>
            <li>Estatuto do Policial</li>
            <li>Estrutura</li>
            <li>Símbolos</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">COMUNICAÇÃO</h3>
          <ul className="footer-list">
            <li>Eventos</li>
            <li>Fale Conosco</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">SERVIÇOS</h3>
          <ul className="footer-list">
            <li>Boletim de Ocorrência Eletrônico</li>
            <li>Delegacia Eletrônica</li>
            <li>Cadastro de Pessoa surda, de PCD</li>
            <li>Informações das Rodovias</li>
            <li>Orientações de Segurança</li>
            <li>O que a PM está fazendo por você</li>
          </ul>
        </div>

        <div className="footer-logoArea">
          <img src="/assets/logo gov.png" alt="Governo de Pernambuco" className="footer-logo" />
        </div>
      </div>

      <p className="footer-address">
        Governo de Pernambuco Praça da República, Bairro de Santo Antônio, Recife - PE, CEP 50.010-928 | Telefone: +55 81 3181 2100
      </p>
    </footer>
  );
}