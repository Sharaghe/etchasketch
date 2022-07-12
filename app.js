const gridContainer = document.querySelector('.main-grid');

function createGrid(rows, columns){

    for (let i = rows; i > 0; i--) {
        for (let j = columns; j > 0; j--) {
            let div = document.createElement("div");
            div.classList.add('grid-item');
            gridContainer.append(div);
        } 
    }
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${columns}, 1fr)`;

}

createGrid(16, 16);