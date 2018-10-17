import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from './actions'
import PuppyListContainer from './containers/PuppyListContainer';

class App extends Component {
  // componentDidMount() {
  //   this.props.dispatch(handleInitialData())
  // }

  render() {
    return (
      <div className="App">
        <Jumbotron>
          <Container>
            <h1 className="display-3">Pug Life</h1>
            <p className="lead">Poo what you gotta poo.</p>
          </Container>
        </Jumbotron>
        <Container>
          <PuppyListContainer />
        </Container>
      </div>
    );
  }
}

export default connect()(App);
