import React, { Fragment, Component } from 'react';
import '../../styles/css/stylesHome.css';

export default class HomeFeatures extends Component {
	render() {
		return (
			<Fragment>
				{/* // <Header /> */}
				<div>
				<body>
					<div className="pug">
						<section style={{width: "100%"}}>
							<div className="slide">
								<div className="content">
									<h2>HTML</h2>
									<p>APRENDE HTML CON NUETRO CON CURSO Y CON NUESTRO MANUAL.</p>
								</div>
							</div>
							<div className="slide">
								<div className="content">
									<h2>CSS</h2>
									<p>APRENDE CSS CON NUETRO CON CURSO Y CON NUESTRO MANUAL .</p>
								</div>
							</div>
							<div className="slide">
								<div className="content">
									<h2>JavaScritp</h2>
									<p>APRENDE JAVASCRIPT CON NUETRO CON CURSO Y CON NUESTRO MANUAL.</p>
								</div>
							</div>
							<div className="slide">
								<div className="content">
									<h2>jQuery</h2>
									<p>APRENDE JQUERY CON NUETRO CON CURSO Y CON NUESTRO MANUAL.</p>
								</div>
							</div>
							<div className="slide">
								<div className="content">
									<h2>Bootstrap</h2>
									<p>APRENDE BOOTSTRAP CON NUETRO CON CURSO Y CON NUESTRO MANUAL.</p>
								</div>
							</div>
							<div className="slide">
								<div className="content">
									<h2>React</h2>
									<p>APRENDE React CON NUETRO CON CURSO Y CON NUESTRO MANUAL.</p>
								</div>
							</div>
						</section>
					</div>
				</body>
				</div>
			</Fragment>
		);
	}
}
