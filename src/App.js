import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from "./hoc/Layout/Layout";
import Patients from "./containers/Patients/Patients";
import Card from "./containers/Card/Card";


class App extends Component {

  render() {
    return (
      <Layout>
        <Switch>
          <Route path = "/patients/:id" component = { Card } />
          <Route path = "/patients" component = { Patients } />
          <Redirect to = "/patients" />
        </Switch>
      </Layout>
    );
  }
}


export default App;
