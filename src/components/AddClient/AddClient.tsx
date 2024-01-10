import React, { useState } from "react";
import './AddClient.css'
import { Paciente } from "../API";

function AddClient({ setNewData }) {
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [gordCorp, setGordCorp] = useState('');

  const [AlertFillAll, setAlertFillAll] = useState(false)

  function handleAdicionarPaciente(nome: string, peso: number, altura: number, gordCorp: number) {

    if (nome.length === 0 ||!peso || !altura || !gordCorp) {
      setAlertFillAll(true)
    } else {
      setAlertFillAll(false)
      const Novo = new Paciente(nome.trim(), peso, altura, gordCorp);
      setNewData(Novo);
    }
    }

  return (
    <section>
      <p id="alerta" style={{display: AlertFillAll ? 'inline-block' : 'none'}}>Por favor preencha todos os campos com valores válidos</p>
      <label htmlFor="nomeData" />
      <input
        type="text"
        id="nomeData"
        name="nomeData"
        placeholder="Digite o nome do paciente aqui"
        onChange={(e) => setNome(e.target.value)}
      />

      <label htmlFor="pesoData" />
      <input
        type="number"
        id="pesoData"
        name="pesoData"
        placeholder="Digite o peso do paciente aqui"
        className="Campo-Pequeno"
        onChange={(e) => setPeso(e.target.value)}
      />

      <label htmlFor="alturaData" />
      <input
        type="number"
        id="alturaData"
        name="alturaData"
        placeholder="Digite a altura do paciente aqui"
        className="Campo-Pequeno"
        onChange={(e) => setAltura(e.target.value)}
      />

      <label htmlFor="gordCorporalData" />
      <input
        type="number"
        id="gordCorporalData"
        name="gordCorporalData"
        placeholder="Digite a gordura corporal do paciente aqui"
        className="Campo-Pequeno"
        onChange={(e) => setGordCorp(e.target.value)}
      />

      <button onClick={() => handleAdicionarPaciente(nome, Number(peso), Number(altura), Number(gordCorp))}>
        Adicionar Paciente
      </button>
    </section>
  );
}

export default AddClient;
