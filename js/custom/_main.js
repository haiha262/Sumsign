//var wc_add_to_cart_params = {"ajax_url":"\/","wc_ajax_url":"\/","i18n_view_cart":"View Cart","cart_url":"\/","is_cart":"","cart_redirect_after_add":"no"};

//var WPBookingCalendarSettings = {"path":"\/js\/vendor\/wp-booking-calendar\/public","day_white_bg":"#FFFFFF","day_white_bg_hover":"#567BD2","day_black_bg":"#333333","day_black_bg_hover":"#567BD2","day_white_line1_color":"#999999","day_white_line1_color_hover":"#FFFFFF","day_white_line2_color":"#00CC33","day_white_line2_color_hover":"#FFFFFF","day_black_line1_color":"#FFFFFF","day_black_line1_color_hover":"#FFFFFF","day_black_line2_color":"#FFFFFF","day_black_line2_color_hover":"#FFFFFF","recaptcha_style":"white"};

//var woocommerce_params = {"ajax_url":"\/","wc_ajax_url":"\/"};

//var wc_cart_fragments_params = {"ajax_url":"\/","wc_ajax_url":"\/","fragment_name":"wc_fragments"};




/*
jQuery(document).ready(function() {
	// CUSTOM AJAX CONTENT LOADING FUNCTION
	var ajaxRevslider = function(obj) {
	
		// obj.type : Post Type
		// obj.id : ID of Content to Load
		// obj.aspectratio : The Aspect Ratio of the Container / Media
		// obj.selector : The Container Selector where the Content of Ajax will be injected. It is done via the Essential Grid on Return of Content
		
		var content = "";

		data = {};
		
		data.action = 'revslider_ajax_call_front';
		data.client_action = 'get_slider_html';
		data.token = '11bf60b479';
		data.type = obj.type;
		data.id = obj.id;
		data.aspectratio = obj.aspectratio;
		
		// SYNC AJAX REQUEST
		jQuery.ajax({
			type:"post",
			url:"",
			dataType: 'json',
			data:data,
			async:false,
			success: function(ret, textStatus, XMLHttpRequest) {
				if(ret.success == true)
					content = ret.data;								
			},
			error: function(e) {
				console.log(e);
			}
		});
		
		 // FIRST RETURN THE CONTENT WHEN IT IS LOADED !!
		 return content;						 
	};
	
	// CUSTOM AJAX FUNCTION TO REMOVE THE SLIDER
	var ajaxRemoveRevslider = function(obj) {
		return jQuery(obj.selector+" .rev_slider").revkill();
	};

	// EXTEND THE AJAX CONTENT LOADING TYPES WITH TYPE AND FUNCTION
	var extendessential = setInterval(function() {
		if (jQuery.fn.tpessential != undefined) {
			clearInterval(extendessential);
			if(typeof(jQuery.fn.tpessential.defaults) !== 'undefined') {
				jQuery.fn.tpessential.defaults.ajaxTypes.push({type:"revslider",func:ajaxRevslider,killfunc:ajaxRemoveRevslider,openAnimationSpeed:0.3});   
				// type:  Name of the Post to load via Ajax into the Essential Grid Ajax Container
				// func: the Function Name which is Called once the Item with the Post Type has been clicked
				// killfunc: function to kill in case the Ajax Window going to be removed (before Remove function !
				// openAnimationSpeed: how quick the Ajax Content window should be animated (default is 0.3)
			}
		}
	},30);
});*/


jQuery(window).load(function() {
    preloader();
})

jQuery(document).ready(function() {
	main_slider_init();
	uptoscroll_init();
	popup_block_init();
	arc_skills_legend_color();
	slider_range();
	woo_review_star();
	service_show();
});

//preloader
function preloader(){
    "use strict";
    jQuery(".preloaderimg", "#preloader").fadeOut();
    jQuery("#preloader").delay(200).fadeOut("slow").delay(200, function(){
        jQuery(this).remove();
    });
}

