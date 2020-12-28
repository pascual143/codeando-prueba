import React, { Fragment, Component } from 'react';
import './styles.css';

// Capitulos
import QueEsCss from './CapitulosCss/queEsCss';
import AnatomiaHtml from '../Html/CapitulosHtml/anatomiaHtml.js';

import HomeFeatures from '../../Home/HomeFeatures.js';

// bootstrap
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

// Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

// import json from '../../../dis/db.json';

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
				return <MagicSliderDots dots={dots} numDotsToShow={50} dotWidth={20} />;
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
								<Card className="cardHtmlInside">
									<QueEsCss />
								</Card>
							</div>
						</div>
						<div>
							<div className="divBody2">
								{/* {this.state.AnatomiaCss.map((element) => (
									<Card className="cardHtmlInside" style={{ width: '86%' }} key={element}>
										<RenderAnatomiaCss AnatomiaCss={element} />
									</Card>
								))} */}
								<AnatomiaHtml />
							</div>
						</div>
						<div>
						<div className="divBody2">
								{/* {this.state.Comments.map((element) => (
									<Card className="cardHtmlInside" style={{ width: '86%' }} key={element.id}>
										<RenderComments Comments={element} />
									</Card>
								))} */}
						</div>
						</div>
						<div>
							{/* <Button className="buttonPrev float-left" onClick={this.previous}>
								Previous
							</Button>
							<Button className="buttonNext float-right" onClick={this.next}>
								Next
							</Button> */}
							<Card className="cardHtmlInside" style={{ width: '86%' }}>
								<h3>5</h3>
							</Card>
						</div>

						<div />
					</Slider>
					<div style={{ textAlign: 'center', marginTop: '25px' }}>
						{/* <Button className="buttonCapitulos" onClick={this.previous}>
							Previous
						</Button>
						<Button className="buttonCapitulos" onClick={this.next}>
							Next
						</Button> */}
						<Card className="cardHtmlInside" style={{ width: '86%' }}>
							<h3>6</h3>
						</Card>
					</div>
					<div />
				</div>
			</Fragment>
		);
	}
}
