let target = document.getElementById("target")
let snake = document.getElementById("snake")
let afficherScore = document.getElementById('score')
let afficherLoose = document.getElementById('loose')
let snakeX = 1;
let snakeY = 1;
let targetX = Math.random()*90;
let targetY = Math.random()*90;
let winX = targetX;
let winY = targetY +10;
let speed = 3;
let score = 0;
let loose = 0;
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
function win(){
    if (snakeX <= winX+2 && snakeY <= winY+2 && snakeX >= winX-2 && snakeY >= winY-2) {
        snake.style.backgroundColor = "blue";
        score += 1;
        afficherScore.innerHTML = `Score : ${score}`; 
    } else {
        snake.style.backgroundColor = "black";
    }
}
function lose(){
    if (snakeX <= 0 || snakeX >= 92 || snakeY <= 0 || snakeY >= 92) {
        loose +=1 ;
        afficherLoose.innerHTML = `Loose : ${loose}`;
    }
}
moveSnake();
