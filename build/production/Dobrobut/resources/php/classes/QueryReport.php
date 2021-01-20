<?php

class QueryReport
{

	private $_db;
	protected $login;
	protected $password;
	protected $result;
	protected $res_callback;
	protected $sql;	
	protected $sql_callback;
	protected $row;	
	protected $id;
	protected $what;
	protected $nomer;
	protected $type_id;
	protected $pokaz;
	protected $pred;
	protected $tek;
	protected $kub;
	protected $data=NULL;
	protected $res=array();	
	public	  $results=array();
	
	/*public function connect($this->login,$this->password)
	{
		//                 'hostname', 'username' ,'password', 'database'
		$_db = new mysqli('localhost', 'cthubq' ,'hfljyt;crbq', 'YISGRAND');
		
		if ($_db->connect_error) {
			die('Connection Error (' . $_db->connect_errno . ') ' . $_db->connect_error);
		}
		$_db->set_charset("utf8");
    
		return $_db;
	}*/
	
	public function connect($login,$password)
	{
		//                 'hostname', 'username' ,'password', 'database'
		$_db = new mysqli('localhost', $login ,$password, 'YISGRAND');
		if ($_db->connect_error) {
			return false;
		} else {		
		$_db->set_charset("utf8");    
		return $_db;
		}
	}


