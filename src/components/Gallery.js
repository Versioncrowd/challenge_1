import React, { Component } from 'react';
import Image from "./Image";
import PropTypes from 'prop-types';
import uuid from "uuid";
import "./Gallery.css";

class Gallery extends Component {

    render() {
      // Prepend and append to the src string
      let images = this.props.imageData.map((image) => {
            const uri = "https://" + image.uri + "_2.jpg";
            const key = uuid.v4();
            return <Image src={uri} key={key} handlerImageClick={this.props.handlerImageClick} />;
      });  

      return (
        <div>
          <div className="uk-container uk-container-expand chall-navbar">
            <nav>
              <h1>{this.props.title}</h1>
              <h2>Image Gallery</h2>
            </nav>
          </div>
          <div className="uk-container uk-container-small">
              <div className="inner-container">
                  <div data-uk-grid className="uk-grid uk-grid-large">
                      { images }
                  </div>
                  <div className="uk-grid uk-grid-large">
                    <div>
                        <p></p>
                    </div>
                  </div>
              </div> 
          </div>
        </div>
      );
    }
  }
  
  // PropTypes
  Gallery.propTypes = {
    imageData: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    handlerImageClick: PropTypes.func.isRequired,
  }

  export default Gallery;