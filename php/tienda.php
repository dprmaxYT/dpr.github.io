<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sql = "SELECT id, nombre, precio FROM Productos";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Mostrar datos de cada fila
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Nombre: " . $row["nombre"]. " - Precio: " . $row["precio"]. "<br>";
    }
} else {
    echo "0 resultados";
}
$conn->close();
?>
