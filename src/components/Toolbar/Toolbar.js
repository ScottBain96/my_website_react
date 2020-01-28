import React from 'react';
import { render } from '@testing-library/react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Link } from 'react-router-dom';
import Logo from "./logo192.png";

const toolbar = props => (

    <header className="toolbar">
        <nav className="toolbar_navigation">
            
            <div className="toolbar_toggle_button">
             <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"> <img src={Logo}></img></div>
            <div className="space"></div>
            <div className="toolbar_navigation_start">
                    <li><Link to ="/SearchJob">SearchJob</Link></li>
                    <li><Link to ="/Postjob">PostJob</Link></li>
                    <li><Link to ="/CareerPaths">CareerPaths</Link></li>
                

            </div>
            <div className="toolbar_navigation_end">

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
                
            </div>
           

        </nav>
    </header>
);

export default toolbar;