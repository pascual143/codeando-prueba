import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet';

import Categorias from './Categorias';
import Manual from './Manual';

export default class Nav extends Component {
    render() {
        return (
            <Fragment>
                <div>
					<Helmet>
						<meta charSet="utf-8" />
						<title>Codeando</title>
						<title>Nav</title>
					</Helmet>
				</div>
                <div  style={{minHeight:"1000px"}}>
                    {/* <!-- Left Sidebar Start --> */}
						<nav className="vertical_nav">
							<div className="left_section menu_left" id="js-menu">
								<div className="left_section">
									<ul>
										<li className="menu--item">
											<a href="/" className="menu--link active" title="Home">
												<i className="uil uil-home-alt menu--icon" />
												<span className="menu--label">Home</span>
											</a>
										</li>
										{/* <li className="menu--item">
											<a href="live_streams.html" className="menu--link" title="Live Streams">
												<i className="uil uil-kayak menu--icon" />
												<span className="menu--label">Nuevos Videos</span>
											</a>
										</li>
										<li className="menu--item">
											<a href="/Explora" className="menu--link" title="Explore">
												<i className="uil uil-search menu--icon" />
												<span className="menu--label">Explora</span>
											</a>
										</li> */}
										<Manual />
                                        <Categorias />

										{/* <li className="menu--item">
											<a href="saved_courses.html" className="menu--link" title="Saved Courses">
												<i className="uil uil-heart-alt menu--icon" />
												<span className="menu--label">Saved Courses</span>
											</a>
										</li>
										<li className="menu--item  menu--item__has_sub_menu">
											<label className="menu--link" title="Pages">
												<i className="uil uil-file menu--icon" />
												<span className="menu--label">Pages</span>
											</label>
											<ul className="sub_menu">
												<li className="sub_menu--item">
													<a href="about_us.html" className="sub_menu--link">
														About
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="sign_in.html" className="sub_menu--link">
														Sign In
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="sign_up.html" className="sub_menu--link">
														Sign Up
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="sign_up_steps.html" className="sub_menu--link">
														Sign Up Steps
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="membership.html" className="sub_menu--link">
														Paid Membership
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="course_detail_view.html" className="sub_menu--link">
														Course Detail View
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="checkout_membership.html" className="sub_menu--link">
														Checkout
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="invoice.html" className="sub_menu--link">
														Invoice
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="career.html" className="sub_menu--link">
														Career
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="apply_job.html" className="sub_menu--link">
														Job Apply
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="our_blog.html" className="sub_menu--link">
														Our Blog
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="blog_single_view.html" className="sub_menu--link">
														Blog Detail View
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="company_details.html" className="sub_menu--link">
														Company Details
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="press.html" className="sub_menu--link">
														Press
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="live_output.html" className="sub_menu--link">
														Live Stream View
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="add_streaming.html" className="sub_menu--link">
														Add live Stream
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="search_result.html" className="sub_menu--link">
														Search Result
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="thank_you.html" className="sub_menu--link">
														Thank You
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="coming_soon.html" className="sub_menu--link">
														Coming Soon
													</a>
												</li>
												<li className="sub_menu--item">
													<a href="error_404.html" className="sub_menu--link">
														Error 404
													</a>
												</li> */}
											{/* </ul>
										</li> */}
									</ul>
								</div>
								{/* <div className="left_section">
									<h6 className="left_title">SUBSCRIPTIONS</h6>
									<ul>
										<li className="menu--item">
											<a href="instructor_profile_view.html" className="menu--link user_img">
												<img src="images/left-imgs/img-1.jpg" alt="img-1" />
												Rock Smith
												<div className="alrt_dot" />
											</a>
										</li>
										<li className="menu--item">
											<a href="instructor_profile_view.html" className="menu--link user_img">
												<img src="images/left-imgs/img-2.jpg" alt="img-2" />
												Jassica William
											</a>
											<div className="alrt_dot" />
										</li>
										<li className="menu--item">
											<a href="all_instructor.html" className="menu--link" title="Browse Instructors">
												<i className="uil uil-plus-circle menu--icon" />
												<span className="menu--label">Browse Instructors</span>
											</a>
										</li>
									</ul>
								</div> */}
								{/* <div className="left_section pt-2">
									<ul>
										<li className="menu--item">
											<a href="setting.html" className="menu--link" title="Setting">
												<i className="uil uil-cog menu--icon" />
												<span className="menu--label">Setting</span>
											</a>
										</li>
										<li className="menu--item">
											<a href="help.html" className="menu--link" title="Help">
												<i className="uil uil-question-circle menu--icon" />
												<span className="menu--label">Help</span>
											</a>
										</li>
										<li className="menu--item">
											<a href="report_history.html" className="menu--link" title="Report History">
												<i className="uil uil-windsock menu--icon" />
												<span className="menu--label">Report History</span>
											</a>
										</li>
										<li className="menu--item">
											<a href="feedback.html" className="menu--link" title="Send Feedback">
												<i className="uil uil-comment-alt-exclamation menu--icon" />
												<span className="menu--label">Send Feedback</span>
											</a>
										</li>
									</ul>
								</div> */}
								<div className="left_footer footerNav">
									<ul>
										<li>
											<a href="about_us.html">About</a>
										</li>
										<li>
											<a href="press.html">Press</a>
										</li>
										<li>
											<a href="contact_us.html">Contact Us</a>
										</li>
										<li>
											<a href="coming_soon.html">Advertise</a>
										</li>
										<li>
											<a href="coming_soon.html">Developers</a>
										</li>
										<li>
											<a href="terms_of_use.html">Copyright</a>
										</li>
										<li>
											<a href="terms_of_use.html">Privacy Policy</a>
										</li>
										<li>
											<a href="terms_of_use.html">Terms</a>
										</li>
									</ul>
									<div className="left_footer_content">
										<p>
											© 2020 <strong>Cursus</strong>. All Rights Reserved.
										</p>
									</div>
								</div>
							</div>
						</nav>
						{/* <!-- Left Sidebar End --> */}
                </div>
            </Fragment>
        )
    }
}
