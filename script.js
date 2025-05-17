
const colorSpaceContainer = document.querySelector(".container")
const labelElement = document.querySelector("#sizeLabel")


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

createDivs(50)

let gridSize = document.getElementById("gridSize")
gridSize.addEventListener("input", () => {
    createDivs(gridSize.value);
    
});

let isDrawing = false

document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);

colorSpaceContainer.addEventListener("mouseover", (div) => {
    if (isDrawing && div.target.classList.contains("colorSpace")) {
        div.target.style.backgroundColor = "black";
        div.target.style.opacity -= '-0.1';
    }
});

colorSpaceContainer.addEventListener("click", (div) => {
    if (div.target.classList.contains("colorSpace")) {
        div.target.style.backgroundColor = "black";
        div.target.style.opacity -= '-0.1';
        
    }
});


