import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../containers/Login.jsx';
import Layout from '../containers/Layout.jsx';
import { RecoveryPasswprd } from '../containers/RecoveryPasswprd.jsx';
import { Home } from '../pages/Home.jsx';
import { NotFound } from '../pages/NotFound.jsx';
import '../styles/global.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path="recovery-password" component={RecoveryPasswprd} />
          <Route component={NotFound} />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default App;