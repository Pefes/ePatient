import React from "react";

import classes from "./Brand.module.css";
import { FaProcedures  } from "react-icons/fa";


const brand  = ( props ) => {
    return (
        <div className = { classes.Brand } >
            <FaProcedures className = { classes.Icon } />
            <p>e-Patient</p>
        </div>
    );
};


export default brand;