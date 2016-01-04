
	<article class="post_content">
		<div class="product threed-letter">

			<div class="ecommerce">
				<div>
					<span class="title_product" >3D Letter</span>
				</div>
				
				<div>
					<p>Your word:</p>
					<textarea class="letter">Type your word here!</textarea>
				</div>
				<div class="product_custom">
					<ul>
						<li><span> 3D letter</span> Illuminiated<input id="illuminated" type="checkbox" name="illuminated"/></li>
						<li>
							<span>Material:</span>
							<select  name="material" class="with-no-illuminated">
								<option value="Acrylic" selected>Acrylic</option>
								<option value="Acrylic Gold" >Acrylic Gold</option>
								<option value="Acrylic Silver" >Acrylic Silver</option>
								<option value="Aluminium">Aluminium</option>
								<option value="Stainsteel outdoor">Stainsteel Outdoor</option>
								<option value="Stainsteel indoor">Stainsteel Indoor</option>
								<option value="PVC">PVC</option>
							</select>
							<select  name="material" class="with-illuminated">
								<option value="Acrylic" selected>Acrylic</option>
								<option value="Stainsteel">Stainsteel</option>
							</select>
						</li>
						<li>
							<span>Font:</span>
							<select id="fs">
								<option value="Arial" selected>Block</option>
								<option value="Cambria">Serif</option>
								<option value="Century Gothic">Script</option>								
							</select>
						</li>
						<li>
							<span>Color:</span>
							<select id="letter-color">
								<option value="none" selected>none</option>
								<option value="Black">Black</option>
								<option value="Yellow">Yellow</option>	
							</select>
						</li>

						<li>
							<span>Height:</span>
							<div>
							<input class="other-input" type="text" name="custom_size" required="required" maxlength="4" size="4"pattern="0|[1-9][0-9]*"/>mm
							</div>
						</li>
						<li>
							<span>Thick:</span>
							<div class="with-no-illuminated">
								<div id="non-acrylic-spec">
									<input type="radio" name="deep" value="100"/>10mm
									<input type="radio" name="deep" value="150"/>15mm
									<input type="radio" name="deep" value="200"/>20mm
									or 
									<input class="other-input" type="text" name="custom_thick" required="required" maxlength="4" size="4"pattern="0|[1-9][0-9]*"/>mm
								</div>
								<div id="acrylic-spec">3mm</div>
							</div>
							
							<span class="with-illuminated">
								from 35 to 65 mm
							</span>
							
						</li>
						
						<li>
							<span>Quantity:  </span><input type="text" name="custom_qty" required="required" maxlength="4" size="4"pattern="0|[1-9][0-9]*"/>
						</li>
						<li>
							Delivery<input type="radio" name="sendProduct" value="delivery"/>
							Pickup<input type="radio" name="sendProduct" value="pickup" checked="checked"/>
						</li>
					</ul>
					
					<div class="sc_button sc_button_style_global sc_button_size_medium squareButton global medium">
						<a id="letterAdd" >Add Cart</a>
					</div>
					
					<div id="letter-cart"></div>
				</div>
				
			</div>
			<div class="gallery">
				<a href="images/800x800.png" class="zoom" title="" data-rel="prettyPhotoa[product-gallery]">
