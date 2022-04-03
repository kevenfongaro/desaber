import React, {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom'
import {isMobile} from "react-device-detect";
import '../css/Redirecionar.css';


const Redirecionar = ({dadosDosEncontros}) => {
    const [contador, setContador] = useState(9);
    React.useEffect(() => {
        contador > 0 && setTimeout(() => setContador(contador - 1), 1000);
      }, [contador]);

    const encontroKeyword = useParams().encontroKeyword;
    const encontros = dadosDosEncontros;
    var encontro = encontros.find((e) => e.keyword === encontroKeyword)
    if (!encontro || !encontro.linkExterno) {
        window.location.replace('/404'); 
        return (<div></div>);
    }
    else  {
        
          
        if (!isMobile && contador <= 0 ){window.location.href = encontro.linkExterno}
        return (
            <div className="redirecionar">
                <Helmet>
                    <title>Você será redirecionado... | De Saber</title>
                    <meta
                    name="description"
                    content="O que quer que esteja acontecendo agora na De Saber."
                    />
                    <meta property="og:image" content="https://desaber.com.br/imgs/ogimg.jpg"/>            
                </Helmet>
                <div className="avisoredirect">
                    <h1>Você será redirecionado em <span id="seconds">{contador}</span>...</h1>
                    <p>Parece que <b>{encontro.titulo}</b> está disponível fora do nosso site. <a href={encontro.linkExterno}>Se você não for levado, clique aqui.</a></p>
                </div>
            </div>
        );
        }
}

export default Redirecionar;