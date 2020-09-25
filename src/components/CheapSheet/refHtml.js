import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import '../../styles/css/styles.css';


// refHtml Components
// import RefDoctype from './RefHtml/refDoctype';

export default class RefHtml extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<Helmet>
						<meta charSet="utf-8" />
						<title>Codeando</title>
						<title>CheapSheet</title>
					</Helmet>
				</div>
				<div className="refHtml__body wrapper">
					{/* <!-- Header Start --> */}
					<div>
						{/* <!-- Body Start --> */}
						<div className="_1frstcate">
                            <h1 className="refTitles__h1">HTML</h1>
									<div className="row">
										<div className="col-lg-3 col-md-4">
											<h4>Empezando con Html</h4>
											<ul className="cate_option">
												<li><Link to='/CheapSheet/Doctype'><code>&lt;DOCTYPE!&gt;</code></Link></li>
												<li><Link to="/CheapSheet/Html"><code>&lt;html&gt;</code></Link></li>
												<li><Link to="/CheapSheet/Head"><code>&lt;head&gt;</code></Link></li>
												<li><Link to="/CheapSheet/Meta"><code>&lt;meta&gt;</code></Link></li>
												<li><Link to="/CheapSheet/Title"><code>&lt;title&gt;</code></Link></li>
												<li><Link to="/CheapSheet/Body"><code>&lt;body&gt;</code></Link></li>
												<li><Link to="/CheapSheet/h1"><code>&lt;h1&gt;</code></Link></li>
												<li><Link to="/CheapSheet/p"><code>&lt;p&gt;</code></Link></li>
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
