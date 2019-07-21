import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalImage from "./modal-image";

const Gallery = props => {
  const [ show, setShow ] = useState(false);
  const [ page, setPage ] = useState(0);

  const handleCloseModalImage = () => {
    setShow(false);
  };

  const handleShowModalImage = index => {
    setPage(index);
    setShow(true);
  };

  const handleChangeImage = value => {
    let newPage = page + value;

    if (value === -1 && page === 0) {
      newPage = props.images.length - 1;
    }

    if (value === 1 && page === props.images.length - 1) {
      newPage = 0;
    }

    setPage(newPage);
  };

  return (
    <React.Fragment>
      <ModalImage
        src={props.images[page]}
        show={show}
        onClose={handleCloseModalImage}
        onChangeImage={handleChangeImage}
      />

      <div className="gallery">
        {
          props.images.map( (url, i) => {
            return (
              <div className="gallery__item" key={i}>
                <img className="gallery__img" src={url} alt="img"/>
                <button
                  className="gallery__over-img"
                  type="button"
                  onClick={() => handleShowModalImage(i)}
                >
                  Полный экран
                </button>
              </div>
            );
          })
        }
      </div>
      <button type="button" className="gallery__more">
        load more work
      </button>
    </React.Fragment>
  );
};

export default Gallery;

Gallery.propTypes = {
  images: PropTypes.arrayOf( PropTypes.string ),
};

Gallery.defaultProps = {
  images: [],
};
