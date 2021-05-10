const container = document.getElementById("container");
document.getElementById("resetGrid").innerHTML = "Click to set grid!";
// makeRows(16, 16);
// changeColor();
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

function changeColor(color) {
    var items = document.querySelectorAll(".grid-item");

    items.forEach(item => {
        item.addEventListener("mouseenter", function (event) {
            event.target.style.background = random_rgba();
        })
    })
}

function resetGrid() {
    var resetButton = document.querySelector("button");
    resetButton.addEventListener("click", () => resetColor());
}

function resetColor() {
    var grids = document.querySelectorAll(".grid-item");

    grids.forEach(grid => {
        grid.style.background = "white";
    })

    askUserForGrid();
}

function askUserForGrid() {
    let n = prompt("Please enter the number of sqaures per side of the grid: ");
    if (n <= 20) {
        makeRows(n, n);
        changeColor();
    } else {
        alert("The max value is 100");
    }

}

function random_rgba() {
    var o = Math.round,
        r = Math.random,
        s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}