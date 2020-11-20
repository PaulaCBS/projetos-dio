var sequence = [];
var sequenceReverse = [];
var inputSequence = [];
var score = 0;
var repeatsLeft = 2;
var speed = 1000;
var gameMode = 1;
var eventAdded = false;

const getById = (element) => {
  return document.getElementById(element)
};

const green = getById("green");
const yellow = getById("yellow");
const red = getById("red");
const blue = getById("blue");
const btnColors = [green, yellow, red, blue];

var getScore = getById("score");
const startBtn = getById("game-start-btn");
const optionsBtn = getById("game-options-btn");
const restartBtn = getById("restart");

let start, gameOver, reset, restart, options, mainScreen;

start = () => {

  let changeBtns, pickColor, lightColorSequence, disableInput, getInput, checkMatch, updateScore, repeat;
  
  changeBtns = () => {
    const preGameBtns = getById("pregame-btn-wrapper");
    const ingameBtns = getById("ingame-btn-wrapper");
    preGameBtns.classList.add("hide");
    ingameBtns.classList.remove("hide");
  }
  changeBtns();

  pickColor = () => {
    let color = Math.floor(Math.random()*(btnColors.length - 0) ) + 0;
    if (gameMode === 2){
      sequence.push(color);
      sequenceReverse.unshift(color);
    } else {
      sequence.push(color);
    }

    repeatsLeft = 2;
    inputSequence = [];
    repeatBtn.disabled = false;
    disableInput(true);
    lightColorSequence();
  };

  lightColorSequence = () => {
    let disableInterval = speed * (sequence.length + (sequence.length/2)) - (speed/2);

    // delay para começar a acender
    setTimeout( () => {
      sequence.forEach( (number, index) => {
        // multiplica o tempo de delay pelo index, para acender um de cada vez
        setTimeout( () => {
          btnColors[number].classList.add("light");
          // velocidade que pisca
          setTimeout( () => {
           btnColors[number].classList.remove("light");
          }, speed / 2)
        }, speed * index)
        
      })
    }, 1000);

    setTimeout( () => {
      disableInput(false);
    }, disableInterval)
  };

  disableInput = (bool) => {
    btnColors.forEach( (btn) => {
      btn.disabled = bool
    })
  }

  getInput = (event) => {
      const target = event.target.id;

      const lightColorOnClick = () =>{
        let colorClicked = event.target
        colorClicked.classList.add("light");
        setTimeout( () => {
          colorClicked.classList.remove("light");
        }, 200)
      }

      if(inputSequence.length < sequence.length){
        if(target === "green"){
          inputSequence.push(0)
          lightColorOnClick()
        } else if (target === "yellow"){
          inputSequence.push(1)
          lightColorOnClick()
        } else if (target === "red"){
          inputSequence.push(2)
          lightColorOnClick()
        } else if (target === "blue"){
          inputSequence.push(3)
          lightColorOnClick()
        }
      }
      checkMatch();
  };

  checkMatch = () => {
    if(gameMode === 2){
      for(color in inputSequence){
        if (inputSequence[color] != sequenceReverse[color]){
          return gameOver()
        }
        if (inputSequence.length == sequence.length && inputSequence[color] == sequenceReverse[color]){
          updateScore()
          return pickColor()
        }
      }
    } else{
      for(color in inputSequence){
        if (inputSequence[color] != sequence[color]){
          return gameOver()
        }
        if (inputSequence.length == sequence.length && inputSequence[color] == sequence[color]){
          updateScore()
          return pickColor()
        }
      }
    }
  }

  updateScore = () => {
    score++
    getScore.innerHTML= `score: ${score}`;
  };

  repeat = () => {
    if (repeatsLeft > 0){
      lightColorSequence();
      repeatsLeft--
    } 
    if (repeatsLeft === 0){
      repeatBtn.disabled = true
    }
  }
  const repeatBtn = getById("repeat");
  repeatBtn.addEventListener("click", repeat);

  if (!eventAdded){
    btnColors.forEach( color => {
      color.addEventListener("click", getInput)
    });
    eventAdded = true;
  }

  pickColor();
};

gameOver = () => {
  reset();

  const gameContainer = getById("screen");
  const alertScreen = document.createElement("div");
  const alertTemplate = `
    <p class="game-over-msg">GAME OVER</p>
    <p> Play Again? </p>
    <div class="play-again-btns">
      <button id="play-again-y" class="menu-btn"> YES </button>
      <button id="play-again-n" class="menu-btn"> NO </button>
    </div>
  `;
  alertScreen.classList.add("game-over-screen");
  alertScreen.innerHTML = alertTemplate;
  gameContainer.appendChild(alertScreen);

  const newGame = () => {
    gameContainer.removeChild(alertScreen);
    restart()
  };

  const playAgainY = getById("play-again-y");
  const playAgainN = getById("play-again-n");
  playAgainY.addEventListener("click", newGame);
  playAgainN.addEventListener("click", mainScreen);
};

reset = () => {
  sequence = [];
  sequenceReverse = [];
  inputSequence = [];
  score = 0;
  repeatsLeft = 2;
};

restart = () => {
  reset();
  location.reload();
}

mainScreen = () => {
  location.reload()
};

options = () => {
  const home = getById("homescreen");
  const backHome = getById("back-home-btn");
  const optionsMenu = getById("options-menu");
  const speedRadio = document.querySelectorAll(".speed-opt");
  const modesRadio = document.querySelectorAll(".modes-opt");

  home.classList.add("hide");
  optionsMenu.classList.add("expand");
  optionsMenu.classList.remove("hide");


  backHome.addEventListener("click", () => {
    home.classList.remove("hide");
    optionsMenu.classList.add("hide");
    optionsMenu.classList.remove("expand");
  })

  const changeSpeed = (radio) => {
    const seconds = radio.target.value;
    speed = parseInt(seconds);
  }

  const changeGameMode = (radio) => {
    mode = radio.target.value;
    gameMode = parseInt(mode);

    if(gameMode === 3){
      btnColors.forEach( (btn) => {
        btn.style.backgroundColor = "#454545";
        btn.classList.add("no-color");
      })
    }
  }

  speedRadio.forEach( (radio) =>{
    radio.addEventListener("click", changeSpeed)
  })

  modesRadio.forEach( (radio) => {
    radio.addEventListener("click", changeGameMode)
  })
};

startBtn.addEventListener("click", start);
restartBtn.addEventListener("click", restart);
optionsBtn.addEventListener("click", options);


// aviso tela muito pequena
const getScreen = getById("screen");
const tinyScreenDiv = document.createElement("div");
tinyScreenDiv.classList.add("tiny-screen-warning");
const tinyScreenMsg = `
  <p class="tiny-screen-msg">
    Screen height is too small, please change the orientation of your device if possible
  </p>
`;
tinyScreenDiv.innerHTML = tinyScreenMsg;

const checkWindowSize = () => {
  if(window.screen.availHeight <= 420){
    getScreen.appendChild(tinyScreenDiv);
  } else {
    if (getScreen.contains(tinyScreenDiv)){
      getScreen.removeChild(tinyScreenDiv);
    }
  }
}
window.onload = () => {
  checkWindowSize()
}
window.onresize = () => {
  checkWindowSize()
}