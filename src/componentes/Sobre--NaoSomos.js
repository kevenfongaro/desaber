import React from 'react';
import '../css/Universal.css';

const NaoSomos = () => {
    return (
        <div className="unv--container">
            <div className="unv--cabecalho">
                <h1>De Saber não é...</h1>
            </div>
            <div className="unv--corpo unv--umacoluna">
                <span className="iconecolorido iconify" data-icon="bi:exclamation-triangle-fill"></span>
                <p>Precisamos ser claros sobre porquê DE SABER não é nenhuma outra coisa (escola, sala de cinema, teatro, centro cultural, etc). O novo é diferente do velho. Nossas rupturas, mais sutis ou mais radicais, com os espaços existentes – a novidade da DE SABER – começa com alguns princípios. A DE SABER:</p>
                <p><span className="destaque">1.</span> Não se define como um espaço de formação técnica
                (escolas de cinema e audiovisual já existem).</p>

                <p><span className="destaque">2.</span> Não espera que seus educadores ensinem o belo e o
                bom (escolas de arte já existem).</p>

                <p><span className="destaque">3.</span> Não é um local que se frequenta passivamente (salas
                de exibição e museus já existem).</p>

                <p><span className="destaque">4.</span> Não sabe bem o que ou como seus educadores trabalham,
                deixa-os livres (os educadores são únicos e atualizam-se, não
                podemos esperar que trabalhem todos de uma só maneira).</p>
            </div>
        </div>
    );
}

export default NaoSomos;