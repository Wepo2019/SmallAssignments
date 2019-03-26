import React from 'react';
import '../Styles/Styles.css';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';
import Home from './Home/Home';
import Bosses from './Bosses/Bosses';


class App extends React.Component {
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
