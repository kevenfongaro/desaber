import React from "react";
import '../css/PaginaNotion.css'

class PaginaNotion extends React.Component {
  
  render() {
    return (
      <div className="notion--container">
        <iframe src={'https://notion.desaber.com.br/'+this.props.ID+(this.props.modal ? '?escondermenu=sim&esconderrodape=sim' : '')} title={this.props.ID}/>
      </div>
    )
  }
}

export default PaginaNotion;