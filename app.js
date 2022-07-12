const gridContainer = document.querySelector('.main-grid');
const dimensionButton = document.querySelector('.change-dimensions');
const rbButton = document.querySelector('.rainbow-mode');
const rbButtonStatusIndicator = document.querySelector('.rainbow-mode .rb-status-indicator');

let dimensions;
let isRainbowModeOn = false;
let clickStarted = false;

window.addEventListener('mouseup', () => clickStarted = false);
dimensionButton.addEventListener('click', changeDimensions);
rbButton.addEventListener('click', toggleRainbowMode);

function changeDimensions(){
    let validInput = false;

    while(!validInput) {
        dimensions = parseInt(prompt("Enter the new dimension (max 100)", 16));
        if((dimensions > 0 && dimensions <= 100)){
            validInput = true;
        }
    }
    createGrid(dimensions, dimensions);
}

function resetGrid(){
    let allTiles = gridContainer.querySelectorAll(".grid-item");
    allTiles.forEach((tile) => tile.remove());
}

function createGrid(rows, columns){
    resetGrid();
    for (let i = rows; i > 0; i--) {
        for (let j = columns; j > 0; j--) {
            let div = document.createElement("div");

            div.addEventListener('mousedown', () => { clickStarted = true; makeRed(div) })
            div.addEventListener('mouseover', () => { if(clickStarted) makeRed(div) })

            div.classList.add('grid-item');
            gridContainer.append(div);
        } 
    }
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${columns}, 1fr)`;

}

function toggleRainbowMode(){
    if(isRainbowModeOn){
        rbButtonStatusIndicator.classList.remove("on");
        rbButtonStatusIndicator.classList.add("off");
        rbButtonStatusIndicator.textContent = "off";
    } else {
        rbButtonStatusIndicator.classList.remove("off");
        rbButtonStatusIndicator.classList.add("on");
        rbButtonStatusIndicator.textContent = "on";
    }
    isRainbowModeOn = !isRainbowModeOn;
}

function makeRed(clickedDiv){
    clickedDiv.classList.remove('red-bg');
    clickedDiv.style.removeProperty('background');
    
    if(isRainbowModeOn) {
        let randomColor = `rgb(${randomColorValue()},${randomColorValue()},${randomColorValue()})`;
        clickedDiv.style.background = `${randomColor}`;
    } else {
        clickedDiv.classList.add("red-bg");
    }
}

function randomColorValue(){
    return Math.floor(Math.random() * 256);
}


createGrid(16, 16);