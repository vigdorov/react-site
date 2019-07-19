import React from 'react';
import PropTypes from 'prop-types';
import { MenuTypes } from '../../const/menu';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

const TopMenu = props => {

  const handleClick = (e, id) => {
    e.preventDefault();

    const element = document.getElementById(id);
    element.scrollIntoView();
  };

  return (
    <div className="top-menu">
      <div className="top-menu__logo">
        <Logo/>
      </div>
      <div className="top-menu__items">
        {
          props.items.map( item => {
            return (
              <button
                className="top-menu__item"
                key={item.id}
                onClick={(e) => handleClick(e, item.id)}
              >
                { item.name }
              </button>
            );
          })
        }
      </div>
    </div>
  );
};

export default TopMenu;

TopMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.oneOf([ ...MenuTypes ])
    })
  ),
};

TopMenu.defaultProps = {
  items: [],
};
