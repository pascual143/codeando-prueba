import React, { Fragment, Component } from 'react';

import '../../../styles/css/styles.css';
// Capitulos
import QueEsHtml from './CapitulosHtml/queEsHtml.js';
import AnatomiaHtml from './CapitulosHtml/anatomiaHtml.js';
import NormasStandar from './CapitulosHtml/normasStandard3';
// import RecursosHtml from './CapitulosHtml/Recursos/recursosHtml.js';
// import EjerciciosHtml from './CapitulosHtml/Ejercicios/ejerciciosHtml.js';
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
				return <MagicSliderDots dots={dots} numDotsToShow={50} dotWidth={20} />;
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
						style={{ margin: '30px' }}
					>
						<div>
							<div className="divBody2" style={{}}>
								<Card className="cardHtmlInside">
									<Button className="buttonPrev float-left" onClick={this.previous}>
										<span>Prev</span>
									</Button>
									<Button className="buttonNext float-right" onClick={this.next}>
										<span>Next</span>
									</Button>
									<QueEsHtml />
								</Card>
							</div>
						</div>
						<div className="divBody2">
							<Button className="buttonPrev float-left" onClick={this.previous}>
								Prev
							</Button>
							<Button className="buttonNext float-right" onClick={this.next}>
								Next
							</Button>
							<Card className="cardHtmlInside">
								<AnatomiaHtml />
							</Card>
						</div>
						<div className="divBody2">
							<Button className="buttonPrev float-left" onClick={this.previous}>
								Prev
							</Button>
							<Button className="buttonNext float-right" onClick={this.next}>
								Next
							</Button>
							<Card className="cardHtmlInside">
								<NormasStandar />
							</Card>
						</div>
						<div className="divBody2">
							<Button className="buttonPrev float-left" onClick={this.previous}>
								Prev
							</Button>
							<Button className="buttonNext float-right" onClick={this.next}>
								Next
							</Button>
							<Card className="cardHtmlInside" style={{ width: '86%' }}>
								<h3>4</h3>
							</Card>
						</div>
						<div className="divBody2">
							<Button className="buttonPrev float-left" onClick={this.previous}>
								Prev
							</Button>
							<Button className="buttonNext float-right" onClick={this.next}>
								Next
							</Button>
							<Card className="cardHtmlInside" style={{ width: '86%' }}>
								<h3>5</h3>
							</Card>
						</div>
						<div className="divBody2">
							<Button className="buttonPrev float-left" onClick={this.previous}>
								Prev
							</Button>
							{/* <Button className="buttonNext float-right" onClick={this.next}>
								Next
							</Button> */}
							<Card className="cardHtmlInside" style={{ width: '86%' }}>
								<h3>6</h3>
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
