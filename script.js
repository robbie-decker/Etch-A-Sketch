const grid = document.getElementById("grid");
const row = document.createElement("div")
const block = document.createElement("div");
const clear = document.getElementById("clear");
const etch_a_sketch = document.getElementById("etch-a-sketch");


let sizeSelect = document.getElementById("size");
let colorSelect = document.querySelector('input[type="color"]');
let rainbowToggle = document.querySelector('input[type="checkbox"]')

row.className = "row";
block.className = "block";
size = sizeSelect.value;

buildGrid(size);

let color;
grid.addEventListener("mouseover", (e) => {
    if(e.target.className == "block blockTransition"){
        e.target.classList.remove("blockTransition");
    }
    if(e.target.className == "block"){
        if(rainbowToggle.checked){
            color = generateRainbowColor();
            e.target.style.backgroundColor = color;
        }
        else{
            color = colorSelect.value;
            e.target.style.backgroundColor = color;
        }
    }
});

sizeSelect.addEventListener("change", (e) => {
    size = sizeSelect.value;
    removeGrid();
    buildGrid(size);
});

const gridShake = {
        'marginLeft' : ["0px", "-10px", "10px", "-20px", "20px", "-20px", "20px", "-20px", "20px", "0px"],
    };
    
const gridTiming = {
    duration: 1000,
    easing: "ease-in-out",
    iterations: 1,
};

// Make the grid shake when click is clicked
clear.addEventListener("click", () => {
    etch_a_sketch.animate(gridShake, gridTiming);
    clearGrid();
});


// Edit existing grid elements to be white
function clearGrid(){
    for(myRow of grid.children){
        for(element of myRow.children){
            element.classList.add("blockTransition");
            element.style.backgroundColor = "white";
        }
    }   
}

function buildGrid(size){
    for(let x = 0; x < size; x++){
        // cloneNode(true) allows us to have multiple of the same element be appended
        row.appendChild(block.cloneNode(true));
    }
    
    for(let y = 0; y < size; y++){
        grid.appendChild(row.cloneNode(true));
    }
}


// Remove elements attached to grid
function removeGrid(){
    grid.replaceChildren();
    row.replaceChildren();
}

function generateRainbowColor(){
    return `rgb(${generateRandomInteger(257)}, ${generateRandomInteger(257)}, ${generateRandomInteger(257)}`
}

// Generate a number between 0 and max
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max);
}