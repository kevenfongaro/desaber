import React from 'react';
import {Helmet} from 'react-helmet-async';
import '../css/Agora.css';
import {isMobile} from "react-device-detect";


const Agora = () => {

    let conteudo;
    if (window.gambiarraAgora.plataforma === 'googlemeet') {
        if (!isMobile){window.location.href = window.gambiarraAgora.link;}
        conteudo = 
            <div className="avisoredirect">
                <h1>Este encontro acontecerá via Google Meet</h1>
                <p><a href={window.gambiarraAgora.link}>Você será redirecionado para <i>{window.gambiarraAgora.link}</i>. Se não for, clique aqui.</a></p>
            </div>

    } else if (window.gambiarraAgora.plataforma === 'jitsi') {
        conteudo = 
        <div id="meet">
            <script src='https://meet.jit.si/external_api.js'></script>
            <iframe allow="camera; microphone; display-capture" src={window.gambiarraAgora.link} allowfullscreen="true" title="Jitsi Meet"></iframe>
        </div>
    }
    return (
        <div className="agora">
            <Helmet>
                <title>Agora! De Saber</title>
                <meta
                name="description"
                content="O que quer que esteja acontecendo agora na De Saber."
                />
                <meta property="og:image" content="https://desaber.com.br/imgs/ogimg.jpg"/>            
            </Helmet>
            {conteudo}
        </div>
    );
}

export default Agora;