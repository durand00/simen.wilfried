<?php

//session_start();

include_once 'validerSession.inc.php';

$_SESSION = array();

if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

session_destroy();

setcookie("erreur","Votre session a été détruite correctement.",time()+60);
header("Location: form_authentification.php");