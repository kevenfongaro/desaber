import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import BotaoVoltar from './BotaoVoltar';
import '../css/Modal.css';


class Modal extends Component {
  constructor() {
    super();
    this.modalRef = React.createRef();
  }

  componentDidMount() {
    const { isModal } = this.props;

    if (isModal) {
      disableBodyScroll(this.modalRef.current);
    }
  }

  componentWillUnmount() {
    enableBodyScroll(this.modalRef.current);
  }

  render() {

    if (this.props.isModal) {
      return (
        <div
          ref={this.modalRef}
          className="modal-wrapper"
          onClick={() => this.props.history.goBack()}
        >
          <div className="modal" onClick={e => e.stopPropagation()}>
            {React.cloneElement(this.props.children, { modal: this.props.isModal })}
          </div>          
          <div className="modal--menu">
            <span ref={this.modalRef} onClick={() => this.props.history.goBack()} className="iconify" data-icon="bi:arrow-left-circle-fill"></span>
            {/* <svg className="logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350.1 575.94"><defs><style></style></defs><path className="cls-1" d="M74.15,422.17c-.52-30-1-55.7-1.39-81.43a17.23,17.23,0,0,1,.6-3.35,13.41,13.41,0,0,1,3.16,1.19A250.83,250.83,0,0,0,157,376c14.45,3.84,29.19,6.66,43.84,9.73,15.09,3.16,30.23,6.08,45.35,9.1,16.51,3.29,33,6.66,49.54,9.82,25.57,4.87,50,12.57,71.77,27.41,21.08,14.37,36,33.23,43.48,57.81,7,22.92,8.8,46.18,4.65,69.76-4.51,25.59-16,48-32.51,67.86-15.17,18.28-32.92,33.24-54.89,42.73-13.43,5.8-27.52,9.07-42,11.06-21.93,3-43.82,3.84-65.75.45-43.71-6.76-79.23-27.08-104.95-63.58a188.75,188.75,0,0,1-25.42-52,339.88,339.88,0,0,1-10.44-39.57,250.69,250.69,0,0,1-3.72-36.53C74.92,466.07,74.63,442,74.15,422.17Z" transform="translate(-72.76 -108.03)"></path><path className="cls-1" d="M422.32,435.1c-4.23-2.93-8.26-5.48-12-8.35a376.8,376.8,0,0,0-78.72-45.7c-32.09-13.87-64.33-27.41-96.48-41.15C209.78,329.1,185,317.3,163,300.49c-12.64-9.64-23.75-20.7-31.51-34.79-9.46-17.2-11.86-35.76-10.48-55a100,100,0,0,1,21.53-55.79c13.11-16.69,29.81-28.36,49.61-35.81,25.66-9.66,52.2-12.75,79.37-10.27,21.87,2,42.28,9,61.43,19.65,15.76,8.77,30.5,18.95,42.41,32.72,13.14,15.19,22.22,32.65,28.62,51.61,5.23,15.48,9.67,31.18,11.6,47.4,1.52,12.81,2.33,25.72,2.88,38.61,1.07,25.15,1.73,50.33,2.55,75.5q.94,29.22,1.85,58.44A11.05,11.05,0,0,1,422.32,435.1Z" transform="translate(-72.76 -108.03)"></path></svg> */}
          </div>
        
        </div>
      );
    } else {
      return (
        <div className="no-modal-wrapper">
            {React.cloneElement(this.props.children, { modal: this.props.isModal })}
            <BotaoVoltar />
        </div>
      );
    }
  }
}

export default withRouter(Modal);
