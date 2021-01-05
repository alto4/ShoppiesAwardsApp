import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Searchbar from './components/Searchbar';
import Movies from './components/Movies';
import Nominations from './components/Nominations';
import About from './components/pages/About';
import './App.css';

import GlobalProvider from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar icon="fa fa-film" title="The Shoppies" />
        <Switch>
          <Route exact path="/">
            <Searchbar />
            <Movies />  
          </Route>
          <Route exact path="/Nominations">
            <Nominations />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>  
        </Switch> 
      </Router>
    </GlobalProvider>
  );
}

export default App;
