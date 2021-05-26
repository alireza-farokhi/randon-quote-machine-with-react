import React, { Component } from "react";


import "typeface-roboto";
import _ from "lodash";
import QuoteMachine from "./components/QuoteMachine";
import { Grid, withStyles } from "@material-ui/core";


const styles = {
  container:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  }
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    };

    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
    this.assignQuoteIndex = this.assignQuoteIndex.bind(this);
  };

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(
        quotes => this.setState({
          quotes,
        }, this.assignQuoteIndex)
      );

  }


  selectQuoteIndex() {
    if (!this.state.quotes.length) {
      return;
    }
    return _.random(0, this.state.quotes.length - 1);
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return null;
    }

    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  assignQuoteIndex() {
    this.setState({
      selectedQuoteIndex: this.selectQuoteIndex()
    });
  }


  render() {

    return (
      <Grid className={this.props.classes.container} id="quote-box" justify="center" container>
        <Grid xs={11} lg={8} item>
          <QuoteMachine selectedQuote={this.selectedQuote} assignQuoteIndex={this.assignQuoteIndex} />
        </Grid>
      </Grid >
    );
  };
};

export default withStyles(styles)(App);
