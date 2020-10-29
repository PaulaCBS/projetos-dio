const canvas = document.getElementById("snake");
const context = canvas.getContext("2d");
const box = 32;

// pontuação
var score = 0;

// define a variavel que guarda o intervalo em que a função gameInit será chamada
var interval;

// velocidade da cobrinha
var speed = 80;

// posição inicial
var snakePosition = [
    {
        x: 8 * box,
        y: 8 * box
    }
];

// posição comida
var foodPosition = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
};

// define a direção em que a esta indo
var snakeDirection = "right";
        
// controles
const updateDirection = event => {
    if (event.keyCode == 37 && snakeDirection != "right"){
        snakeDirection = "left";
    } else if (event.keyCode == 38 && snakeDirection != "down"){
        snakeDirection = "up";
    } else if (event.keyCode == 39 && snakeDirection != "left"){
        snakeDirection = "right";
    } else if (event.keyCode == 40 && snakeDirection != "up"){
        snakeDirection = "down";
    }
}
const event = document.addEventListener("keydown", updateDirection);

// esconde os botões de start e restart
const hideButton = (button) => {
    document.getElementById(button).classList.add("hidden");
}

// Inicia o jogo
const gameInit = () => {
    // fundo
    const createBG = () => {
        context.fillStyle = "black";
        // eixo x, y e altura, largura (16 quadrados de 32 pixels)
        context.fillRect(0, 0, 16 * box, 16 * box);
    };
    createBG();

    // cobrinha
    const createSnake = () => {
        // adiciona cada parte da cobrinha, nas respectivas posições do array
        for(i=0; i < snakePosition.length; i++){
            context.fillStyle = "lightGreen";
            context.fillRect(snakePosition[i].x, snakePosition[i].y, box, box);
        }
    };
    createSnake();

    // define pontuação
    const setScore = () => {
        context.font = "16px Monospace";
        context.fillStyle = "#FFF";
        context.fillText("Pontos: " + score, 30, 30);
    };
    setScore();

    // cria comida
    const drawFood = () => {
        context.fillStyle = "red";
        context.fillRect(foodPosition.x, foodPosition.y, box, box);
    };
    drawFood();

    // movimento
    const move = () => {
        // atualiza a posição da cobrinha
        var snakeX = snakePosition[0].x;
        var snakeY = snakePosition[0].y;

    
        // da movimento à cobrinha
        if(snakeDirection == "right"){
            snakeX += box;
        } else if (snakeDirection == "left"){
            snakeX -= box;
        } else if (snakeDirection == "up"){
            snakeY -= box;
        } else if (snakeDirection == "down"){
            snakeY += box;
        };
    
        // acrescenta a cabeça
        let head = {
            x: snakeX,
            y: snakeY
        };
        snakePosition.unshift(head);

        // detecta se passou pela borda e inicia do outro lado
        if (snakePosition[0].x > 15 * box && snakeDirection == "right"){
            snakePosition[0].x = 0;
        };
        if (snakePosition[0].x < 0 * box && snakeDirection == "left"){
            snakePosition[0].x = 16 * box;
        };
        if (snakePosition[0].y > 15 * box && snakeDirection == "down"){
            snakePosition[0].y = 0;
        };
        if (snakePosition[0].y < 0 * box && snakeDirection == "up"){
            snakePosition[0].y = 16 * box;
        };

        // detecta colisão com a comida
        if (snakeX != foodPosition.x || snakeY != foodPosition.y){
            // retira o ultimo elemento(parte) da cobrinha
            snakePosition.pop();
            
        } else {
            // aparece outra comida
            foodPosition.x = Math.floor(Math.random() * 15 + 1) * box;
            foodPosition.y = Math.floor(Math.random() * 15 + 1) * box;

            // adiciona pontos
            score += 5;
        };

        // detecta colisão com o corpo
        for (i = 1; i < snakePosition.length; i++){ // para cada parte depois da cabeça
            // s e eixos x ou y da cabeça forem iguais a qualquer parte do corpo
            if(snakePosition[0].x == snakePosition[i].x && snakePosition[0].y == snakePosition[i].y){
                gameOver();
            }
        } 

    }
    move();
}

//iniciar
const pressStart = document.getElementById("start").addEventListener("click", () => {
    interval = setInterval(gameInit, speed); 
    hideButton("start");
});

// fim de Jogo e Restart
const gameOver = () => {
    clearInterval(interval);

    const getRestartBtn =  document.getElementById("restart");

    const showButton = () => {
        getRestartBtn.classList.remove("hidden");
    };
    showButton();

    getRestartBtn.addEventListener("click", () => {
        interval = setInterval(gameInit, speed);
        hideButton("restart");

        // zera os pontos
        score = 0;

        // zera cobrinha
        snakePosition = [
            {
                x: 8 * box,
                y: 8 * box
            }
        ];

        // reseta comida
        foodPosition = {
            x: Math.floor(Math.random() * 15 + 1) * box,
            y: Math.floor(Math.random() * 15 + 1) * box
        };
    
        // redefine a direção da cobrinha
        snakeDirection = "right";
    });

}