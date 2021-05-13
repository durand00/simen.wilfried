<?php
if (!isset($_POST['usager']) || empty($_POST['usager']) || empty($_POST['mdp'])){
    setcookie("erreur","Vous devez inscrire un nom d'usager et un mot de passe.",time()+60);
    header("Location: ./form_authentification.php");
    exit();
} 

$usager = filter_input(INPUT_POST, "usager", FILTER_DEFAULT);
$mdp    = filter_input(INPUT_POST, "mdp", FILTER_DEFAULT);

include_once 'authentification.php';
$auth = new Authentification();

if ($auth->usagerValide($usager,$mdp)){
    // L'info est valide; création de la session et redirection vers la page OK.

    session_start();
    $_SESSION['code']=$usager;
    header("Location: ./index.php");

} else {

    // L'info est erroné; redirection avec message d'erreur.
    setcookie("erreur","Le nom d'usager ou le mot de passe inscrit n'est pas valide.",time()+60);
    header("Location: ./index.php");
}
    
    



