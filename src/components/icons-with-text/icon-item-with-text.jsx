import React from 'react';
import PropTypes from 'prop-types';

const IconItemWithText = props => {
  const Icon = props.icon;
  const { iconPosition } = props;

  const body = (
    <div className={`icon-item-with-text__body ${iconPosition}`}>
      <h4 className="icon-item-with-text__title">
        { props.title }
      </h4>
      <p className="icon-item-with-text__text">
        { props.text }
      </p>
    </div>
  );

  const styleItem = {
    margin: (props.title || props.text) ? '' : '10px auto',
  };

  const styleIcon = {
    width: (props.title || props.text) ? '70px' : '120px',
    height: (props.title || props.text) ? '70px' : '120px',
  };

  return (
    <div
      className={`icon-item-with-text ${iconPosition}`}
      style={styleItem}
    >
      <div className="icon-item-with-text__icon" style={styleIcon}>
        <Icon />
      </div>
      {
        (props.title || props.text) && body
      }
    </div>
  );
};

export default IconItemWithText;

IconItemWithText.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'top']),
};

IconItemWithText.defaultProps = {
  iconPosition: 'top',
  title: '',
  text: '',
};
