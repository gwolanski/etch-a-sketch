const divContainer = document.getElementById("gridContainer");

let gridLength = 16;

let slider = document.getElementById("myRange");
let sliderValue = document.getElementById("myRange").value;
let sliderOutput = document.getElementById("size");

sliderOutput.innerHTML = `${slider.value} x ${slider.value}`;
slider.addEventListener("change", (e) => changeGrid(slider.value));
slider.oninput = function() {
        sliderOutput.innerHTML = `${this.value} x ${this.value}`;
}

function createGrid(size) {
    divContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    divContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let gridSize = size * size;

    for (let i = 0; i < gridSize; i++) {
        let squareDiv = document.createElement("div");
        squareDiv.className = "gridItem";
        squareDiv.addEventListener("mouseover", function () {
            squareDiv.style.backgroundColor = "grey";
        });
        divContainer.appendChild(squareDiv);
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

let resetButton = document.getElementById("reset");
resetButton.addEventListener('click', e => {
    let squareDiv = document.querySelectorAll(".gridItem");
    squareDiv.forEach(function(square) {
        square.style.backgroundColor = "white"
    });
});

createGrid(16);

   
let selectedDiv = document.querySelectorAll(".gridItem");
//for (i=0; i < selectedDiv.length; i++) {
  //  selectedDiv[i].addEventListener("mouseover", function () {
    //    this.style.backgroundColor = "black";
   // })
// }



    //create function that will clear/reset the grid
   //     function clearGrid() {
   //         resetButton.addEventListener('click', e => {
   //             squareDivs.style.backgroundColor = "white";
   //         })
    //    }

   //     clearGrid();
   // }
//}



