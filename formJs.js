
var myJSON = JSON.stringify(questionJSON);
donnees =JSON.parse(myJSON);


document.getElementById("bloc2").style.display = "none";

function afficherQuestion2(element){
    console.log(element.tagName);
   let question = element;
   let voisin = question.parentNode.nextSibling;
   console.log(voisin.nextSibling);
   console.log(question.tagName);
   console.log(question);
   
   let parent = voisin.parentNode;
   question.parentNode.style.backgroundColor = "grey";
   
    //Création du div
   let newelement = document.createElement("div");
   newelement.setAttribute("id","question2");

   //Affichage question 2
   let label = document.createElement("label");
   label.setAttribute("for","distance");
   let texte = document.createTextNode(donnees[1].id + "." + donnees[1].libelle);
   label.appendChild(texte);

   let label1 = document.createElement("label");
   label1.setAttribute("class","checkbox");
   label1.setAttribute("for","direct");
   let texte1 = document.createTextNode(donnees[1].option1);
   label1.appendChild(texte1);
   let input1 = document.createElement("input");
   input1.setAttribute("type","checkbox");
   input1.setAttribute("id","direct");
   input1.setAttribute("name","distance");
   input1.setAttribute("onclick","afficherQuestion3(this)");

   let label2 = document.createElement("label");
   label2.setAttribute("class","checkbox");
   label2.setAttribute("for","enregistré");
   let texte2 = document.createTextNode(donnees[1].option2);
   label2.appendChild(texte2);
   let input2 = document.createElement("input");
   input2.setAttribute("type","checkbox");
   input2.setAttribute("id","enregistré");
   input2.setAttribute("name","distance");
   input2.setAttribute("onclick","afficherQuestion3(this)");

   let label3 = document.createElement("label");
   label3.setAttribute("class","checkbox");
   label3.setAttribute("for","lectures");
   let texte3 = document.createTextNode(donnees[1].option3);
   label3.appendChild(texte3);
   let input3 = document.createElement("input");
   input3.setAttribute("type","checkbox");
   input3.setAttribute("id","lectures");
   input3.setAttribute("name","distance");
   input3.setAttribute("onclick","afficherQuestion3(this)");

   let label4 = document.createElement("label");
   label4.setAttribute("class","checkbox");
   label4.setAttribute("for","presencedistance");
   let texte4 = document.createTextNode(donnees[1].option4);
   label4.appendChild(texte4);
   let input4 = document.createElement("input");
   input4.setAttribute("type","checkbox");
   input4.setAttribute("id","presencedistance");
   input4.setAttribute("name","distance");
   input4.setAttribute("onclick","afficherQuestion3(this)");

   newelement.appendChild(label);
   newelement.appendChild(label1);
   newelement.appendChild(input1);
   newelement.appendChild(label2);
   newelement.appendChild(input2);
   newelement.appendChild(label3);
   newelement.appendChild(input3);
   newelement.appendChild(label4);
   newelement.appendChild(input4);
   parent.insertBefore(newelement,voisin);
   //element.setAttribute("disabled","true");
}

