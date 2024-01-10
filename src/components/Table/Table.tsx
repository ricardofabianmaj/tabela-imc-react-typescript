import React, { useEffect, useState } from "react";
import './Table.css'
import { Pacientes } from "../API";
import AddClient from "../AddClient/AddClient";

function Table() {

    const [pesquisa, setPesquisa] = useState('');
    const [tabela, setTabela] = useState(Pacientes.clientes);
    const [newData, setNewData] = useState(null)

    const Pesquisar: any = (nome?: string) => {
        if (pesquisa.length === 0) {
            if (!nome) {
                return true;
            }
        }
        return nome?.toLowerCase().includes(pesquisa.toLowerCase());
    }
    function handleNewData() {
        if (newData !== null) {
            setTabela([...tabela, newData]);
        }
    }
    const handleDoubleClick = (index: number) => {
        const updatedTable = tabela.filter((item, i) => i !== index);
        setTabela(updatedTable);
    };
    
    useEffect(() => {
        handleNewData();
    }, [newData]);

    return (
        <div>
            <input
                type="text"
                placeholder="Pesquise aqui"
                id="barra-de-pesquisa"
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
            />
            <h3>Tabela</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Peso(kg)</th>
                        <th>Altura(m)</th>
                        <th>Gordura Corporal(%)</th>
                        <th>IMC</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody id="tabela-pacientes">
                    {tabela.map((item: any, index: any) => (
                        <tr
                            key={index}
                            onDoubleClick={() => handleDoubleClick(index)}
                            style={{ display: Pesquisar(item.nome) ? 'table-row' : 'none' }}
                        >
                            <td>{item.nome}</td>
                            <td>{item.peso}</td>
                            <td>{item.altura}</td>
                            <td>{item.gordCorporal}</td>
                            <td>{item.imc}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>Registrar</h3>
            <AddClient setNewData={setNewData}/>
        </div>
    );
}

export default Table;