	    public function getResults(stdClass $params)
	{

		if(isset($params->login) && ($params->login)) {
		  $this->login= addslashes($params->login);
		} else {
		   $this->login= null;
		}		
		if(isset($params->password) && ($params->password)) {
		  $this->password= $params->password;
		} else {
		   $this->password= null;
		}

		$_db = $this->connect($this->login,$this->password);
	
		if(isset($params->what) && ($params->what)) {
		 $this->what = $params->what;
		} else {
		  $this->what = null;
		}


// num
$this->cat_id=0;
$this->raion_id=0;
$this->address_id=0;
$this->dog_id=0;
$this->house_id=0;
$this->org_id=0;
$this->cat_yes=0;
$this->raion_yes=0;
$this->house_yes=0;
$this->org_yes=0;
//string
$this->date_from='';
$this->date_to='';
$this->nr='';
$this->ddata='';



$array = (array) $params;
foreach ( $array as $key => $value )  {
   if(isset($value)) {  
		  if (is_int($value)) { 
					$this->$key= (int)$value;}
			else if (is_float($value)) { 
					$this->$key= $value;}
			else if (is_array($value)) { 
					$this->$key= (array)$value;}
			else {
					$this->$key =$_db->real_escape_string($value);
			}
  }
}
		$this->sql='';
		//$this->vod=implode(':',$this->vodomer);
		//print($this->what);
		switch ($this->what) {


	case "ItogBudjetPoGroupOsmd":			
			      $this->sql='CALL YISGRAND.ItogBudjetPoGroupOsmd("'.$this->osmd_id.'","'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			 // print($this->sql);
			break;
			
	case "ItogBudjetPoGroupRazvOsmd":			
			      $this->sql='CALL YISGRAND.ItogBudjetPoGroupRazvOsmd('
						.'"'.$this->osmd_id.'", '
						.'"'.$this->lgota_yes.'", '
						.'"'.$this->gr.'", '
						.'"'.$this->date_from.'", '
						.'"'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			 // print($this->sql);
			break;
	 case "ItogBudjetPoGroupOsmdSv":			
			      $this->sql='CALL YISGRAND.ItogBudjetPoGroupOsmdSv("'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			 // print($this->sql);
			break;
			
	case "ItogBudjetPoGroupRazvOsmdSv":			
			      $this->sql='CALL YISGRAND.ItogBudjetPoGroupRazvOsmdSv("'.$this->lgota_yes.'", "'.$this->gr.'","'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			 // print($this->sql);
			break;
	 

		case "KassaAddressOsmd":		
			      $this->sql='CALL YISGRAND.KassaAddressOsmd("'.$this->osmd_id.'","'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			 // print($this->sql);
			break;

		case "KassaPrixodOsmd":		
			      $this->sql='CALL YISGRAND.KassaPrixodOsmd("'.$this->osmd_id.'","'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			 // print($this->sql);
			break;

		case "KassaDateOsmd":		
			      $this->sql='CALL YISGRAND.KassaDateOsmd("'.$this->osmd_id.'","'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			 // print($this->sql);
		break;
		case "Spravka":		
			      $this->sql='CALL YISGRAND.SpravkaDobrobut('.$this->rec_id.','.$this->address_id.',"'.$this->kuda.'",@content,@success,@msg)';
			break;
		case "KassaAddressDobrobut":		
			      $this->sql='CALL YISGRAND.KassaAddressDobrobut("'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			 // print($this->sql);
			break;

		case "KassaPrixodDobrobut":		
			      $this->sql='CALL YISGRAND.KassaPrixodDobrobut("'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			// print($this->sql);
			break;

		case "KassaDateDobrobut":		
			      $this->sql='CALL YISGRAND.KassaDateDobrobut("'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			 // print($this->sql);
		break;
			case "NachislenoAllDobrobut":		
			      $this->sql='CALL YISGRAND.NachislenoAllDobrobut('
			      .'"'.$this->date_from.'", '
			      .'"'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			 // print($this->sql);
			break;
		    case "NachislenoAllHouseOsmd":		
			      $this->sql='CALL YISGRAND.NachislenoAllHouseOsmd('
			      .'"'.$this->house_id.'",'
			      .'"'.$this->date_from.'", '
			      .'"'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			 // print($this->sql);
			break;
			case "AppHistory":		
			      $this->sql='CALL YISGRAND.AppHistoryOsmd("'.$this->osmd_id.'","'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			break;

			case "LgotnikData":		
			      $this->sql='CALL YISGRAND.LgotnikData("'.$this->house_id.'","'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			break;
			case "ItogMonthDobrobut":		
			      $this->sql='CALL YISGRAND.ItogMonthDobrobut("'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			break;
			case "ItogMonthOsmd":		
			      $this->sql='CALL YISGRAND.ItogMonthOsmd("'.$this->osmd_id.'","'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			      			// print($this->sql);
			break;
			case "ItogMonthHouse":		
			      $this->sql='CALL YISGRAND.ItogMonthHouse("'.$this->house_id.'","'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			      			// print($this->sql);

			break;
			case "controlLgot":
			      $this->sql='CALL YISGRAND.controlLgot("'.$this->rbUsluga.'","'.$this->data.'", @head,@content,@foot,@success,@msg)';
			break;
			
			case "ControlOsmd":		
			      $this->sql='CALL YISGRAND.ControlOsmd("'.$this->osmd_id.'","'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			break;
			case "ControlAllOsmd":		
			      $this->sql='CALL YISGRAND.ControlAllOsmd("'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			break;
			case "ControlAllDobrobut":		
			      $this->sql='CALL YISGRAND.ControlAllDobrobut("'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			break;
			case "ControlDolgDobrobut":		
			      $this->sql='CALL YISGRAND.ControlDolgDobrobut("'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			break;
			case "reportLgotnik":		
			      $this->sql='CALL YISGRAND.reportLgotnik("'.$this->house_id.'","'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			break;
			case "reportLgotnikEnd":		
			      $this->sql='CALL YISGRAND.reportLgotnikEnd("'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			break;
			case "PrintSubsUtsznAll":		
			      $this->sql='CALL YISGRAND.PrintSubsUtsznAll("'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			break;
			case "PrintLgotaUtsznAll":		
			      $this->sql='CALL YISGRAND.PrintLgotaUtsznAll("'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			break;
			case "reportLgotnikLgota":		
			      $this->sql='CALL YISGRAND.reportLgotnikLgota("'.$this->lgota_id.'", @head,@content,@foot,@success,@msg)';
			break;
			case "ReportVozvratSubsidia":
			      $this->sql='CALL YISGRAND.VozvratSubsidia_kv("'.$this->osmd_id.'",@content,@success,@msg)';

			
			      break;
			case "reportLgotnikIzm":		
			      $this->sql='CALL YISGRAND.reportLgotnikIzm("'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			break;
			case "reportLgotnikGroupOsmd":		
			      $this->sql='CALL YISGRAND.reportLgotnikGroupOsmd("'.$this->house_id.'","'.$this->gr.'","'.$this->date_from.'","'.$this->date_to.'", @head,@content,@foot,@success,@msg)';
			break;
			case "reportLgotnikHouse":		
			      $this->sql='CALL YISGRAND.reportLgotnikHouse("'.$this->house_id.'", @head,@content,@foot,@success,@msg)';
			break;
			 case "DolgiDobrobut":
				$this->sql='CALL YISGRAND.DolgiDobrobut('.$this->house_id.',"'.$this->date_from.'","'.$this->date_to.'",@content,@success,@msg)';
			 break;	
			case "DolgiOsmd":
			  switch ($this->rbDolg) {
				case "1": 
				 $this->sql='CALL YISGRAND.DolgSummaOsmd('.$this->house_id.',"'.$this->start.'","'.$this->finish.'","'.$this->date_from.'","'.$this->date_to.'",@content,@success,@msg)';
				break;

  				case "0": 
				 $this->sql='CALL YISGRAND.DolgMonthOsmd('.$this->house_id.',"'.$this->start.'","'.$this->date_from.'","'.$this->date_to.'",@content,@success,@msg)';
				break;
			}	
			
			 break;		
			 case "SchetOsmd":
			  switch ($this->rbDolg) {
				case "1": 
				 $this->sql='CALL YISGRAND.SchetSummaOsmd('.$this->house_id.',"'.$this->start.'","'.$this->finish.'","'.$this->date_from.'","'.$this->date_to.'",@content,@success,@msg)';
				 			//  print($this->sql);

				break;

  				case "0": 
				 $this->sql='CALL YISGRAND.SchetMonthOsmd('.$this->house_id.',"'.$this->start.'","'.$this->date_from.'","'.$this->date_to.'",@content,@success,@msg)';
				 			 // print($this->sql);

				break;
			}	
			
			
			 break;		
			  case "SchetDobrobut":
			  switch ($this->rbDolg) {
				case "1": 
				 $this->sql='CALL YISGRAND.DolgWarningSummaDobrobut("'.$this->start.'","'.$this->finish.'","'.$this->date_from.'","'.$this->date_to.'",@content,@success,@msg)';
				 			//  print($this->sql);

				break;

  				case "0": 
				 $this->sql='CALL YISGRAND.DolgWarningSummaDobrobut("'.$this->start.'","'.$this->finish.'","'.$this->date_from.'","'.$this->date_to.'",@content,@success,@msg)';
				 			 // print($this->sql);

				break;
			}	
			
			
			 break;		
			  case "DolgWarningSummaOsmd":
			  switch ($this->rbDolg) {
				case "1": 
				 $this->sql='CALL YISGRAND.DolgWarningSummaOsmd('.$this->house_id.',"'.$this->start.'","'.$this->finish.'","'.$this->date_from.'","'.$this->date_to.'",@content,@success,@msg)';
				break;

  				case "0": 
				 $this->sql='CALL YISGRAND.DolgWarningMonthOsmd('.$this->house_id.',"'.$this->start.'","'.$this->date_from.'","'.$this->date_to.'",@content,@success,@msg)';
				break;
			}	
			
			 break;				
			
			case "HistoryFlatPayment":			
			      $this->sql='CALL YISGRAND.HistoryFlatPayment('
			      .'"'.$this->address_id.'", '
			      .'"", '
			      .'"", '
			      .' @head,@content,@foot)';
			//  print($this->sql);
			break;
			
			
			case "FlatRaspechatkaMgkc":			
			      $this->sql='CALL YISGRAND.FlatRaspechatkaOsmd('.$this->address_id.',"'.$this->date_from.'","'.$this->date_to.'",@content,@success,@msg)';

			break;
		
			case "HouseRaspechatkaMgkc":
			      $this->sql='CALL YISGRAND.HouseRaspechatkaMgkc('.$this->house_id.',"'.$this->sdata.'",@head,@content,@foot,@success,@msg)';
			  //  print_r($this->sql); 
			break;
			case "InfoHouse":
			      $this->sql='CALL YISGRAND.InfoHouse('.$this->house_id.',@content,@success,@msg)';
			  //  print_r($this->sql); 
			break;
			case "SvodHousesOsmd":
			      $this->sql='CALL YISGRAND.SvodHousesOsmd('.$this->osmd_id.',@content,@success,@msg)';
			  //  print_r($this->sql); 
			break;
			case "HouseKvRaspechatkaMgkc":
			      $this->sql='CALL YISGRAND.HouseKvRaspechatkaMgkc('.$this->house_id.',"'.$this->address_ot.'","'.$this->address_do.'","'.$this->sdata.'",@head,@content,@foot,@success,@msg)';
			  //  print_r($this->sql); 
			break;
			}
		
		$this->result = $_db->query($this->sql) or die('Connect Error in '.$this->what.' ('.$this->sql.') ' . $_db->connect_error);
		
		$this->sql_callback='SELECT @head,@content,@foot,@success,@msg';

		$this->res_callback = $_db->query($this->sql_callback) or die('Connect Error >>>  ' . $_db->connect_errno . '  <<< ' . $_db->connect_error);
		
		while ($this->row = $this->res_callback->fetch_assoc()) {
			$this->results['head'] = $this->row['@head'];
			$this->results['content'] = $this->row['@content'];
			$this->results['sql'] = $this->sql;
			$this->results['foot'] = $this->row['@foot'];
			$this->results['success'] = $this->row['@success'];
			$this->results['msg'] = $this->row['@msg'];

		}
			
		/*include_once('absent_file.php')*/


		return $this->results;

}


}