function afficherQuestion3(element){
    console.log(element.tagName);
   let question = element;
   let voisin = question.parentNode.nextSibling;
   console.log(voisin.nextSibling);
   console.log(question.tagName);
   console.log(question);
   
   let parent = voisin.parentNode;
   question.parentNode.style.backgroundColor = "grey";
   
    //Création du div
   let newelement = document.createElement("div");
   newelement.setAttribute("id","question3");

   //Affichage question 3
   let label = document.createElement("label");
   label.setAttribute("for","synchrone");
   let texte = document.createTextNode(donnees[2].id + "." + donnees[2].libelle)
   label.appendChild(texte);

   let label1 = document.createElement("label");
   label1.setAttribute("class","radio");
   label1.setAttribute("for","ne");
   let texte1 = document.createTextNode(donnees[2].option1);
   label1.appendChild(texte1);
   let input1 = document.createElement("input");
   input1.setAttribute("type","radio");
   input1.setAttribute("id","ne");
   input1.setAttribute("name","synchrone");
   input1.setAttribute("onclick","afficherQuestion4(this)");

    let label2 = document.createElement("label");
   label2.setAttribute("class","radio");
   label2.setAttribute("for","mauvais");
   let texte2 = document.createTextNode(donnees[2].option2);
   label2.appendChild(texte2);
   let input2 = document.createElement("input");
   input2.setAttribute("type","radio");
   input2.setAttribute("id","mauvais");
   input2.setAttribute("name","synchrone");
   input2.setAttribute("onclick","afficherQuestion4(this)");

   let label3 = document.createElement("label");
   label3.setAttribute("class","radio");
   label3.setAttribute("for","moyen");
   let texte3 = document.createTextNode(donnees[2].option3);
   label3.appendChild(texte3);
   let input3 = document.createElement("input");
   input3.setAttribute("type","radio");
   input3.setAttribute("id","moyen");
   input3.setAttribute("name","synchrone");
   input3.setAttribute("onclick","afficherQuestion4(this)");

   let label4 = document.createElement("label");
   label4.setAttribute("class","radio");
   label4.setAttribute("for","bon");
   let texte4 = document.createTextNode(donnees[2].option4);
   label4.appendChild(texte4);
   let input4 = document.createElement("input");
   input4.setAttribute("type","radio");
   input4.setAttribute("id","bon");
   input4.setAttribute("name","synchrone");
   input4.setAttribute("onclick","afficherQuestion4(this)");

   let label5 = document.createElement("label");
   label5.setAttribute("class","radio");
   label5.setAttribute("for","adequat");
   let texte5 = document.createTextNode(donnees[2].option5);
   label5.appendChild(texte5);
   let input5 = document.createElement("input");
   input5.setAttribute("type","radio");
   input5.setAttribute("id","adequat");
   input5.setAttribute("name","synchrone");
   input5.setAttribute("onclick","afficherQuestion4(this)");

   let label6 = document.createElement("label");
   label6.setAttribute("class","radio");
   label6.setAttribute("for","excellent");
   let texte6 = document.createTextNode(donnees[2].option6);
   label6.appendChild(texte6);
   let input6 = document.createElement("input");
   input6.setAttribute("type","radio");
   input6.setAttribute("id","excellent");
   input6.setAttribute("name","synchrone");
   input6.setAttribute("onclick","afficherQuestion4(this)");

   let label7 = document.createElement("label");
   label7.setAttribute("class","textarea");
   label7.setAttribute("for","commentaire");
   let texte7 = document.createTextNode("Commentaire :");
   label7.appendChild(texte7);
   let input7 = document.createElement("textarea");
   label7.appendChild(input7);
   input7.setAttribute("cols","40");
   input7.setAttribute("rows","2");
   input7.setAttribute("id","commentaire");

   newelement.appendChild(label);
   newelement.appendChild(label1);
   newelement.appendChild(input1);
   newelement.appendChild(label2);
   newelement.appendChild(input2);
   newelement.appendChild(label3);
   newelement.appendChild(input3);
   newelement.appendChild(label4);
   newelement.appendChild(input4);
   newelement.appendChild(label5);
   newelement.appendChild(input5);
   newelement.appendChild(label6);
   newelement.appendChild(input6);
   newelement.appendChild(label7);
   newelement.appendChild(input7);
   parent.insertBefore(newelement,voisin);
   //element.setAttribute("disabled","true");

}

