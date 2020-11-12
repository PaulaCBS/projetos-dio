var sequence = [];
var inputSequence = [];
var score = 0;
var speed = 1000;

const green = document.getElementById("green");
const yellow = document.getElementById("yellow");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const btnColors = [green, yellow, red, blue];

const start = () => {
  /* 0 - verde, 1 - vermelho, 2 - amarelo, 3 - azul */

  const pickColor = () => {
    let color = Math.floor(Math.random()*(btnColors.length - 0) ) + 0;
    sequence.push(color);
    console.log(color)
  }
  pickColor();

  const lightColorSequence = () => {
    sequence.map( number => {
      btnColors[number].classList.add("light");
      setTimeout( () => {
        btnColors[number].classList.remove("light");
      }, speed)
    })
  }
  lightColorSequence();

  const getInput = () => {
    const checkMatch = (element) => {
      if(element.target.id === "green"){
        console.log("green")
        inputSequence.push[0]
      } else if (element.target.id === "yellow"){
        console.log("yellow")
        inputSequence.push[1]
      } else if (element.target.id === "red"){
        console.log("red")
        inputSequence.push[2]
      } else if (element.target.id === "blue"){
        console.log("blue")
        inputSequence.push[3]
      }
      console.log(sequence)
    };
    btnColors.map( color => {
      color.addEventListener("click", checkMatch)
    });
  }
  getInput();
}

start()