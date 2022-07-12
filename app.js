const gridContainer = document.querySelector('.main-grid');
const dimensionButton = document.querySelector('.change-dimensions');
let dimensions;

let clickStarted = false;

window.addEventListener('mouseup', () => clickStarted = false);
dimensionButton.addEventListener('click', changeDimensions);

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

function makeRed(clickedDiv){
    clickedDiv.classList.add("red-bg");
}


createGrid(16, 16);