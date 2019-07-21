import React from 'react';
import PropTypes from 'prop-types';

const ModalImage = props => {

  const handleClickBackground = event => {
    if (!props.isStatic) {
      const { classList } = event.target;

      if (classList.value === 'modal') {
        props.onClose();
      }
    }
  };

  return (
    <div
      className="modal"
      style={{ visibility: props.show ? 'visible' : 'hidden'}}
      onClick={handleClickBackground}
    >
      <button onClick={() => props.onChangeImage(-1)}>left</button>
      <div className="modal__window">
        <img src={props.src} alt="gallery-img" />
      </div>
      <button onClick={() => props.onChangeImage(1)}>right</button>
    </div>
  );
};

export default ModalImage;

ModalImage.propTypes = {
  src: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onChangeImage: PropTypes.func.isRequired,
  isStatic: PropTypes.bool,
  show: PropTypes.bool,
};

ModalImage.defaultProps = {
  isStatic: false,
  show: true,
};