function main_slider_init(){
    "use strict";
	if (jQuery("#mainslider_1").length > 0) {
		var setREVStartSize = function() {
			var	tpopt = new Object();
				tpopt.startwidth = 1150;
				tpopt.startheight = 485;
				tpopt.container = jQuery('#rev_slider_1');
				tpopt.fullScreen = "off";
				tpopt.forceFullWidth="off";

			tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),0);tpopt.height=parseInt(tpopt.container.height(),0);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
		};

		/* CALL PLACEHOLDER */
		setREVStartSize();


		var tpj=jQuery;
		tpj.noConflict();
		var revapi8;

		tpj(document).ready(function() {

		if(tpj('#rev_slider_1').revolution == undefined){
			revslider_showDoubleJqueryError('#rev_slider_1');
		}else{
		   revapi8 = tpj('#rev_slider_1').show().revolution(
			{	
										dottedOverlay:"none",
				delay:5000,
				startwidth:1150,
				startheight:485,
				hideThumbs:200,

				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:3,
				
										
				simplifyAll:"off",

				navigationType:"bullet",
				navigationArrows:"solo",
				navigationStyle:"preview1",

				touchenabled:"on",
				onHoverStop:"on",
				nextSlideOnWindowFocus:"off",

				swipe_threshold: 75,
				swipe_min_touches: 1,
				drag_block_vertical: false,
				
										
										
				keyboardNavigation:"off",

				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:36,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,

				shadow:2,
				fullWidth:"on",
				fullScreen:"off",

										spinner:"spinner3",
										
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"off",
				
				
				
				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

										hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0					});



							}
		});	/*ready*/
	}

	if (jQuery("#mainslider_2").length > 0) {
		var setREVStartSize = function() {
			var	tpopt = new Object();
				tpopt.startwidth = 1386;
				tpopt.startheight = 0;
				tpopt.container = jQuery('#rev_slider_2_1');
				tpopt.fullScreen = "on";
				tpopt.forceFullWidth="off";

			tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),0);tpopt.height=parseInt(tpopt.container.height(),0);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
		};

		/* CALL PLACEHOLDER */
		setREVStartSize();


		var tpj=jQuery;
		tpj.noConflict();
		var revapi7;

		tpj(document).ready(function() {

		if(tpj('#rev_slider_2_1').revolution == undefined){
			revslider_showDoubleJqueryError('#rev_slider_2_1');
		}else{
		   revapi7 = tpj('#rev_slider_2_1').show().revolution(
			{	
				dottedOverlay:"none",
				delay:5000,
				startwidth:1386,
				startheight:0,
				hideThumbs:200,
				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:3,
				simplifyAll:"off",
				navigationType:"bullet",
				navigationArrows:"solo",
				navigationStyle:"preview1",
				touchenabled:"on",
				onHoverStop:"on",
				nextSlideOnWindowFocus:"off",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				drag_block_vertical: false,
				keyboardNavigation:"off",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:36,
				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,
				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,
				shadow:0,
				fullWidth:"off",
				fullScreen:"on",
				spinner:"spinner3",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				forceFullWidth:"off",
				fullScreenAlignForce:"off",
				minFullScreenHeight:"",
				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,
				fullScreenOffsetContainer: "",
				fullScreenOffset: "",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0					
				});
			}
		});	/*ready*/
	}

	if (jQuery("#mainslider_3").length > 0) {
		var setREVStartSize = function() {
			var	tpopt = new Object();
				tpopt.startwidth = 1150;
				tpopt.startheight = 965;
				tpopt.container = jQuery('#rev_slider_3_1');
				tpopt.fullScreen = "off";
				tpopt.forceFullWidth="off";

			tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),0);tpopt.height=parseInt(tpopt.container.height(),0);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
		};

		/* CALL PLACEHOLDER */
		setREVStartSize();


		var tpj=jQuery;
		tpj.noConflict();
		var revapi9;

		tpj(document).ready(function() {

		if(tpj('#rev_slider_3_1').revolution == undefined){
			revslider_showDoubleJqueryError('#rev_slider_3_1');
		}else{
		   revapi9 = tpj('#rev_slider_3_1').show().revolution(
			{	
				dottedOverlay:"none",
				delay:5000,
				startwidth:1150,
				startheight:965,
				hideThumbs:200,
				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:4,
				simplifyAll:"off",
				navigationType:"thumb",
				navigationArrows:"none",
				navigationStyle:"round",
				touchenabled:"on",
				onHoverStop:"on",
				nextSlideOnWindowFocus:"off",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				drag_block_vertical: false,
				keyboardNavigation:"off",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,
				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,
				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,
				shadow:2,
				fullWidth:"on",
				fullScreen:"off",
				spinner:"spinner3",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				forceFullWidth:"off",
				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0					
				});
			}
		});	/*ready*/
	}

	if (jQuery("#mainslider_4").length > 0) {

		var setREVStartSize = function() {
			var	tpopt = new Object();
				tpopt.startwidth = 1150;
				tpopt.startheight = 500;
				tpopt.container = jQuery('#rev_slider_4_1');
				tpopt.fullScreen = "off";
				tpopt.forceFullWidth="off";

			tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),0);tpopt.height=parseInt(tpopt.container.height(),0);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
		};

		/* CALL PLACEHOLDER */
		setREVStartSize();


		var tpj=jQuery;
		tpj.noConflict();
		var revapi10;

		tpj(document).ready(function() {

		if(tpj('#rev_slider_4_1').revolution == undefined){
			revslider_showDoubleJqueryError('#rev_slider_4_1');
		}else{
		   revapi10 = tpj('#rev_slider_4_1').show().revolution(
			{	
				dottedOverlay:"none",
				delay:5000,
				startwidth:1150,
				startheight:500,
				hideThumbs:200,
				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:2,
				simplifyAll:"off",
				navigationType:"bullet",
				navigationArrows:"solo",
				navigationStyle:"preview1",
				touchenabled:"on",
				onHoverStop:"on",
				nextSlideOnWindowFocus:"off",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				drag_block_vertical: false,
				keyboardNavigation:"off",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:36,
				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,
				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,
				shadow:0,
				fullWidth:"on",
				fullScreen:"off",
				spinner:"spinner3",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				forceFullWidth:"off",
				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0					
				});
			}
		});
	}

}


