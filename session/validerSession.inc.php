<?php 
    session_start();
    
    // Vérification de l'existance de la session. 
    if(isset($_SESSION['code'])){
        $code = $_SESSION['code'];
    } else {
        // Si la variable n'existe pas
        // dans $_SESSION ou si le cookie n'existe pas: l'accès est refusé.
        setcookie("erreur","Vous n'avez pas accès à la section demandée de ce site. Inscrivez d'abord un code valide.",time()+60);
        header("Location: index.php");
        session_destroy();
        exit();
    }  
