import React, { Component } from "react";

import Navbar from "../../components/Navigation/Navbar/Navbar";
import classes from "./Layout.module.css";


class Layout extends Component {

    render() {
        return (
            <React.Fragment>
                <header className = { classes.Header }>
                    <Navbar />
                </header>
                <main className = { classes.Main }>
                    { this.props.children }
                </main>
            </React.Fragment>
        );
    }
}


export default Layout;