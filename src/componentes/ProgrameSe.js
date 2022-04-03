import React from 'react';
import Encontro from './Encontro';
import '../css/ProgrameSe.css';

const ProgrameSe = ({infosDaCategoria}) => {
    return (
        <div className="programeSe--container">
            <div className="programeSe">
                <div className="programeSe--header">
                    <div className="programeSe--header--linhaEsquerda"></div>
                    <h1 className="programeSe--header--texto">{infosDaCategoria.titulo}</h1>
                    <div className="programeSe--header--linhaDireita"></div>
                </div>
                <div className="programeSe--encontros">
                {
                    infosDaCategoria.encontros.map((encontro) => <Encontro encontro={encontro} key={encontro.id} />)
                }
                </div>
            </div>
        </div>
        );
}
 
export default ProgrameSe;