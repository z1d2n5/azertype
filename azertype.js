
let score=0;


let choix=prompt("vous preferer des mots ou des phrases?");
while (choix!=="mots"&& choix!=="phrases") {
   let choix=prompt("vous preferer des mots ou des phrases?");
}

if(choix==="mots"){
    for(let i=0;i<listeMots.length;i++){
    let motUtilisateur=prompt('enter le mot:'+listeMots[i]);
        if(motUtilisateur===listeMots[i]){
            score++;
        }
    }
 console.log('vous avez un score de'+ score+'/'+listeMots.length);
}
else{
    for(let i=0;i<listePhrases.length;i++){
    let motUtilisateur=prompt('enter le mot:'+listePhrases[i]);
        if(motUtilisateur===listePhrases[i]){
            score++;
        }       
}
console.log('vous avez un score de'+ score+'/'+listePhrases.length);
}
function afficherResultat(resultat,nbreTotalMot){
   let message= console.log('le resultat du joueur est:'+resultat+'/'+nbreTotalMot);
    return message;
}
