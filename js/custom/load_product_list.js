(function($)
{
$(document).ready()
{
$.post('load_product_list.php',function(response,status)
	   {
		var data = $.parseJSON(response);
		$("#product_list").html(data.header);
		$('#product-categories').html(data.aside);
	   }
	   );	
}
}
)(jQuery)