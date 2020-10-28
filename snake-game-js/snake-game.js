const canvas = document.getElementById("snake");
const context = canvas.getContext("2d");
const box = 32;

const createBG = () => {
    //cor
    context.fillStyle = "black";
    // eixo x, y e altura, largura (16 quadrados de 32 pixels)
    context.fillRect(0, 0, 16 * box, 16 * box);
}
createBG();

let position = [
    //posição da parte 1
    {
        x: 8 * box,
        y: 8 * box
    }
];
const createSnake = () => {
    //adiciona cada parte da cobrinha, nas respectivas posições do array
    for(i=0; i < position.length; i++){
        context.fillStyle = "lightGreen";
        context.fillRect(position[i].x, position[i].y, box, box);
    }
}
createSnake();