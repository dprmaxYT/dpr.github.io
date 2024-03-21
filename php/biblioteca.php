<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Directorio de Archivos</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div id="directory-list">
    <ul>
        <?php
        function listarDirectorio($ruta){
            $archivos = scandir($ruta);
            foreach($archivos as $archivo){
                if($archivo != '.' && $archivo != '..'){
                    $rutaCompleta = $ruta . '/' . $archivo;
                    if(is_dir($rutaCompleta)){
                        echo '<li class="folder">
                                <i class="icon expand-icon">▼</i>
                                <span class="name">' . $archivo . '</span>
                                <ul>';
                        listarDirectorio($rutaCompleta);
                        echo '</ul></li>';
                    } else {
                        $extension = pathinfo($archivo, PATHINFO_EXTENSION);
                        echo '<li class="file">
                                <i class="icon file-icon">' . $extension . '</i>
                                <span class="name">' . $archivo . '</span>
                              </li>';
                    }
                }
            }
        }

        $directorio = '../dirs/biblioteca/smr/';
        listarDirectorio($directorio);
        ?>
    </ul>
</div>

<script src="script.js"></script>
</body>
</html>
