import React from 'react';
import PropTypes from 'prop-types';

const Modal = props => {

  const handleClickBackground = event => {
    if (!props.isStatic) {
      const { classList } = event.target;

      if (classList.value === 'modal') {
        props.onClose();
      }
    }
  };

  const handleClickSuccess = () => {
    props.successFunc();
    props.onClose();
  };

  const handleClickCancel = () => {
    props.cancelFunc();
    props.onClose();
  };

  const cross = (
    <button
      type="button"
      className="modal__cross"
      onClick={handleClickCancel}
    >
      x
    </button>
  );

  return (
    <div
      className="modal"
      onClick={handleClickBackground}
      style={{ visibility: props.show ? 'visible' : 'hidden'}}
    >
      <div className="modal__window">

        {
          props.isStatic && cross
        }

        <div className="modal__header">
          { props.title }
        </div>

        <div className="modal__body">
          { props.text }
        </div>

        <div className="modal__footer">
          <button
            type="button"
            onClick={handleClickSuccess}
            className="btn btn-primary btn-sm"
          >
            { props.successText }
          </button>
          {
            props.cancelText !== null &&
            <button
              type="button"
              onClick={handleClickCancel}
              className="btn btn-secondary btn-sm"
            >
              { props.cancelText }
            </button>
          }
        </div>

      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  successText: PropTypes.string,
  cancelText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(null)
  ]),
  successFunc: PropTypes.func,
  cancelFunc: PropTypes.func,
  isStatic: PropTypes.bool,
};

Modal.defaultProps = {
  title: '',
  text: '',
  successText: 'Ок',
  cancelText: 'Cancel',
  successFunc: () => {},
  cancelFunc: () => {},
  isStatic: false,
};
