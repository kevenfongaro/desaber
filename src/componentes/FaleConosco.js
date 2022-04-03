import React from 'react';
import '../css/FaleConosco.css';
import {Helmet} from 'react-helmet-async';
import BotaoVoltar from './BotaoVoltar';
import MenuFlutuante from './MenuFlutuante';


const FaleConosco = () => {
    return (
        <div className="faleConosco-wrapper">
            <Helmet>
                <title>Contato | De Saber</title>
                <meta
                name="description"
                content="Fale conosco."
                />
                <meta property="og:image" content="https://desaber.com.br/imgs/ogimg.jpg"/>            
            </Helmet>
            <MenuFlutuante fixo={true} cor='preto' />
            <div className="faleConosco--carregando">
                Carregando...
            </div>
            <iframe id="formulario" src={"https://tally.so/embed/mJ6gYm?hideTitle=0"} title="ESCOLAS DE SABER"></iframe>
            <BotaoVoltar />
        </div>
    );
}

export default FaleConosco;