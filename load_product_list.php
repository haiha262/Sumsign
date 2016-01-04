<?php
require_once('connect.php');
$sql = "SELECT * FROM `products`";
$id = -1;
if ($_SERVER['REQUEST_METHOD'] == "POST")
{
  if(isset($_POST["productId"]))
  {
    $id = $_POST["productId"];
  }
}
if($result = mysqli_query($conn,$sql))
{
  $countRow = mysqli_num_rows($result);
  $arr = array();
  if($countRow>0)
  {
    //$row = mysqli_fetch_array($result,MYSQLI_NUM);
    $strHTML='';
    $strHTML_aside='';
    
    $tagCLose =false;
    for ($i=0; $i<$countRow;$i++)
    {
      $row = mysqli_fetch_array($result,MYSQLI_NUM);
      //list for header menu
      if($i%3==0)
      {
        $tagClose = false;
        $strHTML .='<li class="menu-item menu-item-has-children">';
       // $strHTML .='  <a href="#">Service #1</a>';
        $strHTML .='  <ul class="sub-menu">';
        
        $strHTML .='    <li class="menu-item">';
        $strHTML .='      <a href="features_product.php?productId='.$row[0].'">'.$row[1].'</a>';
        $strHTML .='    </li>';
      }
      else
      {
        $strHTML .='<li class="menu-item">';
        $strHTML .='  <a href="features_product.php?productId='.$row[0].'">'.$row[1].'</a>';
        $strHTML .='</li>';
      }
              
      if(($i+1)%3==0 && $i>0)
      {
        $strHTML .='    </ul>';
        $strHTML .='</li>';
        $tagCLose = true;
      }
      
      //list for aside
      $strHTML_aside .= '<li class="cat-item">';
      $strHTML_aside .= '<a href="features_product.php?productId='.$row[0].'">'.$row[1].'</a>';
      $strHTML_aside .= '<span class="count">(2)</span>';
      $strHTML_aside .= '</li>';
      
      
      //get current info product id
      if($row[0] == $id)
      {
        $arr['prodName'] = $row[1];
        $arr['prodDesc'] = $row[2];
        $arr['prodFullDetail'] = $row[3];
      }
      
    }//end for
    
    if (!$tagCLose)
    {
      $strHTML .='    </ul>';
      $strHTML .='</li>';
      $tagCLose = true;
    }
    $arr['header'] = $strHTML;
    $arr['aside'] =$strHTML_aside;
    
    
  }
  
 
}// end if mysql_query: product
//get img list of this id
$sql = "SELECT `alt`,`imgName` FROM `productImage` WHERE `prodId` = $id";
$str = '';
if($result = mysqli_query($conn,$sql))
{
  $countRow = mysqli_num_rows($result);
  
  for($i = 0 ; $i<$countRow ;$i++)
  {
    $row = mysqli_fetch_array($result,MYSQLI_NUM);
    if($i==0)
    {
      $str .= '<a href="images/products/'.$row[1].'" itemprop="image" class="woocommerce-main-image zoom" title="" data-rel="prettyPhoto[product-gallery]">
											<img src="images/products/'.$row[1].'" class="attachment-shop_single" alt="'.$row[0].'" title="'.$row[0].'"/>
										</a>';
      $str .= '<div class="thumbnails columns-5">';
      
    }
    else{
      $str .= '<a href="images/products/'.$row[1].'" class="zoom first" title="" data-rel="prettyPhoto[product-gallery]">
												<img src="images/products/'.$row[1].'" class="attachment-shop_thumbnail" alt="'.$row[0].'" title="'.$row[0].'"/>
											</a>';
     
    }
   
  }
   $str .= '</div>';
    $arr['image'] = $str;		
 
}//end if query image product
    echo json_encode($arr);


$conn->close();
?>