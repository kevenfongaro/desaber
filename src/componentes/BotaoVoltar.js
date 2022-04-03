import React from 'react';
import '../css/BotaoVoltar.css';

const BotaoVoltar = () => {
    return (
        <div className="botaoVoltar">
            <nav>
                <a href="../">
                    <span className="iconify" data-icon="bi:arrow-left-circle-fill"></span>
                </a>
            </nav>
        </div>
    );
}

export default BotaoVoltar;