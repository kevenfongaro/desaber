import React from 'react';
import ProxEncontro from './ProxEncontro';
import ProgrameSe from './ProgrameSe';
import NoPassado from './NoPassado';
import BarraRodape from './BarraRodape';
import {Helmet} from 'react-helmet-async';

const Home = ({infosCategorias}) => {
    return (
        <div>
        <Helmet>
        <title>De Saber</title>
        <meta
        name="description"
        content="Promovemos encontros."
        />
        <meta property="og:image" content="https://desaber.com.br/imgs/ogimg.jpg"/>            
        </Helmet>
        <ProxEncontro infosDaCategoria={infosCategorias[0]} />
        <ProgrameSe infosDaCategoria={infosCategorias[2]} />
        <NoPassado infosDaCategoria={infosCategorias[1]} />
        <BarraRodape />
        </div>
    );
}

export default Home;