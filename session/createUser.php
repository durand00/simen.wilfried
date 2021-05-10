<?php
if (!isset($_POST['usager']) || empty($_POST['usager']) || empty($_POST['mdp'])){
    setcookie("erreur","Vous devez inscrire un nom d'usager et un mot de passe.",time()+60);
    header("Location: form_authentification.php");
    exit();
} 

$usager = filter_input(INPUT_POST, "usager", FILTER_DEFAULT);
$mdp    = filter_input(INPUT_POST, "mdp", FILTER_DEFAULT);



$password = password_hash($mdp, PASSWORD_DEFAULT);

include_once './config.inc.php';
$connexion = new PDO(DSN, USAGER, MDP);

$requete = $connexion->prepare('insert into utilisateur (usager,password) values (:nom,:hash)');
$requete->bindValue(':nom', $usager, PDO::PARAM_STR);
$requete->bindParam(':hash', $password, PDO::PARAM_STR);
// $requete->bindValue(':nc', $usager, PDO::PARAM_STR);

echo $requete->execute();

?>