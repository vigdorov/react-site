import React from 'react';
import PropTypes from 'prop-types';

const Gallery = props => {
  return (
    <React.Fragment>
      <div className="gallery">
        {
          props.images.map( (url, i) => {
            return (
              <div className="gallery__item" key={i}>
                <img className="gallery__img" src={url} alt="img"/>
                <button className="gallery__over-img" type="button">
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
