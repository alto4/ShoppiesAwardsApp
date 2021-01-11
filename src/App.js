import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Search from './components/Search';
import Nominations from './components/Nominations';
import Alert from './components/layout/Alert';
import './App.css';

import GlobalProvider from './context/GlobalState';
import AlertProvider from './context/alert/AlertState';

function App() {
  
  return (
    <GlobalProvider>
      <AlertProvider>
        <Router>
          <Navbar icon="fa fa-film" title="The Shoppies" />
          <Switch>
            <Route exact path="/">
              <Alert />
              <Search /> 
            </Route>
            <Route exact path="/Nominations">
              <Nominations />
            </Route> 
          </Switch> 
        </Router>
      </AlertProvider>
    </GlobalProvider>
  );
}

export default App;
