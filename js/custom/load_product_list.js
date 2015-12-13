(function($)
{
$(document).ready()
{
	var id = get_query();
	 var request = {
        productId : id['productId']
    };
	$.post('load_product_list.php',request,function(response,status)
	{
		var data = $.parseJSON(response);
		$("#product_list").html(data.header);
		$('#product-categories').html(data.aside);
		$('.title_product').html(data.prodName);
		$('#description').html(data.prodDesc);
		$('#full-description').html(data.prodFullDetail);
	}
	);	
}
	function get_query(){
		var url = location.search;
		var qs = url.substring(url.indexOf('?') + 1).split('&');
		for(var i = 0, result = {}; i < qs.length; i++){
			qs[i] = qs[i].split('=');
			result[qs[i][0]] = decodeURIComponent(qs[i][1]);
		}
		return result;
	}
})(jQuery)