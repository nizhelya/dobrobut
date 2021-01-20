<?php 
function get_client_ip() {
     $ipaddress = '';
     if (isset($_SERVER['HTTP_CLIENT_IP']) AND ($_SERVER['HTTP_CLIENT_IP']))
         $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
     else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']) AND ($_SERVER['HTTP_X_FORWARDED_FOR']))
         $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
     else if(isset($_SERVER['HTTP_X_FORWARDED']) AND ($_SERVER['HTTP_X_FORWARDED']))
         $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
     else if(isset($_SERVER['HTTP_FORWARDED_FOR']) AND ($_SERVER['HTTP_FORWARDED_FOR']))
         $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
     else if(isset($_SERVER['HTTP_FORWARDED']) AND ($_SERVER['HTTP_FORWARDED']))
         $ipaddress = $_SERVER['HTTP_FORWARDED'];
     else if(isset($_SERVER['REMOTE_ADDR']) AND ($_SERVER['REMOTE_ADDR']))
         $ipaddress = $_SERVER['REMOTE_ADDR'];
     else
         $ipaddress = '10.1.0.104';
     return $ipaddress; 
}
$ip = get_client_ip();
switch ($ip) {
#Мой
case "127.0.0.1":
case "10.1.0.104":
#Artushkina
case "195.138.90.24":
#УТиСЗН
case "195.5.5.205":
#Львова
case "10.3.1.70":
#ДОБРОБУТ
case "10.0.128.3":
case "10.0.128.22":
case "10.0.128.23":
case "194.143.137.137":
$raion='1,3,4' ;
$street='1,2,3';
$house_id="4,5,6,9,16,25,26,27,41,48,72,188";
$kvartplata = 1;
break;
}
 define('LOGIN',	'cthubq');
 define('PASSWORD',	'hfljyt;crbq');
 define('BASE',	$base);
 define('RAION',$raion);
 define('STREET',$street);
 define('HOUSE',$house_id); 
 define('KVARTPLATA',$kvartplata);

?>