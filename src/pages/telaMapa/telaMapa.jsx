import React, { useState } from 'react';
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import './telaMapa.css';

const TelaMapa = () => {
  const [cidade, setCidade] = useState('');
  const [servico, setServico] = useState('');
  const [dia, setDia] = useState('');
  const [horario, setHorario] = useState('');
  const [busca, setBusca] = useState('');

  const unidades = [
    {
      id: 1,
      nome: '1ª Delegacia Seccional de Polícia - Santo Amaro',
      endereco: 'Rua Vicente Ferreira dos Santos, 261, Santo Amaro, Recife/PE',
      cidade: 'RECIFE',
      servicos: 'B.O',
      dias: 'SEGUNDA',
      horario: 'MANHÃ',
      telefone: '(81) 3184-3424 / (81) 3184-3427 / (81) 3184-3443',
    },
    {
      id: 2,
      nome: 'Delegacia de Polícia da 1ª Circunscrição - Rio Branco',
      endereco: 'Rua Alfredo Lisboa, 188, Bairro do Recife, Recife/PE',
      cidade: 'RECIFE',
      servicos: 'B.O',
      dias: 'TERÇA',
      horario: 'TARDE',
      telefone: '(81) 3184-3453 / (81) 3184-3827',
    },
    {
      id: 3,
      nome: 'Delegacia de Polícia da 2ª Circunscrição - Boa Vista',
      endereco: 'Rua da Aurora, 487, Boa Vista, Recife/PE',
      cidade: 'RECIFE',
      servicos: 'B.O',
      dias: 'QUARTA',
      horario: 'NOITE',
      telefone: '(81) 3184-3620',
    },
    {
      id: 4,
      nome: '6ª Delegacia de Homicídios - Paulista',
      endereco: 'Rua da Cajarana, 85, Paulista/PE',
      cidade: 'PAULISTA',
      servicos: 'ATENDIMENTO',
      dias: 'QUINTA',
      horario: 'MANHÃ',
      telefone: '(81) 3184-3246 / (81) 3184-3248',
    },
    {
      id: 5,
      nome: 'Delegacia de Polícia de Homicídios - Olinda',
      endereco: 'Av. Governador Carlos de Lima Cavalcanti, Olinda/PE',
      cidade: 'OLINDA',
      servicos: 'B.O',
      dias: 'SEXTA',
      horario: 'TARDE',
      telefone: '(81) 3182-4090 / (81) 3182-4091',
    },
  ];

  const unidadesFiltradas = unidades.filter((unidade) => {
    return (
      (cidade === '' || unidade.cidade === cidade) &&
      (servico === '' || unidade.servicos === servico) &&
      (dia === '' || unidade.dias === dia) &&
      (horario === '' || unidade.horario === horario) &&
      (busca === '' || unidade.nome.toLowerCase().includes(busca.toLowerCase()))
    );
  });

  return (
    <>
      <Header />

      <div className="container-mapa">
        <div className="area-imagem-mapa">
          <img src="/assets/mapa.png" alt="Mapa de Pernambuco" />
        </div>

        <div className="area-filtro">
          <div className="filtros-mapa">
            <select value={cidade} onChange={(e) => setCidade(e.target.value)}>
              <option value="">CIDADE</option>
              <option value="RECIFE">RECIFE</option>
              <option value="OLINDA">OLINDA</option>
              <option value="PAULISTA">PAULISTA</option>
            </select>

            <select value={servico} onChange={(e) => setServico(e.target.value)}>
              <option value="">SERVIÇOS</option>
              <option value="B.O">B.O</option>
              <option value="ATENDIMENTO">ATENDIMENTO</option>
            </select>

            <select value={dia} onChange={(e) => setDia(e.target.value)}>
              <option value="">DIA DA SEMANA</option>
              <option value="SEGUNDA">SEGUNDA</option>
              <option value="TERÇA">TERÇA</option>
              <option value="QUARTA">QUARTA</option>
              <option value="QUINTA">QUINTA</option>
              <option value="SEXTA">SEXTA</option>
            </select>

            <select value={horario} onChange={(e) => setHorario(e.target.value)}>
              <option value="">HORÁRIO</option>
              <option value="MANHÃ">MANHÃ</option>
              <option value="TARDE">TARDE</option>
              <option value="NOITE">NOITE</option>
            </select>
          </div>

          <div className="campo-busca">
            <input
              type="text"
              placeholder="NOME DA DELEGACIA OU BAIRRO"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          <div className="lista-unidades">
            {unidadesFiltradas.length > 0 ? (
              unidadesFiltradas.map((unidade) => (
                <div className="card-unidade" key={unidade.id}>
                  <h3>{unidade.nome}</h3>
                  <p><strong>Endereço:</strong> {unidade.endereco}</p>
                  <p><strong>Telefone:</strong> {unidade.telefone}</p>
                </div>
              ))
            ) : (
              <p className="mensagem-nenhum">Nenhuma unidade encontrada.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TelaMapa;
