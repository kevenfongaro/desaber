import React from 'react';
import '../css/EncontroDetalhes.css';
import {useParams} from 'react-router-dom'
import {Helmet} from 'react-helmet-async';
import PaginaNotion from './PaginaNotion';
import MenuFlutuante from './MenuFlutuante';

const EncontroDetalhes = ({modal, dadosDosEncontros, paginaIndependente}) => {
    const encontroKeyword = useParams().encontroKeyword;
    const encontros = dadosDosEncontros;
    var encontro = encontros.find((e) => e.keyword === encontroKeyword)
    if (!encontro || (!encontro.tallyFormId && !encontro.linkExterno && !encontro.paginaNotion) || (paginaIndependente && !encontro.paginaIndependente)) {
        
        window.location.replace('/404'); 
        return (<div></div>);
    }
    if (encontro.linkExterno) {
        window.location.replace("/redirecionar/" + encontro.keyword); 
        return (<div></div>);
    }
    if (encontro.paginaNotion) {
    
        return (
            <div className="encontroDetalhes formulario--wrapper">
                <Helmet>
                    <title>{encontro.titulo + " | De Saber"}</title>
                    <meta
                    name="description"
                    content={encontro.descricao}
                    />
                    <meta property="og:image" content={encontro.ogimg}/>            
                </Helmet>
                <PaginaNotion ID={encontro.paginaNotion} modal={modal}/>
            </div>
        )
    }
    else  {
        return (
            <div className="formulario--wrapper">
                <Helmet>
                    <title>{encontro.titulo + " | De Saber"}</title>
                    <meta
                    name="description"
                    content={encontro.descricao}
                    />
                    <meta property="og:image" content={encontro.ogimg}/>            
                </Helmet>
                {!modal &&
                    <MenuFlutuante fixo={true} cor='preto' />
                }
                <div className="formulario--carregando">
                    Carregando...
                </div>
                <iframe id="formulario" src={"https://tally.so/embed/"+encontro.tallyFormId+"?hideTitle=0"} title="ESCOLAS DE SABER"></iframe>
            </div>
        );
    }
}
 
export default EncontroDetalhes;