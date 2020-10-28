const canvas = document.getElementById("snake");
const context = canvas.getContext("2d");
const box = 32;

const createBG = () => {
    //cor
    context.fillStyle = "lightGreen";
    // eixo x, y e altura, largura (32 pixels)
    context.fillRect(0, 0, 16 * box, 16 * box);
}

createBG();