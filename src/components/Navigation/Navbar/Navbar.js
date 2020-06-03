import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import Brand from "./Brand/Brand";
import classes from "./Navbar.module.css";
import { GoPulse } from "react-icons/go";


const navbar = ( props ) => {
    return (
        <nav className = { classes.Navbar } >
            <Brand />
            <div className = { classes.MainIconContainer } >
                <GoPulse className = { classes.MainIcon } />
                <GoPulse className = { classes.MainIcon } />
                <GoPulse className = { classes.MainIcon } />
                <GoPulse className = { classes.MainIcon } />
                <GoPulse className = { classes.MainIcon } />
            </div>
            <NavigationItems />
        </nav>
    );
};


export default navbar;