import React from 'react';
import '../css/Universal.css';

const Valores = () => {
    return (
        <div className="valores unv--container">
            <div className="unv--cabecalho">
                <h1>Eixos de valores</h1>
            </div>
            <div className="unv--corpo unv--umacoluna">
                <p>Para garantir a pluralidade metodológica e fazer da diferença a própria De Saber... temos os valores e princípios abaixo, que aparecem em tudo que fazemos.</p>
            </div>
            <div className="unv--corpo unv--boxcontainer">
                <div className="unv--box">
                    <h2>Prezar por cuidado e bem estar</h2>
                    <span className="destaque1">Valores: escuta, sensibilidade, estar-junto.</span>
                    <p>Fazer as pessoas se sentirem bem, à vontade, e sentirem que participar de algo promovido pela DE SABER faz bem para si. Para isso, as experiências que promovemos precisam ser locais em que as pessoas escutam umas às outras, têm sensibilidade para as questões que são colocadas, e valorizam o próprio ato de estarem juntas.</p>
                </div>
                <div className="unv--box">
                    <h2>Prezar pela criação compartilhada</h2>
                    <span className="destaque1">Valores: colaboração, invenção, arte.</span>
                    <p>Usar a colaboração para ajudar qualquer pessoa a se entender como alguém capaz de inventar. Também buscamos que nossas experiências estejam em diálogos com trabalhos artísticos: podemos usar alguma obra como ponto de partida para uma boa conversa, ou então podemos explorar o modo de criação de alguma arte, ou então podemos trabalhar nossa sensibilidade para olhar e escutar.</p>
                </div>
                <div className="unv--box">
                    <h2>Prezar pela aprendizagem</h2>
                    <span className="destaque1">Valores: práticas, saberes, experimentar.</span>
                    <p>Atuar para que as experiências promovidas não sejam um lazer por si mesmo – como geralmente é navegar pelo TikTok, por exemplo –, mas para que as pessoas sintam que entraram em contato com algum saber ou que experimentaram algo novo.</p>
                </div>
            </div>
        </div>
    );
}

export default Valores;