import React, { Component } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.closeModalWithESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalWithESC);
  }

  handleBackdropOnClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
      return;
    }
  };

  closeModalWithESC = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const activeEl = this.props.imageContent;
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropOnClick}>
        <div className="Modal">
          <img src={activeEl.largeImageURL} alt={activeEl.tags} />
        </div>
      </div>,
      modalRoot,
    );
  }
}
