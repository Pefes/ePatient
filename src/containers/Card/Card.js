import React, { Component } from "react";

import classes from "./Card.module.css";
import patient from "../../maly.json";
import { FaTransgender, FaBirthdayCake } from "react-icons/fa";

import Observation from "./Observation/Observation";


class Card extends Component {
    state = {
        loading: 1,
        cardClasses: [ classes.Card, classes.CardShow ]
    }

    compareDateTime = ( a, b ) => {
        return new Date( a.dateTime ) - new Date( b.dateTime );
    }

    render() {
        let observations = patient.observations.sort( this.compareDateTime );
        observations = observations.map(( observation, index ) => {
            return (
                <Observation 
                    key = { index }
                    index = { index }
                    name = { observation.name } />
            );
        })

        return (
            <article className = { this.state.cardClasses.join(" ") } >
                <section className = { classes.PersonalInfo } >
                    <div><p className = { classes.Name } >{ patient.name }</p></div>
                    <div><FaTransgender className = { classes.Icon } /><p>{ patient.gender }</p></div>
                    <div><FaBirthdayCake className = { classes.Icon } /><p>{ patient.birthDate }</p></div>
                </section>
                <section className = { classes.Observations } >
                    { observations }
                </section>
            </article>
        );  
    }
}


export default Card;