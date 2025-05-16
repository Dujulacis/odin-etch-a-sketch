
const colorSpaceContainer = document.querySelector(".container")


function createDivs(n){
    var size = 800/n + "px"
    for (let i=0; i<n*n; i++){
        const colorSpaceDiv = document.createElement("div")
        colorSpaceDiv.className = "colorSpace"
        colorSpaceDiv.style.height = size;
        colorSpaceDiv.style.width = size;
        colorSpaceContainer.appendChild(colorSpaceDiv)
    }
}

createDivs(100)
