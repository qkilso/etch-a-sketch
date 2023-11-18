document.addEventListener('DOMContentLoaded', ()=>{
const body = document.body;

function setCanvas(pixels){
    const canvas = body.querySelector('#canvas');
    canvas.style.cssText =`background-color: blue; display: grid; grid-template-rows: repeat(${pixels}, 1fr); grid-template-columns: repeat(${pixels}, 1fr);`;
    return canvas;
}
});