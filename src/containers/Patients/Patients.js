import React, { Component } from "react";

import Patient from "./Patient/Patient";
import patientsJson from "../../pacjenci.json";
import classes from "./Patients.module.css";


class Patients extends Component {
    state = {
        sortBy: "name"
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

    render() {
        let sortedPatients;
        if ( this.state.sortBy === "name" )
            sortedPatients = patientsJson.sort( this.compareName );
        else if ( this.state.sortBy === "birthdate" )
            sortedPatients = patientsJson.sort( this.compareBirthdate );

        const patients = sortedPatients.map(patient => {
                return (
                    <Patient
                        key = { patient.id }
                        id = { patient.id }
                        name = { patient.name }
                        gender = { patient.gender }
                        birthdate = { patient.birthDate } />
                );
        });

        return (
            <section className = { classes.PatientsWrapper } >
                <div className = { classes.Sort }>
                    <p>Sort Patients by:</p>
                    <select className= { classes.Select } onChange = { this.selectOnChangeHandler } >
                        <option value = "name">Name</option>
                        <option value = "birthdate">Birthdate</option>
                    </select>
                </div>

                <div className = { classes.Patients } >
                    { patients }
                </div>
            </section>
        );
    }
}


export default Patients;