<img src="images/300x300.png" class="attachment-shop_thumbnail" alt="Bathroom Basin &#8211; 2" title="Bathroom Basin &#8211; 2"/>
</a>
			</div>
		<!--	<div class="sc_tabs woocommerce-tabs wc-tabs-wrapper">
				<ul class="tabs sc_tabs_titles wc-tabs">
					<li class="description_tab">
						<a href="#tab-description">Description</a>
					</li>
					<li class="reviews_tab">
						<a href="#tab-reviews">Reviews (0)</a>
					</li>
				</ul>
				<div class="panel entry-content wc-tab" id="tab-description">
					<h2>Product Description</h2>
					<div id="full-description">
						<p>Full-description Aenean eget cursus massa. Phasellus risus dolor, molestie quis egestas quis, congue id augue. Nulla tempor at ante eget aliquet. Suspendisse potenti. Aenean varius quis mi at mattis. Suspendisse ut hendrerit erat. Sed vulputate risus neque. Nunc vitae tempus erat. Quisque vel mauris odio. Nullam et nulla quis quam laoreet fringilla. Ut ultrices molestie arcu consequat varius. Cras tempus urna vel dolor luctus tristique. Nunc tristique a orci eu accumsan.</p>
					<p>In arcu nisi, luctus rhoncus turpis sed, ultrices tristique leo. Vivamus cursus neque quis malesuada accumsan. Maecenas vestibulum elit odio, vitae tempor enim finibus sed. Praesent lacus metus, iaculis pulvinar tincidunt eu, sollicitudin cursus erat. Vivamus eu nibh lorem. Nullam eu porta augue. Maecenas tristique massa non nunc posuere, sed varius dui tempus. Integer lacinia at dolor vel scelerisque. Donec sapien tortor, feugiat sed orci et, efficitur fringilla leo.</p>
				
					</div>
				</div>
				<div class="panel entry-content wc-tab" id="tab-reviews">
					<div id="reviews">
						<div id="comments">
							<h2>Reviews</h2>
							<p class="woocommerce-noreviews">There are no reviews yet.</p>
						</div>
						<div id="review_form_wrapper">
							<div id="review_form">
								<div id="respond" class="comment-respond">
									<h3 id="reply-title" class="comment-reply-title">Be the first to review &ldquo;Bathroom Basin&rdquo;
									<small>
									<a rel="nofollow" id="cancel-comment-reply-link" href="#respond">Cancel reply</a>
									</small>
									</h3>
									<form action="#" method="post" id="commentform" class="comment-form">
										<p class="comment-form-author">
											<label for="author">
												Name
												<span class="required">*</span>
											</label>
											<input id="author" name="author" type="text" value="" size="30" aria-required="true"/>
										</p>
										<p class="comment-form-email">
											<label for="email">
												Email
												<span class="required">*</span>
											</label>
											<input id="email" name="email" type="text" value="" size="30" aria-required="true"/>
										</p>
										<p class="comment-form-rating">
											<label for="rating">Your Rating</label>
											<p class="stars">
												<span>
													<a class="star-1" href="#">1</a>
													<a class="star-2" href="#">2</a>
													<a class="star-3" href="#">3</a>
													<a class="star-4" href="#">4</a>
													<a class="star-5" href="#">5</a>
												</span>
											</p>
										</p>
										<p class="comment-form-comment">
											<label for="comment">Your Review</label>
											<textarea id="comment" name="comment" cols="45" rows="8" aria-required="true"></textarea>
										</p>
										<p class="form-submit">
											<input name="submit" type="submit" id="submit" class="submit" value="Submit"/>
											<input type='hidden' name='comment_post_ID' value='2011' id='comment_post_ID'/>
											<input type='hidden' name='comment_parent' id='comment_parent' value='0'/>
										</p>
									</form>
								</div>
							</div>
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>-->
		</div>
		
<!--	Product Light box	-->
		<div class="product lightbox">

			<div class="ecommerce">
				<div>
					<span class="title_product" >Lightbox</span>
				</div>
				
				<div class="product_custom">
					<ul>
						<li>Illuminiated</li>
						<li>
							<span>Side:</span>
							<input type="radio" name="side" value="double" checked="checked"/>Double 
							<input type="radio" name="side" value="single"/>Single <br/>
						</li>
						<li> Dimension : <span class="sc_tooltip_parent"><strong>(WxHxT)</strong><span class="sc_tooltip">Width x Height x Thick</span></span><br/>
							<div id="dimension-double">
							<input type="radio" name="size" value="1800"/>1800 x 450 x 150 mm <br/>
							<input type="radio" name="size" value="2000"/>2000 x 450 x 150 mm <br/>
							<input type="radio" name="size" value="2400"/>2400 x 450 x 200 mm <br/>
							or
							</div>
							<input class="other-input" type="text" name="lightbox-height" id="lightbox-height" required="required" maxlength="10" size="4" pattern="0|[1-9][0-9]*"/>x
							<input class="other-input" type="text" name="lightbox-width" id=="lightbox-width" required="required" maxlength="10" size="4" pattern="0|[1-9][0-9]*"/>x
							<input class="other-input" type="text" name="lightbox-deep" id="lightbox-thick" required="required" maxlength="10" size="4" pattern="0|[1-9][0-9]*"/>mm
						</li>
						<li>
							<span>Quantity:  </span><input type="text" name="custom_qty" required="required" maxlength="4" size="4"pattern="0|[1-9][0-9]*"/>
						</li>
						<li>Installation<input type="checkbox" checked="checked"/></li>
						<li>Delivery<input type="radio" name="sendProduct" value="delivery"/>
							Pickup<input type="radio" name="sendProduct" value="pickup" checked="checked"/>
						</li>
					</ul>
					<div class="sc_button sc_button_style_global sc_button_size_medium squareButton global medium">
						<a href="features_product_category.php" class="">Price estimator</a>
					</div>
					
				</div>
				
			</div>
			<div class="gallery">
				<a href="images/800x800.png" class="zoom" title="" data-rel="prettyPhotoa[product-gallery]">
