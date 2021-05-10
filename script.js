const container = document.getElementById("container");
document.getElementById("resetGrid").innerHTML = "Click to reset grid!";
makeRows(16, 16);
changeColor();
resetGrid();


function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);

        container.appendChild(cell).className = "grid-item";
    };
};

function changeColor () {
    var items = document.querySelectorAll(".grid-item");

    items.forEach(item => {
        item.addEventListener("mouseenter", function (event) {
            event.target.style.background = "teal";
        })
    })
}

function resetGrid () {
    var resetButton = document.querySelector("button");
    resetButton.addEventListener("click", () => resetColor());
}

function resetColor () {
    var grids = document.querySelectorAll(".grid-item");
    
    grids.forEach(grid => {
        grid.style.background = "white";
    } )
}

