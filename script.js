// Select grid container and reset button and place into variables
const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");

// As soon as the webpage loads, run setDefaultGrid, enable event listener for button click
window.addEventListener("load", setDefaultGrid);
resetButton.addEventListener("click", changeSize);

// setDefaultGrid 
function setDefaultGrid() {
    setGridSize(16);
    fillGrid(16);
}

// Creates the grid columns, with the number of columns equal to size parameter
function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

// Creates N^2 divs within the grid created by setGridSize
// A maximum of N columns will be accepted until a new row is created
function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList = "grid-element";
        gridElement.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(gridElement);
    }
}

// Generates an RGB color using a random number between 0-1, multiplying by 256, and rounding down
function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

// Clears the grid completely, sets a new grid with the new size, fills the grid with the new size
function changeSize() {
    let newSize = prompt("Enter new size");

    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
            alert("Enter a number from 1-64 range");
            changeSize();
        } else {
            clearGrid();
            setGridSize(newSize);
            fillGrid(newSize);
        }
    }
}

// Clears the grid by removing all child elements from gridContainer
function clearGrid() {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
    });
}