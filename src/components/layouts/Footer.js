import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './stylesLayouts.css';

export default class Footer extends Component {
	render() {
		return (
			<div>
				<div>
					<Helmet>
						<meta charSet="utf-8" />
						<title>Codeando - Aprende a programar y desarrollar paginas web</title>
					</Helmet>
				</div>
				<div>
					<footer className="footer mt-60">
						<div className="container" style={{ marginLeft: '250px' }}>
							<div className="row" style={{ height: '600px' }}>
								<div className="column" style={{}}>
									<div className="item_f1">
										<a href="about_us.html">About</a>
										<a href="our_blog.html">Blog</a>
										<a href="career.html">Careers</a>
										<a href="press.html">Press</a>
									</div>
								</div>
								<div className="column" style={{}}>
									<div className="item_f1">
										<a href="help.html">Help</a>
										<a href="coming_soon.html">Advertise</a>
										<a href="coming_soon.html">Developers</a>
										<a href="contact_us.html">Contact Us</a>
									</div>
								</div>
								<div className="column" style={{}}>
									<div className="item_f1">
										<a href="terms_of_use.html">Copyright Policy</a>
										<a href="terms_of_use.html">Terms</a>
										<a href="terms_of_use.html">Privacy Policy</a>
										<a href="sitemap.html">Sitemap</a>
									</div>
								</div>
								{/* <div className="col-lg-3 col-md-3 col-sm-6">
								<div className="item_f3">
									<a href="/" className="btn1542">
										Teach on Cursus
									</a>
									<div className="lng_btn">
										<div
											className="ui language bottom right pointing dropdown floating"
											id="languages"
											data-content="Select Language"
										>
											<a href="/">
												<i className="uil uil-globe lft" />Language<i className="uil uil-angle-down rgt" />
											</a>
										</div>
									</div>
								</div>
							</div> */}
								<div className="col-lg-1" style={{display: "inline-block", margin: "40px"}}>
									<div className="footer_bott">
										<div className="row">
											<div className="">
												<ul className="fotb_left">
													<li>
														<a href="/">
															<div className="footer_logo">
																<img 
																	src="images/pugFooter.jpg" 
																	alt="logo TandGo Footer" 
																	width= "200px"
																	height="50px"
																/>
															</div>
														</a>
													</li>
													<li>
														<p>
															© 2021 <strong>www.tandgo.es</strong>. All Rights Reserved.
														</p>
													</li>
												</ul>
											</div>
											<div>
												<div className="edu_social_links">
													<a href="https://www.facebook.com/TandGoAgency/?view_public_for=101655021757487">
														<i className="fab fa-facebook-f" />
													</a>
													<a href="https://www.google.com/search?safe=active&rlz=1C5CHFA_enGB832GB832&sxsrf=ALeKk01W8YNB4nGKHkHmgu5AwZPfAKDe9g%3A1609584796476&ei=nFDwX5HKHNuDhbIP66ufmAI&q=tandgo&oq=tandgo&gs_lcp=CgZwc3ktYWIQAzIHCAAQyQMQQzIECAAQCjIECAAQCjIECAAQCjIECAAQCjICCAAyBAgAEAoyBAgAEAoyBAgAEAoyBwgAEAoQywE6BAgAEEc6BAgjECc6CggAELEDEIMBEEM6DgguELEDEIMBEMcBEKMCOggILhCxAxCDAToICC4QxwEQowI6BAgAEEM6CAgAELEDEIMBOgoILhDHARCjAhBDOgcIABAUEIcCOg0ILhCxAxDJAxBDEJMCOgcILhCxAxBDOgcIABCxAxBDOgoILhCxAxCDARBDOgQILhBDOgoIABCxAxDJAxBDOggILhDHARCvAToLCC4QsQMQxwEQowI6DgguELEDEIMBEMcBEK8BOgUIABDJAzoKCC4QxwEQrwEQClCMI1jpNWD-QWgBcAR4AIAB2wGIAc0IkgEFMC42LjGYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab&ved=0ahUKEwiRiJ7Qiv3tAhXbQUEAHevVByMQ4dUDCA0&uact=5">
														<i className="fab fa-google-plus-g" />
													</a>
													<a href="https://www.linkedin.com/company/tandgo/?viewAsMember=true">
														<i className="fab fa-linkedin-in" />
													</a>
													<a href="https://www.instagram.com/tandgo_web/">
														<i className="fab fa-instagram" />
													</a>
													<a href="/">
														<i className="fab fa-youtube" />
													</a>
													{/* <a href="/">
														<i className="fab fa-pinterest-p" />
													</a> */}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</div>
		);
	}
}
