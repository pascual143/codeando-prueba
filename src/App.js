import React, { Fragment } from 'react';
import './App.css';

//Routing
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

//components
import Home from './components/Home.js';
import About from './components/About.js';
import Nav from './components/layouts/Nav.js';
import Explora from './components/layouts/Explora.js';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Explora" component={Explora} />
      </Fragment>
    </Router>
  );
}

export default App;
