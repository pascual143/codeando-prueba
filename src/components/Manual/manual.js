import React, { Fragment, Component } from 'react';
import IntroHtml from './Html/Html';
import IntroCss from './Css/Css';
import './styles/css/styles.css'

import Card from 'react-bootstrap/Card';

import 'materialize-css';
import { Tabs, Tab } from 'react-materialize';

import htmlpic from '../../img/htmlpic.jpg';
import csspic from '../../img/csspic.jpg';
import javascriptpic from '../../img/javascriptpic.jpg';
import jquerypic from '../../img/jquerypic.jpg';
import bootstrappic from '../../img/bootstrappic.jpg';
import reactpic from '../../img/reactpic.jpg';

export default class Manual extends Component {
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
		return (
			<Fragment>
				<div className="divBody">
					<h1 className="center">Manual</h1>
					<div>
					<Tabs className="center divBody">
						<Tab className="slides divBody"
							options={{
								duration: 300,
								onShow: null,
								responsiveThreshold: Infinity,
								swipeable: false
							}}	
							title={
								<div>
									<div>
										<Card>
											<img className="tab" alt="que es html?" src={htmlpic}/>
										</Card>
									</div>
								</div>
							}
						>
							<IntroHtml />
						</Tab>
						<Tab className="slides divBody"  
							active
							options={{
								duration: 300,
								onShow: null,
								responsiveThreshold: Infinity,
								swipeable: false
							}}
							title={
								<div>
									<div>
										<Card>
											<img className="tab" alt="que es css?" src={csspic} />
										</Card>
									</div>
								</div>
							}
						>
							<IntroCss />
						</Tab>
						<Tab className="slides"
							options={{
								duration: 300,
								onShow: null,
								responsiveThreshold: Infinity,
								swipeable: false
							}}
							title={
								<div>
									<Card className="">
										<img className="tab" alt="que es JavaScript?" src={javascriptpic} />
									</Card>
								</div>
							}
						>
							JavaScript
						</Tab>
						<Tab className="slides"
							options={{
								duration: 300,
								onShow: null,
								responsiveThreshold: Infinity,
								swipeable: false
							}}
							title={
								<div>
									<Card className="">
										<img className="tab" alt="que es jquery?" src={jquerypic} />
									</Card>
								</div>
							}
						>
							JQuery
						</Tab>
						<Tab className="slides"
							options={{
								duration: 300,
								onShow: null,
								responsiveThreshold: Infinity,
								swipeable: false
							}}
							title={
								<div>
									<Card className="">
										<img className="tab" alt="que es bootstrap?" src={bootstrappic} />
									</Card>
								</div>
							}
						>
							Bootstrap
						</Tab>
						<Tab className="slides"
							options={{
								duration: 300,
								onShow: null,
								responsiveThreshold: Infinity,
								swipeable: false
							}}
							title={
								<div>
									<Card className="">
										<Card>
											<img className="tab" alt="que es react?" src={reactpic} />
										</Card>
									</Card>
								</div>
							}
						>
							React
						</Tab>
					</Tabs>
					</div>
				</div>
			</Fragment>
		);
	}
}

