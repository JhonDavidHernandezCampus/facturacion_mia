<?php
    class Databases{
        private $host = "localhost";
        private $username = "root";
        private $password = "3224757531";
        private $database = "facturacion";
        private $conn;
        public function __construct(){
            $this->conn = new mysqli($this->host,$this->username, $this->password,$this->database);
            if($this->conn->connect_error){
                die("Error al conectarse: ". $this->conn->connect_error);
            }
        }
        public function getConnection(){
            return $this->conn;
        }
        //para hacer varias consultas declarando una sola vez la variable query se bese cambiar a milty_query
        public function insert($DATA){
            $info = $DATA["info"];
            $products = $DATA["products"];
/*          echo "esta es la informacion del la factura";
            var_dump($info);
            echo "esta es la informacion de los productos";
            var_dump($products);
            
*/             $query = "
                        INSERT INTO tb_bill(n_bill, bill_date_bill) 
                        VALUES ('{$info["N_Bill"]}','{$info["Bill_Date"]}');

                        INSERT INTO tb_client(identificacion_client, full_name_client, email_client, address_client, phone_client)
                        VALUES ('{$info["Identification"]}','{$info["Full_Name"]}','{$info["Email"]}','{$info["Address"]}','{$info["Phone"]}',);

                        INSERT INTO tb_product(id_product, name_product, amount_product, value_prodcut) 
                        VALUES ('{$products["codigo"]}','{$products["nombre_pro"]}','{$products["cantidad"]}','{$products["valor"]}',);

                        INSERT INTO tb_seller(id_seller,seller) 
                        VALUES ('{$info["Identification"]}','{$info["Seller"]}'); "; 
            $res = $this->conn->multi_query($query);

            if($res === TRUE){
                echo "lo he logrado, datos guardados";
            }else{
                echo "ha ocurrido un error valla y revise linea 18 de conxion";
            }
        }
        public function delete($id_fac){
            $query = "DELETE FROM facturae WHERE id_fac = $id_fac";
            $res = $this->conn->query($query);

            echo ($res === TRUE)? "Datos eliminados":"error al elminar datos";
        }
    }

    //$obj = new Databases();

?>
