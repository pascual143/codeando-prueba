import React, { Fragment, Component } from 'react';

import '../../../styles/css/styles.css';
// Capitulos
import QueEsHtml from './CapitulosHtml/queEsHtml';
import AnatomiaHtml from './CapitulosHtml/anatomiaHtml';
import NormasStandar from './CapitulosHtml/normasStandard3';
import EtiquetaHtml from './CapitulosHtml/etiquetaHtml4';
import EstructuraHtml from './CapitulosHtml/estructuraHtml5';
import Divs from './CapitulosHtml/divs6';
import Head from './CapitulosHtml/head7';
import Title from './CapitulosHtml/title8';
import Headings from './CapitulosHtml/headings9';
import Atributos from './CapitulosHtml/atributos10';
import Texto from './CapitulosHtml/texto11';
import EstilosTexto from './CapitulosHtml/estilosTexto12';
import SaltosLinea from './CapitulosHtml/saltosLinea13';
import ListasNoOrdenadas from './CapitulosHtml/listasNoOrdenadas14';
import ListasOrdenadas from './CapitulosHtml/listasOrdenadas15';
import Imagenes from './CapitulosHtml/imagenes16';
import Videos from './CapitulosHtml/videos17';
import AnclasHyperlinks from './CapitulosHtml/anclasHyperlinks19';
import EnlacePagina from './CapitulosHtml/enlacePagina20';
import EnlaceOtra from './CapitulosHtml/enlaceOtra21';

import HomeFeatures from '../../Home/HomeFeatures.js';

// bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import 'materialize-css';

// Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

import './arrows.js';

export default class IntroHtml extends Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}

	next() {
		this.slider.slickNext();
	}
	previous() {
		this.slider.slickPrev();
	}

	render() {
		const settings = {
			dots: true,
			arrows: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			appendDots: (dots) => {
				return <MagicSliderDots dots={dots} numDotsToShow={50} dotWidth={30} />;
			}
		};

		return (
			<Fragment>
				<div className="homeFeatures">
					<HomeFeatures />
				</div>
				<div className="divBody">
					{/* <div style={{ textAlign: 'center' }}>
						<Button className="buttonCapitulos" onClick={this.previous}>
							Previous
						</Button>
						<Button className="buttonCapitulos" onClick={this.next}>
							Next
						</Button>
					</div> */}

					<Slider
						ref={(c) => (this.slider = c)}
						{...settings}
						className="z-depth-5"
						style={{ margin: '30px', marginTop: '-150px' }}
					>
						<div>
							<div className="divBody2" style={{}}>
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<QueEsHtml />
								</Card>
							</div>
						</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<AnatomiaHtml />
								</Card>
							</div>
							<div className="divBody2">
							<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<NormasStandar />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<EtiquetaHtml />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<EstructuraHtml />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<Divs />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<Head />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<Title />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<Headings />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<Atributos />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<Texto />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<EstilosTexto />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<SaltosLinea />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<ListasNoOrdenadas />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<ListasOrdenadas />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<Imagenes />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<Videos />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<AnclasHyperlinks />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<EnlacePagina />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside">
									<EnlaceOtra />
								</Card>
							</div>
					</Slider>
					{/* <div style={{ textAlign: 'center', marginTop: '25px' }}>
						<Button className="buttonCapitulos" onClick={this.previous}>
							Previous
						</Button>
						<Button className="buttonCapitulos" onClick={this.next}>
							Next
						</Button>
					</div> */}
				</div>
			</Fragment>
		);
	}
}
