import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { Home } from './Home';
import { Contact } from './Contact';
import { About } from './About';
import { NoMatch } from './NoMatch';
import sideDrawer from './components/SideDrawer/SideDrawer';
import backdrop from './components/Backdrop/Backdrop';





class App extends Component {

state = {

    sideDrawerOpen: false

}

//function to check the previous state of the sidedrawer and changes it to the opposite.
drawerToggleClickHandler = () => {

  this.setState((prevState) =>{

    return {sideDrawerOpen: !prevState.sideDrawerOpen};

  });

 
};

backdropClickHandler = () => {

  this.setState({sideDrawerOpen: false});



};


  render() {
    let sideDrawer;
    let backDrop;

    if (this.state.sideDrawerOpen){
      sideDrawer = <SideDrawer/>;
      backDrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div style={{height:'100%'}}>       
        <main style={{marginTop: '90px'}}>
        </main>
          <Router>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            {backDrop}
            {sideDrawer}
            <section>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route component={NoMatch}/>
              </Switch>
            </section>
          </Router>
      </div>
 
      );

  }
  
}

export default App;

