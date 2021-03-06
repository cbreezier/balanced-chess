// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { helloWorld } from 'common';

type Props = {};
type State = {
  response: string
};

class App extends Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({response: res.express}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          From the backend: {this.state.response}
        </p>
        <p className="App-intro">
          From common libs: {helloWorld()}
        </p>
      </div>
    );
  }
}

export default App;
