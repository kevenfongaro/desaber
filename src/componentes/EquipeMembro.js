import React from 'react';

const EquipeMembro = ({membro}) => {
    return (
        <div className="unv--box">
            <div className="equipe--perfil--container">
                <img src={membro.img} alt={membro.img}/>
            </div>
            <h2>{membro.nome}</h2>
            <span className="destaque2">{membro.funcoes}</span>
            <p className="bio">{membro.bio}</p>
        </div>
    );
}
 
export default EquipeMembro;