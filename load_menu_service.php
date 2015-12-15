<?php
require_once('connect.php');
$sql = "SELECT `id`,`serviceName` FROM `service`";
$arr = array();
if($result=  mysqli_query($conn,$sql))
{
  $str='';
  if(mysqli_num_rows($result)>0)
  {
    while($row =  mysqli_fetch_row($result))
    {
      $str .= '<li id="menu-item-3526" class="menu-item menu-item-3526">
                 <a href="features_pages_service.php?serviceId='.$row[0].'">'.$row[1].'</a>
            	</li>';
    }
  }
  $arr['footer'] = $str;
}
echo json_encode($arr);
$conn->close();

?>