<img src="images/300x300.png" class="attachment-shop_thumbnail" alt="Bathroom Basin &#8211; 2" title="Bathroom Basin &#8211; 2"/>
</a>
			</div>
		<!--	<div class="sc_tabs woocommerce-tabs wc-tabs-wrapper">
				<ul class="tabs sc_tabs_titles wc-tabs">
					<li class="description_tab">
						<a href="#tab-description">Description</a>
					</li>
					<li class="reviews_tab">
						<a href="#tab-reviews">Reviews (0)</a>
					</li>
				</ul>
				<div class="panel entry-content wc-tab" id="tab-description">
					<h2>Product Description</h2>
					<div id="full-description">
						<p>Full-description Aenean eget cursus massa. Phasellus risus dolor, molestie quis egestas quis, congue id augue. Nulla tempor at ante eget aliquet. Suspendisse potenti. Aenean varius quis mi at mattis. Suspendisse ut hendrerit erat. Sed vulputate risus neque. Nunc vitae tempus erat. Quisque vel mauris odio. Nullam et nulla quis quam laoreet fringilla. Ut ultrices molestie arcu consequat varius. Cras tempus urna vel dolor luctus tristique. Nunc tristique a orci eu accumsan.</p>
					<p>In arcu nisi, luctus rhoncus turpis sed, ultrices tristique leo. Vivamus cursus neque quis malesuada accumsan. Maecenas vestibulum elit odio, vitae tempor enim finibus sed. Praesent lacus metus, iaculis pulvinar tincidunt eu, sollicitudin cursus erat. Vivamus eu nibh lorem. Nullam eu porta augue. Maecenas tristique massa non nunc posuere, sed varius dui tempus. Integer lacinia at dolor vel scelerisque. Donec sapien tortor, feugiat sed orci et, efficitur fringilla leo.</p>
				
					</div>
				</div>
				<div class="panel entry-content wc-tab" id="tab-reviews">
					<div id="reviews">
						<div id="comments">
							<h2>Reviews</h2>
							<p class="woocommerce-noreviews">There are no reviews yet.</p>
						</div>
						<div id="review_form_wrapper">
							<div id="review_form">
								<div id="respond" class="comment-respond">
									<h3 id="reply-title" class="comment-reply-title">Be the first to review &ldquo;Bathroom Basin&rdquo;
									<small>
									<a rel="nofollow" id="cancel-comment-reply-link" href="#respond">Cancel reply</a>
									</small>
									</h3>
									<form action="#" method="post" id="commentform" class="comment-form">
										<p class="comment-form-author">
											<label for="author">
												Name
												<span class="required">*</span>
											</label>
											<input id="author" name="author" type="text" value="" size="30" aria-required="true"/>
										</p>
										<p class="comment-form-email">
											<label for="email">
												Email
												<span class="required">*</span>
											</label>
											<input id="email" name="email" type="text" value="" size="30" aria-required="true"/>
										</p>
										<p class="comment-form-rating">
											<label for="rating">Your Rating</label>
											<p class="stars">
												<span>
													<a class="star-1" href="#">1</a>
													<a class="star-2" href="#">2</a>
													<a class="star-3" href="#">3</a>
													<a class="star-4" href="#">4</a>
													<a class="star-5" href="#">5</a>
												</span>
											</p>
										</p>
										<p class="comment-form-comment">
											<label for="comment">Your Review</label>
											<textarea id="comment" name="comment" cols="45" rows="8" aria-required="true"></textarea>
										</p>
										<p class="form-submit">
											<input name="submit" type="submit" id="submit" class="submit" value="Submit"/>
											<input type='hidden' name='comment_post_ID' value='2011' id='comment_post_ID'/>
											<input type='hidden' name='comment_parent' id='comment_parent' value='0'/>
										</p>
									</form>
								</div>
							</div>
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>-->
		</div>
<!--	Shop front/Digital Printing	-->

