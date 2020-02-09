import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage.component'
import Dashboard from './Pages/Dashboard/Dashboard.component'
import SignIn from './Pages/Login/signin.component'

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/login' component={SignIn}/>
      <Route exact path='/dashboard' component={Dashboard}/>
    </Switch>
    
  )
}

export default App;
