import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import HomeFeatures from './Home/HomeFeatures.js';

export default class Home extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<Helmet>
						<meta charSet="utf-8" />
						<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    					<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery" />
						{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						<title>Codeando</title>
						<title>Home</title>
					</Helmet>
				</div>
				<div>
					{/* <!-- Header Start --> */}
					<div>
						{/* <!-- Body Start --> */}
						<div className="wrapper">
							<div className="sa4d25">
								<div className="container-fluid">
									<div className="row">
										<div className="col-xl-9 col-lg-8">
											<div>
												<HomeFeatures />
											</div>
											<div className="section3125 mt-50">
												<h4 className="item_title">Featured Courses</h4>
												<a href="/" className="see150">
													See all
												</a>
												<div className="la5lo1">
													<div className="owl-carousel featured_courses owl-theme">
														
														<div className="item">
															<div className="fcrse_1 mb-20">
																<a href="course_detail_view.html" className="fcrse_img">
																	<img src="images/courses/img-2.jpg" alt="img-2" />
																	<div className="course-overlay">
																		<div className="badge_seller">Bestseller</div>
																		<div className="crse_reviews">
																			<i className="uil uil-star" />4.5
																		</div>
																		<span className="play_btn1">
																			<i className="uil uil-play" />
																		</span>
																		<div className="crse_timer">28 hours</div>
																	</div>
																</a>
																<div className="fcrse_content">
																	<div className="eps_dots more_dropdown">
																		<a href="/">
																			<i className="uil uil-ellipsis-v" />
																		</a>
																		<div className="dropdown-content">
																			<span>
																				<i className="uil uil-share-alt" />Share
																			</span>
																			<span>
																				<i className="uil uil-heart" />Save
																			</span>
																			<span>
																				<i className="uil uil-ban" />Not
																				Interested
																			</span>
																			<span>
																				<i className="uil uil-windsock" />Report
																			</span>
																		</div>
																	</div>
																	<div className="vdtodt">
																		<span className="vdt14">5M views</span>
																		<span className="vdt14">15 days ago</span>
																	</div>
																	<a
																		href="course_detail_view.html"
																		className="crse14s"
																	>
																		The Complete JavaScript Course 2020: Build Real
																		Projects!
																	</a>
																	<a href="/" className="crse-cate">
																		Development | JavaScript
																	</a>
																	<div className="auth1lnkprce">
																		<p className="cr1fot">
																			By <a href="/">Jassica William</a>
																		</p>
																		<div className="prce142">$5</div>
																		<button className="shrt-cart-btn" title="cart">
																			<i className="uil uil-shopping-cart-alt" />
																		</button>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="section3125 mt-30">
												<h4 className="item_title">Newest Courses</h4>
												<a href="/" className="see150">
													See all
												</a>{' '}
											</div>
											<div className="section3126">
												<div className="row" />
											</div>
										</div>
										<div className="col-xl-3 col-lg-4">
											<div className="right_side">
												<div className="fcrse_2 mb-30">
													<div className="tutor_img">
														<a href="my_instructor_profile_view.html">
															<img src="images/left-imgs/img-10.jpg" alt="img-10" />
														</a>
													</div>
													<div className="tutor_content_dt">
														<div className="tutor150">
															<a
																href="my_instructor_profile_view.html"
																className="tutor_name"
															>
																Pascual Vila
															</a>
															<div className="mef78" title="Verify">
																<i className="uil uil-check-circle" />
															</div>
														</div>
														<div className="tutor_cate">
															Web Developer, Designer, and Teacher
														</div>
														<ul className="tutor_social_links">
															<li>
																<a href="/" className="fb">
																	<i className="fab fa-facebook-f" />
																</a>
															</li>
															<li>
																<a href="/" className="tw">
																	<i className="fab fa-twitter" />
																</a>
															</li>
															<li>
																<a href="/" className="ln">
																	<i className="fab fa-linkedin-in" />
																</a>
															</li>
															<li>
																<a href="/" className="yu">
																	<i className="fab fa-youtube" />
																</a>
															</li>
														</ul>
														<div className="tut1250">
															<span className="vdt15">615K Students</span>
															<span className="vdt15">12 Courses</span>
														</div>
														<a
															href="my_instructor_profile_view.html"
															className="prfle12link"
														>
															Go To Profile
														</a>
													</div>
												</div>
												<div className="fcrse_3">
													<div className="cater_ttle">
														<h4>Live Streaming</h4>
													</div>
													<div className="live_text">
														<div className="live_icon">
															<i className="uil uil-kayak" />
														</div>
														<div className="live-content">
															<p>Set up your channel and stream live to your students</p>
															{/* <button
																className="live_link"
																onClick="window.location.href = 'add_streaming.html';"
															>
																Get Started
															</button> */}
															<span className="livinfo">
																Info : This feature only for 'Instructors'.
															</span>
														</div>
													</div>
												</div>
												<div className="get1452">
													<h4>Get personalized recommendations</h4>
													<p>Answer a few questions for your top picks</p>
													{/* <button className="Get_btn" onClick="window.location.href = '#';">
														Get Started
													</button> */}
												</div>
												{/* <div className="fcrse_3">
													<div className="cater_ttle">
														<h4>Top Categories</h4>
													</div>
													<ul className="allcate15">
														<li>
															<a href="/" className="ct_item">
																<i className="uil uil-arrow" />Development
															</a>
														</li>
														<li>
															<a href="/" className="ct_item">
																<i className="uil uil-graph-bar" />Business
															</a>
														</li>
														<li>
															<a href="/" className="ct_item">
																<i className="uil uil-monitor" />IT and Software
															</a>
														</li>
														<li>
															<a href="/" className="ct_item">
																<i className="uil uil-ruler" />Design
															</a>
														</li>
														<li>
															<a href="/" className="ct_item">
																<i className="uil uil-chart-line" />Marketing
															</a>
														</li>
														<li>
															<a href="/" className="ct_item">
																<i className="uil uil-book-open" />Personal Development
															</a>
														</li>
														<li>
															<a href="/" className="ct_item">
																<i className="uil uil-camera" />Photography
															</a>
														</li>
														<li>
															<a href="/" className="ct_item">
																<i className="uil uil-music" />Music
															</a>
														</li>
													</ul>
												</div> */}
												<div className="strttech120">
													<h4>Become an Instructor</h4>
													<p>
														Top instructors from around the world teach millions of students
														on Cursus. We provide the tools and skills to teach what you
														love.
													</p>
													{/* <button className="Get_btn" onClick="window.location.href = '#';">
														Start Teaching
													</button> */}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
						</div>
						{/* <!-- Body End --> */}

						<script src="../../public/js/vertical-responsive-menu.min.js" />
						<script src="../../public/js/jquery-3.3.1.min.js" />
						<script src="../../public/vendor/bootstrap/js/bootstrap.bundle.min.js" />
						<script src="../../public/vendor/OwlCarousel/owl.carousel.js" />
						<script src="../../public/vendor/semantic/semantic.min.js" />
						<script src="../../public/js/custom.js" />
						<script src="../../public/js/night-mode.js" />
					</div>
				</div>
			</Fragment>
		);
	}
}
