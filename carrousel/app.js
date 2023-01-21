//je crée un tableau avec pour éléments les sources de mes images
let tabImg = ["printemps.jpg", "ete.jpg", "automne.jpeg", "hiver.jpg"];
//j'initialise un index à 0
let currentIndex = 0;
//je récupère mon div, mes images et mes boutons que je place dans des variables
let imageDiv = document.getElementById("carrousel");
let images = imageDiv.getElementsByTagName("img");
let prev = document.getElementById("preced");
let next = document.getElementById("suit");

function previous(){
    //je retire la première image du tableau avec la methode shift
    let firstImg = tabImg.shift();
    //j'ajoute la première image à la fin du tableau avec la methode push
    tabImg.push(firstImg);
    //je crée une boucle for pour mettre à jour les src de chaque image
    //a chaque tour de boucle la source de l'img[i] est mise à jour à l'index i du tableau
    for (let i = 0; i < images.length; i++) {
        images[i].src = tabImg[i];               
    }
};
//je créer un écouteur d'évènement au clic sur le bouton prev pour lancer la fonction previous
prev.addEventListener('click', previous)
//je crée un ecouteur d'évènement sur la touche flèche gauche dans le body avec son keyCode "37" pour lancer la fonction previous
document.body.addEventListener('keydown', (e) => {
    if (e.key === "ArrowLeft") {
        previous();
    }
});
function theNext (){
    //je retire la dernière image du tableau avec la methode pop
    let lastImg = tabImg.pop();
    //j'ajoute la dernière image au debut du tableau avec la methode unshift
    tabImg.unshift(lastImg)
    //je crée une boucle for pour mettre à jour les src de chaque image 
    for (let i = 0 ; i < images.length; i++) {
        images[i].src = tabImg[i];
    }
};
//je créer un écouteur d'évènement au clic sur le bouton next pour lancer la fonction theNext
next.addEventListener('click', theNext)
//je crée un écouteur d'évènement sur la touche flèche droite dans le body en utilisant son keyCode "39" pour lancer la fonction theNext
document.body.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight") {
        theNext();
    }
});