
const colorSpaceContainer = document.querySelector(".container")
const labelElement = document.querySelector("#sizeLabel")

// Creates equally sized divs, that are appropriately scaled depending on the grid size
function createDivs(n){
    colorSpaceContainer.innerHTML = ''
    labelElement.textContent = (`Grid size (${n}^2)`)
    let size = 800/n + "px"
    for (let i=0; i<n*n; i++){
        const colorSpaceDiv = document.createElement("div")
        colorSpaceDiv.className = "colorSpace"
        colorSpaceDiv.style.height = size;
        colorSpaceDiv.style.width = size;
        colorSpaceContainer.appendChild(colorSpaceDiv)
    }
    
}
// Default grid initialization
createDivs(50)

// Reads input from the slider
let gridSize = document.getElementById("gridSize")
gridSize.addEventListener("input", () => {
    createDivs(gridSize.value);
    
});

// Check if mouse is held down
let isDrawing = false
document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);

colorSpaceContainer.addEventListener("mouseover", (div) => {
    if (isDrawing && div.target.classList.contains("colorSpace")) {
        div.target.style.backgroundColor = "black";
        div.target.style.opacity -= '-0.1';
    }
});

// Also allows just clicking the element
colorSpaceContainer.addEventListener("click", (div) => {
    if (div.target.classList.contains("colorSpace")) {
        div.target.style.backgroundColor = "black";
        div.target.style.opacity -= '-0.1';
        
    }
});

// Prevents the container elements from being dragged, that would interrupt drawing
colorSpaceContainer.addEventListener("dragstart", (div) => {
    div.preventDefault();
});



