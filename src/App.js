import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Account from './components/Account';
import Home from './components/Home';
import Login from './components/Login';
import PostParty from './components/PostParty';
import Signup from './components/Signup';
import NavigationBar from './components/NavigationBar';
import { useSelector } from 'react-redux';
import LoggedNavigationBar from './components/LoggedNavigationBar';

function App(){

  const logged = useSelector(state => state.loggedReducer);

  return(
    <div>
      <Router>
        <div>
          {/* Navigation bar */}
          {logged.token !== "" ? <LoggedNavigationBar/> : <NavigationBar/> }
          

          {/* This section is responsible of assigning to each URL a certain component */}
          <Switch>
            <Route path='/post-a-party'>
              <PostParty/>
            </Route>
            <Route path='/my-account'>
              <Account/>
            </Route>
            <Route path='/sign-up'>
              <Signup/>
            </Route>
            <Route path='/log-in'>
              <Login/>
            </Route>
            <Route path='/'>
            <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}



export default App;
