const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const grass = document.querySelector('.grass');
let score = 0;
const gameOver = document.querySelector('.game-over')
const scoreElement = document.querySelector('.score-value');
const finalScore = document.querySelector('.final-score')
const restartButton = document.querySelector('.restart-button');

let isPipePassed = false;

const jump = () => {
    isPipePassed = false;
    mario.classList.add('jump');
    setTimeout(() =>{
      mario.classList.remove('jump');
    }, 700);
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;
  const grassPosition = grass.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
   
  if (pipePosition < 0 && !isPipePassed) {
    isPipePassed = true;
    score++;
    scoreElement.textContent = score;
  }
  
  if ( pipePosition >= -20 && pipePosition <= 90 && marioPosition < 110) {
    grass.style.animation ='none';
    grass.style.left = `${grassPosition}px`;

    pipe.style.animation ='none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation ='none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './img/gameOverMario.png';
    mario.style.width = '100px';

    clouds.style.animation ='none';
    clouds.style.left = `${cloudsPosition}px`;

    gameOver.style.display = 'block';
    finalScore.textContent = score;
    
    clearInterval(loop);
  }
}, 10);

document.addEventListener('keydown', jump);
restartButton.addEventListener('click', () => {
  gameOver.style.display = 'none';
    score = 0;
    scoreElement.textContent = score;
});