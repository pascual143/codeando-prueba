import React, { Fragment } from 'react';
import './styles/css/App.css';

//Routing
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

//components
import Home from './components/Home.js';
import About from './components/About.js';
import Manual from './components/layouts/Manual.js';
import Videos from './components/layouts/Videos.js';
import Nav from './components/layouts/Nav.js';
import Explora from './components/layouts/Explora.js';
import Header from './components/Header';
import Footer from './components/layouts/Footer'
// import HomeFeatures from './components/Home/HomeFeatures.js';
import IntroHtml from './components/Manual/Html/Html';

// import IntroHtml from './components/Manual/Html/Html.js'

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/Manual" component={Manual} />
        <Route path="/Videos" component={Videos} />
        <Route path="/About" component={About} />
        <Route path="/Explora" component={Explora} />
        <Route path="/IntroHtml" component={IntroHtml} />
        {/* <Route path="" component={IntroHtml}/> */}
        <Footer />
      </Fragment>

    </Router>
  );
}

export default App;
