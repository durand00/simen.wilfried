<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link href="formCss.css" rel="stylesheet">
        <title>Sondage</title>
    </head>
    <body>
        <h1>Questionnaire sur l’enseignement dans le contexte de la distanciation sociale</h1>
        <form method="POST">
            <?php
                //namespace demoPDO; // Namespace déclaré au haut du document

                //include_once './ListeQuestionsJSON.classe.php';
                //$liste = new ListeQuestionsJSON();

                //echo"<script >let questionJSON =".json_encode($liste->getListe(), JSON_INVALID_UTF8_SUBSTITUTE)." </script>";

            ?>
            <fieldset id="bloc1">
                <legend>Bloc #1</legend>
                    <div id="question1">
                        <label for="idproportion">1.Quel proportion de votre enseignement reçu est offerte à distance? Considérez tous les types d’enseignement </label>
                        <input type="text" id="idproportion" name="proportion"  focus="true" onclick="afficherQuestion2(this)" >
                    </div>
                    <!--ICI-->
            </fieldset>
            <fieldset id="bloc2">
                <legend>Bloc #2</legend>
                    
            </fieldset>     
        </form>
    </body>
    <script src="formJs.js"></script>
</html>