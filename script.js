const divContainer = document.querySelector("#gridContainer");
let resetButton = document.getElementById("reset");

let gridLength = 16;

let slider = document.getElementById("myRange");
let sliderValue = document.getElementById("myRange").value;
let sliderOutput = document.getElementById("size");
sliderOutput.innerHTML = `${slider.value} x ${slider.value}`;

slider.oninput = function() {
    sliderOutput.innerHTML = this.value;
}





//function that generates 256 empty divs with class 'gridItem'
function createGrid(size) {
    
    divContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    divContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let gridSize = size * size;

    for (let i = 0; i < gridSize; i++) {
        let squareDivs = document.createElement("div");
        squareDivs.className = "gridItem";
        divContainer.appendChild(squareDivs);
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

createGrid(16);

slider.addEventListener("change", (e) => changeGrid(slider.value));


 //   let newSliderValue = document.getElementById("myRange").value;
  //  divContainer.innerHTML = "";
 //   divContainer.style.gridTemplateColumns = `repeat(${newSliderValue}, 1fr)`;
 //   divContainer.style.gridTemplateRows = `repeat(${newSliderValue}, 1fr)`;
    
    
 //   let gridSize = newSliderValue * newSliderValue;
 //   console.log(newSliderValue);

  //  for (let i = 0; i < gridSize; i++) {
 //       const squareDivs = document.createElement('div');
  //      squareDivs.className = "gridItem";
 //      divContainer.appendChild(squareDivs);

 //   console.log(sliderValue);
 //   };


// sliderValue.addEventListener("change", updateGrid());


    //take slider value and assign the value to gridLength
    
    
    //this for loop should be good and shouldnt need editing
 //   for (let i = 0; i < gridSize; i++) {
  //      let squareDivs = document.createElement('div');
  //      squareDivs.className = "gridItem";
  //      divContainer.appendChild(squareDivs);

    //create function that will clear/reset the grid
   //     function clearGrid() {
   //         resetButton.addEventListener('click', e => {
   //             squareDivs.style.backgroundColor = "white";
   //         })
    //    }

   //     clearGrid();
   // }
//}



// let selectedDiv = document.querySelector("div");
// selectedDiv.addEventListener("mouseover", function(event) {
 //   event.target.classList.replace("gridItem", "hover");
// });
