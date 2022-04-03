import React from 'react';
import '../css/Universal.css';

const Historia = () => {
    return (
        <div className="historia unv--container">
            <div className="unv--cabecalho">
                <h1>De onde viemos</h1>
            </div>
            <div className="unv--corpo unv--duascolunas unv--boxcontainer">
                <div className="unv--box">
                    <span className="iconecolorido iconify" data-icon="bi:chat-square-dots-fill"></span>
                    <p>Em 2012, a criação do curso de Licenciatura em Cinema e Audiovisual da Universidade Federal Fluminense criou um novo profissional da Educação – vem-se usando o termo "educador audiovisual" para falar destes novos profissionais.</p>
                    <p>Com isso, diversos trabalhos inovadores e desbravadores foram colocados: práticas com cinema e audiovisual em ONGs, escolas, museus, hospitais, clínicas terapêuticas, etc, indicam caminhos para algo que extrapola relações de ensino-aprendizagem e se coloca também no âmbito da arte, da criação, da diversão e do cuidado. São profissionais que, simplesmente, promovem experiências através do audiovisual.</p>
                    <p>Em novembro/2019, reunimos sete educadores audiovisuais para a criação de um nome que unificasse as novas possibilidades que tínhamos para oferecer ao mercado – nasceu aí a De Saber, inicialmente para prestar serviços de educação audiovisual para terceiros.</p>
                </div>
                <div className="unv--box">
                    <p>Depois de diversos negócios fechados no início de 2020, a De Saber preparava seu lançamento público para Abril, quando a pandemia da COVID-19 interrompeu tudo. Diante disso, nosso plano de negócios precisou ser reestruturado para o novo contexto. A principal mudança: ao invés de começarmos prestando serviços para terceiros, decidimos criar nosso próprio espaço para promover, inteiramente aos nossos moldes, diversas experiências e encontros através do audiovisual.</p>
                    <p>Estivemos nos estruturando ao longo de 2021. Em maio, lançamos nossa primeira ação pública: quatro grupos no aplicativo mensageiro Telegram, onde pessoas se reuniriam para criar juntos e ocupar quatro redes sociais com essas criações. Depois vieram os encontros periódicos, e estamos onde estamos</p>
                </div>
            </div>
        </div>
    );
}

export default Historia;