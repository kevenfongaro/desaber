import React from 'react';
import '../css/BarraRodape.css';
import {returnLinguagem} from '../Linguagem.js';

const BarraRodape = () => {
    return (
        <footer>
            <div className="footer--container">
                <div className="footer--esquerda">
                    <a href="/sobre">{returnLinguagem('ptBr').linkSobre}</a>
                    <a href="/newsletter">{returnLinguagem('ptBr').linkNewsletter}</a>
                    <a href="https://escolas.desaber.com.br">{returnLinguagem('ptBr').linkEscolas}</a>
                    <a href="/faleconosco">{returnLinguagem('ptBr').linkFaleConosco}</a>
                    <a href="/contribua">{returnLinguagem('ptBr').linkContribua}</a>
                </div>
                <div className="footer--centro">
                    <a href="https://www.instagram.com/construirdesaber/" title="Instagram"><span className="iconify" data-icon="ph:instagram-logo"></span></a>
                    <a href="https://open.spotify.com/show/2PvuFaYYTI3fAjT9F4MSBv" title="Spotify"><span className="iconify" data-icon="ph:spotify-logo"></span></a>
                    <a href="https://t.me/comunidadedesaber" title="Grupo no Telegram"><span className="iconify" data-icon="ph:telegram-logo"></span></a>
                    <a href="https://www.tiktok.com/@construirdesaber?" title="TikTok"><span className="iconify" data-icon="ph:tiktok-logo"></span></a>
                    <a href="https://construirdesaber.medium.com/" title="Medium"><span className="iconify" data-icon="ph:medium-logo"></span></a>
                </div>
                <div className="footer--direita">
                    De Saber Educação Audiovisual LTDA, 2021
                </div>
            </div>
        </footer>
        );
}
 
export default BarraRodape;