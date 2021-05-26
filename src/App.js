import React, { Component } from "react";
import './App.css';

import Button from "./components/Button";

class App extends Component {
  render(){
    return (
      <div className="App" id="quote-box">
        <Button buttonName="Next Quote" />
      </div>
    );
  };
};

export default App;
