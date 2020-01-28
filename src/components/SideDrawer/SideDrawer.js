import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';

const sideDrawer = props => {

    let drawerClasses = 'side_drawer';
    if (props.show){
        
        drawerClasses = 'side_drawer open';
    }

    return (<nav className={drawerClasses}>
        <ul>
            <li><Link to ="/search-job">Search Job</Link></li>
            <li><Link to ="/post-a-job">Post a Job</Link></li>
            <li><Link to ="/career-paths">Career Paths</Link></li>
        </ul>

    </nav>)

};


export default sideDrawer