import React from 'react';
import '../css/ProxEncontro.css';
import {returnLinguagem} from '../Linguagem.js';
import { Link } from 'react-router-dom';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import {isMobile} from "react-device-detect";
import MenuFlutuante from './MenuFlutuante.js';
import { WhatsappShareButton, WhatsappIcon, FacebookMessengerShareButton, FacebookMessengerIcon, FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TelegramShareButton, TelegramIcon } from "react-share";
import 'lazysizes';

const ProxEncontro = ({infosDaCategoria}) => {
    const { buttonProps, itemProps, isOpen } = useDropdownMenu(3);
    const encontro = infosDaCategoria.encontros;
    let encontrodescricao = encontro.descricao;
    let dataFormatada = (encontro.dataFuturaMaisProxima === 'indefinido' ? returnLinguagem('ptBr').semData : encontro.dataFuturaMaisProxima.toLocaleDateString());
    let dataPorExtenso = (encontro.dataFuturaMaisProxima === 'indefinido' ? '' : (returnLinguagem('ptBr').diaDaSemana[encontro.dataFuturaMaisProxima.getDay()] + ', ' + encontro.dataFuturaMaisProxima.getHours()+returnLinguagem('ptBr').hora +(encontro.dataFuturaMaisProxima.getMinutes() > 0 ? encontro.dataFuturaMaisProxima.getMinutes() + returnLinguagem('ptBr').minuto : '')));
    let dataParaCompartilhar = (encontro.dataFuturaMaisProxima === 'indefinido' ? '' : dataFormatada+" | "+dataPorExtenso);

    // Não exibir descrições muito longas:
    encontrodescricao = isMobile ? (encontrodescricao.length > 200 ? encontrodescricao.substring(0,200)+'...' : encontro.descricao) : (encontrodescricao.length > 250 ? encontrodescricao.substring(0,250)+'...' : encontro.descricao);

    return (
        <section className="proxEncontroContainer" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage:`url(${encontro.capa})`
            }}>
            <div className="proxEncontro--bg">
                <MenuFlutuante cor="branco" fixo={true} />
                <div className="proxEncontro">
                    <div className="proxEncontro--capa">
                        <img
                        data-sizes="auto"
                        src="https://desaber.com.br/imgs/ogimg/placeholder.png"   
                        data-src={encontro.ogimg}
                        className="lazyload blur-up"
                        alt={encontro.titulo}
                        title={encontro.titulo} />
                    </div>
                    <div className="proxEncontro--infos">
                        <span>{returnLinguagem('ptBr').vemporai}</span>
                        <h2>{encontro.titulo}</h2>
                        <p>{encontrodescricao}</p>
                        <div className="proxEncontro--infoBar">
                            {encontro.dataFuturaMaisProxima !== 'indefinido' &&
                            <div className="proxEncontro--infoBar--diaEHora proxEncontro--infoBar--item">
                                <span className="iconify" data-icon="bi:clock-fill"></span>
                                {dataPorExtenso}

                            </div>
                            }
                            <div className="proxEncontro--infoBar--data proxEncontro--infoBar--item">
                                <span className="iconify" data-icon="bi:calendar-event-fill"></span>
                                {encontro.altBotaoData ? encontro.altBotaoData : ''}
                                {dataFormatada}
                            </div>
                            {encontro.com != null &&
                            <div className="proxEncontro--infoBar--com proxEncontro--infoBar--item">
                                <span className="iconify" data-icon="bi:people-fill"></span>
                                {encontro.altBotaoCom ? encontro.altBotaoCom : returnLinguagem('ptBr').com}
                                {encontro.com}
                            </div>
                            }
                        </div>
                        <div className="proxEncontro--botoes">
                        
                        <Link 
                        to={encontro.linkExterno ? "/redirecionar/" + encontro.keyword : ({
                            pathname: "/encontro/"+ encontro.keyword,
                            state: { modal: true }})
                        } 
                        ><div className="proxEncontro--botao proxEncontro--botao--destaque">{encontro.altBotaoDeAcao ? encontro.altBotaoDeAcao : returnLinguagem('ptBr').botaoDeAcao}</div></Link>
                            <a className={"proxEncontro--botao proxEncontro--botao--secundario"+(isOpen ? '--aberto' : '')} {...buttonProps}>{encontro.altBotaoDeCompartilhar ? encontro.altBotaoDeCompartilhar : returnLinguagem('ptBr').botaoCompartilhar}</a>
                            <div className={isOpen ? 'visivel' : ''} role='menu' id='menu'>
                            <WhatsappShareButton id='menu-item-0'
                                url={"https://desaber.com.br/encontro/"+ encontro.keyword}
                                title={"*"+encontro.titulo.toUpperCase()+"*"+(dataParaCompartilhar === '' ? '' : '\n_'+dataParaCompartilhar+"_")+"\n\n"+encontro.descricao+"\n"}
                                separator={"\nSaiba mais em "} {...itemProps[0]}>
                                        <WhatsappIcon
                                        size={30}
                                        round = {true}
                                        />
                            </WhatsappShareButton>
                            <FacebookMessengerShareButton id='menu-item-1'
                                appId = "1986351161539970"
                                url={"https://desaber.com.br/encontro/"+ encontro.keyword}
                                {...itemProps[1]}>
                                        <FacebookMessengerIcon
                                        size={30}
                                        round = {true}
                                         />
                            </FacebookMessengerShareButton>
                            <FacebookShareButton id='menu-item-2'
                                url={"https://desaber.com.br/encontro/"+ encontro.keyword}
                                quote={encontro.titulo.toUpperCase()+"\n"+dataParaCompartilhar+"\n\n"+encontro.descricao+"\n\nSaiba mais em desaber.com.br"} 
                                {...itemProps[2]}>
                                        <FacebookIcon
                                        size={30}
                                        round = {true} />
                            </FacebookShareButton>
                            <LinkedinShareButton id='menu-item-3'
                                url={"https://desaber.com.br/encontro/"+ encontro.keyword}
                                title={encontro.titulo+" | "+dataFormatada}
                                source={"https://desaber.com.br"}
                                summary={encontro.titulo.toUpperCase()+"\n"+dataParaCompartilhar+"\n\n"+encontro.descricao+"\n\nSaiba mais em: "}
                                {...itemProps[3]}>
                                        <LinkedinIcon
                                        size={30}
                                        round = {true} />
                            </LinkedinShareButton>
                            <TelegramShareButton id='menu-item-4'
                                title={"\n\n**"+encontro.titulo.toUpperCase()+"**"+(dataParaCompartilhar === '' ? '' : '\n__'+dataParaCompartilhar+"__")+"\n\n"+encontro.descricao+"\n\nAcesse o link e Saiba mais!"}
                                {...itemProps[4]}
                                url={"https://desaber.com.br/encontro/"+ encontro.keyword}>
                                    <TelegramIcon
                                    size={30}
                                    round = {true} />
                            </TelegramShareButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
}
 
export default ProxEncontro;