function afficherQuestion4(element){
    console.log(element.tagName);
   let question = element;
   let voisin = question.parentNode.nextSibling;
   console.log(voisin.nextSibling);
   console.log(question.tagName);
   console.log(question);
   
   let parent = voisin.parentNode;
   question.parentNode.style.backgroundColor = "grey";
   
    //Création du div
   let newelement = document.createElement("div");
   newelement.setAttribute("id","question4");

   //Affichage question 4
   let label = document.createElement("label");
   label.setAttribute("for","asynchrone");
   let texte = document.createTextNode(donnees[3].id + "." + donnees[3].libelle)
   label.appendChild(texte);

   let label1 = document.createElement("label");
   label1.setAttribute("class","radio");
   label1.setAttribute("for","ane");
   let texte1 = document.createTextNode(donnees[3].option1);
   label1.appendChild(texte1);
   let input1 = document.createElement("input");
   input1.setAttribute("type","radio");
   input1.setAttribute("id","ane");
   input1.setAttribute("name","asynchrone");
   input1.setAttribute("onclick","afficherQuestion5(this)");

    let label2 = document.createElement("label");
   label2.setAttribute("class","radio");
   label2.setAttribute("for","amauvais");
   let texte2 = document.createTextNode(donnees[3].option2);
   label2.appendChild(texte2);
   let input2 = document.createElement("input");
   input2.setAttribute("type","radio");
   input2.setAttribute("id","amauvais");
   input2.setAttribute("name","asynchrone");
   input2.setAttribute("onclick","afficherQuestion5(this)");

   let label3 = document.createElement("label");
   label3.setAttribute("class","radio");
   label3.setAttribute("for","amoyen");
   let texte3 = document.createTextNode(donnees[3].option3);
   label3.appendChild(texte3);
   let input3 = document.createElement("input");
   input3.setAttribute("type","radio");
   input3.setAttribute("id","amoyen");
   input3.setAttribute("name","asynchrone");
   input3.setAttribute("onclick","afficherQuestion5(this)");

   let label4 = document.createElement("label");
   label4.setAttribute("class","radio");
   label4.setAttribute("for","abon");
   let texte4 = document.createTextNode(donnees[3].option4);
   label4.appendChild(texte4);
   let input4 = document.createElement("input");
   input4.setAttribute("type","radio");
   input4.setAttribute("id","abon");
   input4.setAttribute("name","asynchrone");
   input4.setAttribute("onclick","afficherQuestion5(this)");

   let label5 = document.createElement("label");
   label5.setAttribute("class","radio");
   label5.setAttribute("for","aadequat");
   let texte5 = document.createTextNode(donnees[3].option5);
   label5.appendChild(texte5);
   let input5 = document.createElement("input");
   input5.setAttribute("type","radio");
   input5.setAttribute("id","aadequat");
   input5.setAttribute("name","asynchrone");
   input5.setAttribute("onclick","afficherQuestion5(this)");

   let label6 = document.createElement("label");
   label6.setAttribute("class","radio");
   label6.setAttribute("for","aexcellent");
   let texte6 = document.createTextNode(donnees[3].option6);
   label6.appendChild(texte6);
   let input6 = document.createElement("input");
   input6.setAttribute("type","radio");
   input6.setAttribute("id","aexcellent");
   input6.setAttribute("name","asynchrone");
   input6.setAttribute("onclick","afficherQuestion5(this)");

   let label7 = document.createElement("label");
   label7.setAttribute("class","textarea");
   label7.setAttribute("for","acommentaire");
   let texte7 = document.createTextNode("Commentaire :");
   label7.appendChild(texte7);
   let input7 = document.createElement("textarea");
   label7.appendChild(input7);
   input7.setAttribute("cols","40");
   input7.setAttribute("rows","2");
   input7.setAttribute("id","acommentaire");

   newelement.appendChild(label);
   newelement.appendChild(label1);
   newelement.appendChild(input1);
   newelement.appendChild(label2);
   newelement.appendChild(input2);
   newelement.appendChild(label3);
   newelement.appendChild(input3);
   newelement.appendChild(label4);
   newelement.appendChild(input4);
   newelement.appendChild(label5);
   newelement.appendChild(input5);
   newelement.appendChild(label6);
   newelement.appendChild(input6);
   newelement.appendChild(label7);
   newelement.appendChild(input7);
   parent.insertBefore(newelement,voisin);
   //element.setAttribute("disabled","true");

}

