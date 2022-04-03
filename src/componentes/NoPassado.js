import React from 'react';
import Encontro from './Encontro';
import '../css/NoPassado.css';

const NoPassado = ({infosDaCategoria}) => {
    return (
        <div className="noPassado--container">
            <div className="noPassado">
                <div className="noPassado--header">
                    <div className="noPassado--header--linhaEsquerda"></div>
                    <h1 className="noPassado--header--texto">{infosDaCategoria.titulo}</h1>
                    <div className="noPassado--header--linhaDireita"></div>
                </div>
                <div className="noPassado--encontros">
                {
                    infosDaCategoria.encontros.map((encontro) => <Encontro encontro={encontro} key={encontro.id} />)
                }
                </div>
            </div>
        </div>
        );
}
 
export default NoPassado;