//jQuery(document).ready(function () {
//	jQuery("#sc_blogger_862604211 .isotopeFiltr").append("<ul><li class=\"squareButton active\"><a href=\"#\" data-filter=\"*\">All</a></li><li class=\"squareButton\"><a href=\"#\" data-filter=\".flt_252\">living rooms</a></li><li class=\"squareButton\"><a href=\"#\" data-filter=\".flt_253\">kitchens</a></li><li class=\"squareButton\"><a href=\"#\" data-filter=\".flt_251\">buildings</a></li><li class=\"squareButton\"><a href=\"#\" data-filter=\".flt_250\">exterior design</a></li></ul>");
//});

//jQuery(document).ready(function () {
//	jQuery("#sc_blogger_274483396 .isotopeFiltr").append("<ul><li class=\"squareButton active\"><a href=\"#\" data-filter=\"*\">All</a></li><li class=\"squareButton\"><a href=\"#\" data-filter=\".flt_255\">press releases</a></li><li class=\"squareButton\"><a href=\"#\" data-filter=\".flt_254\">video</a></li><li class=\"squareButton\"><a href=\"#\" data-filter=\".flt_256\">print publications</a></li></ul>");
//});

//jQuery(document).ready(function() {
//	jQuery.post(Axiom_ajax_url, {
//		action: 'post_counter',
//		nonce: Axiom_ajax_nonce,
//		post_id: 3679,
//		views: 36336		});
//});

