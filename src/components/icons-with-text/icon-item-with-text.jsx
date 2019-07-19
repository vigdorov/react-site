import React from 'react';
import PropTypes from 'prop-types';

const IconItemWithText = props => {
  const Icon = props.icon;

  return (
    <div className="icon-item-with-text">
      <div className="icon-item-with-text__icon">
        <Icon />
      </div>
      <div className="icon-item-with-text__body">
        <h4 className="icon-item-with-text__title">
          { props.title }
        </h4>
        <p className="icon-item-with-text__text">
          { props.text }
        </p>
      </div>
    </div>
  );
};

export default IconItemWithText;

IconItemWithText.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
