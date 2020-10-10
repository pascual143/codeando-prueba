import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../../styles/css/styles.css';

export default class ButtonBack extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<Helmet>
						<meta charSet="utf-8" />
						<title>Codeando</title>
						<title>Button Back</title>
					</Helmet>
				</div>
                    <Link to='/CheapSheet'><button className="buttonBack">Back</button></Link>
			</Fragment>
		);
	}
}
