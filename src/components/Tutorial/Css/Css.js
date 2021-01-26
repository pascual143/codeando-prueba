import React, { Fragment, Component } from 'react';
import './styles.css';

//HomeFeatures
import HomeFeatures from '../../Home/HomeFeatures.js';

// Capitulos
import QueEsCss from './CapitulosCss/queEsCss';
import AgregarEstilos2 from './CapitulosCss/agregarEstilos2';
import CreandoNormas3 from './CapitulosCss/creandoNormas3';
import SelectoresCss4 from './CapitulosCss/selectoresCss4';
import Backgrounds5 from './CapitulosCss/backgrounds5';


// bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

import MenuTutorialCss from '../../MenusTutorial/Css/menuTutorialCss';

// function RenderAnatomiaCss({ AnatomiaCss }) {
// 	return <div>{AnatomiaCss}</div>;
// }

// function RenderComments({ Comments }) {
// 	return <div>{Comments}</div>;
// }

export default class IntroCss extends Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		// this.state = [{
		// 	AnatomiaCss: json.AnatomiaCss,
		// }];
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
				return <MagicSliderDots dots={dots} numDotsToShow={50} dotWidth={300} />;
			}
		};

		// function Arrow(props) {
		// 	let className = props.type === 'next' ? 'nextArrow' : 'prevArrow';
		// 	className += ' arrow';
		// 	const char = props.type === 'next' ? '👉' : '👈';
		// 	return (
		// 		<span className={className} onClick={props.onClick}>
		// 			{char}
		// 		</span>
		// 	);
		// }

		return (
			<Fragment>
				<div className="divBody">
					{/* <div style={{ textAlign: 'center' }}>
						<Button className="buttonCapitulos" onClick={this.previous}>
							Previous
						</Button>
						<Button className="buttonCapitulos" onClick={this.next}>
							Next
						</Button>
					</div> */}
					<nav className="vertical_nav">
						<div className="left_section menu_left" id="">
							<div className="left_section">
								<MenuTutorialCss />
							</div>
						</div>
					</nav>
					<Slider
						ref={(c) => (this.slider = c)}
						{...settings}
						className="z-depth-5"
						style={{ margin: '30px', marginTop: '-150px' }}
					>
						<div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{ color: 'white' }}>
										P<br />
										<br />r<br />
										<br />e<br />
										<br />v
									</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{ color: 'white' }}>
										N<br />
										<br />e<br />
										<br />
										<br />x<br />
										<br />t
									</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<QueEsCss />
								</Card>
							</div>
						</div>
						<div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{ color: 'white' }}>
										P<br />
										<br />r<br />
										<br />e<br />
										<br />v
									</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{ color: 'white' }}>
										N<br />
										<br />e<br />
										<br />
										<br />x<br />
										<br />t
									</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<AgregarEstilos2 />
								</Card>
							</div>
						</div>
						<div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{ color: 'white' }}>
										P<br />
										<br />r<br />
										<br />e<br />
										<br />v
									</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{ color: 'white' }}>
										N<br />
										<br />e<br />
										<br />
										<br />x<br />
										<br />t
									</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<CreandoNormas3 />
								</Card>
							</div>
						</div>
						<div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{ color: 'white' }}>
										P<br />
										<br />r<br />
										<br />e<br />
										<br />v
									</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{ color: 'white' }}>
										N<br />
										<br />e<br />
										<br />
										<br />x<br />
										<br />t
									</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<SelectoresCss4 />
								</Card>
							</div>
						</div>
						<div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{ color: 'white' }}>
										P<br />
										<br />r<br />
										<br />e<br />
										<br />v
									</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{ color: 'white' }}>
										N<br />
										<br />e<br />
										<br />
										<br />x<br />
										<br />t
									</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<Backgrounds5 />
								</Card>
							</div>
						</div>
						
					</Slider>
					<div />
				</div>
				<div className="homeFeatures">
					<HomeFeatures />
				</div>
			</Fragment>
		);
	}
}
