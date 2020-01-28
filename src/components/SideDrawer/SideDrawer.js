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
            <li><Link to ="/Searchjob">SearchJob</Link></li>
            <li><Link to ="/Postjob">PostJob</Link></li>
            <li><Link to ="/CareerPaths">CareerPaths</Link></li>
        </ul>

    </nav>)

};


export default sideDrawer