import React from 'react';
import '../css/Encontro.css';
import { Link } from 'react-router-dom';
import 'lazysizes';

const Encontro = ({encontro}) => {
    return (
        <div className="encontro">
            <Link 
            to={{
                pathname: "/encontro/"+ encontro.keyword,
                state: { modal: true }
            }} 
            >
                <img
                data-sizes="auto"
                src="https://desaber.com.br/imgs/miniaturas/placeholder.png"   
                data-src={encontro.miniatura}
                className="lazyload blur-up"
                alt={encontro.titulo}
                title={encontro.titulo} />
            </Link>
        </div>
    );
}
 
export default Encontro;