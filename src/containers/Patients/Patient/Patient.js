import React from "react";

import { FaTransgender, FaBirthdayCake } from "react-icons/fa";
import classes from "./Patient.module.css";


const Patient = ( props ) => {
    return (
        <article className = { classes.Patient } >
            <div className = { classes.Name }><p>{ props.name }</p></div>
            <div><FaTransgender />Gender:<p>{ props.gender }</p></div>
            <div><FaBirthdayCake />Birthday:<p>{ props.birthdate }</p></div>
        </article>
    );
};


export default Patient;