import React, { Component, Fragment } from 'react';
// import {Link} from 'react-router-dom';
import Helmet from 'react-helmet';
// import { Link } from "react-router-dom";

// import MenuTutorialHtml from '/Users/pascual/Documents/Trabajo/codeando/front/codeando/src/components/MenusTutorial/Html/menuTutorialHtml.js';
// import MenuTutorialCss from '/Users/pascual/Documents/Trabajo/codeando/front/codeando/src/components/MenusTutorial/Css/menuTutorialCss.js';

//Routing
// import { BrowserRouter as Router, Route } from 'react-router-dom'; 

export default class Nav extends Component {
    render() {
        return (
            <Fragment>
                <div>
					<Helmet>
						<meta charSet="utf-8" />
						<title>Codeando - Aprende a programar y desarrollar paginas web</title>
						<title>Navegador de Codeando para aprender a programar y desarrollar paginas web</title>
					</Helmet>
				</div>
                <div>
                    {/* <!-- Left Sidebar Start --> */}
						<nav className="vertical_nav">
							<div className="left_section menu_left" id="js-menu">
								<div className="left_section">
									{/* <Link><MenuTutorialHtml /></Link>
									<Link><MenuTutorialCss /></Link> */}
									<li className="menu--link fontMainButtons">
						
						
							<div className="font" style={{minHeight:"250px"}}>
									{/* <Link><MenuTutorialHtml /></Link> */}
									{/* <Link><MenuTutorialCss /></Link> */}
								{/* <li className="menu--link"><Link to={"/Html"} className="menuDropdown">HTML</Link></li>
								<li className="menu--link"><Link to={"/Css"}className="menuDropdown">CSS</Link></li>
								<li className="menu--link"><Link to={""}className="menuDropdown"> JavaScript</Link></li>
								<li className="menu--link"><Link to={""}className="menuDropdown"> jQuery</Link></li>
								<li className="menu--link"><Link to={""}className="menuDropdown"> Bootstrap</Link></li>
								<li className="menu--link"><Link to={""}className="menuDropdown"> React</Link></li>
								<li className="menu--link"><Link to={""}className="menuDropdown"> Git</Link></li>
								<li className="menu--link"><Link to={""}className="menuDropdown"> More...</Link></li> */}
							</div>
									{/* <Router>
										<Route path="/MenuTutorialHtml" component={MenuTutorialHtml} />
										<Route path="/Css" component={MenuTutorialCss} />
									</Router>  */}
								</li>

								</div>
								
								<div className="left_footer footerNav">
									<ul>
										<li>
											<a href="about_us.html">About</a>
										</li>
										<li>
											<a href="press.html">Press</a>
										</li>
										<li>
											<a href="contact_us.html">Contact Us</a>
										</li>
										<li>
											<a href="coming_soon.html">Advertise</a>
										</li>
										<li>
											<a href="coming_soon.html">Developers</a>
										</li>
										<li>
											<a href="terms_of_use.html">Copyright</a>
										</li>
										<li>
											<a href="terms_of_use.html">Privacy Policy</a>
										</li>
										<li>
											<a href="terms_of_use.html">Terms</a>
										</li>
									</ul>
								</div>
							</div>
						</nav>
						{/* <!-- Left Sidebar End --> */}
                </div>
            </Fragment>
        )
    }
}
