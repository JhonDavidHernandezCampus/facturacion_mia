#Estas son las consultas que se ejetan en las funciones de 
#eliminar,insertar,actualizar y mostrar los datos
#estas se encuantran en el archivo de conexion en las
# funciones que se ejecutan cuando se instancia la clase Databases

#consultas para insertar los datos en las diferentes tablas
INSERT INTO tb_bill(n_bill, bill_date_bill) 
VALUES ('$info["N_Bill"]','info["Bill_Date"]');
INSERT INTO tb_client(identificacion_client, full_name_client, email_client, address_client, phone_client)
VALUES ('$info["Identification"]','$info["Full_Name"]','$info["Email"]','$info["Address"]','$info["Phone"]',);
INSERT INTO tb_product(id_product, name_product, amount_product, value_prodcut) 
VALUES ('$products["codigo"]','$products["nombre_pro"]','$products["cantidad"]','$products["valor"]',);

INSERT INTO tb_seller(id_seller,seller) 
VALUES ('$info["Identification"]','$info["Seller"]');

