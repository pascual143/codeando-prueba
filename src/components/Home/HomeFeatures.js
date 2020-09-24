import React, { Fragment, Component } from 'react';
// import { Link } from 'react-dom';
// import IntroHtml from '../Manual/Html/Html';
import '../../styles/css/stylesHome.css';

export default class HomeFeatures extends Component {
	render() {
		return (
			<Fragment>
				{/* // <Header /> */}
					<div className="pug">
						<section style={{width: "90%"}}>
							<a href="IntroHtml" className="slide">
								<div className="content">
									<h2>HTML</h2>
									<p>APRENDE HTML CON NUETRO CON CURSO Y CON NUESTRO MANUAL.</p>
								</div>
							</a>
							<a href="Css" className="slide">
								<div className="content">
									<h2>CSS</h2>
									<p>APRENDE CSS CON NUETRO CON CURSO Y CON NUESTRO MANUAL .</p>
								</div>
							</a>
							<a href="/" className="slide">
								<div className="content">
									<h2>JavaScritp</h2>
									<p>APRENDE JAVASCRIPT CON NUETRO CON CURSO Y CON NUESTRO MANUAL.</p>
								</div>
							</a>
							<a href="/" className="slide">
								<div className="content">
									<h2>jQuery</h2>
									<p>APRENDE JQUERY CON NUETRO CON CURSO Y CON NUESTRO MANUAL.</p>
								</div>
							</a>
							<a href="/" className="slide">
								<div className="content">
									<h2>Bootstrap</h2>
									<p>APRENDE BOOTSTRAP CON NUETRO CON CURSO Y CON NUESTRO MANUAL.</p>
								</div>
							</a>
							<a href="/" className="slide">
								<div className="content">
									<h2>React</h2>
									<p>APRENDE React CON NUETRO CON CURSO Y CON NUESTRO MANUAL.</p>
								</div>
							</a>
						</section>
					</div>
			</Fragment>
		);
	}
}
