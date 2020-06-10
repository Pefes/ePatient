import React, { Component } from "react";
import axios from "axios";

import Patient from "./Patient/Patient";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./Patients.module.css";


class Patients extends Component {
    state = {
        patients: null,
        sortBy: "name",
        searchBy: null,
        showPatients: null
    };

    selectOnChangeHandler = ( event ) => {
        this.setState({ ...this.state, sortBy: event.target.value });
    }

    compareName = ( a, b ) => {
        return a.name.localeCompare( b.name );
    }

    compareBirthdate = ( a, b ) => {
        return new Date( a.birthDate ) - new Date( b.birthDate );
    }

    componentDidMount() {
        axios.get( "http://localhost:8081/patients" )
        .then(res => {
            this.setState({ ...this.state, patients: res.data, showPatients: res.data });
        })
        .catch(error => {
            console.log( "Error occured: " + error );
        });
    }

    searchOnClickHandler = () => {
        this.setState(prevState => {
            const foundPatients = [];

            for( let patient of prevState.patients ) {
                if( patient.name.toLowerCase().includes( prevState.searchBy.toLowerCase() ) )
                    foundPatients.push({ ...patient });
            }
    
            return { ...prevState, showPatients: foundPatients };
        });
        
    }

    searchOnChangeHandler = ( event ) => {
        this.setState({ ...this.state, searchBy: event.target.value });
    }

    render() {
        let patients = null;
        let spinner = <Spinner />;
        const patientsClasses = [ classes.Patients ];

        if ( this.state.patients ) {
            patientsClasses.push( classes.PatientsShow );
            spinner = null;
            let sortedPatients;

            if ( this.state.sortBy === "name" )
                sortedPatients = this.state.showPatients.sort( this.compareName );
            else if ( this.state.sortBy === "birthdate" )
                sortedPatients = this.state.showPatients.sort( this.compareBirthdate );
    
            patients = sortedPatients.map(patient => {
                    return (
                        <Patient
                            key = { patient.id }
                            id = { patient.id }
                            name = { patient.name }
                            gender = { patient.gender }
                            birthdate = { patient.birthDate } />
                    );
            });
        }
        
        return (
            <section className = { classes.PatientsWrapper } >
                { spinner }
                <div className = { classes.Sort }>
                    <p>Sort Patients by:</p>
                    <select className= { classes.Select } onChange = { this.selectOnChangeHandler } >
                        <option value = "name">Name</option>
                        <option value = "birthdate">Birthdate</option>
                    </select>
                </div>
                <div className = { classes.Search }>
                    <input type = "text" placeholder = "Name..." onChange = { this.searchOnChangeHandler } />
                    <button onClick = { this.searchOnClickHandler } >Search</button>
                </div>

                <div className = { patientsClasses.join(" ") } >
                    { patients }
                </div>
            </section>
        );
    }
}


export default Patients;