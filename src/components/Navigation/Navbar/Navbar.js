import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import Brand from "./Brand/Brand";
import classes from "./Navbar.module.css";


const Navbar = ( props ) => {
    return (
        <nav className = { classes.Navbar } >
            <Brand />
            <p>PATIENTS</p>
            <NavigationItems />
        </nav>
    );
};


export default Navbar;