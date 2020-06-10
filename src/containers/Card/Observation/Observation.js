import React from "react";

import classes from "./Observation.module.css";
import { FaSyringe, FaNotesMedical } from "react-icons/fa";


const observation = ( props ) => {
    return (
        <article className = { classes.Observation } >
            <p>{ props.name }</p>
            <div onClick = { () => props.clicked( props.index ) } >
                {props.type === "observation"
                    ? <FaNotesMedical />
                    : <FaSyringe />
                }
            </div>
        </article>
    );
};

//props.observationsSize - props.index
export default observation;