import React , {Component} from 'react';
import '../css/MenuFlutuante.css';

class MenuFlutuante extends Component {
    
      componentDidMount() {
        if (!this.props.desativarScroll) {
          window.addEventListener("scroll", this.handleScroll);
        } else {
          document.querySelector(".menuFlutuante").classList.add('scroll');
        }
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = () => {
        if (window.scrollY > 40) {
          document.querySelector(".menuFlutuante").classList.add('scroll');
        } else {
          document.querySelector(".menuFlutuante").classList.remove('scroll');
        }
      };
    render() {
        return (
        <div className={'menuFlutuante ' + (this.props.fixo ? 'menuFlutuante--fixo ' + this.props.cor : 'menuFlutuante--naofixo')}>
            <div className="menuFlutuante--logo">
                <a href="/" title="Voltar ao início" alt="De Saber"><h1>De Saber</h1></a>
            </div>
            <a className={'menuFlutuante--link ' + this.props.cor} href="/sobre">Conheça</a>
            <a className={'menuFlutuante--link ' + this.props.cor} href="/oferecemos">Serviços</a>
            <a className={'menuFlutuante--link ' + this.props.cor} href="/contribua">Contribua</a>
        </div>
        )
    };
}

export default MenuFlutuante;