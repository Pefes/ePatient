import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";


const NavigationItems = ( props ) => {
    return (
        <ul className = { classes.NavigationItems } >
            <NavigationItem
                link = "/patients"
                >Patients
            </NavigationItem>
        </ul>
    );
};


export default NavigationItems;