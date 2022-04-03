import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
import SwipeableViews from 'react-swipeable-views';
import '../css/Sobre.css';
import Dicionario from './Sobre--Dicionario';
import NaoSomos from './Sobre--NaoSomos';
import Historia from './Sobre--Historia';
import Valores from './Sobre--Valores';
import Principios from './Sobre--Principios';
import Equipe from './Sobre--Equipe';
import MenuFlutuante from './MenuFlutuante'
import BotaoVoltar from './BotaoVoltar';
import {Helmet} from 'react-helmet-async';
import { withRouter } from "react-router";


class Sobre extends React.Component {

  state = {
    index: 0,
  };

  componentDidUpdate() {
    this.swipeableActions.updateHeight();
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
      const sobresubpagina = this.props.match.params.sobresubpagina;
      if (sobresubpagina) {
        const paginas = ['significado','naosomos','historia','valores','principios','equipe'];
        var paginaId = paginas.indexOf(sobresubpagina);
        this.setState({
          index: (paginaId < 0 ? 0 : paginaId),
      });
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize = (event) => {
    this.swipeableActions.updateHeight();
  }

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div>
        <Helmet>
            <title>Sobre nós | De Saber</title>
            <meta
            name="description"
            content="O que é a De Saber? Um pouquinho sobre nós."
            />
            <meta property="og:image" content="https://desaber.com.br/imgs/ogimg.jpg"/>            
        </Helmet>
        <MenuFlutuante cor='preto' fixo={true} />
        <Tabs value={index} onChange={this.handleChange} className="tabs" TabIndicatorProps={{ style: { background: "none" } }}>
          <Tab label="De Saber?" />
          <Tab label="Não somos" />
          <Tab label="História" />
          <Tab label="Valores" />
          <Tab label="Princípios" />
          <Tab label="Equipe" />
        </Tabs>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex} enableMouseEvents  action={actions => {
    this.swipeableActions = actions;
  }}
  animateHeight
>
            <div className="slide slide1">
                <Dicionario />
            </div>
            <div className="slide slide2">
                <NaoSomos />
            </div>
            <div className="slide slide3">
                <Historia />
            </div>
            <div className="slide slide4">
                <Valores /> 
            </div>
            <div className="slide slide5">
                <Principios />
            </div>
            <div className="slide slide6">
                <Equipe />
            </div>
        </SwipeableViews>
        <BotaoVoltar />
      </div>
    );
  }
}

export default withRouter(Sobre);