function afficherQuestion5(element){
    console.log(element.tagName);
   let question = element;
   let voisin = question.parentNode.nextSibling;
   console.log(voisin.nextSibling);
   console.log(question.tagName);
   console.log(question);
   
   let parent = voisin.parentNode;
   question.parentNode.style.backgroundColor = "grey";
   
    //Création du div
   let newelement = document.createElement("div");
   newelement.setAttribute("id","question5");

   //Affichage question 5
   let label = document.createElement("label");
   label.setAttribute("for","mixte");
   let texte = document.createTextNode(donnees[4].id + "." + donnees[4].libelle)
   label.appendChild(texte);

   let label1 = document.createElement("label");
   label1.setAttribute("class","radio");
   label1.setAttribute("for","mne");
   let texte1 = document.createTextNode(donnees[4].option1);
   label1.appendChild(texte1);
   let input1 = document.createElement("input");
   input1.setAttribute("type","radio");
   input1.setAttribute("id","mne");
   input1.setAttribute("name","mixte");
   input1.setAttribute("onclick","afficherQuestion6(this)");

    let label2 = document.createElement("label");
   label2.setAttribute("class","radio");
   label2.setAttribute("for","mmauvais");
   let texte2 = document.createTextNode(donnees[4].option2);
   label2.appendChild(texte2);
   let input2 = document.createElement("input");
   input2.setAttribute("type","radio");
   input2.setAttribute("id","mmauvais");
   input2.setAttribute("name","mixte");
   input2.setAttribute("onclick","afficherQuestion6(this)");

   let label3 = document.createElement("label");
   label3.setAttribute("class","radio");
   label3.setAttribute("for","mmoyen");
   let texte3 = document.createTextNode(donnees[4].option3);
   label3.appendChild(texte3);
   let input3 = document.createElement("input");
   input3.setAttribute("type","radio");
   input3.setAttribute("id","mmoyen");
   input3.setAttribute("name","mixte");
   input3.setAttribute("onclick","afficherQuestion6(this)");

   let label4 = document.createElement("label");
   label4.setAttribute("class","radio");
   label4.setAttribute("for","mbon");
   let texte4 = document.createTextNode(donnees[4].option4);
   label4.appendChild(texte4);
   let input4 = document.createElement("input");
   input4.setAttribute("type","radio");
   input4.setAttribute("id","mbon");
   input4.setAttribute("name","mixte");
   input4.setAttribute("onclick","afficherQuestion6(this)");

   let label5 = document.createElement("label");
   label5.setAttribute("class","radio");
   label5.setAttribute("for","madequat");
   let texte5 = document.createTextNode(donnees[4].option5);
   label5.appendChild(texte5);
   let input5 = document.createElement("input");
   input5.setAttribute("type","radio");
   input5.setAttribute("id","madequat");
   input5.setAttribute("name","mixte");
   input5.setAttribute("onclick","afficherQuestion6(this)");

   let label6 = document.createElement("label");
   label6.setAttribute("class","radio");
   label6.setAttribute("for","mexcellent");
   let texte6 = document.createTextNode(donnees[4].option6);
   label6.appendChild(texte6);
   let input6 = document.createElement("input");
   input6.setAttribute("type","radio");
   input6.setAttribute("id","mexcellent");
   input6.setAttribute("name","mixte");
   input6.setAttribute("onclick","afficherQuestion6(this)");

   let label7 = document.createElement("label");
   label7.setAttribute("class","textarea");
   label7.setAttribute("for","mcommentaire");
   let texte7 = document.createTextNode("Commentaire :");
   label7.appendChild(texte7);
   let input7 = document.createElement("textarea");
   label7.appendChild(input7);
   input7.setAttribute("cols","40");
   input7.setAttribute("rows","2");
   input7.setAttribute("id","mcommentaire");

   newelement.appendChild(label);
   newelement.appendChild(label1);
   newelement.appendChild(input1);
   newelement.appendChild(label2);
   newelement.appendChild(input2);
   newelement.appendChild(label3);
   newelement.appendChild(input3);
   newelement.appendChild(label4);
   newelement.appendChild(input4);
   newelement.appendChild(label5);
   newelement.appendChild(input5);
   newelement.appendChild(label6);
   newelement.appendChild(input6);
   newelement.appendChild(label7);
   newelement.appendChild(input7);
   parent.insertBefore(newelement,voisin);
   //element.setAttribute("disabled","true");

}

