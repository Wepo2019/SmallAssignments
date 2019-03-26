import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.getAllBosses();
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default App;
