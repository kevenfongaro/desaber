import React from 'react';
import '../css/NaoEncontrado.css';
import {Helmet} from 'react-helmet-async';
import BotaoVoltar from './BotaoVoltar';

const NaoEncontrado = () => {
    return (
        <div className="naoEncontrado">
            <Helmet>
                <title>404: Página não encontrada | De Saber</title>
                <meta
                name="description"
                content="Página não encontrada."
                />
                <meta property="og:image" content="https://desaber.com.br/imgs/ogimg.jpg"/>            
            </Helmet>
            <h1>404!</h1>
            <p>Parece que essa página não existe. :(</p>
            <BotaoVoltar />
        </div>
    );
}

export default NaoEncontrado;