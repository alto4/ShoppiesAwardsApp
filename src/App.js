import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Search from './components/Search';
import Nominations from './components/Nominations';
import Footer from './components/layout/Footer';
import './App.css';

import GlobalProvider from './context/GlobalState';

function App() {
  
  return (
    <GlobalProvider>
      <Router>
        <Navbar icon="fa fa-film" title="The Shoppies" />
        <Switch>
           <Route exact path="/">
            <Search /> 
          </Route>
          <Route exact path="/Nominations">
             <Nominations />
          </Route> 
        </Switch>
        <Footer /> 
      </Router>
    </GlobalProvider>
  );
}

export default App;
