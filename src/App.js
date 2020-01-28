import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { Contact } from './Contact';
import { About } from './About';
import { NoMatch } from './NoMatch';




class App extends Component {
  render() {
    return (
      <div className="App">       
        <main style={{marginTop: '90px'}}>
          <p>check me</p>
          
        </main>
          <Router>
            <Toolbar />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route component={NoMatch}/>
              </Switch>
          </Router>
      </div>
 
      );

  }
  
}

export default App;

