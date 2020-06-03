import React from "react";

import classes from "./Observation.module.css";


const observation = ( props ) => {
    return (
        <article className = { classes.Observation } >
            <p>{ props.name }</p>
            <div onClick = { () => props.clicked( props.index ) } >{ props.index }</div>
        </article>
    );
};


export default observation;