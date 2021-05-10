<?php

include_once './config.inc.php';


class Authentification {
    protected $connexion;
    
    public function __construct() {
        $this->connexion = new PDO(DSN, USAGER, MDP);
    }
    
    public function usagerValide($nom,$mdp) {
        if ($this->getUsager($nom)==1){
            $requete = $this->connexion->prepare('select password from users where email=:nom');
            $requete->bindParam(':nom', $nom, PDO::PARAM_STR);
            $requete->execute();
            $resultat = $requete->fetch();
            return password_verify($mdp, $resultat[0]);
        } else {
            return FALSE; 
        }
    }
    
    protected function getUsager($usager){
        $requete = $this->connexion->prepare('select count(*) from users where email=:nom');
        $requete->bindParam(':nom', $usager, PDO::PARAM_STR);
        $requete->execute();
        $ligne = $requete->fetch();
        return $ligne[0];
    }
    
    protected function libererConnexion() {
        $this->connexion = null;
    }
}
