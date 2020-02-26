import React, { Component } from 'react';
import "./FullpageImage.css";
import uuid from "uuid";
import PropTypes from 'prop-types';

class FullpageImage extends Component {
    render() {
      return (
        <div className="image-full uk-container">
            <h1>{this.props.title}</h1>
            <button onClick={this.props.handlerButtonClose} className="uk-position-top-right" type="button" data-uk-close></button>
            <div className="uk-position-center image-container" >
                <img src={this.props.src} alt="" key={uuid.v4()} />
            </div>
        </div>
      );
    }
  }

   // PropTypes
  FullpageImage.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    handlerButtonClose: PropTypes.func.isRequired,
  }
  
  export default FullpageImage;