function afficherQuestion6(element){
    console.log(element.tagName);
   let question = element;
   let voisin = question.parentNode.nextSibling;
   console.log(voisin.nextSibling);
   console.log(question.tagName);
   console.log(question);
   
   let parent = voisin.parentNode;
   question.parentNode.style.backgroundColor = "grey";
   
    //Création du div
   let newelement = document.createElement("div");
   newelement.setAttribute("id","question6");

   //Affichage question 6
   let label = document.createElement("label");
   label.setAttribute("for","lecture");
   let texte = document.createTextNode(donnees[5].id + "." + donnees[5].libelle)
   label.appendChild(texte);

   let label1 = document.createElement("label");
   label1.setAttribute("class","radio");
   label1.setAttribute("for","lne");
   let texte1 = document.createTextNode(donnees[5].option1);
   label1.appendChild(texte1);
   let input1 = document.createElement("input");
   input1.setAttribute("type","radio");
   input1.setAttribute("id","lne");
   input1.setAttribute("name","lecture");
   input1.setAttribute("onclick","afficherQuestion7(this)");

    let label2 = document.createElement("label");
   label2.setAttribute("class","radio");
   label2.setAttribute("for","lmauvais");
   let texte2 = document.createTextNode(donnees[5].option2);
   label2.appendChild(texte2);
   let input2 = document.createElement("input");
   input2.setAttribute("type","radio");
   input2.setAttribute("id","lmauvais");
   input2.setAttribute("name","lecture");
   input2.setAttribute("onclick","afficherQuestion7(this)");

   let label3 = document.createElement("label");
   label3.setAttribute("class","radio");
   label3.setAttribute("for","lmoyen");
   let texte3 = document.createTextNode(donnees[5].option3);
   label3.appendChild(texte3);
   let input3 = document.createElement("input");
   input3.setAttribute("type","radio");
   input3.setAttribute("id","lmoyen");
   input3.setAttribute("name","lecture");
   input3.setAttribute("onclick","afficherQuestion7(this)");

   let label4 = document.createElement("label");
   label4.setAttribute("class","radio");
   label4.setAttribute("for","lbon");
   let texte4 = document.createTextNode(donnees[5].option4);
   label4.appendChild(texte4);
   let input4 = document.createElement("input");
   input4.setAttribute("type","radio");
   input4.setAttribute("id","lbon");
   input4.setAttribute("name","lecture");
   input4.setAttribute("onclick","afficherQuestion7(this)");

   let label5 = document.createElement("label");
   label5.setAttribute("class","radio");
   label5.setAttribute("for","ladequat");
   let texte5 = document.createTextNode(donnees[5].option5);
   label5.appendChild(texte5);
   let input5 = document.createElement("input");
   input5.setAttribute("type","radio");
   input5.setAttribute("id","ladequat");
   input5.setAttribute("name","lecture");
   input5.setAttribute("onclick","afficherQuestion7(this)");

   let label6 = document.createElement("label");
   label6.setAttribute("class","radio");
   label6.setAttribute("for","lexcellent");
   let texte6 = document.createTextNode(donnees[5].option6);
   label6.appendChild(texte6);
   let input6 = document.createElement("input");
   input6.setAttribute("type","radio");
   input6.setAttribute("id","lexcellent");
   input6.setAttribute("name","lecture");
   input6.setAttribute("onclick","afficherQuestion7(this)");

   let label7 = document.createElement("label");
   label7.setAttribute("class","textarea");
   label7.setAttribute("for","lcommentaire");
   let texte7 = document.createTextNode("Commentaire :");
   label7.appendChild(texte7);
   let input7 = document.createElement("textarea");
   label7.appendChild(input7);
   input7.setAttribute("cols","40");
   input7.setAttribute("rows","2");
   input7.setAttribute("id","lcommentaire");

   newelement.appendChild(label);
   newelement.appendChild(label1);
   newelement.appendChild(input1);
   newelement.appendChild(label2);
   newelement.appendChild(input2);
   newelement.appendChild(label3);
   newelement.appendChild(input3);
   newelement.appendChild(label4);
   newelement.appendChild(input4);
   newelement.appendChild(label5);
   newelement.appendChild(input5);
   newelement.appendChild(label6);
   newelement.appendChild(input6);
   newelement.appendChild(label7);
   newelement.appendChild(input7);
   parent.insertBefore(newelement,voisin);
   //element.setAttribute("disabled","true");

}

