import React, { Component } from "react";
import { createPortal } from "react-dom";
// import PropTypes from "prop-types";
import styles from "../Modal/Modal.module.css";

const modalRoot = document.querySelector('#modal-root');

  class Modal extends Component {
    componentDidMount() {
      window.addEventListener('keydown', this.hendleKeyDown);
    }    
    componentWillUnmount() {
      window.removeEventListener('keydown', this.hendleKeyDown);
    }
    hendleKeyDown = e => {
      if (e.code === 'Escape') {
        this.props.showModal();
      }
    };
    hendleBecdropClick = e => {
      if (e.currentTarget === e.target) {
        this.props.showModal();
      }
    };

    render(){
      return createPortal(
        <div className={styles.Overlay} onClick={this.hendleBecdropClick} >
          <div className={styles.Modal} >
            {this.props.children}            
          </div>
        </div>,
        modalRoot,
      );
    }
  }
export default Modal;