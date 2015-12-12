<?php
require_once('connect.php');
if ($_SERVER['REQUEST_METHOD']== "POST")
{
    if(isset($_POST['service']))
    {
        $service = $_POST["service"];
        $query = "SELECT * FROM `staff` where position like '%" . $service."%'";
        $arr = array();
        if($result = mysqli_query($conn,$query))
        {
            if( mysqli_num_rows($result)>0)
            {
                $str = "";
                while($row = mysqli_fetch_array($result, MYSQL_ASSOC))
                {
                    $str.= '<div class="columns1_3" data-animation="animated fadeInUp">';
                    $str.= '   <div class="sc_team_item sc_team_item_1 odd first">';
                    $str.= '        <div class="sc_team_item_avatar">';
                    $str.= '            <img alt="03.jpg" src="images/staff/'.$row['avatar'].'">';
                    $str.= '            <div class="sc_team_item_description">'.$row['desc'].'</div>';
                    $str.= '        </div>';
                    $str.= '        <div class="sc_team_item_info">';
                    $str.= '            <h3 class="sc_team_item_title">';
                    $str.= '                <a href="#">'.$row['name'].'</a>';
                    $str.= '            </h3>';
                    $str.= '            <div class="sc_team_item_position theme_accent2">'.$row['position'].'</div>';
                    $str.= '            <ul class="sc_team_item_socials">';
                    $str.= '                <li>';
                    $str.= '                    <a href="#" class="social_icons icon-facebook" target="_blank"> </a>';
                    $str.= '                </li>';
                    $str.= '                <li>';
                    $str.= '                    <a href="#" class="social_icons icon-twitter" target="_blank"> </a>';
                    $str.= '                </li>';
                    $str.= '                <li>';
                    $str.= '                    <a href="#" class="social_icons icon-gplus" target="_blank"> </a>';
                    $str.= '                </li>';
                    $str.= '                <li>';
                    $str.= '                    <a href="#" class="social_icons icon-dribbble" target="_blank"> </a>';
                    $str.= '                </li>';
                    $str.= '            </ul>';
                    $str.= '        </div>';
                    $str.= '    </div>';
                    $str.= '</div>';
                }
                echo $str;
                //echo  $arr['desc'];;
            }
        }    
    }
}

$conn->close();
?>