function afficherQuestion7(element){
    console.log(element.tagName);
   let question = element;
   let voisin = question.parentNode.nextSibling;
   console.log(voisin.nextSibling);
   console.log(question.tagName);
   console.log(question);
   
   let parent = voisin.parentNode;
   question.parentNode.style.backgroundColor = "grey";
   
    //Création du div
   let newelement = document.createElement("div");
   newelement.setAttribute("id","question7");

   //Affichage question 6
   let label = document.createElement("label");
   label.setAttribute("for","duree");
   let texte = document.createTextNode(donnees[6].id + "." + donnees[6].libelle)
   label.appendChild(texte);

   let label1 = document.createElement("label");
   label1.setAttribute("class","radio");
   label1.setAttribute("for","dne");
   let texte1 = document.createTextNode(donnees[6].option1);
   label1.appendChild(texte1);
   let input1 = document.createElement("input");
   input1.setAttribute("type","radio");
   input1.setAttribute("id","dne");
   input1.setAttribute("name","duree");
   input1.setAttribute("onclick","afficherQuestion8(this)");

    let label2 = document.createElement("label");
   label2.setAttribute("class","radio");
   label2.setAttribute("for","dmauvais");
   let texte2 = document.createTextNode(donnees[6].option2);
   label2.appendChild(texte2);
   let input2 = document.createElement("input");
   input2.setAttribute("type","radio");
   input2.setAttribute("id","dmauvais");
   input2.setAttribute("name","duree");
   input2.setAttribute("onclick","afficherQuestion8(this)");

   let label3 = document.createElement("label");
   label3.setAttribute("class","radio");
   label3.setAttribute("for","dmoyen");
   let texte3 = document.createTextNode(donnees[6].option3);
   label3.appendChild(texte3);
   let input3 = document.createElement("input");
   input3.setAttribute("type","radio");
   input3.setAttribute("id","dmoyen");
   input3.setAttribute("name","duree");
   input3.setAttribute("onclick","afficherQuestion8(this)");

   let label4 = document.createElement("label");
   label4.setAttribute("class","radio");
   label4.setAttribute("for","dbon");
   let texte4 = document.createTextNode(donnees[6].option4);
   label4.appendChild(texte4);
   let input4 = document.createElement("input");
   input4.setAttribute("type","radio");
   input4.setAttribute("id","dbon");
   input4.setAttribute("name","duree");
   input4.setAttribute("onclick","afficherQuestion8(this)");

   let label5 = document.createElement("label");
   label5.setAttribute("class","radio");
   label5.setAttribute("for","dadequat");
   let texte5 = document.createTextNode(donnees[6].option5);
   label5.appendChild(texte5);
   let input5 = document.createElement("input");
   input5.setAttribute("type","radio");
   input5.setAttribute("id","dadequat");
   input5.setAttribute("name","duree");
   input5.setAttribute("onclick","afficherQuestion8(this)");

   let label6 = document.createElement("label");
   label6.setAttribute("class","radio");
   label6.setAttribute("for","dexcellent");
   let texte6 = document.createTextNode(donnees[6].option6);
   label6.appendChild(texte6);
   let input6 = document.createElement("input");
   input6.setAttribute("type","radio");
   input6.setAttribute("id","dexcellent");
   input6.setAttribute("name","duree");
   input6.setAttribute("onclick","afficherQuestion8(this)");

   let label7 = document.createElement("label");
   label7.setAttribute("class","radio");
   label7.setAttribute("for","dexcellent");
   let texte7 = document.createTextNode(donnees[6].option7);
   label7.appendChild(texte6);
   let input7 = document.createElement("input");
   input7.setAttribute("type","radio");
   input7.setAttribute("id","dexcellent");
   input7.setAttribute("name","duree");
   input7.setAttribute("onclick","afficherQuestion8(this)");


   newelement.appendChild(label);
   newelement.appendChild(label1);
   newelement.appendChild(input1);
   newelement.appendChild(label2);
   newelement.appendChild(input2);
   newelement.appendChild(label3);
   newelement.appendChild(input3);
   newelement.appendChild(label4);
   newelement.appendChild(input4);
   newelement.appendChild(label5);
   newelement.appendChild(input5);
   newelement.appendChild(label6);
   newelement.appendChild(input6);
   newelement.appendChild(label7);
   newelement.appendChild(input7);
   parent.insertBefore(newelement,voisin);

}

