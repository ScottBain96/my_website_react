import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './Home';
import { Contact } from './Contact';
import { About } from './About';
import { NoMatch } from './NoMatch';
import Toolbar from './components/Toolbar/Toolbar';



class App extends Component {
  render() {
    return (

      <div className="App">

        <Toolbar />
        <main style={{marginTop: '90px'}}>
          <p>check me</p>
        </main>
         
          <Router>
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


// <React.Fragment>
     
// <Router>
//   <Switch>
    
//     <Route exact path="/" component={Home}/>
//     <Route path="/about" component={About}/>
//     <Route path="/contact" component={Contact}/>
//     <Route component={NoMatch}/>

//   </Switch>
// </Router>

// </React.Fragment>