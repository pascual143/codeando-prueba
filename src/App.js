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
import RefDoctype from './components/CheapSheet/RefHtml/refDoctype';
import RefHtml2 from './components/CheapSheet/RefHtml/refHtml2';

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/Manual" component={Manual} />
        <Route exact path="/Videos" component={Videos} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Explora" component={Explora} />
        {/* Routes Manual */}
        <Route exact path="/IntroHtml" component={IntroHtml} />
        {/* Routes CheapSheet */}
        <Route exact path="/CheapSheet" component={RefHtml} />
        <Route path="/CheapSheet/Doctype" component={RefDoctype} />
        <Route path="/CheapSheet/html" component={RefHtml2} />


        <Footer />
      </Fragment>

    </Router>
  );
}

export default App;
