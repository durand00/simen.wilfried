<?php 
    include_once 'validerSession.inc.php';  
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="style.css" media="screen" />
        <title>Exemple de base de gestion de session</title>
    </head>
    <body>
        <?php
            echo "OK, le code ".$code." est valide.";
        ?>
        <a href="detruireSession.redirect.php">Détruire la session</a>
    </body>
</html>
