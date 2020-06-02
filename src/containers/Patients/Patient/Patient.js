import React from "react";
import { NavLink } from "react-router-dom";

import { FaTransgender, FaBirthdayCake } from "react-icons/fa";
import classes from "./Patient.module.css";


const patient = ( props ) => {
    return (
        <article className = { classes.Patient } >
            <div className = { classes.Name }><p>{ props.name }</p></div>
            <div className = { classes.Info } ><FaTransgender className = { classes.Icon } />Gender:<p>{ props.gender }</p></div>
            <div className = { classes.Info } ><FaBirthdayCake className = { classes.Icon } />Birthday:<p>{ props.birthdate }</p></div>
            <NavLink
                to = { "/patients/" + props.id }
                className = { classes.Button }
                >More...
            </NavLink>
        </article>
    );
};


export default patient;