let score = 0;
let time = 30;
let timer;

let target = document.getElementById("target");
let bomb = document.getElementById("bomb");

let scoreDisplay = document.getElementById("score");
let timeDisplay = document.getElementById("time");
let highscoreDisplay = document.getElementById("highscore");

let startBtn = document.getElementById("startBtn");
let gameOverScreen = document.getElementById("gameOverScreen");
let finalScore = document.getElementById("finalScore");

let highscore = localStorage.getItem("highscore") || 0;
highscoreDisplay.innerText = highscore;

function moveTarget(){

let x = Math.random()*350;
let y = Math.random()*350;

target.style.left = x + "px";
target.style.top = y + "px";

}

function moveBomb(){

let x = Math.random()*350;
let y = Math.random()*350;

bomb.style.left = x + "px";
bomb.style.top = y + "px";

}

target.addEventListener("click", function(){

score++;
scoreDisplay.innerText = score;

if(score > highscore){
highscore = score;
localStorage.setItem("highscore", highscore);
highscoreDisplay.innerText = highscore;
}

moveTarget();
moveBomb();

});

bomb.addEventListener("click", function(){

endGame();

});

function startGame(){

bomb.style.display = "block";

moveTarget();
moveBomb();

timer = setInterval(function(){

time--;
timeDisplay.innerText = time;

if(time <= 0){
endGame();
}

},1000);

}

function endGame(){

clearInterval(timer);

document.getElementById("gameArea").style.display = "none";

finalScore.innerText = score;

gameOverScreen.style.display = "block";

}

function restartGame(){

score = 0;
time = 30;

scoreDisplay.innerText = score;
timeDisplay.innerText = time;

document.getElementById("gameArea").style.display = "block";
gameOverScreen.style.display = "none";

moveTarget();
moveBomb();

startGame();

}

startBtn.addEventListener("click", startGame);