<?php
//require_once('setting.php');

$conn = new mysqli('localhost', 'root', '', 'sum');
/*
 * This is the "official" OO way to do it,
 * BUT $connect_error was broken until PHP 5.2.9 and 5.3.0.
 */
if ($conn->connect_error) {
    die('Connect Error (' . $conn->connect_errno . ') '
            . $conn->connect_error);
}

/*
 * Use this instead of $connect_error if you need to ensure
 * compatibility with PHP versions prior to 5.2.9 and 5.3.0.
 */
if (mysqli_connect_error()) {
    die('Connect Error (' . mysqli_connect_errno() . ') '
            . mysqli_connect_error());
}

$query = "SELECT * FROM `product` order by id ";
$str ="";
if($result = mysqli_query($conn,$query))
{   
    while ($row = mysqli_fetch_row($result))
    {     
     $str .= '<div class="columns1_3 sc_column_item sc_column_item_1 odd first">
																<a href="features_pages_service.php">
																	<div class="sc_section">
																		<div class="sc_title_icon_animated">
																			<div class="sc_title_icon sc_title_top sc_size_medium icon-brush sc_title_bg sc_bg_animated">
																			</div>
																			<h5 class="sc_title sc_title_iconed">'. $row[1] '</h5>
																		</div>
																	</div>
																	<div class="sc_section ">
																		<div class="wpb_text_column wpb_content_element ">
																			<div class="wpb_wrapper">
																				<p>'. $row[2].'</p>
																			</div>
																		</div>
																	</div>
																</a>
															</div>';
    }
}
 echo $str ;  
$conn->close();
?>