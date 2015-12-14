<?php
require_once('connect.php');
$sql = "SELECT * FROM `products`";
$arr = array();
if($result = mysqli_query($conn,$sql))
{
  $countRow = mysqli_num_rows($result);
  
  if($countRow>0)
  {
    //$row = mysqli_fetch_array($result,MYSQLI_NUM);
    $strHTML='';
   
    
    $tagCLose =false;
    for ($i=0; $i<$countRow;$i++)
    {
      $row = mysqli_fetch_array($result,MYSQLI_NUM);
	  $prodId = $row[0];
	  $prodName = $row[1];
      //list for header menu
      $strHTML .= '<li class="product">';
	  $strHTML .= '	<a href="features_product.php?productId='.$prodId.'">';
	  //get 1st image
		$sql = "SELECT `alt`,`imgName` FROM `productImage` WHERE `prodId` = $prodId";
		$str = '';
		if($imgResult = mysqli_query($conn,$sql))
		{
		  $row_image = mysqli_fetch_array($imgResult,MYSQLI_NUM);
		  $alt = $row_image[0];
		  $imgName = $row_image[1];
		  $strHTML .= '	<img src="images/products/'.$imgName.'" class="attachment-shop_catalog" alt="'.$alt.'"/>';
		}
	  
	  
	  $strHTML .= '	<h3>'.$prodName.'</h3>';										
	  $strHTML .= '	</a>';
	  $strHTML .= '</li>';
      
    }//end for
    $arr['product_list'] = $strHTML;
  }
}//end if query image product
  echo json_encode($arr);


$conn->close();
?>