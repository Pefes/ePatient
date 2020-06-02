import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from "./hoc/Layout/Layout";
import Patients from "./containers/Patients/Patients";


class App extends Component {

  render() {
    return (
      <Layout>
        <Switch>
          <Route path = "/patients" component = { Patients } />
          <Route path = "/" />
          <Redirect to = "/" />
        </Switch>
      </Layout>
    );
  }
}


export default App;
