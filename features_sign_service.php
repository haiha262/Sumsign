<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="format-detection" content="telephone=no">
	<title>M2 | House Repair Services</title>
	<link rel="icon" type="image/x-icon" href="images/favicon.ico"/>
	<link rel='stylesheet' id='woocommerce-layout-css' href='js/vendor/woocommerce/assets/css/woocommerce-layout.css' type='text/css' media='all'/>
	<link rel='stylesheet' id='woocommerce-smallscreen-css' href='js/vendor/woocommerce/assets/css/woocommerce-smallscreen.css' type='text/css' media='only screen and (max-width: 768px)'/>
	<link rel='stylesheet' id='woocommerce-general-css' href='js/vendor/woocommerce/assets/css/woocommerce.css' type='text/css' media='all'/>
	<link rel='stylesheet' id='woo-style-css' href='css/woo-style.css' type='text/css' media='all'/>
	<link rel='stylesheet' id='fontello-css' href='css/fontello/css/fontello.css' type='text/css' media='all'/>
	<link rel='stylesheet' id='animation-css' href='css/fontello/css/animation.css' type='text/css' media='all'/>
	<link rel='stylesheet' href='css/__packed.css' type='text/css' media='all'/>
	<link rel='stylesheet' id='main-style-css' href='css/style.css' type='text/css' media='all'/>
	<link rel='stylesheet' id='shortcodes-css' href='css/shortcodes.css' type='text/css' media='all'/>
	<link rel='stylesheet' id='theme-skin-css' href='css/default.css' type='text/css' media='all'/>
	<style id='theme-skin-inline-css' type='text/css'></style>
	<link rel='stylesheet' id='responsive-css' href='css/responsive.css' type='text/css' media='all'/>

	<!--<link rel='stylesheet' href='custom_tools/css/custom_tools.css' type='text/css' media='all'/>-->
	<!--[if lt IE 9]>
		<script src="js/vendor/html5.js" type="text/javascript">
	</script>
	<![endif]-->
</head>
<body class="archive wide top_panel_above usermenu_hide woocommerce woocommerce-page shop_bg">
	
	<!--[if lt IE 9]>
		<div class="sc_infobox sc_infobox_style_error">
	<div style="text-align:center;">It looks like you're using an old version of Internet Explorer. For the best WordPress experience, please <a href="http://microsoft.com" style="color:#191919">update your browser</a> or learn how to <a href="http://browsehappy.com" style="color:#222222">browse happy</a>!</div>
	</div>	<![endif]-->
	
	<div class="main_content">
		<div class="boxedWrap">

			
<?php require_once('header.php'); ?>
			<div id="topOfPage" class="topTabsWrap">
				<div class="main">
					<div class="speedBar">
					<a class="home" href="index.html">Home</a>
					<span class="breadcrumbs_delimiter"> / </span>
					<a class="all" href="#">All Posts</a>
					<span class="breadcrumbs_delimiter"> / </span>
					<span class="current">Product Categories</span> 
					</div>
					<h3 class="pageTitle h3">Product Categories</h3>
				</div>
			</div>

			<div class="mainWrap with_sidebar sideBarRight">
				<div class="main" role="main">
					<div  style="border: dotted;">
						<div class="list_service">
							<?php require_once("sign_service_list.php"); ?>
						</div>
						<div class="list_service_content">
							<?php require_once("sign_service_content.php"); ?>
						</div>
					</div>
				
				</div>
			</div>


			<div class="footerContentWrap">
				
				<?php
				require_once('footer_light.php');
				require_once('social_link.php');?>
			</div> 
		</div> 
	</div> 

	<div id="preloader" class="preloader">
	    <div class="preloader_image"></div>
	</div>
<?php require_once('allscript.php'); ?>

</body>
</html>