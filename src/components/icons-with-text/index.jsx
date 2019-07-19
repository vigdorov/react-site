import React from 'react';
import PropTypes from 'prop-types';
import IconItemWithText from "./icon-item-with-text";

const IconsWithText = props => {
  return (
    <div className="icon-with-text">
      {
        props.items.map( (item, i) => {
          return (
            <IconItemWithText
              key={i}
              icon={item.icon}
              title={item.title}
              text={item.text}/>
          );
        })
      }
    </div>
  );
};

export default IconsWithText;

IconsWithText.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  iconPosition: PropTypes.oneOf(['left', 'top']),
};

IconsWithText.defaultProps = {
  iconPosition: 'top',
};
