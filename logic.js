//const height = container.clientHeigth;
//const width = container.clientWidth;

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

function makeRows(rows, cols, cellHeight, cellWidth) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    //cell.innerText = (i + 1);
    cell.style.height = `${cellHeight}px`
    cell.style.width = `${cellWidth}px`
    
    container.appendChild(cell).id = "griditem";
    
  };
};

makeRows(rowAndCol, rowAndCol,cellHeight, cellWidth);
function deleteRows() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

let gridItem = document.querySelectorAll('#griditem')
color();
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
    color();
    
}

    clearGrid.addEventListener('click', clearGrid1)

function color() { 
    gridItem.forEach(gridItem =>
    gridItem.addEventListener('mouseover', () => gridItem.classList.add('active')
))};

function clearGrid1() {
    gridItem.forEach(gridItem => gridItem.classList.remove('active'))
}

