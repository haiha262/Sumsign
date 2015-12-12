(function( $ ) {
var id = get_query();

$(document).ready(function(){
  
loadService();
loadMember();

});

function get_query(){
    var url = location.search;
    var qs = url.substring(url.indexOf('?') + 1).split('&');
    for(var i = 0, result = {}; i < qs.length; i++){
        qs[i] = qs[i].split('=');
        result[qs[i][0]] = decodeURIComponent(qs[i][1]);
    }
    return result;
}
var strService="";
function loadMember() {

    //alert("before " + id['productId']);
    var request = {
        service : strService
    };
    $.post("load_staff.php",
       request,
        function(strHtml,status){
            if (status=="success") {

                $('#staff_content').html(strHtml);
  
            }
            
        });
}
function loadService() {
   
    //alert("before " + id['productId']);
    var request = {
        productId : id['productId']
    };
    $.post("load_service.php",
       request,
        function(jsondata,status){
            if (status=="success") {
                
                var response = $.parseJSON(jsondata)
                console.log("res");
                //alert(JSON.stringify(data));
                strService = response.name.toLowerCase();
                $('.current').html('Service / ' +response.name);
                $('.pageTitle').html('Service / ' + response.name.toUpperCase());
                $('#service_title').html(response.name.toUpperCase());
                $('#service_desc').html(response.desc);
                loadMember();
            }
            
        });
}

})(jQuery);