function afficherQuestion8(element){
    console.log(element.tagName);
   let question = element;
   let voisin = question.parentNode.nextSibling;
   console.log(voisin.nextSibling);
   console.log(question.tagName);
   console.log(question);
   
   let parent = voisin.parentNode;
   question.parentNode.style.backgroundColor = "grey";
   
    //Création du div
   let newelement = document.createElement("div");
   newelement.setAttribute("id","question7");

   //Affichage question 8
   let label = document.createElement("label");
   label.setAttribute("for","direct");
   let texte = document.createTextNode(donnees[7].id + "." + donnees[7].libelle)
   label.appendChild(texte);

   let label1 = document.createElement("label");
   label1.setAttribute("class","radio");
   label1.setAttribute("for","dine");
   let texte1 = document.createTextNode(donnees[7].option1);
   label1.appendChild(texte1);
   let input1 = document.createElement("input");
   input1.setAttribute("type","radio");
   input1.setAttribute("id","dine");
   input1.setAttribute("name","direct");
   input1.setAttribute("onclick","afficherQuestion9(this)");

    let label2 = document.createElement("label");
   label2.setAttribute("class","radio");
   label2.setAttribute("for","dimauvais");
   let texte2 = document.createTextNode(donnees[7].option2);
   label2.appendChild(texte2);
   let input2 = document.createElement("input");
   input2.setAttribute("type","radio");
   input2.setAttribute("id","dimauvais");
   input2.setAttribute("name","direct");
   input2.setAttribute("onclick","afficherQuestion9(this)");

   let label3 = document.createElement("label");
   label3.setAttribute("class","radio");
   label3.setAttribute("for","dimoyen");
   let texte3 = document.createTextNode(donnees[7].option3);
   label3.appendChild(texte3);
   let input3 = document.createElement("input");
   input3.setAttribute("type","radio");
   input3.setAttribute("id","dimoyen");
   input3.setAttribute("name","direct");
   input3.setAttribute("onclick","afficherQuestion9(this)");

   let label4 = document.createElement("label");
   label4.setAttribute("class","radio");
   label4.setAttribute("for","dibon");
   let texte4 = document.createTextNode(donnees[7].option4);
   label4.appendChild(texte4);
   let input4 = document.createElement("input");
   input4.setAttribute("type","radio");
   input4.setAttribute("id","dibon");
   input4.setAttribute("name","direct");
   input4.setAttribute("onclick","afficherQuestion9(this)");

   let label5 = document.createElement("label");
   label5.setAttribute("class","radio");
   label5.setAttribute("for","diadequat");
   let texte5 = document.createTextNode(donnees[7].option5);
   label5.appendChild(texte5);
   let input5 = document.createElement("input");
   input5.setAttribute("type","radio");
   input5.setAttribute("id","diadequat");
   input5.setAttribute("name","direct");
   input5.setAttribute("onclick","afficherQuestion9(this)");


   newelement.appendChild(label);
   newelement.appendChild(label1);
   newelement.appendChild(input1);
   newelement.appendChild(label2);
   newelement.appendChild(input2);
   newelement.appendChild(label3);
   newelement.appendChild(input3);
   newelement.appendChild(label4);
   newelement.appendChild(input4);
   newelement.appendChild(label5);
   newelement.appendChild(input5);

   parent.insertBefore(newelement,voisin);

}

function afficherQuestion9(element){
    console.log(element.tagName);
   let question = element;
   let voisin = question.parentNode.nextSibling;
   console.log(voisin.nextSibling);
   console.log(question.tagName);
   console.log(question);
   
   let parent = voisin.parentNode;
   question.parentNode.style.backgroundColor = "grey";
   
    //Création du div
   let newelement = document.createElement("div");
   newelement.setAttribute("id","question9");

   //Affichage question 2
   let label = document.createElement("label");
   label.setAttribute("for","format");
   let texte = document.createTextNode(donnees[8].id + "." + donnees[8].libelle);
   label.appendChild(texte);

   let label1 = document.createElement("label");
   label1.setAttribute("class","checkbox");
   label1.setAttribute("for","profva");
   let texte1 = document.createTextNode(donnees[8].option1);
   label1.appendChild(texte1);
   let input1 = document.createElement("input");
   input1.setAttribute("type","checkbox");
   input1.setAttribute("id","profva");
   input1.setAttribute("name","format");
   input1.setAttribute("onclick","afficherQuestion10(this)");

   let label2 = document.createElement("label");
   label2.setAttribute("class","checkbox");
   label2.setAttribute("for","profvea");
   let texte2 = document.createTextNode(donnees[8].option2);
   label2.appendChild(texte2);
   let input2 = document.createElement("input");
   input2.setAttribute("type","checkbox");
   input2.setAttribute("id","profvea");
   input2.setAttribute("name","format");
   input2.setAttribute("onclick","afficherQuestion10(this)");

   let label3 = document.createElement("label");
   label3.setAttribute("class","checkbox");
   label3.setAttribute("for","profvaua");
   let texte3 = document.createTextNode(donnees[8].option3);
   label3.appendChild(texte3);
   let input3 = document.createElement("input");
   input3.setAttribute("type","checkbox");
   input3.setAttribute("id","profvaua");
   input3.setAttribute("name","format");
   input3.setAttribute("onclick","afficherQuestion10(this)");

   let label4 = document.createElement("label");
   label4.setAttribute("class","checkbox");
   label4.setAttribute("for","profvdt");
   let texte4 = document.createTextNode(donnees[8].option4);
   label4.appendChild(texte4);
   let input4 = document.createElement("input");
   input4.setAttribute("type","checkbox");
   input4.setAttribute("id","profvdt");
   input4.setAttribute("name","format");
   input4.setAttribute("onclick","afficherQuestion10(this)");

   newelement.appendChild(label);
   newelement.appendChild(label1);
   newelement.appendChild(input1);
   newelement.appendChild(label2);
   newelement.appendChild(input2);
   newelement.appendChild(label3);
   newelement.appendChild(input3);
   newelement.appendChild(label4);
   newelement.appendChild(input4);
   parent.insertBefore(newelement,voisin);
   //element.setAttribute("disabled","true");
}

