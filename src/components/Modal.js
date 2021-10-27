import React from 'react';
import './Modal.css';

class Modal extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.closeModal()} className="modal-bg">
        <div onClick={(e) => e.stopPropagation()} className="modal-container">
          <div className="title-close-btn">
            <button onClick={() => this.props.closeModal()}> &#xd7; </button>
          </div>
          <div className="content">
            <div className="body">
              <p>{this.props.scripture.text}</p>
            </div>
            <div className="footer">{this.props.scripture.reference}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
