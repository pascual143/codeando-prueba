import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import '../../styles/css/styles.css';
import MenuApuntesHtml from './MenuApuntes/Html/menuApuntesHtml';

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
				<div className="refHtml__body wrapper">
				<nav className="vertical_nav">
					<div className="left_section menu_left" id="">
						<div className="left_section">
							<MenuApuntesHtml />
						</div>
					</div>
					</nav>
					{/* <!-- Header Start --> */}
					<div>
						{/* <!-- Body Start --> */}
						<div className="_1frstcate">
                            <h1 className="refTitles__h1">HTML</h1>
									<div className="row">
										<div className="col-lg-3 col-md-4">
											<h4>Empezando con Html</h4>
											<ul className="cate_option">
												<Link to='/CheapSheet/Doctype' className="li_row1"><code>&lt;DOCTYPE!&gt;</code></Link>
												<Link to="/CheapSheet/Html" className="li_row1"><code>&lt;html&gt;</code></Link>
												<Link to="/CheapSheet/Head" className="li_row1"><code>&lt;head&gt;</code></Link>
												<Link to="/CheapSheet/Meta" className="li_row1"><code>&lt;meta&gt;</code></Link>
												<Link to="/CheapSheet/Title" className="li_row1"><code>&lt;title&gt;</code></Link>
												<Link to="/CheapSheet/Body" className="li_row1"><code>&lt;body&gt;</code></Link>
												<Link to="/CheapSheet/h1" className="li_row1"><code>&lt;h1&gt;</code></Link>
												<Link to="/CheapSheet/p" className="li_row1"><code>&lt;p&gt;</code></Link>
											</ul>
										</div>
                                        <div className="col-lg-3 col-md-4">
											<h4>Empezando con Html</h4>
											<ul className="cate_option">
												<li><a href="/"><code>&lt;DOCTYPE!&gt;</code></a></li>
												<li><a href="/"><code>&lt;html&gt;</code></a></li>
												<li><a href="/"><code>&lt;head&gt;</code></a></li>
												<li><a href="/"><code>&lt;meta&gt;</code></a></li>
												<li><a href="/"><code>&lt;title&gt;</code></a></li>
												<li><a href="/"><code>&lt;body&gt;</code></a></li>
												<li><a href="/"><code>&lt;h1&gt;</code></a></li>
												<li><a href="/"><code>&lt;p&gt;</code></a></li>
											</ul>
										</div>
									</div>
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
				</div>
			</Fragment>
		);
	}
}
