let divContainer = document.getElementById('container');
let resetButton = document.getElementById("reset");

gridLength = 16;

let slider = document.getElementById("myRange");
let sliderOutput = document.getElementById("size");
sliderOutput.innerHTML = slider.value;

slider.oninput = function() {
    sliderOutput.innerHTML = this.value;
}

//function that generates 256 empty divs with class 'gridItem'
function createGrid(gridLength) {
    let gridSize = gridLength * gridLength;

    divContainer.style.gridTemplateRows = `repeat(${gridLength}, 40px)`;
    divContainer.style.gridTemplateColumns = `repeat(${gridLength}, 40px)`;

    for (let i = 0; i < gridSize; i++) {
        let squareDivs = document.createElement('div');
        squareDivs.className = "gridItem";
        divContainer.appendChild(squareDivs);

    //create function that will clear/reset the grid
        function clearGrid() {
            resetButton.addEventListener('click', e => {
                squareDivs.style.backgroundColor = "white";
            })
        }

        clearGrid();
    }
}

createGrid();

let selectedDiv = document.querySelector("div");
selectedDiv.addEventListener("mouseover", function(event) {
    event.target.classList.replace("gridItem", "hover");
});
