import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.setState({ allBosses: this.props.bosses }) 
  }

  constructor(props) {
    super(props);
    this.state = {
      allBosses: [],
    }
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = ({ bosses }) => {
  return (
    bosses
  )
}

export default connect(mapStateToProps)(App);
