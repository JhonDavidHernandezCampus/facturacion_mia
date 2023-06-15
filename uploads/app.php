<?php

$DATA = json_decode(file_get_contents("php://input"),true);

//var_dump($DATA);


//echo $DATA;
//var_dump($DATA["info"]);
var_dump($DATA); 


    include_once("../db/conexion.php");
//phpinfo(); 

//instansiamos las clases
$obj = new Databases();

$obj->insert($DATA);
/*

$obj->insert(12,"jhon");
$obj->delete(12);
 */























/*  {"info":
    {
        "N_Bill":"12",
        "Bill_Date":"2023-06-02",
        "Seller":"D1",
        "Identification":"12111212",
        "Full_Name":"jhon",
        "Email":"jhon@gmail",
        "Address":"11221",
        "Phone":"112111"
    },
    "products":[
    {
        "codigo":"12",
        "nombre_pro":"carne",
        "cantidad":"8",
        "valor":"2000"
    },
    {
        "codigo":"21",
        "nombre_pro":"arroz",
        "cantidad":"4",
        "valor":"1000"
    },
    {
        "codigo":"42",
        "nombre_pro":"panela",
        "cantidad":"4",
        "valor":"400000"
    },
    {
        "codigo":"34",
        "nombre_pro":"magui",
        "cantidad":"3",
        "valor":"100"
    }
    ]
  } */
?>

