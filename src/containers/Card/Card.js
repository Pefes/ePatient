import React, { Component } from "react";

import classes from "./Card.module.css";
import patient from "../../maly.json";
import { FaTransgender, FaBirthdayCake } from "react-icons/fa";
import Observation from "./Observation/Observation";
import Dialog from "../../components/UI/Dialog/Dialog";


class Card extends Component {
    constructor() {
        super();
        patient.observations = patient.observations.sort( this.compareDateTime );

        this.state = {
            patient: patient,
            loading: 1,
            modalIndex: null,
            cardClasses: [ classes.Card, classes.CardShow ]
        }
    }


    compareDateTime = ( a, b ) => {
        return new Date( a.dateTime ) - new Date( b.dateTime );
    }

    observationOnClickHandler = ( index ) => {
        this.setState({ ...this.state, modalIndex: index });
    }

    backgroundOnClickHandler = () => {
        this.setState({ ...this.state, modalIndex: null });
    }

    render() {
        let dialog = null;
        if ( this.state.modalIndex !== null )
            dialog = <Dialog  
                        observation = { this.state.patient.observations[this.state.modalIndex] }
                        backgroundClicked = { this.backgroundOnClickHandler } />;

        const observations = this.state.patient.observations.map(( observation, index ) => {
            return (
                <Observation 
                    key = { index }
                    index = { index }
                    name = { observation.name }
                    clicked = { this.observationOnClickHandler } />
            );
        })

        return (
            <React.Fragment>
                { dialog }
                <article className = { this.state.cardClasses.join(" ") } >     
                    <section className = { classes.PersonalInfo } >
                        <div><p className = { classes.Name } >{ patient.name }</p></div>
                        <div><FaTransgender className = { classes.Icon } /><p>{ patient.gender }</p></div>
                        <div><FaBirthdayCake className = { classes.Icon } /><p>{ patient.birthDate }</p></div>
                    </section>
                    <section className = { classes.Observations } >
                        { observations }
                        <div className = { classes.Axis }></div>
                    </section>
                </article>
            </React.Fragment>
        );  
    }
}


export default Card;