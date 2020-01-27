import React from 'react';
import { render } from '@testing-library/react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';







const toolbar = props => (

    <header className="toolbar">
        <nav className="toolbar_navigation">
            
            <div>
             <DrawerToggleButton/>
            </div>
            <div className="toolbar_logo"><a href="/">THE LOGO</a></div>
            <div className="space"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="/NoMatch">NoMatch</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;