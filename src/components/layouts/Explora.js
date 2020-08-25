import React, { Component } from 'react'
import Helmet from 'react-helmet';

export default class Explora extends Component {
	render() {
		return (
			<div>
				<div>
					<Helmet>
						<meta charSet="utf-8" />
						<title>Codeando</title>
						<title>Explora Menu Navegacion</title>
					</Helmet>
				</div>
                <div>
<body>
	{/* <!-- Header Start --> */}
	<header className="header clearfix">
		<button type="button" id="toggleMenu" className="toggle_menu">
		  <i className='uil uil-bars'></i>
		</button>
		<button id="collapse_menu" className="collapse_menu">
			<i className="uil uil-bars collapse_menu--icon "></i>
			<span className="collapse_menu--label"></span>
		</button>
		<div className="main_logo" id="logo">
			<a href="/"><img src="images/logo.svg" alt="logo" /></a>
			<a href="/"><img className="logo-inverse" src="images/ct_logo.svg" alt="ct_logo" /></a>
		</div>
		<div className="top-category">
			<div className="ui compact menu cate-dpdwn">
				<div className="ui simple dropdown item">
					<a href="/" className="option_links p-0" title="categories"><i className="uil uil-apps"></i></a>
					<div className="menu dropdown_category5">
						<a href="/" className="item channel_item">Development</a>
						<a href="/" className="item channel_item">Business</a>
						<a href="/" className="item channel_item">Finance & Accounting</a>
						<a href="/" className="item channel_item">IT & Software</a>
						<a href="/" className="item channel_item">Office Productivity</a>
						<a href="/" className="item channel_item">Personal Development</a>
						<a href="/" className="item channel_item">Design</a>
						<a href="/" className="item channel_item">Marketing</a>
						<a href="/" className="item channel_item">Lifestyle</a>
						<a href="/" className="item channel_item">Photography</a>
						<a href="/" className="item channel_item">Health & Fitness</a>
						<a href="/" className="item channel_item">Music</a>
						<a href="/" className="item channel_item">Teaching & Academics</a>
					</div>
				</div>
			</div>
		</div>
		<div className="search120">
			<div className="ui search">
			  <div className="ui left icon input swdh10">
				<input className="prompt srch10" type="text" placeholder="Search for Tuts Videos, Tutors, Tests and more.." />
				<i className='uil uil-search-alt icon icon1'></i>
			  </div>
			</div>
		</div>
		<div className="header_right">
			<ul>
				<li>
					<a href="create_new_course.html" className="upload_btn" title="Create New Course">Create New Course</a>
				</li>
				<li>
					<a href="shopping_cart.html" className="option_links" title="cart"><i className='uil uil-shopping-cart-alt'></i><span className="noti_count">2</span></a>
				</li>
				<li className="ui dropdown">
					<a href="/" className="option_links" title="Messages"><i className='uil uil-envelope-alt'></i><span className="noti_count">3</span></a>
					<div className="menu dropdown_ms">
						<a href="/" className="channel_my item">
							<div className="profile_link">
								<img src="images/left-imgs/img-6.jpg" alt="img-6" />
								<div className="pd_content">
									<h6>Zoena Singh</h6>
									<p>Hi! Sir, How are you. I ask you one thing please explain it this video price.</p>
									<span className="nm_time">2 min ago</span>
								</div>							
							</div>							
						</a>
						<a href="/" className="channel_my item">
							<div className="profile_link">
								<img src="images/left-imgs/img-5.jpg" alt="img-5" />
								<div className="pd_content">
									<h6>Joy Dua</h6>
									<p>Hello, I paid you video tutorial but did not play error 404.</p>
									<span className="nm_time">10 min ago</span>
								</div>							
							</div>							
						</a>
						<a href="/" className="channel_my item">
							<div className="profile_link">
								<img src="images/left-imgs/img-8.jpg" alt="img-8" />
								<div className="pd_content">
									<h6>Jass</h6>
									<p>Thanks Sir, Such a nice video.</p>
									<span className="nm_time">25 min ago</span>
								</div>							
							</div>							
						</a>
						<a className="vbm_btn" href="instructor_messages.html">View All <i className='uil uil-arrow-right'></i></a>
					</div>
				</li>
				<li className="ui dropdown">
					<a href="/" className="option_links" title="Notifications"><i className='uil uil-bell'></i><span className="noti_count">3</span></a>
					<div className="menu dropdown_mn">
						<a href="/" className="channel_my item">
							<div className="profile_link">
								<img src="images/left-imgs/img-1.jpg" alt="img-1" />
								<div className="pd_content">
									<h6>Rock William</h6>
									<p>Like Your Comment On Video <strong>How to create sidebar menu</strong>.</p>
									<span className="nm_time">2 min ago</span>
								</div>							
							</div>							
						</a>
						<a href="/" className="channel_my item">
							<div className="profile_link">
								<img src="images/left-imgs/img-2.jpg" alt="img-2" />
								<div className="pd_content">
									<h6>Jassica Smith</h6>
									<p>Added New Review In Video <strong>Full Stack PHP Developer</strong>.</p>
									<span className="nm_time">12 min ago</span>
								</div>							
							</div>							
						</a>
						<a href="/" className="channel_my item">
							<div className="profile_link">
								<img src="images/left-imgs/img-9.jpg" alt="img-9" />
								<div className="pd_content">
									<p> Your Membership Approved <strong>Upload Video</strong>.</p>
									<span className="nm_time">20 min ago</span>
								</div>							
							</div>							
						</a>
						<a className="vbm_btn" href="instructor_notifications.html">View All <i className='uil uil-arrow-right'></i></a>
					</div>
				</li>
				<li className="ui dropdown">
					<a href="/" className="opts_account" title="Account">
						<img src="images/hd_dp.jpg" alt="hd-dp" />
					</a>
					<div className="menu dropdown_account">
						<div className="channel_my">
							<div className="profile_link">
								<img src="images/hd_dp.jpg" alt="hd-dp" />
								<div className="pd_content">
									<div className="rhte85">
										<h6>Joginder Singh</h6>
										<div className="mef78" title="Verify">
											<i className='uil uil-check-circle'></i>
										</div>
									</div>
									<span>gambol943@gmail.com</span>
								</div>							
							</div>
							<a href="my_instructor_profile_view.html" className="dp_link_12">View Instructor Profile</a>						
						</div>
						<div className="night_mode_switch__btn">
							<a href="/" id="night-mode" className="btn-night-mode">
								<i className="uil uil-moon"></i> Night mode
								<span className="btn-night-mode-switch">
									<span className="uk-switch-button"></span>
								</span>
							</a>
						</div>
						<a href="instructor_dashboard.html" className="item channel_item">Cursus dashboard</a>						
						<a href="membership.html" className="item channel_item">Paid Memberships</a>
						<a href="setting.html" className="item channel_item">Setting</a>
						<a href="help.html" className="item channel_item">Help</a>
						<a href="feedback.html" className="item channel_item">Send Feedback</a>
						<a href="sign_in.html" className="item channel_item">Sign Out</a>
					</div>
				</li>
			</ul>
		</div>
	</header>
	{/* <!-- Header End --> */}
	{/* <!-- Left Sidebar Start --> */}
	<nav className="vertical_nav">
		<div className="left_section menu_left" id="js-menu" >
			<div className="left_section">
				<ul>
					<li className="menu--item">
						<a href="index.html" className="menu--link" title="Home">
							<i className='uil uil-home-alt menu--icon'></i>
							<span className="menu--label">Home</span>
						</a>
					</li>
					<li className="menu--item">
						<a href="live_streams.html" className="menu--link" title="Live Streams">
							<i className='uil uil-kayak menu--icon'></i>
							<span className="menu--label">Live Streams</span>
						</a>
					</li>
					<li className="menu--item">
						<a href="explore.html" className="menu--link active" title="Explore">
							<i className='uil uil-search menu--icon'></i>
							<span className="menu--label">Explore</span>
						</a>
					</li>
					<li className="menu--item menu--item__has_sub_menu">
						<label className="menu--link" title="Categories">
							<i className='uil uil-layers menu--icon'></i>
							<span className="menu--label">Categories</span>
						</label>
						<ul className="sub_menu">
							<li className="sub_menu--item">
								<a href="/" className="sub_menu--link">Development</a>
							</li>
							<li className="sub_menu--item">
								<a href="/" className="sub_menu--link">Business</a>
							</li>
							<li className="sub_menu--item">
								<a href="/" className="sub_menu--link">Finance & Accounting</a>
							</li>
							<li className="sub_menu--item">
								<a href="/.html" className="sub_menu--link">IT & Software</a>
							</li>
							<li className="sub_menu--item">
								<a href="/" className="sub_menu--link">Office Productivity</a>
							</li>
							<li className="sub_menu--item">
								<a href="/" className="sub_menu--link">Personal Development</a>
							</li>
							<li className="sub_menu--item">
								<a href="/" className="sub_menu--link">Design</a>
							</li>
							<li className="sub_menu--item">
								<a href="/" className="sub_menu--link">Marketing</a>
							</li>
							<li className="sub_menu--item">
								<a href="/" className="sub_menu--link">Lifestyle</a>
							</li>
							<li className="sub_menu--item">
								<a href="/" className="sub_menu--link">Photography</a>
							</li>
							<li className="sub_menu--item">
								<a href="/" className="sub_menu--link">Health & Fitness</a>
							</li>
							<li className="sub_menu--item">
								<a href="/" className="sub_menu--link">Music</a>
							</li>
							<li className="sub_menu--item">
								<a href="/" className="sub_menu--link">Teaching & Academics</a>
							</li>
						</ul>
					</li>
					<li className="menu--item  menu--item__has_sub_menu">
						<label className="menu--link" title="Tests">
						  <i className='uil uil-clipboard-alt menu--icon'></i>
						  <span className="menu--label">Tests</span>
						</label>
						<ul className="sub_menu">
							<li className="sub_menu--item">
								<a href="certification_center.html" className="sub_menu--link">Certification Center</a>
							</li>
							<li className="sub_menu--item">
								<a href="certification_start_form.html" className="sub_menu--link">Certification Fill Form</a>
							</li>
							<li className="sub_menu--item">
								<a href="certification_test_view.html" className="sub_menu--link">Test View</a>
							</li>
							<li className="sub_menu--item">
								<a href="certification_test__result.html" className="sub_menu--link">Test Result</a>
							</li>
							<li className="sub_menu--item">
								<a href="http://www.gambolthemes.net/html-items/edututs+/Instructor_Dashboard/my_certificates.html" className="sub_menu--link">My Certification</a>
							</li>
						</ul>
					</li>
					<li className="menu--item">
						<a href="saved_courses.html" className="menu--link" title="Saved Courses">
						  <i className="uil uil-heart-alt menu--icon"></i>
						  <span className="menu--label">Saved Courses</span>
						</a>
					</li>
					<li className="menu--item  menu--item__has_sub_menu">
						<label className="menu--link" title="Pages">
						  <i className='uil uil-file menu--icon'></i>
						  <span className="menu--label">Pages</span>
						</label>
						<ul className="sub_menu">
							<li className="sub_menu--item">
								<a href="about_us.html" className="sub_menu--link">About</a>
							</li>
							<li className="sub_menu--item">
								<a href="sign_in.html" className="sub_menu--link">Sign In</a>
							</li>
							<li className="sub_menu--item">
								<a href="sign_up.html" className="sub_menu--link">Sign Up</a>
							</li>
							<li className="sub_menu--item">
								<a href="sign_up_steps.html" className="sub_menu--link">Sign Up Steps</a>
							</li>
							<li className="sub_menu--item">
								<a href="membership.html" className="sub_menu--link">Paid Membership</a>
							</li>
							<li className="sub_menu--item">
								<a href="course_detail_view.html" className="sub_menu--link">Course Detail View</a>
							</li>
							<li className="sub_menu--item">
								<a href="checkout_membership.html" className="sub_menu--link">Checkout</a>
							</li>
							<li className="sub_menu--item">
								<a href="invoice.html" className="sub_menu--link">Invoice</a>
							</li>
							<li className="sub_menu--item">
								<a href="career.html" className="sub_menu--link">Career</a>
							</li>
							<li className="sub_menu--item">
								<a href="apply_job.html" className="sub_menu--link">Job Apply</a>
							</li>
							<li className="sub_menu--item">
								<a href="our_blog.html" className="sub_menu--link">Our Blog</a>
							</li>
							<li className="sub_menu--item">
								<a href="blog_single_view.html" className="sub_menu--link">Blog Detail View</a>
							</li>
							<li className="sub_menu--item">
								<a href="company_details.html" className="sub_menu--link">Company Details</a>
							</li>
							<li className="sub_menu--item">
								<a href="press.html" className="sub_menu--link">Press</a>
							</li>
							<li className="sub_menu--item">
								<a href="live_output.html" className="sub_menu--link">Live Stream View</a>
							</li>
							<li className="sub_menu--item">
								<a href="add_streaming.html" className="sub_menu--link">Add live Stream</a>
							</li>
							<li className="sub_menu--item">
								<a href="search_result.html" className="sub_menu--link">Search Result</a>
							</li>
							<li className="sub_menu--item">
								<a href="thank_you.html" className="sub_menu--link">Thank You</a>
							</li>
							<li className="sub_menu--item">
								<a href="coming_soon.html" className="sub_menu--link">Coming Soon</a>
							</li>
							<li className="sub_menu--item">
								<a href="error_404.html" className="sub_menu--link">Error 404</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div className="left_section">
				<h6 className="left_title">SUBSCRIPTIONS</h6>
				<ul>
					<li className="menu--item">
						<a href="instructor_profile_view.html" className="menu--link user_img">
							<img src="images/left-imgs/img-1.jpg" alt="img-1" />
							Rock Smith
							<div className="alrt_dot"></div>
						</a>
					</li>
					<li className="menu--item">
						<a href="instructor_profile_view.html" className="menu--link user_img">
							<img src="images/left-imgs/img-2.jpg" alt="img-2" />
							Jassica William
						</a>
						<div className="alrt_dot"></div>
					</li>
					<li className="menu--item">
						<a href="all_instructor.html" className="menu--link" title="Browse Instructors">
						  <i className='uil uil-plus-circle menu--icon'></i>
						  <span className="menu--label">Browse Instructors</span>
						</a>
					</li>
				</ul>
			</div>
			<div className="left_section pt-2">
				<ul>
					<li className="menu--item">
						<a href="setting.html" className="menu--link" title="Setting">
							<i className='uil uil-cog menu--icon'></i>
							<span className="menu--label">Setting</span>
						</a>
					</li>
					<li className="menu--item">
						<a href="help.html" className="menu--link" title="Help">
							<i className='uil uil-question-circle menu--icon'></i>
							<span className="menu--label">Help</span>
						</a>
					</li>
					<li className="menu--item">
						<a href="report_history.html" className="menu--link" title="Report History">
							<i className='uil uil-windsock menu--icon'></i>
							<span className="menu--label">Report History</span>
						</a>
					</li>
					<li className="menu--item">
						<a href="feedback.html" className="menu--link" title="Send Feedback">
							<i className='uil uil-comment-alt-exclamation menu--icon'></i>
							<span className="menu--label">Send Feedback</span>
						</a>
					</li>
				</ul>
			</div>
			<div className="left_footer">
				<ul>
					<li><a href="about_us.html">About</a></li>
					<li><a href="press.html">Press</a></li>
					<li><a href="contact_us.html">Contact Us</a></li>
					<li><a href="coming_soon.html">Advertise</a></li>
					<li><a href="coming_soon.html">Developers</a></li>
					<li><a href="terms_of_use.html">Copyright</a></li>
					<li><a href="terms_of_use.html">Privacy Policy</a></li>
					<li><a href="terms_of_use.html">Terms</a></li>
				</ul>
				<div className="left_footer_content">
					<p>© 2020 <strong>Cursus</strong>. All Rights Reserved.</p>
				</div>
			</div>
		</div>
	</nav>
	{/* <!-- Left Sidebar End --> */}
	{/* <!-- Body Start --> */}
	<div className="wrapper">
		<div className="sa4d25">
			<div className="container-fluid">			
				<div className="row">
					<div className="col-xl-12 col-lg-8">
						<div className="section3125">
							<div className="explore_search">
								<div className="ui search focus">
									<div className="ui left icon input swdh11">
										<input className="prompt srch_explore" type="text" placeholder="Search for Tuts Videos, Tutors, Tests and more.." />
										<i className="uil uil-search-alt icon icon2"></i>
									</div>
								</div>
							</div>							
						</div>							
					</div>
					<div className="col-md-12">
						<div className="section3125 mb-15 mt-50">
							<h4 className="item_title">Live Streams</h4>
							<a href="live_streams.html" className="see150">See all</a>
							<div className="la5lo1">
								<div className="owl-carousel live_stream owl-theme">
									<div className="item">
										<div className="stream_1">
											<a href="live_output.html" className="stream_bg">
												<img src="images/left-imgs/img-1.jpg" alt="img-1" />
												<h4>John Doe</h4>
												<p>live<span></span></p>
											</a>
										</div>
									</div>
									<div className="item">
										<div className="stream_1">
											<a href="live_output.html" className="stream_bg">
												<img src="images/left-imgs/img-2.jpg" alt="img" />
												<h4>Jassica</h4>
												<p>live<span></span></p>
											</a>
										</div>
									</div>
									<div className="item">
										<div className="stream_1">
											<a href="live_output.html" className="stream_bg">
												<img src="images/left-imgs/img-9.jpg" alt="img-9" />
												<h4>Edututs+</h4>
												<p>live<span></span></p>
											</a>
										</div>
									</div>
									<div className="item">
										<div className="stream_1">
											<a href="live_output.html" className="stream_bg">
												<img src="images/left-imgs/img-3.jpg" alt="img-9" />
												<h4>Joginder Singh</h4>
												<p>live<span></span></p>
											</a>
										</div>
									</div>
									<div className="item">
										<div className="stream_1">
											<a href="live_output.html" className="stream_bg">
												<img src="images/left-imgs/img-4.jpg" alt="img" />
												<h4>Zoena</h4>
												<p>live<span></span></p>
											</a>
										</div>
									</div>
									<div className="item">
										<div className="stream_1">
											<a href="live_output.html" className="stream_bg">
												<img src="images/left-imgs/img-5.jpg" alt="img" />
												<h4>Albert Dua</h4>
												<p>live<span></span></p>
											</a>
										</div>
									</div>
									<div className="item">
										<div className="stream_1">
											<a href="live_output.html" className="stream_bg">
												<img src="images/left-imgs/img-6.jpg" alt="img" />
												<h4>Ridhima</h4>
												<p>live<span></span></p>
											</a>
										</div>
									</div>
									<div className="item">
										<div className="stream_1">
											<a href="live_output.html" className="stream_bg">
												<img src="images/left-imgs/img-7.jpg" alt="img" />
												<h4>Amritpal</h4>
												<p>live<span></span></p>
											</a>
										</div>
									</div>
									<div className="item">
										<div className="stream_1">
											<a href="live_output.html" className="stream_bg">
												<img src="images/left-imgs/img-8.jpg" alt="img" />
												<h4>Jimmy</h4>
												<p>live<span></span></p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-12">
						<div className="_14d25">
							<div className="row">
								<div className="col-lg-3 col-md-4">
									<div className="fcrse_1 mt-30">
										<a href="course_detail_view.html" className="fcrse_img">
											<img src="images/courses/img-1.jpg" alt="img" />
											<div className="course-overlay">
												<div className="badge_seller">Bestseller</div>
												<div className="crse_reviews">
													<i className="uil uil-star"></i>4.5
												</div>
												<span className="play_btn1"><i className="uil uil-play"></i></span>
												<div className="crse_timer">
													25 hours
												</div>
											</div>
										</a>
										<div className="fcrse_content">
											<div className="eps_dots more_dropdown">
												<a href="/"><i className="uil uil-ellipsis-v"></i></a>
												<div className="dropdown-content">
													<span><i className='uil uil-share-alt'></i>Share</span>
													<span><i className="uil uil-heart"></i>Save</span>
													<span><i className='uil uil-ban'></i>Not Interested</span>
													<span><i className="uil uil-windsock"></i>Report</span>
												</div>																											
											</div>
											<div className="vdtodt">
												<span className="vdt14">109k views</span>
												<span className="vdt14">15 days ago</span>
											</div>
											<a href="course_detail_view.html" className="crse14s">Complete Python Bootcamp: Go from zero to hero in Python 3</a>
											<a href="/" className="crse-cate">Web Development | Python</a>
											<div className="auth1lnkprce">
												<p className="cr1fot">By <a href="/">John Doe</a></p>
												<div className="prce142">$10</div>
												<button className="shrt-cart-btn" title="cart"><i className="uil uil-shopping-cart-alt"></i></button>
											</div>
										</div>
									</div>													
								</div>
								<div className="col-lg-3 col-md-4">
									<div className="fcrse_1 mt-30">
										<a href="course_detail_view.html" className="fcrse_img">
											<img src="images/courses/img-2.jpg" alt="img" />
											<div className="course-overlay">
												<div className="badge_seller">Bestseller</div>
												<div className="crse_reviews">
													<i className="uil uil-star"></i>4.5
												</div>
												<span className="play_btn1"><i className="uil uil-play"></i></span>
												<div className="crse_timer">
													28 hours
												</div>
											</div>
										</a>
										<div className="fcrse_content">
											<div className="eps_dots more_dropdown">
												<a href="/"><i className="uil uil-ellipsis-v"></i></a>
												<div className="dropdown-content">
													<span><i className='uil uil-share-alt'></i>Share</span>
													<span><i className="uil uil-heart"></i>Save</span>
													<span><i className='uil uil-ban'></i>Not Interested</span>
													<span><i className="uil uil-windsock"></i>Report</span>
												</div>																									
											</div>
											<div className="vdtodt">
												<span className="vdt14">5M views</span>
												<span className="vdt14">15 days ago</span>
											</div>
											<a href="course_detail_view.html" className="crse14s">The Complete JavaScript Course 2020: Build Real Projects!</a>
											<a href="/" className="crse-cate">Development | JavaScript</a>
											<div className="auth1lnkprce">
												<p className="cr1fot">By <a href="/">Jassica William</a></p>
												<div className="prce142">$5</div>
												<button className="shrt-cart-btn" title="cart"><i className="uil uil-shopping-cart-alt"></i></button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4">
									<div className="fcrse_1 mt-30">
										<a href="course_detail_view.html" className="fcrse_img">
											<img src="images/courses/img-20.jpg" alt="img" />
											<div className="course-overlay">
												<div className="crse_reviews">
													<i className="uil uil-star"></i>5.0
												</div>
												<span className="play_btn1"><i className="uil uil-play"></i></span>
												<div className="crse_timer">
													21 hours
												</div>
											</div>
										</a>
										<div className="fcrse_content">
											<div className="eps_dots more_dropdown">
												<a href="/"><i className="uil uil-ellipsis-v"></i></a>
												<div className="dropdown-content">
													<span><i className='uil uil-share-alt'></i>Share</span>
													<span><i className="uil uil-heart"></i>Save</span>
													<span><i className='uil uil-ban'></i>Not Interested</span>
													<span><i className="uil uil-windsock"></i>Report</span>
												</div>																										
											</div>
											<div className="vdtodt">
												<span className="vdt14">200 Views</span>
												<span className="vdt14">4 days ago</span>
											</div>
											<a href="course_detail_view.html" className="crse14s">WordPress Development - Themes, Plugins &amp; Gutenberg</a>
											<a href="/" className="crse-cate">Design | Wordpress</a>
											<div className="auth1lnkprce">
												<p className="cr1fot">By <a href="/">Joy Dua</a></p>
												<div className="prce142">$14</div>
												<button className="shrt-cart-btn" title="cart"><i className="uil uil-shopping-cart-alt"></i></button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4">
									<div className="fcrse_1 mt-30">
										<a href="course_detail_view.html" className="fcrse_img">
											<img src="images/courses/img-4.jpg" alt="img" />
											<div className="course-overlay">
												<div className="badge_seller">Bestseller</div>
												<div className="crse_reviews">
													<i className="uil uil-star"></i>5.0
												</div>
												<span className="play_btn1"><i className="uil uil-play"></i></span>
												<div className="crse_timer">
													1 hour
												</div>
											</div>
										</a>
										<div className="fcrse_content">
											<div className="eps_dots more_dropdown">
												<a href="/"><i className="uil uil-ellipsis-v"></i></a>
												<div className="dropdown-content">
													<span><i className='uil uil-share-alt'></i>Share</span>
													<span><i className="uil uil-heart"></i>Save</span>
													<span><i className='uil uil-ban'></i>Not Interested</span>
													<span><i className="uil uil-windsock"></i>Report</span>
												</div>																										
											</div>
											<div className="vdtodt">
												<span className="vdt14">153k views</span>
												<span className="vdt14">3 months ago</span>
											</div>
											<a href="course_detail_view.html" className="crse14s">The Complete Digital Marketing Course - 12 Courses in 1</a>
											<a href="/" className="crse-cate">Digital Marketing | Marketing</a>
											<div className="auth1lnkprce">
												<p className="cr1fot">By <a href="/">Poonam Verma</a></p>
												<div className="prce142">$12</div>
												<button className="shrt-cart-btn" title="cart"><i className="uil uil-shopping-cart-alt"></i></button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4">
									<div className="fcrse_1 mt-30">
										<a href="course_detail_view.html" className="fcrse_img">
											<img src="images/courses/img-13.jpg" alt="img" />
											<div className="course-overlay">
												<span className="play_btn1"><i className="uil uil-play"></i></span>
												<div className="crse_timer">
													30 hours
												</div>
											</div>
										</a>
										<div className="fcrse_content">
											<div className="eps_dots more_dropdown">
												<a href="/"><i className="uil uil-ellipsis-v"></i></a>
												<div className="dropdown-content">
													<span><i className='uil uil-share-alt'></i>Share</span>
													<span><i className="uil uil-heart"></i>Save</span>
													<span><i className='uil uil-ban'></i>Not Interested</span>
													<span><i className="uil uil-windsock"></i>Report</span>
												</div>																										
											</div>
											<div className="vdtodt">
												<span className="vdt14">20 Views</span>
												<span className="vdt14">1 day ago</span>
											</div>
											<a href="course_detail_view.html" className="crse14s">The Complete Node.js Developer Course (3rd Edition)</a>
											<a href="/" className="crse-cate">Development | Node.js</a>
											<div className="auth1lnkprce">
												<p className="cr1fot">By <a href="/">John Doe</a></p>
												<div className="prce142">$3</div>
												<button className="shrt-cart-btn" title="cart"><i className="uil uil-shopping-cart-alt"></i></button>
											</div>
										</div>
									</div>
								</div>								
								<div className="col-lg-3 col-md-4">
									<div className="fcrse_1 mt-30">
										<a href="course_detail_view.html" className="fcrse_img">
											<img src="images/courses/img-7.jpg" alt="img" />
											<div className="course-overlay">
												<div className="badge_seller">Bestseller</div>
												<div className="crse_reviews">
													<i className="uil uil-star"></i>5.0
												</div>
												<span className="play_btn1"><i className="uil uil-play"></i></span>
												<div className="crse_timer">
													5.4 hours
												</div>
											</div>
										</a>
										<div className="fcrse_content">
											<div className="eps_dots more_dropdown">
												<a href="/"><i className="uil uil-ellipsis-v"></i></a>
												<div className="dropdown-content">
													<span><i className='uil uil-share-alt'></i>Share</span>
													<span><i className="uil uil-heart"></i>Save</span>
													<span><i className='uil uil-ban'></i>Not Interested</span>
													<span><i className="uil uil-windsock"></i>Report</span>
												</div>																										
											</div>
											<div className="vdtodt">
												<span className="vdt14">109k views</span>
												<span className="vdt14">15 days ago</span>
											</div>
											<a href="course_detail_view.html" className="crse14s">WordPress for Beginners: Create a Website Step by Step</a>
											<a href="/" className="crse-cate">Design | Wordpress</a>
											<div className="auth1lnkprce">
												<p className="cr1fot">By <a href="/">Sabnam SIngh</a></p>
												<div className="prce142">$18</div>
												<button className="shrt-cart-btn" title="cart"><i className="uil uil-shopping-cart-alt"></i></button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4">
									<div className="fcrse_1 mt-30">
										<a href="course_detail_view.html" className="fcrse_img">
											<img src="images/courses/img-8.jpg" alt="img-8 " />
											<div className="course-overlay">
												<div className="badge_seller">Bestseller</div>
												<div className="crse_reviews">
													<i className="uil uil-star"></i>4.0
												</div>
												<span className="play_btn1"><i className="uil uil-play"></i></span>
												<div className="crse_timer">
													23 hours
												</div>
											</div>
										</a>
										<div className="fcrse_content">
											<div className="eps_dots more_dropdown">
												<a href="/"><i className="uil uil-ellipsis-v"></i></a>
												<div className="dropdown-content">
													<span><i className='uil uil-share-alt'></i>Share</span>
													<span><i className="uil uil-heart"></i>Save</span>
													<span><i className='uil uil-ban'></i>Not Interested</span>
													<span><i className="uil uil-windsock"></i>Report</span>
												</div>																										
											</div>
											<div className="vdtodt">
												<span className="vdt14">196k views</span>
												<span className="vdt14">1 month ago</span>
											</div>
											<a href="course_detail_view.html" className="crse14s">CSS - The Complete Guide 2020 (incl. Flexbox, Grid &amp; Sass)</a>
											<a href="/" className="crse-cate">Design | CSS</a>
											<div className="auth1lnkprce">
												<p className="cr1fot">By <a href="/">Jashanpreet Singh</a></p>
												<div className="prce142">$10</div>
												<button className="shrt-cart-btn" title="cart"><i className="uil uil-shopping-cart-alt"></i></button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-4">
									<div className="fcrse_1 mt-30">
										<a href="/" className="fcrse_img">
											<img src="images/courses/img-16.jpg" alt="img" />
											<div className="course-overlay">
												<span className="play_btn1"><i className="uil uil-play"></i></span>
												<div className="crse_timer">
													22 hours
												</div>
											</div>
										</a>
										<div className="fcrse_content">
											<div className="eps_dots more_dropdown">
												<a href="/"><i className="uil uil-ellipsis-v"></i></a>
												<div className="dropdown-content">
													<span><i className='uil uil-share-alt'></i>Share</span>
													<span><i className="uil uil-heart"></i>Save</span>
													<span><i className='uil uil-ban'></i>Not Interested</span>
													<span><i className="uil uil-windsock"></i>Report</span>
												</div>																									
											</div>
											<div className="vdtodt">
												<span className="vdt14">11 Views</span>
												<span className="vdt14">5 Days ago</span>
											</div>
											<a href="course_detail_view.html" className="crse14s">Vue JS 2 - The Complete Guide (incl. Vue Router &amp; Vuex)</a>
											<a href="/" className="crse-cate">Development | Vue JS</a>
											<div className="auth1lnkprce">
												<p className="cr1fot">By <a href="/">Manreet Kaur</a></p>
												<div className="prce142">$10</div>
												<button className="shrt-cart-btn" title="cart"><i className="uil uil-shopping-cart-alt"></i></button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12">
									<div className="main-loader mt-50">													
										<div className="spinner">
											<div className="bounce1"></div>
											<div className="bounce2"></div>
											<div className="bounce3"></div>
										</div>																										
									</div>
								</div>
							</div>				
						</div>				
					</div>				
				</div>
			</div>
		</div>
		<footer className="footer mt-30">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-3 col-sm-6">
						<div className="item_f1">
							<a href="about_us.html">About</a>
							<a href="our_blog.html">Blog</a>
							<a href="career.html">Careers</a>
							<a href="press.html">Press</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-6">
						<div className="item_f1">
							<a href="help.html">Help</a>
							<a href="coming_soon.html">Advertise</a>
							<a href="coming_soon.html">Developers</a>
							<a href="contact_us.html">Contact Us</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-6">
						<div className="item_f1">
							<a href="terms_of_use.html">Copyright Policy</a>
							<a href="terms_of_use.html">Terms</a>
							<a href="terms_of_use.html">Privacy Policy</a>
							<a href="sitemap.html">Sitemap</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-6">
						<div className="item_f3">
							<a href="/" className="btn1542">Teach on Cursus</a>
							<div className="lng_btn">
								<div className="ui language bottom right pointing dropdown floating" id="languages" data-content="Select Language">
									<a href="/"><i className='uil uil-globe lft'></i>Language<i className='uil uil-angle-down rgt'></i></a>
									<div className="menu">
										<div className="scrolling menu">
											<div className="item" data-percent="100" data-value="en" data-english="English">
												<span className="description">English</span>
												English
											</div>
											<div className="item" data-percent="94" data-value="da" data-english="Danish">
												<span className="description">dansk</span>
												Danish
											</div>
											<div className="item" data-percent="94" data-value="es" data-english="Spanish">
												<span className="description">Español</span>
												Spanish
											</div>
											<div className="item" data-percent="34" data-value="zh" data-english="Chinese">
												<span className="description">简体中文</span>
												Chinese
											</div>
											<div className="item" data-percent="54" data-value="zh_TW" data-english="Chinese (Taiwan)">
												<span className="description">中文 (臺灣)</span>
												Chinese (Taiwan)
											</div>
											<div className="item" data-percent="79" data-value="fa" data-english="Persian">
												<span className="description">پارسی</span>
												Persian
											</div>
											<div className="item" data-percent="41" data-value="fr" data-english="French">
												<span className="description">Français</span>
												French
											</div>
											<div className="item" data-percent="37" data-value="el" data-english="Greek">
												<span className="description">ελληνικά</span>
												Greek
											</div>
											<div className="item" data-percent="37" data-value="ru" data-english="Russian">
												<span className="description">Русский</span>
												Russian
											</div>
											<div className="item" data-percent="36" data-value="de" data-english="German">
												<span className="description">Deutsch</span>
												German
											</div>
											<div className="item" data-percent="23" data-value="it" data-english="Italian">
												<span className="description">Italiano</span>
												Italian
											</div>
											<div className="item" data-percent="21" data-value="nl" data-english="Dutch">
												<span className="description">Nederlands</span>
												Dutch
											</div>
											<div className="item" data-percent="19" data-value="pt_BR" data-english="Portuguese">
												<span className="description">Português(BR)</span>
												Portuguese
											</div>
											<div className="item" data-percent="17" data-value="id" data-english="Indonesian">
												<span className="description">Indonesian</span>
												Indonesian
											</div>
											<div className="item" data-percent="12" data-value="lt" data-english="Lithuanian">
												<span className="description">Lietuvių</span>
												Lithuanian
											</div>
											<div className="item" data-percent="11" data-value="tr" data-english="Turkish">
												<span className="description">Türkçe</span>
												Turkish
											</div>
											<div className="item" data-percent="10" data-value="kr" data-english="Korean">
												<span className="description">한국어</span>
												Korean
											</div>
											<div className="item" data-percent="7" data-value="ar" data-english="Arabic">
												<span className="description">العربية</span>
												Arabic
											</div>
											<div className="item" data-percent="6" data-value="hu" data-english="Hungarian">
												<span className="description">Magyar</span>
												Hungarian
											</div>
											<div className="item" data-percent="6" data-value="vi" data-english="Vietnamese">
												<span className="description">tiếng Việt</span>
												Vietnamese
											</div>
											<div className="item" data-percent="5" data-value="sv" data-english="Swedish">
												<span className="description">svenska</span>
												Swedish
											</div>
											<div className="item" data-precent="4" data-value="pl" data-english="Polish">
												<span className="description">polski</span>
												Polish
											</div>
											<div className="item" data-percent="6" data-value="ja" data-english="Japanese">
												<span className="description">日本語</span>
												Japanese
											</div>
											<div className="item" data-percent="0" data-value="ro" data-english="Romanian">
												<span className="description">românește</span>
												Romanian
											</div>										
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="footer_bottm">
							<div className="row">
								<div className="col-md-6">
									<ul className="fotb_left">
										<li>
											<a href="index.html">
												<div className="footer_logo">
													<img src="images/logo1.svg" alt="img" />
												</div>
											</a>
										</li>
										<li>
											<p>© 2020 <strong>Cursus</strong>. All Rights Reserved.</p>
										</li>
									</ul>
								</div>
								<div className="col-md-6">
									<div className="edu_social_links">
										<a href="/"><i className="fab fa-facebook-f"></i></a>
										<a href="/"><i className="fab fa-twitter"></i></a>
										<a href="/"><i className="fab fa-google-plus-g"></i></a>
										<a href="/"><i className="fab fa-linkedin-in"></i></a>
										<a href="/"><i className="fab fa-instagram"></i></a>
										<a href="/"><i className="fab fa-youtube"></i></a>
										<a href="/"><i className="fab fa-pinterest-p"></i></a>
									</div>
								</div>		
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
	{/* <!-- Body End --> */}

	<script src="js/vertical-responsive-menu.min.js"></script>
	<script src="js/jquery-3.3.1.min.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
	<script src="vendor/OwlCarousel/owl.carousel.js"></script>
	<script src="vendor/semantic/semantic.min.js"></script>
	<script src="js/custom.js"></script>
	<script src="js/night-mode.js"></script>
	
</body>
                </div>
            </div>
        )
    }
}
