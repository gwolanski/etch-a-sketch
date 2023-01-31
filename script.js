let divContainer = document.getElementById('container');

//function that generates 256 empty divs with class 'sketch'
function generateDivs() {
    let numberOfDivs = 256
    
    for (let i = 0; i < numberOfDivs; i++) {
        let squareDivs = document.createElement('div');
        squareDivs.className = "gridItem";
        divContainer.appendChild(squareDivs);
    }
}

generateDivs();