import React, { Component } from 'react';

import '../Styles/Styles.css';

class App extends Component {
  componentDidMount() {
    this.props.getAllBosses();
  }

  render() {
    return (
      <div>
         <NavigationBar />
            <div className="container">
              <Switch>
                  <Route exact path="/" component={ Home } />
                  <Route exact path="/bosses" component={ Bosses } />
              </Switch>
          </div>
      </div>
    );
  }
}

export default App;
