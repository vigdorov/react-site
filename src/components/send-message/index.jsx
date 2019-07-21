import React, { Component } from 'react';
import Modal from "../modal";

class SendMessage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isSending: false,
      showModal: false,
    };
  }

  handleSendMessage = () => {
    this.setState({ isSending: true });

    setTimeout(() => {
      this.setState({
        isSending: false,
        showModal: true,
      });
    }, 700);
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render () {
    const { isSending, showModal } = this.state;
    return (
      <div className="send-message">
        <Modal
          show={showModal}
          onClose={this.handleCloseModal}
          title="Сообщение"
          text="Спасибо! Ваша заявка отправлена."
          cancelText={null}
        />

        <div className="send-message__row">
          <input
            className="send-message__input"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="send-message__input"
            type="text"
            placeholder="Your Email"
          />
        </div>

        <input
          className="send-message__input"
          type="text"
          placeholder="Your Title"
        />

        <textarea
          className="send-message__textarea"
          rows="10"
          placeholder="Your Comment"
        />

        <div className="send-message__row">
          <button
            type="button"
            className="btn btn-primary"
            disabled={isSending}
            onClick={this.handleSendMessage}
          >
            Send message
          </button>
        </div>
      </div>
    );
  }
}

export default SendMessage;
