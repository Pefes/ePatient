import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";


const NavigationItem = ( props ) => {
    return (
        <li>
            <NavLink
                to = { props.link }
                className = { classes.NavigationItem }
                >{ props.children }
            </NavLink>
        </li>
    );
};


export default NavigationItem;