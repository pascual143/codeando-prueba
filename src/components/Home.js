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
						<title>Home - Aprende codgo con TandGo Html Css bootstrap jQuery</title>
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
											<img
												className="hero"
												src="images/hero.gif"
												alt="Hero entrada con animacion"
											/>
											<div className="section3125 mt-50">
												<h4 className="item_title">Featured Courses</h4>
												<a href="/" className="see150">
													See all
												</a>
												<div>
													<HomeFeatures />
												</div>
											</div>
											{/* <div className="section3125 mt-30">
												<h4 className="item_title">Newest Courses</h4>
												<a href="/" className="see150">
													See all
												</a>{' '}
											</div> */}
											<div className="section3126">
												<div className="row" />
											</div>
										</div>
										<div className="col-xl-3 col-lg-4">
											<div className="right_side">
												<div className="fcrse_3">
													<div className="cater_ttle">
														<h4>Canal de Video</h4>
													</div>
													<div className="live_text">
														<div className="live_icon">
															<i className="uil uil-kayak" />
														</div>
														<div className="live-content">
															<p>
																Suscribete a nuestro canal de YouTube para complementar
																las clases y el temario.
															</p>
															<a
																className="live_link"
																href="https://www.youtube.com/"
																target="blanck"
															>
																TandGo
															</a>
															{/* <span className="livinfo">
																Info : This feature only for 'Instructors'.
															</span> */}
														</div>
													</div>
												</div>
												<div className="get1452">
													<h1 className="h1_hero">Obten Recomendaciones Personalizadas</h1>
													<p className="h1_hero_p">
														Ser desarrollador es en gran parte consultar documentacion y
														resolver problemas. Por eso creamos un grupo de comunicacion
														entre desarrolladores profesionales y principienates, para poder
														resolver las dudas. Unete a nuestro grupo en Slack. Conoceras a
														desarrolladores web, programadores y gente que quiere compartir
														sus conocimientos en el campo del diseno. No importa el nivel
														que tengas, principiante o avanzado.
													</p>
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

												{/* <div className="strttech120">
													<h4>Become an Instructor</h4>
													<p>
														Top instructors from around the world teach millions of students
														on Cursus. We provide the tools and skills to teach what you
														love.
													</p>
													<button className="Get_btn" onClick="window.location.href = '#';">
														Start Teaching
													</button>
												</div> */}
												<div className="fcrse_2 mb-30">
													{/* <div className="tutor_img">
														<a href="my_instructor_profile_view.html">
															<img src="images/left-imgs/img-10.jpg" alt="img-10" />
														</a>
													</div> */}
													<div className="tutor_content_dt">
														<img
															src="images/pug.jpg"
															alt="pug TanGo logo"
															style={{ width: '95px', height: '75px' }}
														/>
														<div className="tutor150">
															<a href="/" className="tutor_name">
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
																<a
																	href="https://www.facebook.com/TandGoAgency/?view_public_for=101655021757487"
																	className="fb"
																>
																	<i className="fab fa-facebook-f" />
																</a>
															</li>
															<li>
																<a
																	href="https://www.instagram.com/tandgo_web/"
																	className="tw"
																>
																	<i className="fab fa-instagram" />
																</a>
															</li>
															<li>
																<a
																	href="linkedin.com/in/pascual-vila-web-developer"
																	className="ln"
																>
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
															alt="intructor profile"
														>
															Go To Profile
														</a>
													</div>
												</div>
												<div className="fcrse_2 mb-30">
													{/* <div className="tutor_img">
														<a href="my_instructor_profile_view.html">
															<img src="images/left-imgs/img-10.jpg" alt="img-10" />
														</a>
													</div> */}
													<div className="tutor_content_dt">
														<h1 className="prfle12link">
															Esta pagina esta todavia en construccion. Si tienes algo que
															aportar o simplemente quieres donar puedes hacerlo aqui
														</h1>
														<form
															action="https://www.paypal.com/donate"
															method="post"
															target="_top"
														>
															<input
																type="hidden"
																name="hosted_button_id"
																value="GSN5SZ4FFU332"
															/>
															<input
																type="image"
																src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif"
																border="0"
																name="submit"
																title="PayPal - The safer, easier way to pay online!"
																alt="Donate with PayPal button"
															/>
															<img
																alt=""
																border="0"
																src="https://www.paypal.com/en_GB/i/scr/pixel.gif"
																width="1"
																height="1"
															/>
														</form>
													</div>
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
