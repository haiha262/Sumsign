<?php
require_once('connect.php');
session_start();
if ($_SERVER['REQUEST_METHOD']== "POST")
{
  if(isset($_POST['username']))
  {
    $username = $_POST['username'];
    $password = MD5($_POST['password']);
    
    $sql = "SELECT * FROM `customer` where `cusName` = '".$username."' and `cusPass` = '".$password."'";
    $result = mysqli_query($conn,$sql);
    $rowCount = mysqli_num_rows($result);
    if($rowCount>0)
    {
      echo 'true';
      $_SESSION['customer'] = $username;
    }
    else
    {
      echo 'false'; 
    }
  }
}
$conn->close();
?>