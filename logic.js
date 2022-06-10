const rangeSlider = document.getElementById("rangeSlider");
const output = document.getElementById("demo");
output.innerHTML = rangeSlider.value;
const container = document.getElementById("container");
const height = container.clientHeight;
const width = container.clientWidth;
const clearGrid = document.getElementById("clearGrid");
let   rowAndCol = 16;
let cellWidth = (width / rowAndCol) - 2;
let cellHeight = (height / rowAndCol) - 2;
const rainbowColor = document.getElementById("rainbowColor");


/* CREATION */

function makeRows(rows, cols, cellHeight, cellWidth) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    
    cell.style.height = `${cellHeight}px`
    cell.style.width = `${cellWidth}px`
    
    container.appendChild(cell).id = "griditem";
    
  };
};

makeRows(rowAndCol, rowAndCol,cellHeight, cellWidth);
let gridItem = document.querySelectorAll('#griditem')
colorBlack();

rainbowColor.addEventListener('click', () => {
    if (rainbowColor.style.backgroundColor != '') {
        rainbowColor.style.backgroundColor =  '';
        colorBlack();
    }
    else {
        makeRainbow();
        rainbowColor.style.backgroundColor = '#47B5FF'
    }
});

clearGrid.addEventListener('click', clearGrid1)
/* DELETION */

function deleteRows() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}



rangeSlider.oninput = function() {
    output.innerHTML = this.value;
    rowAndCol = this.value;
    let cellWidth = (width / rowAndCol) - 2;
    let cellHeight = (height / rowAndCol) - 2;
    console.log(cellHeight)
    clearGrid1();
    deleteRows();
    makeRows(rowAndCol, rowAndCol, cellHeight, cellWidth)
    gridItem = document.querySelectorAll('#griditem')
    colorBlack();
    
}



/* COLORS */
function colorBlack() { 
    gridItem.forEach(gridItem =>
        gridItem.addEventListener('mouseover', () => 
            gridItem.style.backgroundColor = '#000000'))
};


function getRandomColor() {
    const availableCharacters = '0123456789ABCDEF';
    const availableCharactersLength = availableCharacters.length;
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += availableCharacters[Math.floor(Math.random() * availableCharactersLength)];
    }

    return color;
}



function randomColor(getRandomColor) {
    gridItem.forEach(gridItem => 
        gridItem.addEventListener('mouseover', () =>
            gridItem.style.backgroundColor = getRandomColor()));
        
};





function makeRainbow() {
    randomColor(getRandomColor);
}


function clearGrid1() {
    gridItem.forEach(gridItem => gridItem.style.backgroundColor = '#ddd')
}

