import React from 'react';
import PropTypes from 'prop-types';

const Block = props => {

  const header = (
    <h2 className="block__header">
      {props.header}
    </h2>
  );

  const text = (
    <p className="block__text">
      {props.text}
    </p>
  );

  const blockClass = `block block-${props.background} align-${props.contentAlign}`;

  return (
    <div className={ blockClass } id={props.id}>
      <div className="block__top-content">
        { props.header && header }
        { props.text && text }
        { props.component() }
      </div>

      { props.children }
    </div>
  );
};

export default Block;

Block.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  background: PropTypes.oneOf(['light', 'secondary', 'light-secondary', 'active', 'dark']),
  contentAlign: PropTypes.oneOf(['left', 'center', 'right']),
  component: PropTypes.func,
  id: PropTypes.string,
};

Block.defaultProps = {
  header: '',
  text: '',
  background: 'light',
  contentAlign: 'center',
  component: () => {},
  id: '',
};
