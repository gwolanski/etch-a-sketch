const divContainer = document.getElementById("gridContainer");

let gridLength = 16;
let color = "black";
let coloringEnabled = false;
let drawingStatus = document.querySelector("#drawingStatus");
drawingStatus.textContent = "Drawing: Off";

let slider = document.getElementById("myRange");
let sliderValue = document.getElementById("myRange").value;
let sliderOutput = document.getElementById("size");

sliderOutput.innerHTML = `Grid Size: ${slider.value} x ${slider.value}`;
slider.addEventListener("change", (e) => changeGrid(slider.value));
slider.oninput = function() {
        sliderOutput.innerHTML = `Grid Size: ${this.value} x ${this.value}`;
}

function createGrid(size) {
    divContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    divContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let gridSize = size * size;

    for (let i = 0; i < gridSize; i++) {
        let squareDiv = document.createElement("div");
        squareDiv.className = "gridItem";
        squareDiv.addEventListener("mouseover", colorDiv);
        divContainer.appendChild(squareDiv);

        squareDiv.addEventListener("click", toggleDrawing);
        
    }

}

function reloadGrid(size) {
    divContainer.innerHTML = "";
    createGrid(size);
}


function changeGrid(size) {
    gridLength = size;
    reloadGrid(gridLength);
}

function colorDiv() {
    if (coloringEnabled) {
        if (color == 'rainbow') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else {
            this.style.backgroundColor = "black";
        }
    } 
}

function setColor(colorChoice) {
    color = colorChoice;
}

function toggleDrawing() {
    

    if (coloringEnabled) {
        coloringEnabled = false;
        drawingStatus.innerHTML = "Drawing: Off";

    } else {
        coloringEnabled = true;
        drawingStatus.innerHTML = "Drawing: On";
    }
}

let resetButton = document.getElementById("resetbtn");
resetButton.addEventListener('click', e => {
    let squareDiv = document.querySelectorAll(".gridItem");
    squareDiv.forEach(function(square) {
        square.style.backgroundColor = "seashell";
    });
});

let blackButton = document.getElementById("blackbtn");
blackButton.addEventListener('click', e => {
    color = "black";
});


createGrid(16);

//create a function that stops/starts drawing when user clicks on one of the divs