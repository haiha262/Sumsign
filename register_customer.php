<?php

require_once('connect.php');
if ($_SERVER['REQUEST_METHOD']== "POST")
{
  if(isset($_POST['email']))
  {
    $username = $_POST['username'];
    $password = MD5($_POST['password']);
    $email = $_POST['email'];
    $sql = "SELECT * FROM `customer` where `cusName` = '".$username."'";
    $result = mysqli_query($conn,$sql);
    $rowCount = mysqli_num_rows($result);
    if($rowCount>0)
    {
      echo 'false';
    }
    else
    {
      $sql = "INSERT INTO `customer`(`cusName`, `cusPass`, `email`)
                VALUES ('$username','$password','$email')";
      if($result = mysqli_query($conn,$sql))
      {
        echo 'true';
      }
      else
      {
        echo 'false';
      }
    }
  }
}
$conn->close();
?>