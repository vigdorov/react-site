import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Slider extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        quote: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  constructor (props) {
    super(props);

    this.state = {
      page: 0,
      pages: this.props.items.length - 1,
    };
  }

  handleChangePage = numberPage => {
    this.setState({
      page: numberPage,
    });
  };

  render () {
    const { items } = this.props;
    const { page } = this.state;

    return (
      <div className="slider">
        <div className="slider__body">
          <p className="slider__quote">
            " { items[page].quote } "
          </p>
          <small className="slider__author">
            { items[page].author }
          </small>
        </div>
        <div className="slider__controls">
          {
            items.map( (item, i) => {
              const buttonClass = ['slider__button'];

              if (page === i) {
                buttonClass.push('active');
              }

              return (
                <div key={i} className="slider__button-container">
                  <button
                    className={buttonClass.join(' ')}
                    type="button"
                    onClick={() => this.handleChangePage(i)}
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Slider;
