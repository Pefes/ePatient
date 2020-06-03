import React from "react";
import classes from "./Dialog.module.css";


const dialog = ( props ) => {
    const observation = [];
    for ( let key in props.observation ) {
        observation.push(
            <div key = { key }>
                <p className = { classes.Name } >{ key }:</p>
                <p>
                    { props.observation[key] ? props.observation[key] : "-" }
                </p>
            </div>
        );
    }
    
    return (
        <div className = { classes.Dialog } >
            <div className = { classes.Background } onClick = { props.backgroundClicked } ></div>
            <div className = { classes.Info } >
                <h1>DETAILS</h1>
                { observation }
            </div>
        </div>
    );
};


export default dialog;