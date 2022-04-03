import React, {useRef} from 'react';
import '../css/Contribua.css';
import '../css/Universal.css';
import {Helmet} from 'react-helmet-async';
import BotaoVoltar from './BotaoVoltar';
import MenuFlutuante from './MenuFlutuante';
import BarraRodape from './BarraRodape';

const Contribua = () => {
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })  
    return (
        <div className="contribua">
            <Helmet>
                <title>Contribua | De Saber</title>
                <meta
                name="description"
                content="Tem interesse em contribuir com a De Saber?"
                />
                <meta property="og:image" content="https://desaber.com.br/imgs/ogimg.jpg"/>            
            </Helmet>
            <MenuFlutuante cor="preto" fixo={true} />
            <BotaoVoltar />
            <div className="unv--secao contribua--secao1">
                <div className="unv--container contribua--secao1--chamada">
                    <div className="unv--cabecalho">
                        <h5>Quer contribuir com a De Saber?</h5>
                        <p>Esta página é pra você!</p>
                        <button className="button-roxo" onClick={executeScroll}>Quero doar!</button>
                    </div>
                </div>
                <div className="unv--box contribua--secao1--img">
                </div>
            </div>
            <div className="unv--secao contribua--secao2">
                <div className="unv--container">
                    <div className="unv--corpo unv--colunasemicheia">
                        <div className="unv--boxcontainer">
                            <div className="contribua--secao2--img unv--box">
                                <img src="https://desaber.com.br/imgs/paginas/contrate2.png" alt="contrate"/>
                            </div>
                            <div className="contribua--secao2--texto unv--box">
                                <p><span className="destaque3">• Esteja presente!</span> Participe das experiências; ocupe os grupos; questione e intervenha. Não desejamos que esse seja um espaço de conteúdo online - que pode ser consumido passivamente e sem envolvimento. Queremos criar uma comunidade - onde pensamos e experienciamos juntes caminhos possíveis para a educação audiovisual. Entrar no grupo do Telegram pode ser uma boa!</p>
                                <p><span className="destaque4">• Compartilhe o que você viveu por aqui!</span> Poste nas redes sociais; conte para os outros; se aproprie das experiências e permita que elas reverberem em novas ações. Marcar nossos perfis, @construirdesaber, é sempre bem vindo!</p>
                                <p><span className="destaque5">• Contribua financeiramente, se for uma possibilidade!</span> Buscando desviar da lógica consumidor-produto, não cobramos pelos encontros - permanecendo abertos a todes que tiverem interesse em participar. No entanto, o dinheiro é importante para que as nossas ações se estruturem e possam seguir acontecendo.</p>
                            </div>
                        </div>
                    </div>
                    <div ref={myRef}></div>
                </div>
            </div>
            <div className="unv--secao contribua--secao3">
                <div className="unv--container">
                    <div className="unv--corpo unv--colunasemicheia">
                        <div className=" unv--boxcontainer">
                            <div className="unv--box">
                                <h3>Como contribuo financeiramente?</h3>
                                <p>De forma pontual ou mensal. O valor é determinado por você – a partir da sua realidade financeira.</p>
                                <div className="contribua--secao3--lista">
                                <p>Sugerimos algumas <span className="destaque8">perguntas-reflexões</span> para decidir o valor:</p>
                                    <p className="destaque8">• Qual é a minha realidade financeira hoje?</p>
                                    <p className="destaque8">• Quanto eu gostaria de receber se estivesse no lugar desses profissionais?</p>
                                    <p className="destaque8">• Qual é o valor que considero justo para reconhecer financeiramente o trabalho proposto?</p>
                                    <br/><h2>Para onde vai esse dinheiro?</h2>
                                    <p>Para os nossos profissionais e para a ampliação desse espaço. Temos uma equipe de educadores, designers, produtores e mais, <a href="https://desaber.com.br/sobre/equipe" className="linksemestilo">que você pode conhecer clicando aqui</a>.</p>
                                    <p>Também usamos diversas plataformas para promover nossas atividades e muitas dessas plataformas são pagas ou possuem planos pagos que nos possibilitam explorá-las muito mais a fundo.</p>
                                </div>
                            </div>
                            <div className="unv--box contribua--secao3--pix">
                                <p className="destaque7">Através do nosso PIX!</p>
                                <p className="destaque9">É só scanear o QR Code e o valor vai cair em nossa conta no BANCO BS2:</p>
                                <img src="https://desaber.com.br/imgs/paginas/contrate3.png" alt="contrate"></img>
                                <iframe src="https://apption.co/app_clipboards/wdu129" title="pix"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="unv--corpo unv--duascolunas">
                        <p className="destaque8">Queremos aprender juntes a olhar mais coletivamente para o dinheiro, entendendo a co-responsabilidade financeira que existe entre todes nós.</p>
                    </div>
                </div>
            </div>
            <BarraRodape />
        </div>
    );
}

export default Contribua;