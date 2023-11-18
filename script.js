document.addEventListener('DOMContentLoaded', ()=>{
const body = document.body;

function setCanvas(pixels){
    const canvas = body.querySelector('#canvas');
    canvas.style.cssText =`background-color: white; display: grid; grid-template-rows: repeat(${pixels}, 1fr); grid-template-columns: repeat(${pixels}, 1fr);`;
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

function resetGrid(canvas){
    while(canvas.firstChild){
        canvas.removeChild(canvas.lastChild);
    }
}

function createGrid(pixels){
    const canvas = setCanvas(pixels);
    resetGrid(canvas);
    createPixel(canvas, pixels);
    enableButton();
}

function enableButton(){
    const blackButton = body.querySelector('#black');
    const erasorButton = body.querySelector('#erasor');
    const rainbowButton = body.querySelector('#rainbow');
    const allPixels = document.querySelectorAll('.pixel');
    const resetButton = body.querySelector('#reset');
    const penButton = body.querySelector('#pen');

    blackButton.addEventListener('click', (e)=>{
        allPixels.forEach((pixel)=>{
            pixel.addEventListener('mouseenter', ()=>{
                pixel.style.background = 'black';
            });
        });
    });
    erasorButton.addEventListener('click', (e)=>{
        allPixels.forEach((pixel)=>{
            pixel.addEventListener('mouseenter', ()=>{
                pixel.style.background = 'white';
            });
        });
    });
    rainbowButton.addEventListener('click', (e)=>{
        allPixels.forEach((pixel)=>{
            pixel.addEventListener('mouseenter', ()=>{
                var randomBetween = (min, max) => Math.floor(Math.random() * max + min);
                var r = randomBetween(0,255);
                var g = randomBetween(0,255);
                var b = randomBetween(0,255);
                pixel.style.background = `rgb(${r},${g},${b})`;
            });
        });
    });
    penButton.addEventListener('click', (e)=>{
        let darkness = .10;

        allPixels.forEach((pixel)=>{
            pixel.addEventListener('mouseenter', ()=>{
                pixel.style.background = 'black';
                pixel.style.opacity = `${darkness}`;
                if(darkness < 1){
                    darkness += .10;
                }
            });
        });
    });
    resetButton.addEventListener('click', (e)=>{
        allPixels.forEach((pixel) => pixel.style.background = 'white');
    });
}
function idle(){
    const inputPixel = body.querySelector('#pixel_input');
    const pixelAmount = body.querySelector('#pixel_amount');
    const applyButton = body.querySelector('#apply');
    applyButton.style.visibility = 'hidden';
    inputPixel.addEventListener('input', (options)=>{
        pixelAmount.textContent = (options.target.value);
        applyButton.style.visibility = 'visible';
        
    });
    applyButton.addEventListener('click', ()=>{
        createGrid(inputPixel.value);
    });
}

idle();

});