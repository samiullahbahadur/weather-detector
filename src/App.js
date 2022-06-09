import React from "react";

class App extends React.Component {
  /*   constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: "",
    };
  } */

  // refactor the code
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude:{this.state.lat}</div>;
    }
    return <div>loading...!</div>;
  
  }
}

export default App;
