import React, { Component } from 'react';
import RelatedProducts from './RelatedProducts';

class Product extends Component {
	render() {
		return (
			<div>
				<div class="section">
					<div class="container">
						<div class="row">
							<div class="col-md-5 col-md-push-2">
								<div id="product-main-img">
									<div class="product-preview">
										<img src={process.env.PUBLIC_URL + "assets/img/product01.png"} alt="" />
									</div>

									<div class="product-preview">
										<img src={process.env.PUBLIC_URL + "assets/img/product03.png"} alt="" />
									</div>

									<div class="product-preview">
										<img src={process.env.PUBLIC_URL + "assets/img/product06.png"} alt="" />
									</div>

									<div class="product-preview">
										<img src={process.env.PUBLIC_URL + "assets/img/product08.png"} alt="" />
									</div>
								</div>
							</div>
							<div class="col-md-2  col-md-pull-5">
								<div id="product-imgs">
									<div class="product-preview">
										<img src={process.env.PUBLIC_URL + "assets/img/product01.png"} alt="" />
									</div>

									<div class="product-preview">
										<img src={process.env.PUBLIC_URL + "assets/img/product03.png"} alt="" />
									</div>

									<div class="product-preview">
										<img src={process.env.PUBLIC_URL + "assets/img/product06.png"} alt="" />
									</div>

									<div class="product-preview">
										<img src={process.env.PUBLIC_URL + "assets/img/product08.png"} alt="" />
									</div>
								</div>
							</div>
							<div class="col-md-5">
								<div class="product-details">
									<h2 class="product-name">product name goes here</h2>
									<div>
										<div class="product-rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o"></i>
										</div>
										<a class="review-link" href="#">10 Review(s) | Add your review</a>
									</div>
									<div>
										<h3 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h3>
										<span class="product-available">In Stock</span>
									</div>
									<p></p>

									<div class="product-options">
										<label>
											Size
									<select class="input-select">
												<option value="0">X</option>
											</select>
										</label>
										<label>
											Color
									<select class="input-select">
												<option value="0">Red</option>
											</select>
										</label>
									</div>

									<div class="add-to-cart">
										<div class="qty-label">
											Qty
									<div class="input-number">
												<input type="number" />
												<span class="qty-up">+</span>
												<span class="qty-down">-</span>
											</div>
										</div>
										<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
									</div>

									<ul class="product-btns">
										<li><a href="#"><i class="fa fa-heart-o"></i> add to wishlist</a></li>
										{/* <li><a href="#"><i class="fa fa-exchange"></i> add to compare</a></li> */}
									</ul>

									<ul class="product-links">
										<li>Tags:</li>
										<li><a href="#">Headphones</a></li>
										<li><a href="#">Accessories</a></li>
										<li>Categories:</li>
										<li><a href="#">Headphones</a></li>
										<li><a href="#">Accessories</a></li>
									</ul>
									<ul class="product-links">
										<li>Share:</li>
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
										<li><a href="#"><i class="fa fa-envelope"></i></a></li>
									</ul>
								</div>
							</div>
							<div class="col-md-12">
								<div id="product-tab">
									<ul class="tab-nav">
										<li class="active"><a data-toggle="tab" href="#tab1">Description</a></li>
										<li><a data-toggle="tab" href="#tab2">Details</a></li>
										<li><a data-toggle="tab" href="#tab3">Reviews (3)</a></li>
									</ul>
									<div class="tab-content">
										<div id="tab1" class="tab-pane fade in active">
											<div class="row">
												<div class="col-md-12">
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
												</div>
											</div>
										</div>
										<div id="tab2" class="tab-pane fade in">
											<div class="row">
												<div class="col-md-12">
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
												</div>
											</div>
										</div>
										<div id="tab3" class="tab-pane fade in">
											<div class="row">
												<div class="col-md-6">
													<div id="rating">
														<div class="rating-avg">
															<span>4.5</span>
															<div class="rating-stars">
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star-o"></i>
															</div>
														</div>
														<ul class="rating">
															<li>
																<div class="rating-stars">
																	<i class="fa fa-star"></i>
																	<i class="fa fa-star"></i>
																	<i class="fa fa-star"></i>
																	<i class="fa fa-star"></i>
																	<i class="fa fa-star"></i>
																</div>
																<div class="rating-progress">
																	<div style={{with: "80%"}}></div>
																</div>
																<span class="sum">3</span>
															</li>
															<li>
																<div class="rating-stars">
																	<i class="fa fa-star"></i>
																	<i class="fa fa-star"></i>
																	<i class="fa fa-star"></i>
																	<i class="fa fa-star"></i>
																	<i class="fa fa-star-o"></i>
																</div>
																<div class="rating-progress">
																	<div style={{with: "60%"}}></div>
																</div>
																<span class="sum">2</span>
															</li>
															<li>
																<div class="rating-stars">
																	<i class="fa fa-star"></i>
																	<i class="fa fa-star"></i>
																	<i class="fa fa-star"></i>
																	<i class="fa fa-star-o"></i>
																	<i class="fa fa-star-o"></i>
																</div>
																<div class="rating-progress">
																	<div></div>
																</div>
																<span class="sum">0</span>
															</li>
															<li>
																<div class="rating-stars">
																	<i class="fa fa-star"></i>
																	<i class="fa fa-star"></i>
																	<i class="fa fa-star-o"></i>
																	<i class="fa fa-star-o"></i>
																	<i class="fa fa-star-o"></i>
																</div>
																<div class="rating-progress">
																	<div></div>
																</div>
																<span class="sum">0</span>
															</li>
															<li>
																<div class="rating-stars">
																	<i class="fa fa-star"></i>
																	<i class="fa fa-star-o"></i>
																	<i class="fa fa-star-o"></i>
																	<i class="fa fa-star-o"></i>
																	<i class="fa fa-star-o"></i>
																</div>
																<div class="rating-progress">
																	<div></div>
																</div>
																<span class="sum">0</span>
															</li>
														</ul>
													</div>
												</div>
												<div class="col-md-6">
													<div id="reviews">
														<ul class="reviews">
															<li>
																<div class="review-heading">
																	<h5 class="name">John</h5>
																	<p class="date">27 DEC 2018, 8:0 PM</p>
																	<div class="review-rating">
																		<i class="fa fa-star"></i>
																		<i class="fa fa-star"></i>
																		<i class="fa fa-star"></i>
																		<i class="fa fa-star"></i>
																		<i class="fa fa-star-o empty"></i>
																	</div>
																</div>
																<div class="review-body">
																	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
																</div>
															</li>
															<li>
																<div class="review-heading">
																	<h5 class="name">John</h5>
																	<p class="date">27 DEC 2018, 8:0 PM</p>
																	<div class="review-rating">
																		<i class="fa fa-star"></i>
																		<i class="fa fa-star"></i>
																		<i class="fa fa-star"></i>
																		<i class="fa fa-star"></i>
																		<i class="fa fa-star-o empty"></i>
																	</div>
																</div>
																<div class="review-body">
																	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
																</div>
															</li>
															<li>
																<div class="review-heading">
																	<h5 class="name">John</h5>
																	<p class="date">27 DEC 2018, 8:0 PM</p>
																	<div class="review-rating">
																		<i class="fa fa-star"></i>
																		<i class="fa fa-star"></i>
																		<i class="fa fa-star"></i>
																		<i class="fa fa-star"></i>
																		<i class="fa fa-star-o empty"></i>
																	</div>
																</div>
																<div class="review-body">
																	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
																</div>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <RelatedProducts data={} /> */}
			</div>
		);
	}
}

export default Product;