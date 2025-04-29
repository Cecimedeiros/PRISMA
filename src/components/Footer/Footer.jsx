export function Footer() {
    return (
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.column}>
            <h3 style={styles.title}>INSTITUCIONAL</h3>
            <ul style={styles.list}>
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
  
          <div style={styles.column}>
            <h3 style={styles.title}>COMUNICAÇÃO</h3>
            <ul style={styles.list}>
              <li>Eventos</li>
              <li>Fale Conosco</li>
            </ul>
          </div>
  
          <div style={styles.column}>
            <h3 style={styles.title}>SERVIÇOS</h3>
            <ul style={styles.list}>
              <li>Boletim de Ocorrência Eletrônico</li>
              <li>Delegacia Eletrônica</li>
              <li>Cadastro de Pessoa surda, de PCD</li>
              <li>Informações das Rodovias</li>
              <li>Orientações de Segurança</li>
              <li>O que a PM está fazendo por você</li>
            </ul>
          </div>
  
          <div style={styles.logoArea}>
            <img src="/assets/logo gov.png" alt="Governo de Pernambuco" style={styles.logo} />
          </div>
        </div>
  
        <p style={styles.address}>
          Governo de Pernambuco Praça da República, Bairro de Santo Antônio, Recife - PE, CEP 50.010-928 | Telefone: +55 81 3181 2100
        </p>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      backgroundColor: '#B43434', // cor de fundo
      color: 'white',
      padding: '40px 20px 20px',
      marginTop: '50px',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: '60px',
    },
    column: {
      flex: '1',
      minWidth: '200px',
      marginBottom: '20px',
    },
    logoArea: {
      flex: '1',
      minWidth: '200px',
      textAlign: 'right',
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
      lineHeight: '1.8',
    },
    logo: {
      width: '400px',
      marginBottom: '10px',
    },
    governoText: {
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '1.2',
    },
    address: {
      textAlign: 'center',
      fontSize: '12px',
      marginTop: '20px',
    },
  };
  