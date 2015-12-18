(function( $ ) {


	$(document).ready(function(){
  

	  $.post("load_menu_service.php",function(jsondata,status)
			 {
				var response = $.parseJSON(jsondata)
				if (status == "success") {
					$("#menu-services_footer").html(response.footer);
					$("#menu_services_header").html(response.header);
				}
			 }
			 );
    //$.post("load_service_detail.php",
    //   request,
    //    function(jsondata,status){
    //        if (status=="success") {
    //            
    //            var response = $.parseJSON(jsondata)
    //            console.log("res");
    //            //alert(JSON.stringify(data));
    //            strService = response.name.toLowerCase();
    //            $('.current').html('Service / ' +response.name);
    //            $('.pageTitle').html('Service / ' + response.name.toUpperCase());
    //            $('#service_title').html(response.name.toUpperCase());
    //            $('#service_desc').html(response.desc);
    //            loadMember();
    //        }
    //        
    //    });
		
	
	});
})(jQuery);