(function( $ ) {
var id = get_query();

$(document).ready(function(){
  
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

    var strService = 'Manager';
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
})(jQuery);