<?php
$API = array(
'QueryAddress'=>array(
        'methods'=>array(
            'getResults'=>array(
                'len'=>1
					),
            'updateRecords'=>array(
            	'len'=>1
           )
        )
    ),

'QueryForm'=>array(
        'methods'=>array(
            'getResults'=>array(
                'len'=>4
	  )
           
        )
    ),
'QueryLoad'=>array(
       'methods'=>array(
            'getResults'=>array(
                'len'=>1
            )        
        )
    ),

'QueryOrg'=>array(
       'methods'=>array(
            'getResults'=>array(
                'len'=>1
            ),
            'createRecord'=>array(
            	'len'=>1
            ),
            'updateRecords'=>array(
            	'len'=>1
            ),
            'destroyRecord'=>array(
            	'len'=>1
            ),
            'deleteOrg'=>array(
            	'len'=>1
            ),
            'Org'=>array(
            	'len'=>1
            )    ,
            'Filial'=>array(
            	'len'=>1
            )             
        )
    ),
'QueryVodomer'=>array(
        'methods'=>array(
            'getResults'=>array(
                'len'=>1
	  ),
	      'addVodomer'=>array(
                'len'=>1
	  ),
	      'delVodomer'=>array(
                'len'=>1
	  ),
	      'spisanVodomer'=>array(
                'len'=>1
	  ),
	      'inVodomerHistory'=>array(
                'len'=>1
	  ),
	      'outVodomerHistory'=>array(
                'len'=>1
	  ),
	      'delPokVodomera'=>array(
                'len'=>1
	  ),
	      'updateVodomer'=>array(
                'len'=>1
	  ),
	      'newPokVodomera'=>array(
                'len'=>1
	  )
           
       )
   ),

'QueryTeplomer'=>array(
        'methods'=>array(
            'getResults'=>array(
                'len'=>1
	  ),
	      'delPokTeplomera'=>array(
                'len'=>1
	  ),
	      'newPokTeplomera'=>array(
                'len'=>1
	  ),
	      'inTeplomerHistory'=>array(
                'len'=>1
	  ),
	      'outTeplomerHistory'=>array(
                'len'=>1
	   ),
	      'addTeplomer'=>array(
                'len'=>1
	   ),
	      'delTeplomer'=>array(
                'len'=>1
          ) 
       )
    ),
'QueryKassa'=>array(
        'methods'=>array(
            'getResults'=>array(
                'len'=>1
	  ),
	      'newOplata'=>array(
                'len'=>1
	  ),
	      'delOplata'=>array(
                'len'=>1
	  ),
	      'getRaspechatka'=>array(
                'len'=>1
	  )
           
       )
    ),


    'QueryPayment'=>array(
        'methods'=>array(
            'getResults'=>array(
                'len'=>1
	  ),
	      'newOplata'=>array(
                'len'=>1
	  ),
	      'delOplata'=>array(
                'len'=>1
	  ),
	      'getRaspechatka'=>array(
                'len'=>1
	  )
           
       )
    ),
'QuerySprav'=>array(
       'methods'=>array(
            'getResults'=>array(
                'len'=>1
                        ),
            'createRecord'=>array(
            	'len'=>1
            ),
            'updateRecords'=>array(
            	'len'=>1
            ),
            'destroyRecord'=>array(
            	'len'=>1
            )          
        )
    ),
'QueryReport'=>array(
       'methods'=>array(
            'getResults'=>array(
                'len'=>1
            ),
            'getXls'=>array(
                'len'=>1
            )             
        )
    ),
'QueryExport'=>array(
       'methods'=>array(
            'getResults'=>array(
                'len'=>1
            ),
            'exportToEmail'=>array(
                'len'=>1
            )             
        )
    ),
'QueryImport'=>array(
       'methods'=>array(
            'getResults'=>array(
                'len'=>1
            ),
            'importFile'=>array(
                'len'=>1
            )             
        )
    ),
    'QueryUpload'=>array(
       'methods'=>array(
            'import_dbf'=>array(
                'len'=>1
            )             
        )
    ),
'QueryUserLogin'=>array(
        'methods'=>array(
            'getResults'=>array(
                'len'=>1
            ),
              'registration'=>array(
                 'len'=> 1
                ),
             'login'=>array(
                 'len'=> 1
                ),
                'checkLogin'=>array(
                 'len'=> 1
                ),
		'checkMyFlat'=>array(
                 'len'=> 3
                ),
		'updateUser'=>array(
                 'len'=> 1
                )

        )
    )
);


