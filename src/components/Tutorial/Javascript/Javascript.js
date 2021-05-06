import React, { Fragment, Component } from 'react';
import './styles.css';

//HomeFeatures
import HomeFeatures from '../../Home/HomeFeatures.js';

// bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

import MenuTutorialJavaScript from '../../MenusTutorial/JavaScript/menuTutorialJavaScript';

// Capitulos
import QueEsJavascript from './CapitulosJavascript/queEsJavascript';
// function RenderAnatomiaCss({ AnatomiaCss }) {
// 	return <div>{AnatomiaCss}</div>;
// }

// function RenderComments({ Comments }) {
// 	return <div>{Comments}</div>;
// }

export default class IntroJavascript extends Component {
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
				return <MagicSliderDots dots={dots} numDotsToShow={50} dotWidth={150} />;
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
					<div style={{ textAlign: 'center' }}>
						{/* <Button className="buttonCapitulos" onClick={this.previous}>
							Previous
						</Button>
						<Button className="buttonCapitulos" onClick={this.next}>
							Next
						</Button> */}
					</div>
					<nav className="vertical_nav">
						<div className="left_section menu_left">
							<div className="left_section">
								<MenuTutorialJavaScript />
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
									<QueEsJavascript />
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
									<QueEsJavascript />
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
