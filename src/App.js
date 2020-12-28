import React, { Fragment } from 'react';
import './styles/css/App.css';

//Routing
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

//Components Manual
import Home from './components/Home.js';
import About from './components/About.js';
import Tutorial from './components/layouts/Tutorial.js';
import Videos from './components/layouts/Videos.js';
import Nav from './components/layouts/Nav.js';
import Explora from './components/layouts/Explora.js';
import Header from './components/Header';
import Footer from './components/layouts/Footer'
// import HomeFeatures from './components/Home/HomeFeatures.js';

//Components Manual
import IntroHtml from './components/Tutorial/Html/Html';
import IntroCss from './components/Tutorial/Css/Css';


// Components CheapSheet
import RefHtml from './components/CheapSheet/refHtml';
import RefDoctype from './components/CheapSheet/RefHtml/refDoctype';
import RefHtml2 from './components/CheapSheet/RefHtml/refHtml2';
import RefHead from './components/CheapSheet/RefHtml/refHead';
import RefMeta from './components/CheapSheet/RefHtml/refMeta';
import MenuTutorialHtml from './components/MenusTutorial/Html/menuTutorialHtml';
// import MenuTutorialCss from './components/MenusTutorial/Css/menuTutorialCss';
import queEsHtml from './components/Tutorial/Html/CapitulosHtml/queEsHtml';
import AnatomiaHtml from './components/Tutorial/Html/CapitulosHtml/anatomiaHtml';
import NormasStandar from './components/Tutorial/Html/CapitulosHtml/normasStandard3';
import EtiquetaHtml from './components/Tutorial/Html/CapitulosHtml/etiquetaHtml4';
import EstructuraHtml from './components/Tutorial/Html/CapitulosHtml/estructuraHtml5';
import Divs from './components/Tutorial/Html/CapitulosHtml/divs6';
import Head from './components/Tutorial/Html/CapitulosHtml/head7';


function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/Tutorial" component={Tutorial} />
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
        {/* Routes Menus Left */}
        <Route exact path="/MenuTutorialHtml" component={MenuTutorialHtml}/>
        <Route path="/queEsHtml" component={queEsHtml}/>
        <Route path="/anatomiaHtml" component={AnatomiaHtml} />
        <Route path="/normasStandard" component={NormasStandar} />
        <Route path="/etiquetaHtml" component={EtiquetaHtml} />
        <Route path="/estructuraHtml" component={EstructuraHtml} />
        <Route path="/divs" component={Divs} />
        <Route path="/head" component={Head} />

        <Footer />
      </Fragment>

    </Router>
  );
}

export default App;