<!-- Vehicle sign-->
<div class="product vehicle-sign">

			<div class="ecommerce">
				<div>
					<span class="title_product" >Vehicle Signage</span>
				</div>
				<div>
					<p class="description">Standard Van Design for Individual Panels.</p>
				</div>
				<div class="product_custom">
					<div class="sc_table sc_table_style_2 sc_table_size_big">
						<table>
							<tr>
								<th>Panel</th>
								<th>Panel</th>
								<th>Size Per</th>
								<th>PaneDigital</th>
							</tr>

							<tr>
								<td>A</td>
								<td>1200 x300mm</td>
								<td>$112.70</td>
								<td>$122.50</td>
							</tr>

							<tr>
								<td>B</td>
								<td>1200 x300mm</td>
								<td>$112.70</td>
								<td>$122.50</td>
							</tr>
							
							<tr>
								<td>C</td>
								<td>1200 x300mm</td>
								<td>$112.70</td>
								<td>$122.50</td>
							</tr>
							
							<tr>
								<td>D</td>
								<td>1200 x300mm</td>
								<td>$112.70</td>
								<td>$122.50</td>
							</tr>
							
						</table>
					</div>
				<div class="gallery">
					<img src="images/vehicle_sign.png" class="attachment-shop_thumbnail" alt="Bathroom Basin &#8211; 2" title="Bathroom Basin &#8211; 2"/>
				</div>
					<div class="sc_table sc_table_style_2 sc_table_size_big">
						Your cart :
						<table>
							<tr>
								<th>Item panel</th>
								<th>Quantity</th>
								<th>Price</th>
								
							</tr>

							<tr>
								<td>A</td>
								<td>1</td>
								<td>$112.70</td>
								
							</tr>

							<tr>
								<td>B</td>
								<td>2</td>
								<td>$122.50</td>
							</tr>
							
							<tr>
								<td>C</td>
								<td>5</td>
								<td>$112.70</td>

							</tr>
							<tr>
								<td colspan=2>Total</td>
								<td>$30,000</td>

							</tr>
							<tr>
								<td colspan=2></td>
								<td>
									<div class="sc_button sc_button_style_global sc_button_size_medium squareButton global medium">
									<a href="features_product_category.php" class="">Add Cart</a>
									</div>
								</td>
								

							</tr>
						</table>
					</div>
					
					
					
				</div>
				
			</div>
			
			<!--<div class="sc_tabs woocommerce-tabs wc-tabs-wrapper">
				<ul class="tabs sc_tabs_titles wc-tabs">
					<li class="description_tab">
						<a href="#tab-description">Description</a>
					</li>
					<li class="reviews_tab">
						<a href="#tab-reviews">Reviews (0)</a>
					</li>
				</ul>
				<div class="panel entry-content wc-tab" id="tab-description">
					<h2>Product Description</h2>
					<div id="full-description">
						<p>Full-description Aenean eget cursus massa. Phasellus risus dolor, molestie quis egestas quis, congue id augue. Nulla tempor at ante eget aliquet. Suspendisse potenti. Aenean varius quis mi at mattis. Suspendisse ut hendrerit erat. Sed vulputate risus neque. Nunc vitae tempus erat. Quisque vel mauris odio. Nullam et nulla quis quam laoreet fringilla. Ut ultrices molestie arcu consequat varius. Cras tempus urna vel dolor luctus tristique. Nunc tristique a orci eu accumsan.</p>
					<p>In arcu nisi, luctus rhoncus turpis sed, ultrices tristique leo. Vivamus cursus neque quis malesuada accumsan. Maecenas vestibulum elit odio, vitae tempor enim finibus sed. Praesent lacus metus, iaculis pulvinar tincidunt eu, sollicitudin cursus erat. Vivamus eu nibh lorem. Nullam eu porta augue. Maecenas tristique massa non nunc posuere, sed varius dui tempus. Integer lacinia at dolor vel scelerisque. Donec sapien tortor, feugiat sed orci et, efficitur fringilla leo.</p>
				
					</div>
				</div>
				<div class="panel entry-content wc-tab" id="tab-reviews">
					<div id="reviews">
						<div id="comments">
							<h2>Reviews</h2>
							<p class="woocommerce-noreviews">There are no reviews yet.</p>
						</div>
						<div id="review_form_wrapper">
							<div id="review_form">
								<div id="respond" class="comment-respond">
									<h3 id="reply-title" class="comment-reply-title">Be the first to review &ldquo;Bathroom Basin&rdquo;
									<small>
									<a rel="nofollow" id="cancel-comment-reply-link" href="#respond">Cancel reply</a>
									</small>
									</h3>
									<form action="#" method="post" id="commentform" class="comment-form">
										<p class="comment-form-author">
											<label for="author">
												Name
												<span class="required">*</span>
											</label>
											<input id="author" name="author" type="text" value="" size="30" aria-required="true"/>
										</p>
										<p class="comment-form-email">
											<label for="email">
												Email
												<span class="required">*</span>
											</label>
											<input id="email" name="email" type="text" value="" size="30" aria-required="true"/>
										</p>
										<p class="comment-form-rating">
											<label for="rating">Your Rating</label>
											<p class="stars">
												<span>
													<a class="star-1" href="#">1</a>
													<a class="star-2" href="#">2</a>
													<a class="star-3" href="#">3</a>
													<a class="star-4" href="#">4</a>
													<a class="star-5" href="#">5</a>
												</span>
											</p>
										</p>
										<p class="comment-form-comment">
											<label for="comment">Your Review</label>
											<textarea id="comment" name="comment" cols="45" rows="8" aria-required="true"></textarea>
										</p>
										<p class="form-submit">
											<input name="submit" type="submit" id="submit" class="submit" value="Submit"/>
											<input type='hidden' name='comment_post_ID' value='2011' id='comment_post_ID'/>
											<input type='hidden' name='comment_parent' id='comment_parent' value='0'/>
										</p>
									</form>
								</div>
							</div>
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>-->
		</div>
	</article>