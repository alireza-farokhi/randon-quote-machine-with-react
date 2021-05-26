import React, { Component } from "react";

import './App.css';

import Button from "./components/Button";
import _ from "lodash";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    };

    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
  };

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(
        quotes => this.setState({
          quotes,
        },() => {
          
          this.setState({
            selectedQuoteIndex: this.selectQuoteIndex()
          })
        })
      );

  }


  selectQuoteIndex() {
    if (!this.state.quotes.length) {
      return;
    }
    return _.random(0, this.state.quotes.length - 1);
  }

  get selectedQuote(){
    if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
      return null;
    }

    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  nextQuoteClickHandler = () => {

  }


  render() {
    console.log(this.selectedQuote)
    return (
      <div className="App" id="quote-box">
        <Button buttonName="Next Quote" clickHandler={this.nextQuoteClickHandler} />
      </div>
    );
  };
};

export default App;
