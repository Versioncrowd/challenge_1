import React, { Component } from 'react';
import "./Image.css";
import PropTypes from 'prop-types';

class Image extends Component {
    render() {
      return (
        <div className="img-container uk-width-1-3@s">
          <div className="uk-card uk-card-default" >
            <img src={this.props.src} key={this.key} alt="" onClick={this.props.handlerImageClick} />
          </div>
        </div>
      );
    }
  }

// PropTypes
Image.propTypes = {
  src: PropTypes.string.isRequired,
  handlerImageClick: PropTypes.func.isRequired,
}
  
export default Image;