/* Add login popup block */
function popup_block_init() {
    "use strict";
	if (jQuery("body.usermenu_show").length > 0) {
										  
		var user_popup  ='<div id="user-popUp" class="user-popUp mfp-with-anim mfp-hide">';
		user_popup  +=	'<div class="sc_tabs">';
		user_popup  +=		'<ul class="loginHeadTab">';
		user_popup  +=			'<li>';
		user_popup  +=				'<a href="#loginForm" class="loginFormTab icon">Log In</a>';
		user_popup  +=			'</li>';
		user_popup  +=			'<li>';
		user_popup  +=				'<a href="#registerForm" class="registerFormTab icon">Create an Account</a>';
		user_popup  +=			'</li>';
		user_popup  +=		'</ul>';
		user_popup  +=		'<div id="loginForm" class="formItems loginFormBody">';
		user_popup  +=			'<form action="#" method="post" name="login_form" class="formValid">';
		user_popup  +=				'<div class="itemformLeft">';	
		//user_popup  +=					'<input type="hidden" name="redirect_to" value="index.html"/>';
		user_popup  +=					'<ul class="formList">';
		user_popup  +=						'<li class="icon formLogin">';
		user_popup  +=							'<input type="text" id="username" name="user" value="" placeholder="Login">';
		user_popup  +=						'</li>';
		user_popup  +=						'<li class="icon formPass">';
		user_popup  +=							'<input type="password" id="password" name="pwd" value="" placeholder="Password">';
		user_popup  +=						'</li>';
		user_popup  +=						'<li class="remember">';
		user_popup  +=							'<a href="#" class="forgotPwd">Forgot password?</a>';
		user_popup  +=							'<input type="checkbox" value="forever" id="rememberme" name="rememberme">';
		user_popup  +=							'<label for="rememberme">Remember me</label>';
		user_popup  +=						'</li>';
		user_popup  +=						'<li>';
		user_popup  +=							'<a href="#" class="sendEnter enter" id="login">Login</a>';
		user_popup  +=						'</li>';
		user_popup  +=					'</ul>';
		user_popup  +=				'</div>'//div for left;
		//user_popup  +=				'<div class="itemformRight">';
		//user_popup  +=					'<ul class="formList">';
		//user_popup  +=						'<li>You can login using your social profile</li>';
		//user_popup  +=						'<li class="loginSoc">';
		//user_popup  +=							'<a href="#" class="iconLogin fb"></a>';
		//user_popup  +=							'<a href="#" class="iconLogin tw"></a>';
		//user_popup  +=							'<a href="#" class="iconLogin gg"></a>';
		//user_popup  +=						'</li>';
		//user_popup  +=						'<li>';
		//user_popup  +=							'<a href="#" class="loginProblem">Problem with login?</a>';
		//user_popup  +=						'</li>';
		//user_popup  +=					'</ul>';
		//user_popup  +=				'</div>'//div for right;
		user_popup  +=				'<div class= "messageBlock">';
		user_popup  +=			'</form>';
		user_popup  +=			'</div>';
		user_popup  +=		'</div>';
		user_popup  +=		'<div id="registerForm" class="formItems registerFormBody">';
		user_popup  +=			'<form name="register_form" method="post" class="formValid">';
		user_popup  +=			'<div>';
		//user_popup  +=				'<input type="hidden" name="redirect_to" value="register.php"/>';
		user_popup  +=				'<div class="itemformLeft">';
		user_popup  +=					'<ul class="formList">';
		user_popup  +=						'<li class="icon formUser">';
		user_popup  +=							'<input type="text" id="registration_username" name="registration_username" value="" placeholder="User name (login)">';
		user_popup  +=						'</li>';
		user_popup  +=						'<li class="icon formLogin">';
		user_popup  +=							'<input type="text" id="registration_email" name="registration_email" value="" placeholder="E-mail">';
		user_popup  +=						'</li>';
		user_popup  +=						'<li class="i-agree">';
		//user_popup  +=							'<input type="checkbox" value="forever" id="i-agree" name="i-agree">';
		user_popup  +=							'<label for="i-agree">I agree with</label>';
		user_popup  +=							'<a href="#">Terms &amp; Conditions</a>';
		user_popup  +=						'</li>';
		user_popup  +=						'<li>';
		user_popup  +=							'<a class="sendEnter enter" id="signup">Sign Up</a>';
		user_popup  +=						'</li>';
		user_popup  +=					'</ul>';
		user_popup  +=				'</div>';
		user_popup  +=				'<div class="itemformRight">';
		user_popup  +=					'<ul class="formList">';
		user_popup  +=						'<li class="icon formPass">';
		user_popup  +=							'<input type="password" id="registration_pwd" name="registration_pwd" value="" placeholder="Password">';
		user_popup  +=						'</li>';
		user_popup  +=						'<li class="icon formPass">';
		user_popup  +=							'<input type="password" id="registration_pwd2" name="registration_pwd2" value="" placeholder="Confirm Password">';
		user_popup  +=						'</li>';
		user_popup  +=					'</ul>';
		user_popup  +=					'<div class="formDescription">Minimum 6 characters</div>';
		user_popup  +=				'</div>';
		user_popup  +=			'</div>';
		
		
		user_popup  +=			'<br/><div class="messageBlock"></div>';
		user_popup  +=			'</form>';
		
		user_popup  +=		'</div>';
		user_popup  +=	'</div>';
		user_popup  +='</div>';

		jQuery('body').append(user_popup);
		//hatran
		jQuery('.sendEnter').click(function(){
			var form = jQuery(this).parents("form");
			var action = form.attr('action');
			var request = {
					username : form.find('#username').val(),
					password : form.find('#password').val(),
					
				};
				
			jQuery.post("login_customer.php", request, function(data,status)
			{
				if (status=="success") {
					if(data=="true")
					{
						alert( Axiom_LOGIN_SUCCESS);
						form.find(":input").each(function() {
							jQuery(this).val("");
							jQuery('.mfp-bg.mfp-zoom-in.mfp-ready').remove();
							jQuery('#user-popUp').remove();
						});
					}
					else
					{
					
						Axiom_error_msg_box = form.find(".messageBlock");
						
						var error_msg = "Username or password are incorrect!"
						Axiom_error_msg_box.toggleClass("sc_infobox sc_infobox_style_error", true);
						Axiom_error_msg_box.html(error_msg).fadeIn();
						setTimeout(function() { Axiom_error_msg_box.fadeOut(); }, 5000);
					}
				}
			});
		}
		);
		jQuery('#signup').click(function(){
			
			var form = jQuery(this).parents("form");
			var action = form.attr('action');
		
			var result = submitRegister(form, action!=undefined ? action : Axiom_ajax_url);
			if(!result)
			{
				
				var request = {
					username : form.find('#registration_username').val(),
					password : form.find('#registration_pwd').val(),
					email : form.find('#registration_email').val()
				};
				
				jQuery.post("register_customer.php", request, function(data,status)
					{
						if (status=="success") {
							if(data=="true")
							{
								alert( Axiom_REGISTRATION_SUCCESS);
								form.find(":input").each(function() {
									jQuery(this).val("");
								});
							}
							else
							{
							
								Axiom_error_msg_box = form.find(".messageBlock");
								
								var error_msg = "User name has already regitered!"
								Axiom_error_msg_box.toggleClass("sc_infobox sc_infobox_style_error", true);
								Axiom_error_msg_box.html(Axiom_REGISTRATION_FAILED + " "  +error_msg).fadeIn();
								setTimeout(function() { Axiom_error_msg_box.fadeOut(); }, 5000);
							}
						}
					});
			}	
			
		});
	}

}

