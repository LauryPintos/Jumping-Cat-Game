// game
const cat = document.getElementById('cat');
const btnJump = document.getElementById('btnJump');
const soundgameover = document.getElementById('soundgameover');
const soundOkJump = document.getElementById('soundOkJump');
const counter = document.getElementById('counter');
const made = document.getElementById("made");

let counterSuma = 0;

//cuenta regresiva al iniciarse el juego
const countdown = document.getElementById('countdown');
let seconds = 3;
const interval = setInterval(() => {
  seconds--;
  countdown.textContent = seconds;
  if (seconds === 0) {
    document.getElementById('hideCountdown').style = 'display:none';
    document.getElementById('hideCointaner').style = 'display:block';
    document.getElementById('hideButton').style = 'display:block';    
    made.innerHTML = `<p>Made by Laury</p>`
  }
}, 1000);


//funcion para hacer saltar al gatito
function jump(){
    if(cat.classList != "jump"){
        cat.classList.add("jumpingCat");
        setTimeout(() => {
            cat.classList.remove("jumpingCat");
        },300);
    }
}

//verificacion si el gatito toca la pelota
let isAlive = setInterval(function () {
  
    // tomamos la posicion Y del gato
    let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
  
    // tomamos la posicion x de la pelota
    let ballLeft = parseInt(
      window.getComputedStyle(ball).getPropertyValue("left")
    );
     

    // detectamos si choca con la pelota
    if (ballLeft < 24 && ballLeft > 0 && catTop >= 220) {

      
      // si choca mostramos el game over
      soundgameover.play();
      document.getElementById('hideCointaner').style = 'display:none';
      document.getElementById('hideButton').style = 'display:none';
      
      document.getElementById('openGameOver').innerHTML = `<div  class="containerGameover animate__animated animate__bounceInDown">
                                                              <div class="btnGameOver animate__animated animate__bounceInUp">
                                                                  <button id="btnPlayAgain">PLAY AGAIN</button>
                                                              </div>
                                                          </div>`
      
      const btnPlayAgain = document.getElementById('btnPlayAgain');

      btnPlayAgain.addEventListener('click', ()=>{
          location.reload();
      })

      //si no choca sumamos al contador +1
    } else if (ballLeft == 0 && catTop < 220) {

      soundOkJump.play();
      counterSuma ++;
      counter.innerHTML = `${counterSuma}`
    }
}, 10);


btnJump.addEventListener('click', ()=>{
    soundJump.play();
    jump();
});
