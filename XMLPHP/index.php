<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Mi ejemplo PHP con XML</title>
        <link href="estilos.css" rel="stylesheet">
    </head>
    <body>
        <?php
        echo 'Ejemplo con PHP para mostrar datos en XML <br>';
        echo '<h1>Lista Estudiantes Desarrollo Basado en Plataformas </h1><br>';

        $archivoXml = simplexml_load_file("Estudiantes.xml");

        foreach ($archivoXml->estudiante as $key => $estud) {
            echo "Estudiante: ".$estud->apellido." con cedula :".$estud->cedula ."<br>";    
        }
        ?>
        <!--    
        <select>
            <option>UNO</option>
            <option>DOS</option>
            <option>TRES</option>

        </select>
        -->
    </body>
</html>
