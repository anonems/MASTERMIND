let choix_couleur = [];
let choix_endroit = [];
let liste_choisi = [5,5,5,5];
let incre = 0;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function random_choice_int(){
    let valeur = 5;
    let valeurs = [];
    for(let i = 0; i<=3; i++){
        valeur = getRandomInt(4);
        if(valeurs.includes(valeur)){
            while(valeurs.includes(valeur)){
                valeur = getRandomInt(4);
            }   
        }
        valeurs.push(valeur);
    }
    return valeurs;
}
function random_choice_color(){
    let couleurs_int = random_choice_int();
    let couleurs = ['red','blue','orange','green','pink'];
    let couleurs_robot = [];
    for(let i = 0; i<=3; i++){
        couleurs_robot.push(couleurs[couleurs_int[i]])
    }
    return couleurs_robot;
}

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    choix_couleur.push(ev.dataTransfer.getData("text"));
    choix_endroit.push(ev.target.id);
    incre = incre + 1;
    if(incre===4){
        liste_cacher=random_choice_color()
        for(let n = 0; n<=4; n++){
            liste_choisi[choix_endroit[n]]=choix_couleur[n];
        }          
        if(liste_choisi === liste_cacher){
            alert('bravo ! vous avez trouvé la bonne combinaison.')
            window.location.replace("http://www.w3schools.com");
        }else{
            let pas_bien=0
            for(let j=0; j<=3; j++){
                if (!(liste_choisi[j+1]===liste_cacher[j])){
                pas_bien++
                }
            }
            alert(pas_bien +" de vos choix sont faux. La combinaison à trouver été : "+liste_cacher)
            window.location.replace("http://www.w3schools.com");
            
        }
    }
    
}
