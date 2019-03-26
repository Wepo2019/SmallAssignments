import React from 'react';
import '../Styles/Styles.css';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';
import Home from './Home/Home';


class App extends React.Component {
  componentDidMount() {
    this.props.getAllBosses();
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
         <NavigationBar />
            <div className="container">
              <Switch>
                  <Route exact path="/" component={ Home } />
              </Switch>
          </div>
      </div>
    );
  }
}

export default App;
