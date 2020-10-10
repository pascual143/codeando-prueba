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

//Components Manual
import IntroHtml from './components/Manual/Html/Html';
import IntroCss from './components/Manual/Css/Css';


// Components CheapSheet
import RefHtml from './components/CheapSheet/refHtml';
import RefDoctype from './components/CheapSheet/RefHtml/refDoctype';
import RefHtml2 from './components/CheapSheet/RefHtml/refHtml2';
import RefHead from './components/CheapSheet/RefHtml/refHead';
import RefMeta from './components/CheapSheet/RefHtml/refMeta';

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
        <Route exact path="/Html" component={IntroHtml} />
        <Route exact path="/Css" component={IntroCss} />
        {/* Routes CheapSheet */}
        <Route exact path="/CheapSheet" component={RefHtml} />
        <Route path="/CheapSheet/Doctype" component={RefDoctype} />
        <Route path="/CheapSheet/html" component={RefHtml2} />
        <Route path="/CheapSheet/head" component={RefHead} />
        <Route path="/CheapSheet/meta" component={RefMeta} />

        <Footer />
      </Fragment>

    </Router>
  );
}

export default App;
