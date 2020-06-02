import React, { Component } from "react";

import Patient from "./Patient/Patient";
import patientsJson from "../../pacjenci.json";
import classes from "./Patients.module.css";


class Patients extends Component {
    render() {
        const patients = patientsJson.map(patient => {
                return (
                    <Patient
                        key = { patient.id }
                        name = { patient.name }
                        gender = { patient.gender }
                        birthdate = { patient.birthDate } />
                );
        });

        return (
            <section className = { classes.Patients } >
                { patients }
            </section>
        );
    }
}


export default Patients;