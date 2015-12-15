(function($)
{
$(document).ready()
{
//	var id = get_query();
//	 var request = {
//        productId : id['productId']
//    };
	$.post('load_menu_service.php',function(response,status)
	{
		var data = $.parseJSON(response);
		$("#menu-services").html(data.footer);
		
		
		//alert(data.mainImage);
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