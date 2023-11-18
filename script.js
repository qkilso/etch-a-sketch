document.addEventListener('DOMContentLoaded', ()=>{
const body = document.body;

function setCanvas(pixels){
    const canvas = body.querySelector('#canvas');
    canvas.style.cssText =`background-color: blue; display: grid; grid-template-rows: repeat(${pixels}, 1fr); grid-template-columns: repeat(${pixels}, 1fr);`;
    return canvas;
}

function createPixel(parent, pixels){
    totalPixels = pixels * pixels;
    for(let i = 0; i < totalPixels; i++){
    const pixel = document.createElement('div');
    pixel.classList = 'pixel';
    pixel.style.background = 'white';
    pixel.style.border = '1px black solid';
    parent.appendChild(pixel);
    }
}

function createGrid(pixels){
    const canvas = setCanvas(pixels);
    createPixel(canvas, pixels);
}


});