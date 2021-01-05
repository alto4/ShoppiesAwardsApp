import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Searchbar from './components/Searchbar';
import Movies from './components/Movies';
import Nominations from './components/Nominations';
import About from './components/pages/About';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
