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
							<a href="/Html" className="slide">
								<div className="content">
									<h2>HTML</h2>
									<p className="HomeFeatures_p">Aprende el lenguage HTML utilizado para el desarrollo y creación de páginas web.</p>
								</div>
							</a>
							<a href="/Css" className="slide">
								<div className="content">
									<h2>CSS</h2>
									<p className="HomeFeatures_p">Aprende a dar estilo a tus paginas web con el lenguage CSS</p>
								</div>
							</a>
							<a href="/Javascript" className="slide">
								<div className="content">
									<h2>JavaScritp</h2>
									<p className="HomeFeatures_p">Aprende JavaScript para dar logica, interaccion y mucho mas a tus paginas web</p>
								</div>
							</a>
							<a href="/" className="slide">
								<div className="content">
									<h2>jQuery</h2>
									<p className="HomeFeatures_p">Aprende jQuery para dar logica, interaccion y mucho mas a tus paginas web</p>
								</div>
							</a>
							<a href="/" className="slide">
								<div className="content">
									<h2>Bootstrap</h2>
									<p className="HomeFeatures_p">Aprende Bootstrap para dar estilo facilmente a tus paginas web</p>
								</div>
							</a>
							<a href="/" className="slide">
								<div className="content">
									<h2>React</h2>
									<p className="HomeFeatures_p">Aprende React para agilizar el SEO de tus web y crear componentes reutilizables</p>
								</div>
							</a>
						</section>
					</div>
			</Fragment>
		);
	}
}
