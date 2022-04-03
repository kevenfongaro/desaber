
import React, {useState} from 'react';
import '../css/Sobre--Dicionario.css';

const Dicionario = () => {
    const audios = [
        '1.mp3',
        '2.mp3',
        '3.mp3',
        '4.mp3',
        '5.mp3',
        '6.mp3',
        '7.mp3',
        '8.mp3',
        '9.mp3',
    ]
    const [audioUrl, setaudioUrl] = useState('../audios/' + audios[Math.floor(Math.random()*audios.length)]);
    const audio = new Audio(audioUrl);
    audio.load();
    const tocarAudio = () => {
        audio.play()
        .catch(error => {
         
        })
        setaudioUrl("../audios/" + audios[Math.floor(Math.random()*audios.length)])
    }
    return (
        <div className="dicionario unv--container">
            <div className="dicionario--conteudo unv--corpo unv--umacoluna">
                <div className="dicionario--header">
                    <div className="unv--boxcontainer">
                        <h1 className="dicionario--icone"><i  onClick={() => {tocarAudio()}}><span className="iconify" data-icon="majesticons:sound-up"></span></i></h1>
                        <h1 className="dicionario--texto">De Saber</h1>
                    </div>
                    <h2>(substantivo feminino)</h2>
                </div>
                <div className="dicionario--definicoes">
                    <p>
                        <span className="dicionario--definicoes--definicao">1. Onde nos encontramos para ter experiências através do audiovisual.</span>
                        <br/>
                        <span className="dicionario--definicoes--exemplo">Ex.: “Vamos pra De Saber no sábado?”</span>
                    </p>
                    <p>
                        <span className="dicionario--definicoes--definicao">2. Espaço onde promovemos experiências audiovisuais.</span>
                        <br/>
                        <span className="dicionario--definicoes--exemplo">Ex.: “Teve um encontro sobre redes sociais na De Saber.”</span>
                    </p>
                    <p>
                        <span className="dicionario--definicoes--definicao">3. O que há de comum entre várias ações de arte, educação e lazer audiovisual.</span>
                        <br/>
                        <span className="dicionario--definicoes--exemplo">Ex.: “Cada semana tem uma coisa diferente na De Saber!”</span>
                    </p>
                </div>
            </div>
            <div className="dicionario--chamada">
                <div className="dicionario--chamada--texto">
                    <span className="dicionario--chamada--texto--destaque">Convidamos para vir à De Saber!</span>
                    <br/>
                    <span className="dicionario--chamada--texto--secundario">(trazendo alguém fica melhor ainda)</span>
                </div>
            </div>
        </div>
    );
}

export default Dicionario;