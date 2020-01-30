import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { Home } from './Home';
import { Contact } from './Contact';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { PostJob } from './PostJob';
import { SearchJob } from './SearchJob';
import { CareerPaths } from './CareerPaths';
import sideDrawer from './components/SideDrawer/SideDrawer';
import backdrop from './components/Backdrop/Backdrop';
import "bootstrap/dist/css/bootstrap.min.css";
import JobList from './components/job-list.component';
import EditJob from './components/edit-job.component';
import CreateJob from "./components/create-job.component";
import CreateUser from './components/create-user.component';







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
    let backDrop;

    if (this.state.sideDrawerOpen){
      backDrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div style={{height:'100%'}}>       
        <main style={{marginTop: '90px'}}>
        </main>
          <Router>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            {backDrop}
            <SideDrawer show={this.state.sideDrawerOpen}/>
            
            <section>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/user" component={CreateUser}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/searchjob" component={JobList}/>
                <Route path="/edit/:id" component={EditJob} />
                <Route path="/create" component={CreateJob} />
                <Route path="/careerpaths" component={CareerPaths}/>
                <Route component={NoMatch}/>
              </Switch>
            </section>
         
            
          </Router>
      </div>
 
      );

  }
  
}

export default App;

