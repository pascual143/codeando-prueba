import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import '../../styles/css/styles.css';
import MenuApuntesHtml from './MenuApuntes/menuApuntesHtml';

// refHtml Components
// import RefDoctype from './RefHtml/refDoctype';

export default class CheapSheet extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<Helmet>
						<meta charSet="utf-8" />
						<meta name="description" content="ccheapSheet para recordar todos los parametros de html" />
						<meta name="keywords" content="Html, cheapsheet, chuleta, codeando, head, headings, body, tag, doctype, p, h1" />
						<title>Codeando</title>
						<title>Apuntes de consulta CheapSheet de programacion Html Css jQuery bootstrap javascript</title>
					</Helmet>
				</div>
				<div className="refHtml__body">
				<nav className="vertical_nav">
					<div className="left_section menu_left">
						<div className="left_section">
							<MenuApuntesHtml />
						</div>
					</div>
					</nav>
					{/* <!-- Header Start --> */}
					<div>
					<h1 className="refTitles__h1 fcrse_1" style={{textAlign: "center"}}>HTML</h1>	
						{/* <!-- Body Start --> */}
						<table>
                          
									<div style={{display: "grid", gridTemplateColumns: "250px 250px"}}>
										<td className="fcrse_1" style={{margin: "0px", textAlign: "center", minWidth: "250px"}}>
											<h4>Empezando con Html</h4>
											<ul className="">
												<Link to='/CheapSheet/doctype' className="li_row1"><code>&lt;DOCTYPE!&gt;</code></Link>
												<Link to="/CheapSheet/html" className="li_row1"><code>&lt;html&gt;</code></Link>
												<Link to="/CheapSheet/head" className="li_row1"><code>&lt;head&gt;</code></Link>
												<Link to="/CheapSheet/meta" className="li_row1"><code>&lt;meta&gt;</code></Link>
												<Link to="/CheapSheet/title" className="li_row1"><code>&lt;title&gt;</code></Link>
												<Link to="/CheapSheet/body" className="li_row1"><code>&lt;body&gt;</code></Link>
												<Link to="/CheapSheet/headings" className="li_row1"><code>&lt;headings&gt;</code></Link>
												<Link to="/CheapSheet/aragraph" className="li_row1"><code>&lt;paragraphs&gt;</code></Link>
												<Link to="/CheapSheet/anclas" className="li_row1"><code>&lt;anclas&gt;</code></Link>
												<Link to="/CheapSheet/articulo" className="li_row1"><code>&lt;articulo&gt;</code></Link>
												<Link to="/CheapSheet/seccion" className="li_row1"><code>&lt;seccion&gt;</code></Link>
												<Link to="/CheapSheet/aside" className="li_row1"><code>&lt;aside&gt;</code></Link>
												<br />
											</ul>
											</td>
											<td className="fcrse_1" style={{justifyContent: "center", textAlign: "center", minWidth: "250px", marginLeft: "50px"}}>
												<h4>HTML Avanzado</h4>
												<ul>
												<Link to='/CheapSheet/agregarEtiquetas' className="li_row1"><code>Agregar etiquetas</code></Link>
												
												<Link to="/CheapSheet/atributos" className="li_row1"><code>Atributos</code></Link>
												{/* <Link to="/CheapSheet/headings" className="li_row1"><code>&lt;headings&gt;</code></Link> */}
												{/* <Link to="/CheapSheet/paragraph" className="li_row1"><code>&lt;paragraphs&gt;</code></Link> */}
											</ul>
										</td>
										</div>						
									</table>
									
								</div>

						{/* <!-- Body End --> */}

						<script src="front/codeando/public/js/vertical-responsive-menu.min.js" />
						<script src="front/codeando/public/js/jquery-3.3.1.min.js" />
						<script src="front/codeando/public/vendor/bootstrap/js/bootstrap.bundle.min.js" />
						<script src="front/codeando/public/vendor/OwlCarousel/owl.carousel.js" />
						<script src="front/codeando/public/vendor/semantic/semantic.min.js" />
						<script src="front/codeando/public/js/custom.js" />
						<script src="front/codeando/public/js/night-mode.js" />
					</div>
			</Fragment>
		);
	}
}
