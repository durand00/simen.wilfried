<?php 
    // Tous les messages d'erreur sont reçus ici.
    if (isset($_COOKIE['erreur'])){
        $message = $_COOKIE['erreur'];
        setcookie("erreur"," ",time()-600);
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <style>
			body {
				font-family: arial;
				color: #222;
				font-size: 1em;
			}
		</style>
        <title>Formulaire Authentification</title>
    </head>
    <body>
        <?php
            // S'il y avait un message d'erreur reçu, il est affiché ici.
            if (isset($message)){
                echo "<p>".$message."</p>";
            }
        ?>
        
	
		<form name="formulaire" method="post" action="createUser.php">
            <label>Créer un utilisateur avec un mot de passe "hashé"</label>	
            <label>Votre nom d'usager</label>
            <input type="text" name="usager" />
            <label>Votre mot de passe</label>
            <input type="password" name="mdp" />
            <input type="submit" value="Valider" />
        </form>
		
		<form name="formulaire" method="post" action="authentification_redirection.php">
            <label>Votre nom d'usager</label>
            <input type="text" name="usager" />
            <label>Votre mot de passe</label>
            <input type="password" name="mdp" />
            <input type="submit" value="Valider" />
        </form>
		
		
    </body>
	
	
</html>