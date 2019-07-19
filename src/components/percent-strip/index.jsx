import React from 'react';
import PropTypes from 'prop-types';

const PercentStrip = props => {
  return (
    <div className="percent-strip">
      <div className="percent-strip__text">
        {`${props.text} ${props.percent}%`}
      </div>
      <div className="percent-strip__body">
        <div className="percent-strip__active"
             style={{ width: `${props.percent}%` }}
        />
      </div>
    </div>

  );
};

export default PercentStrip;

PercentStrip.propTypes = {
  text: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};
