<?php
require_once('connect.php');

$sql = "SELECT `id`,`serviceName`,`idCatService` FROM `service` ORDER BY idCatService";
$arr = array();
if($result=  mysqli_query($conn,$sql))
{
  $strFooter='';
  $strHeader='';
  
  $strDemo = '<li class="menu-item menu-item-has-children">
	  <a href="#">Service #1</a>
	  <ul class="sub-menu">
		  <li class="menu-item">
			  <a href="features_pages_service.php?serviceId=1">Design</a>
		  </li>
		  <li class="menu-item">
			  <a href="features_pages_service.php?serviceId=2">Manufacture</a>
		  </li>
		  <li class="menu-item">
			  <a href="features_pages_service.php?serviceId=3">Installation</a>
		  </li>
	  </ul>
  </li>';
  
  if(mysqli_num_rows($result)>0)
  {
	$catServiceID = 0;
    while($row =  mysqli_fetch_row($result))
    {
      $strFooter .= '<li id="menu-item-3526" class="menu-item menu-item-3526">
                 <a href="features_pages_service.php?serviceId='.$row[0].'">'.$row[1].'</a>
            	</li>';
				
	  //get list service menu header		
	  $currentCatServiceID = $row[2];
	  if($currentCatServiceID != $catServiceID)
	  {
		 $strSerName = getNameService($currentCatServiceID,$conn);
		if($catServiceID!=0)
		{
		 
		  $strHeader .='
	  					</ul>
					  </li>
					  <li class="menu-item menu-item-has-children">
						<a href="#">'.$strSerName.'</a>
						<ul class="sub-menu">';
		}else
		{
		  $strHeader .='
					  <li class="menu-item menu-item-has-children">
						<a href="#">'.$strSerName.'</a>
						<ul class="sub-menu">';
		}
		
		
			$catServiceID = $currentCatServiceID;		  					  
	  }
	  
		$strHeader .='<li class="menu-item">
						<a href="features_pages_service.php?serviceId='.$row[0].'">'.$row[1].'</a>
					</li>';
	  
	  
    }
	$strHeader .='	  </ul>
					</li>';
  }
  $arr['footer'] = $strFooter;
  $arr['header'] = $strHeader;
}

function getNameService($id,$conn)
{


  $sql = "SELECT * FROM `Cat_Service` where `id` = '".$id."'";
  $result=  mysqli_query($conn,$sql);
  if(mysqli_num_rows($result) >0){
	$row = mysqli_fetch_row($result);
	return $row[1];
  }
  return 'Service';
}
echo json_encode($arr);
$conn->close();

?>