import React, { Fragment } from 'react';
import './styles/css/App.css';

//Routing
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

//Components Manual 
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

// Components CheapSheet
import RefHtml from './components/CheapSheet/refHtml';

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
        {/* Routes Manual */}
        <Route path="/IntroHtml" component={IntroHtml} />
        {/* Routes CheapSheet */}
        <Route path="/RefHtml" component={RefHtml} />
        <Footer />
      </Fragment>

    </Router>
  );
}

export default App;
