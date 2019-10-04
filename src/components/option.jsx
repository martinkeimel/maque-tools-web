import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image'

export class Option extends React.Component {
  render() {
    return (
      <a href="#" className={ this.props.isSelected ? 'selected' : ''}>
        <div className="border-animation__inner">
          <Image src={this.props.imageUrl} rounded />
        </div>
      </a>
    )
  };
};

Option.propTypes = {
    imageUrl: PropTypes.string,
    isSelected: PropTypes.bool
};

export default Option;