import React, { Component } from 'react';
import Gallery from "./components/Gallery";
import FullpageImage from "./components/FullpageImage";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      imageOpen: false,
      imageClicked: "",
      fullpageImage: "",
    };
  }

  componentDidMount() {
    // Get Data and Insert in State
    // Update Loading to false
    axios.get(`https://www.mobile.de/hiring-challenge.json`)
    .then(res => {
      const data = res.data;
      this.setState({ 
        loading: false,
        data 
      });
    })
  }

  // Closes the Fullpage Image
  handlerButtonClose = (event) => {
    this.setState({
      imageOpen: !this.state.imageOpen,
    });
  }

  // Opens the Fullpage Image
  handlerImageClick = (event) => {
    // On click pass src of clicked image to fullpage component
    const fullpageImgSrc = event.target.getAttribute('src').replace(/_2/g, "_27")
    this.setState({
      imageOpen: !this.state.imageOpen,
      fullpageImage: fullpageImgSrc,
    });
  }

  render() {
    let imageData = this.state.data.images;
    let content;

    if(this.state.loading && !this.state.imageOpen) {
      content = <h1>Is Loading Data...</h1>;
    } else if (!this.state.loading && !this.state.imageOpen) {
      content = <Gallery title={ this.state.data.title } imageData={ imageData } handlerImageClick={ this.handlerImageClick } />;
    } else {
      content = <FullpageImage handlerButtonClose={ this.handlerButtonClose } src={ this.state.fullpageImage } title={ this.state.data.title } description={ this.state.data.htmlDescription } />;
    }

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;