function afficherQuestion10(element){
    console.log(element.tagName);
   let question = element;
   let voisin = question.parentNode.nextSibling;
   console.log(voisin.nextSibling);
   console.log(question.tagName);
   console.log(question);
   
   let parent = voisin.parentNode;
   question.parentNode.style.backgroundColor = "grey";
   
    //Création du div
   let newelement = document.createElement("div");
   newelement.setAttribute("id","question10");

   //Affichage question 10
   let label = document.createElement("label");
   label.setAttribute("for","medium");
   let texte = document.createTextNode(donnees[9].id + "." + donnees[9].libelle)
   label.appendChild(texte);

   let label1 = document.createElement("label");
   label1.setAttribute("class","radio");
   label1.setAttribute("for","mene");
   let texte1 = document.createTextNode(donnees[9].option1);
   label1.appendChild(texte1);
   let input1 = document.createElement("input");
   input1.setAttribute("type","radio");
   input1.setAttribute("id","mene");
   input1.setAttribute("name","medium");
   input1.setAttribute("onclick","afficherQuestion11(this)");

    let label2 = document.createElement("label");
   label2.setAttribute("class","radio");
   label2.setAttribute("for","memauvais");
   let texte2 = document.createTextNode(donnees[9].option2);
   label2.appendChild(texte2);
   let input2 = document.createElement("input");
   input2.setAttribute("type","radio");
   input2.setAttribute("id","memauvais");
   input2.setAttribute("name","medium");
   input2.setAttribute("onclick","afficherQuestion11(this)");

   let label3 = document.createElement("label");
   label3.setAttribute("class","radio");
   label3.setAttribute("for","memoyen");
   let texte3 = document.createTextNode(donnees[9].option3);
   label3.appendChild(texte3);
   let input3 = document.createElement("input");
   input3.setAttribute("type","radio");
   input3.setAttribute("id","memoyen");
   input3.setAttribute("name","medium");
   input3.setAttribute("onclick","afficherQuestion11(this)");


   newelement.appendChild(label);
   newelement.appendChild(label1);
   newelement.appendChild(input1);
   newelement.appendChild(label2);
   newelement.appendChild(input2);
   newelement.appendChild(label3);
   newelement.appendChild(input3);

   parent.insertBefore(newelement,voisin);

}

function afficherQuestion11(element){
    console.log(element.tagName);
   let question = element;
   let voisin = question.parentNode.nextSibling;
   console.log(voisin.nextSibling);
   console.log(question.tagName);
   console.log(question);
   
   let parent = voisin.parentNode;
   question.parentNode.style.backgroundColor = "grey";
   
    //Création du div
   let newelement = document.createElement("div");
   newelement.setAttribute("id","question11");

   //Affichage question 11
   let label = document.createElement("label");
   label.setAttribute("for","asynchrone");
   let texte = document.createTextNode(donnees[10].id + "." + donnees[10].libelle)
   label.appendChild(texte);


   let label2 = document.createElement("label");
   label2.setAttribute("class","textarea");
   label2.setAttribute("for","tcommentaire");
   let texte2 = document.createTextNode("Commentaire :");
   label2.appendChild(texte2);
   let input2 = document.createElement("textarea");
   label2.appendChild(input2);
   input2.setAttribute("cols","40");
   input2.setAttribute("rows","2");
   input2.setAttribute("id","tcommentaire");
   input2.setAttribute("onclick","afficherBoutonEnvoyer(this)");

   newelement.appendChild(label);
   newelement.appendChild(label2);
   newelement.appendChild(input2);

   parent.insertBefore(newelement,voisin);
   //element.setAttribute("disabled","true");

}






function afficherBoutonEnvoyer(element){
    console.log(element.tagName);
    let question = element;
    let voisin = question.parentNode.nextSibling;
    console.log(voisin.nextSibling);
    console.log(question.tagName);
    console.log(question);
    
    let parent = voisin.parentNode;
    
     //Création du div
    let newelement = document.createElement("div");
    newelement.setAttribute("id","boutonenvoyer");
 
    //Affichage bouton envoyer
    let input = document.createElement("input");
    input.setAttribute("type","submit");
    input.setAttribute("id","btnSubmit");
    input.setAttribute("value","envoyer");

    newelement.appendChild(input);
    parent.insertBefore(newelement,voisin);
}

