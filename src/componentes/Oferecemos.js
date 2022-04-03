import React, {useRef} from 'react';
import '../css/Oferecemos.css';
import '../css/Universal.css';
import {Helmet} from 'react-helmet-async';
import BotaoVoltar from './BotaoVoltar';
import MenuFlutuante from './MenuFlutuante';
import Collapsible from 'react-collapsible';
import BarraRodape from './BarraRodape';

const Oferecemos = () => {
    const myRef = useRef(null);
    return (
        <div className="oferecemos">
            <Helmet>
                <title>Serviços | De Saber</title>
                <meta
                name="description"
                content="Conheça os serviços de Educação Audiovisual que oferecemos."
                />
                <meta property="og:image" content="https://desaber.com.br/imgs/ogimg.jpg"/>
                <script async src="https://tally.so/widgets/embed.js"></script>            
            </Helmet>
            <MenuFlutuante cor="preto" fixo={true} />
            <BotaoVoltar />
            <div className="unv--secao oferecemos--secao1">
                <div className="unv--container oferecemos--secao1--texto">
                    <div className="unv--cabecalho">
                        <h5>Educação e audiovisual do jeito que você precisa.</h5>
                        <p>Revolucione seus usos de plataformas digitais e não fique para trás.</p>
                        <button className="button-roxo" data-tally-open="m6pGNw" data-tally-width="400" data-tally-overlay="1" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">Quero um orçamento!</button>
                    </div>
                </div>
                <div className="oferecemos--secao1--img"></div>
            </div>
            <div className="unv--secao oferecemos--secao2">
                <div className="unv--container">
                    <div className="unv--corpo unv--colunasemicheia">
                        <div className=" unv--boxcontainer">
                            <div className="unv--box oferecemos--secao2--texto">
                                <h3>Oferecemos experiências audiovisuais</h3>
                                <p>Nossa missão é <span className="destaque7">usar o audiovisual para promover experiências</span> de forma democrática e acessível.</p>
                                <p>Não temos um modelo. Cada experiência que promovemos usa uma metodologia própria e diferente das demais: variamos de cursos e aulas tradicionais até trabalhos terapêuticos, intervenções artísticas e outros formatos que não cabem em nomes conhecidos.</p>
                                <p>Abaixo, pontos que perpassem tudo que fazemos – confira também nossos princípios pedagógicos <a className="linksemestilo" href="https://desaber.com.br/sobre/principios">clicando aqui</a>.</p>
                                <Collapsible trigger="Para quantas pessoas for preciso">
                                    <p>Usamos metodologias próprias e nos desafiamos a nunca repetir a mesma experiência duas vezes. Com isso, construímos nos últimos anos alternativas para lidar com diferentes situações e públicos.</p>
                                    <p>Temos metodologias para trabalhar com uma só pessoa, com dez, com cem, ou com milhares: de acordo com o que você precisar. Conseguimos, inclusive, com facilidade usar nossa expertise para lidar com mudanças de última hora quanto à expectativa de público (algo comum em eventos).
                                    </p>
                                </Collapsible>
                                <Collapsible trigger="Para aprender se divertindo">
                                    <p>Trabalhamos para que os participantes de cada encontro entrem em um estado intenso de atenção e presença.</p>
                                    <p>Para que por um instante as preocupações e problemas da vida cotidiana sejam colocadas de lado em favor da experiência presente de estar junto com outras pessoas e fazendo alguma coisa; para que de repente olhem para o relógio e percebam que já se passou uma hora; para que queiram ter isso novamente.</p>
                                    <p>Com isso, conseguimos articular nesses encontros um momento de livre diversão e lazer, mas também aprendizado, cultura, criação e socialização.</p>
                                </Collapsible>
                                <Collapsible trigger="Para todos os públicos">
                                    <p>Não importa quem faz parte do seu público, a De Saber consegue atendê-lo.</p>
                                    <p>Somos democráticos e acessíveis. Elaboramos as atividades para que toda e qualquer pessoa possa participar delas. Não precisa saber alguma coisa, não importa se nunca pegou num celular, não faz diferença se é idoso ou criança; não há requisitos. Basta ter interesse e disponibilidade, de resto a De Saber se encarrega de resolver para acolher a todos.</p>
                                </Collapsible>
                                <Collapsible trigger="Usando o audiovisual">
                                    <p>Nossa equipe é formada por profissionais com diferentes especializações dentro da educação audiovisual. Com isso, conseguimos ter um alcance grande em termos de audiovisual.</p>
                                    <p>Realidade aumentada, realidade virtual, metaverso, redes sociais, produção de conteúdo, cinema, ensino à distância, trabalho remoto, televisão, roteiros e narrativas, podcasts, desenvolvimento de softwares, jogos digitais... Se o termo audiovisual se aplica, a De Saber trabalha!</p>
                                </Collapsible>
                                <Collapsible trigger="Com educadores">
                                    <p>Nossas experiências são promovidas por profissionais que há pouco tempo não existiam no mercado: para além das formações complementares de cada um, os educadores da nossa equipe são formados na Licenciatura em Cinema e Audiovisual da Universidade Federal Fluminense.</p>
                                    <p>O curso foi fundado em 2012 e capacita educadores para o mercado de audiovisual. Somos a primeira iniciativa de mercado em que licenciados e licenciadas em audiovisual se reúnem para trabalhar juntos: nenhuma outra empresa tem profissionais tão qualificados para este trabalho quanto nós. Sabemos o que estamos fazendo.
                                    </p>
                                </Collapsible>
                            </div>
                            <div className="unv--box oferecemos--secao2--img2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="unv--secao oferecemos--secao3">
                <div className="oferecemos--secao3--img1">
                    <img src="https://desaber.com.br/imgs/paginas/oferecemos3.webp" alt="oferecemos"/>
                </div>
            </div>
            <div className="unv--secao oferecemos--secao4">
                <div className="unv--container">
                    <div className="unv--corpo unv--colunasemicheia">
                        <div className="unv--boxcontainer">
                            <div className="unv--box oferecemos--secao4--img">
                            </div>
                            <div className="unv--box">
                                <h3>Conheça melhor nosso trabalho</h3>
                                <p>O audiovisual está presente em nosso dia a dia de diversas formas. Videochamadas de trabalho, planilhas de organização, plataformas de comunicação, aplicativos de criação...</p>
                                <p>Nós investigamos as formas de usar tudo que existe no audiovisual para <span className="destaque7">fazer mais</span> e <span className="destaque7">fazer diferente</span>. Diariamente inventamos novas formas de estar em uma videochamada, de usar o Instagram, de navegar pelo Google Drive, etc. Na verdade, a De Saber nasceu porque o que queríamos fazer não cabia em outros lugares. Sobrevivemos à base de inovação audiovisual.</p>
                                <p>Você pode, agora mesmo, <a className="linksemestilo" href="https://desaber.com.br">voltar ao início</a> do nosso site e ver que <span className="destaque7">diversas atividades estão acontecendo gratuitamente</span>. Inscreva-se em qualquer uma para conhecer nosso trabalho na prática.</p>
                                <p className="oferecemos--secao4--links"><a href="https://desaber.com.br">Programação</a> • <a href="https://desaber.com.br/sobre/equipe">Equipe</a> • <a href="https://desaber.com.br/sobre/valores">Valores</a> • <a href="https://desaber.com.br/sobre/historia">História</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={myRef}></div>
            </div>
            <div className="unv--secao oferecemos--secao5">
                <div className="unv--container">
                    <div className="unv--corpo unv--colunasemicheia">
                        <h3>Vamos fazer algo juntos?</h3>
                        <p>É só clicar no botão para preencher o formulário e solicitar um orçamento.</p>
                        <button className="button-roxo" data-tally-open="m6pGNw" data-tally-width="400" data-tally-overlay="1" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">Quero um orçamento!</button>
                    </div>
                </div>
                <div className="unv--container">
                    <div className="oferecemos--secao5--imagens unv--corpo unv--colunasemicheia">
                        <div className="oferecemos--secao5--item"><a href="https://www.uff.br/" title="Universidade Federal Fluminense"><img src="https://desaber.com.br/imgs/parceiros/logo-uff.png"  alt="Universidade Federal Fluminense" /></a></div>
                        <div className="oferecemos--secao5--item"><a href="http://culturaniteroi.com.br/biblioteca" title="Biblioteca Parque de Niterói"><img src="https://desaber.com.br/imgs/parceiros/logo-bpn.png"  alt="Biblioteca Parque de Niterói" /></a></div>
                        <div className="oferecemos--secao5--item"><a href="https://rondonia.ro.gov.br/secel/" title="Governo do Estado de Rondônia / SEJUCEL"><img src="https://desaber.com.br/imgs/parceiros/logo-govro.png" alt="Governo do Estado de Rondônia / SEJUCEL" /></a></div>
                    </div>
                </div>
                <div className="unv--container">
                    <div className="unv--corpo unv--colunasemicheia">
                        <p className="destaque9">Eles já confiaram na gente. :)</p>
                    </div>
                </div>
            </div>
            <BarraRodape />
        </div>
    );
}

export default Oferecemos;