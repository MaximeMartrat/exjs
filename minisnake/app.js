//je déclare mes variables en récupérant les différents objets du DOM
let target = document.getElementById("target")
let snake = document.getElementById("snake")
let afficherScore = document.getElementById('score')
let afficherLoose = document.getElementById('loose')
let snakeX = 1;
let snakeY = 1;
//je fais apparaitre la target de façon aléatoire sur le plateau
let targetX = Math.random()*90;
let targetY = Math.random()*90;
let winX = targetX;
let winY = targetY +10;
let speed = 3;
let score = 0;
let loose = 0;
//je cré la fonction pour bouger le carré avec les flèches du clavier
function moveSnake() {
    document.addEventListener('keydown', function(event){
        if (event.key === "ArrowLeft"){
            snakeX -= speed;
        } else if (event.key === "ArrowRight"){
            snakeX += speed;
        } else if (event.key === "ArrowUp") {
            snakeY -= speed;
        } else if (event.key === "ArrowDown") {
            snakeY += speed;
        }
        snake.style.top = snakeY + "%";
        snake.style.left = snakeX + "%";
            
        target.style.top = targetY + "%";
        target.style.left = targetX + "%";

        win();
        lose();
    }) 
}
//je crée une fonction pour changer la couleur de mon carré lorsqu'il est sur la target et incrémenter le compteur de victoires            
function win(){
    if (snakeX <= winX+2 && snakeY <= winY+2 && snakeX >= winX-2 && snakeY >= winY-2) {
        snake.style.backgroundColor = "blue";
        score += 1;
        afficherScore.innerHTML = `Score : ${score}`; 
    } else {
        snake.style.backgroundColor = "black";
    }
}
//je créer une fonction pour incrémenter le compteur de défaites lorsque le carré sort de l'aire de jeu
function lose(){
    if (snakeX <= 0 || snakeX >= 92 || snakeY <= 0 || snakeY >= 92) {
        snake.style.backgroundColor = "red";
        loose +=1 ;
        afficherLoose.innerHTML = `Loose : ${loose}`;
    }
}
moveSnake();
