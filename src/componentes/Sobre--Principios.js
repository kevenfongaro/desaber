import React from 'react';
import '../css/Universal.css';

const Principios = () => {
    return (
        <div className="principios unv--container">
            <div className="unv--cabecalho">
                <h1>Princípios pedagógicos</h1>
            </div>
            <div className="unv--corpo unv--umacoluna">
                <p>A De Saber é tocada por educadoras e educadores. Além de valores, também temos alguns princípios que nos indicam um rumo ao elaborar nossas atividades.</p>
            </div>
            <div className="unv--corpo unv--boxcontainer">
                <div className="unv--box">
                    <h2>Entradas</h2>
                    <p>Tudo deve ser oferecido para todas as pessoas. Nunca deve haver nenhum pré-requisito para participar de nenhuma atividade. Qualquer serviço oferecido pela DE SABER se dispõe a ser o primeiro contato de seu cliente.</p>
                </div>
                <div className="unv--box">
                    <h2>Explorações</h2>
                    <p>A tentativa deve ser permitida e incentivada. As atividades devem buscar causar nos participantes o espanto de ver algo novo pela primeira vez e o desejo de explorar o desconhecido. A previsibilidade deve ser combatida.</p>
                </div>
                <div className="unv--box">
                    <h2>Saídas</h2>
                    <p>As atividades devem explorar o que está fora da DE SABER. Os lugares, as pessoas, as instituições, os modos de ser, as histórias, os discursos... O fora deve ir para dentro da DE SABER e a DE SABER deve ir para fora de si mesma.</p>
                </div>
            </div>
        </div>
    );
}

export default Principios;