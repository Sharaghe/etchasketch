const gridContainer = document.querySelector('.main-grid');
let clickStarted = false;

function createGrid(rows, columns){

    for (let i = rows; i > 0; i--) {
        for (let j = columns; j > 0; j--) {
            let div = document.createElement("div");

            div.addEventListener('mousedown', () => { clickStarted = true; makeRed(div) })
            div.addEventListener('mouseup', () => clickStarted = false)
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