/*Scroll to top*/
function uptoscroll_init() {
    "use strict";

    var uptoscroll  ='<div class="upToScroll">';
	uptoscroll  +=	'<a href="#" class="scrollToTop icon-up-open-big" title="Back to top"></a>';
	uptoscroll  +='</div>';

	jQuery('body').append(uptoscroll);	
}

function arc_skills_legend_color() {
    "use strict";

    if (jQuery(".sc_skills_arc").length > 0) {
        jQuery(".sc_skills_arc").find("li:nth-child(1)", '.sc_skills_legend').css({'background-color': jQuery(".arc:nth-child(1) input.color", ".sc_skills_arc").attr("value")});
        jQuery(".sc_skills_arc").find("li:nth-child(2)", '.sc_skills_legend').css({'background-color': jQuery(".arc:nth-child(2) input.color", ".sc_skills_arc").attr("value")});
        jQuery(".sc_skills_arc").find("li:nth-child(3)", '.sc_skills_legend').css({'background-color': jQuery(".arc:nth-child(3) input.color", ".sc_skills_arc").attr("value")});
        jQuery(".sc_skills_arc").find("li:nth-child(4)", '.sc_skills_legend').css({'background-color': jQuery(".arc:nth-child(4) input.color", ".sc_skills_arc").attr("value")});
        jQuery(".sc_skills_arc").find("li:nth-child(5)", '.sc_skills_legend').css({'background-color': jQuery(".arc:nth-child(5) input.color", ".sc_skills_arc").attr("value")});
    }
}


// Price range slider
function slider_range() {
    if (jQuery("#slider-range").length > 0) {
        jQuery("#slider-range").slider({
            range: true,
            min: 0,
            max: 99,
            values: [0, 99],
            slide: function(event, ui) {
                jQuery("#amount").val("£" + ui.values[0] + " - £" + ui.values[1]);
            }
        });
        jQuery("#amount").val("£" + jQuery("#slider-range").slider("values", 0) +
            " - £" + jQuery("#slider-range").slider("values", 1));
    }
}

