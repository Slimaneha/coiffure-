
var hommeUn = "Coupe homme court";
var hommeDeux= "Coupe homme long";
var femmeUn= "Coupe femme "; 





// Affiche select 


document.getElementById("1").innerHTML=hommeUn
document.getElementById("2").innerHTML=hommeDeux
document.getElementById("3").innerHTML=femmeUn
var selectElmt = document.getElementById("form");




function choix (){
    var   choix = textselectionne = selectElmt.options[selectElmt.selectedIndex].text;

    console.log(choix)

    if (choix === hommeUn) {
        document.getElementById("homme-court").style.display="flex"
        document.getElementById("homme1").style.display="block"

        
        document.getElementById("formulaire").style.display="none"
    }

    else if (choix === hommeDeux) {
        document.getElementById("homme-long").style.display="flex"
        document.getElementById("formulaire").style.display="none"
        document.getElementById("homme2").style.display="block"

    }

    



}