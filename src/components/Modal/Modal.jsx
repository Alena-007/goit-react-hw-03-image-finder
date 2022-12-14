import { Component } from 'react';
import { Overlay, ModalBox } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscPress);
  }

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.modalClose();
    }
  };

  onEscPress = e => {
    if (e.code === 'Escape') {
      this.props.modalClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalBox>
          <img src={this.props.bigPhoto} alt="" />
        </ModalBox>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  modalClose: PropTypes.func.isRequired,
  bigPhoto: PropTypes.string.isRequired,
};
