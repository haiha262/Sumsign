<?php
require_once('connect.php');
if ($_SERVER['REQUEST_METHOD']== "POST")
{
    $id = $_POST["productId"];
   
    
    if(isset($_POST['productId']))
    {
        $query = "SELECT * FROM `service` where id = " . $id;
        $arr = array();
        if($result = mysqli_query($conn,$query))
        {
            if( mysqli_num_rows($result)>0)
            {
                // echo $id ." after";
                $row = mysqli_fetch_row($result);
                $arr['id'] = $row[0];
                $arr['name'] = $row[1];
                $arr['desc'] = $row[2];
                echo json_encode($arr);
                //echo  $arr['desc'];;
            }
        }    
    }
}

$conn->close();
?>