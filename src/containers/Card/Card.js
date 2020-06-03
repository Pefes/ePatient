import React, { Component } from "react";
import axios from "axios";

import classes from "./Card.module.css";
import { FaTransgender, FaBirthdayCake } from "react-icons/fa";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Observation from "./Observation/Observation";
import Dialog from "../../components/UI/Dialog/Dialog";
import Spinner from "../../components/UI/Spinner/Spinner";


class Card extends Component {
    state = {
        patient: null,
        modalIndex: null,
        page: 1
    }

    componentDidMount() {
        axios.get( "http://localhost:8081/patients/" + this.props.match.params.id )
        .then(res => {
            const patient = res.data;
            patient.observations = patient.observations.sort( this.compareDateTime );
            patient.observations = patient.observations.map(observation => {
                return { 
                    ...observation, 
                    dateTime: new Date( observation.dateTime ).toISOString().slice( 0, 16 ).replace( "T", " " ),
                    value: Math.round( observation.value * 100 ) / 100
                }
            });

            this.setState({ ...this.state, patient: patient });
        })
        .catch(error => {
            console.log( "Error occured: " + error );
        });
    }

    compareDateTime = ( a, b ) => {
        return new Date( b.dateTime ) - new Date( a.dateTime );
    }

    observationOnClickHandler = ( index ) => {
        this.setState({ ...this.state, modalIndex: index });
    }

    backgroundOnClickHandler = () => {
        this.setState({ ...this.state, modalIndex: null });
    }

    onClickMoreHandler = () => {
        this.setState(( prevState ) => {
            if ( prevState.page < Math.ceil( prevState.patient.observations.length / 30 ) )
                return { ...prevState, page: prevState.page + 1 };
            else
                return { ...prevState };
        });
    }

    onClickLessHandler = () => {
        this.setState(( prevState ) => {
            if ( prevState.page > 1 )
                return { ...prevState, page: prevState.page - 1 };
            else
                return { ...prevState };
        });
    }

    render() {
        let dialog = null;
        let observations = [];
        let patientInfo = null;
        const cardClasses = [ classes.Card ];
        const personalInfoClasses = [ classes.PersonalInfo ];
        const observationsClasses = [ classes.Observations ];
        const pageCounterClasses = [ classes.PageCounter ];
        let spinner = <Spinner />;

        if ( this.state.patient ) {
            spinner = null;
            cardClasses.push( classes.CardShow );
            personalInfoClasses.push( classes.PersonalInfoShow );
            observationsClasses.push( classes.ObservationsShow );
            pageCounterClasses.push( classes.PageCounterShow );

            if ( this.state.modalIndex !== null )
                dialog = <Dialog  
                            observation = { this.state.patient.observations[this.state.modalIndex] }
                            backgroundClicked = { this.backgroundOnClickHandler } />;
    
            for ( let i = this.state.page * 30 - 30; i < this.state.page * 30; i++ ) {
                if ( i < this.state.patient.observations.length )
                    observations.push(
                        <Observation 
                            key = { i }
                            index = { i }
                            observationsSize = { this.state.patient.observations.length }
                            name = { this.state.patient.observations[i].name }
                            clicked = { this.observationOnClickHandler } />
                    );
            }

            patientInfo = (
                    <React.Fragment>
                        <div><p className = { classes.Name } >{ this.state.patient.name }</p></div>
                        <div><FaTransgender className = { classes.Icon } /><p>{ this.state.patient.gender }</p></div>
                        <div><FaBirthdayCake className = { classes.Icon } /><p>{ this.state.patient.birthDate }</p></div>
                    </React.Fragment>
            );
        }
        
        return (
            <React.Fragment>
                { dialog }
                <article className = { cardClasses.join(" ") } >     
                    { spinner }
                    <section className = { personalInfoClasses.join( " " ) } >
                        { patientInfo }
                    </section>
                    <section className = { observationsClasses.join( " " ) } >
                        { observations }
                        <div className = { classes.Axis }></div>
                    </section>
                </article>
                <div className = { pageCounterClasses.join( " " ) } >
                    <GoArrowLeft className = { classes.Button } onClick = { this.onClickLessHandler } />
                    <div>{ this.state.page }</div>
                    <GoArrowRight className = { classes.Button } onClick = { this.onClickMoreHandler } />
                </div>
            </React.Fragment>
        );  
    }
}


export default Card;