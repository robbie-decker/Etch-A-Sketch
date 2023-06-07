const grid = document.getElementById("grid");
const row = document.createElement("div")
const block = document.createElement("div");
const clear = document.getElementById("clear");

let sizeSelect = document.getElementById("size");

row.className = "row";
block.className = "block";
grid.addEventListener("mouseover", (e) => {
    if(e.target.className == "block"){
        e.target.style.backgroundColor = "red";
    }
});

sizeSelect.addEventListener("change", (e) => {
    size = sizeSelect.value;
    clearGrid();
    buildGrid(size);
});

clear.addEventListener("click", () => {
    clearGrid();
    buildGrid(size);
});

function buildGrid(size){
    for(let x = 0; x < size; x++){
        // cloneNode(true) allows us to have multiple of the same element be appended
        row.appendChild(block.cloneNode(true));
    }
    
    for(let y = 0; y < size; y++){
        grid.appendChild(row.cloneNode(true));
    }
}

function clearGrid(){
    grid.replaceChildren();
    row.replaceChildren();
}

size = sizeSelect.value;

buildGrid(size);