// Select woocomerce review stars
function woo_review_star() {
    if (jQuery(".stars", "#review_form").length > 0) {
        jQuery(".stars").find("a").on("click", function() {
            jQuery("a.active").removeClass("active");
            jQuery(this).addClass("active");
            return false;
        });
    }
}

function service_show() {
	
	//3dletter init
		jQuery(".product").hide();//ALL TAB HIDE
		jQuery("#with-illuminated").hide();
		if(jQuery("#illuminated").prop('checked') == true){
			jQuery(".with-illuminated").show();
			jQuery(".with-no-illuminated").hide();
		}
		else
		{
			jQuery(".with-illuminated").hide();
			jQuery(".with-no-illuminated").show();
		}
		jQuery("#acrylic-spec").hide();
	//=====
	jQuery("#threed-letter-img").click(function(){
		jQuery(".product").hide();
		jQuery(".threed-letter").show();
		
		//init
		
		//start up
		
		jQuery("#with-illuminated").hide();
		if(jQuery("#illuminated").prop('checked') == true){
			jQuery(".with-illuminated").show();
			jQuery(".with-no-illuminated").hide();
		}
		else
		{
			jQuery(".with-illuminated").hide();
			jQuery(".with-no-illuminated").show();
		}
		jQuery("#acrylic-spec").hide();
	});
	
	jQuery("#lightbox-img").click(function(){
		jQuery(".product").hide();
		jQuery(".lightbox").show();
		
		//init
		jQuery("input[name=side]").filter('[value="double"]').prop('checked', true);
	});
	jQuery("#shop-front-img").click(function(){
		jQuery(".product").hide();
		jQuery(".shop-front").show();
		});
	jQuery("#vehicle-sign-img").click(function(){
		jQuery(".product").hide();
		jQuery(".vehicle-sign").show();
		});
	
	//Letter 3D
	jQuery("#illuminated").change(function() {
		if(jQuery("#illuminated").prop('checked') == true){
			jQuery(".with-illuminated").show();
			jQuery(".with-no-illuminated").hide();
		}
		else
		{
			jQuery(".with-illuminated").hide();
			jQuery(".with-no-illuminated").show();
		}

	});
	jQuery("select[name=material]").change(function()
	{
		var sel = jQuery("select[name=material]").val();
		if (sel.indexOf('Gold')>-1 || sel.indexOf('Silver') >-1) {//exist
			jQuery("#acrylic-spec").show();
			jQuery("#non-acrylic-spec").hide();
			
		}else
		{
			jQuery("#non-acrylic-spec").show();
			jQuery("#acrylic-spec").hide();
		}
	 });
	jQuery("#fs").change(function() {
		//alert($(this).val());
		jQuery('.letter').css("font-family", jQuery(this).val());
		jQuery('.letter').css("text-transform","uppercase");

	});
	jQuery("input.other-input[type=text]").focus(function() {
		 jQuery('input.sizeHeight[type="radio"]').each(function(){
			jQuery(this).prop('checked', false);
		 });
		//jQuery('.letter-example').css("font-family", jQuery(this).val());
		//jQuery('.letter-example').css("text-transform","uppercase");

	});
	jQuery("#letterAdd").click(function(){
		var letter_height = 100;
		if (jQuery("input.sizeHeight").is(':checked')) {
			letter_height = jQuery("input.sizeHeight:checked").val();
		}
		else
		{
			letter_height = jQuery("input[name=custom_size]").val();
		}
		var request =
		{
			letter : jQuery(".letter").val(),
			illuminated : jQuery("#illuminated").prop('checked'),
			letter_font : jQuery("#fs").val(),
			letter_deep: jQuery("input[name=deep]:checked").val(),
			letter_height : letter_height,
			letter_qty : jQuery("input[name=custom_qty]").val(),
			letter_sendMethod : jQuery("input[name=sendProduct]:checked").val()
			
		}
	});
	
	//LightBox
	
	jQuery("input[name=side]").change(function(){
		var value =jQuery("input[name=side]:checked").val();
		jQuery("#dimension-double").show();		
		if (value == 'single') {
			jQuery("#dimension-double").hide();			
		}
		
			
		
	
	});
	
}