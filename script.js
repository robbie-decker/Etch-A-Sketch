const grid = document.getElementById("grid");
const row = document.createElement("div")
const block = document.createElement("div");
const clear = document.getElementById("clear");


row.className = "row";
block.className = "block";
grid.addEventListener("mouseover", (e) => {
    if(e.target.className == "block"){
        e.target.style.backgroundColor = "red";
    }
});

const test = document.getElementById("test");
test.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red";
});


clear.addEventListener("click", () => {
    clearGrid();
    buildGrid(sizeX, sizeY);
});



function buildGrid(sizeX, sizeY){
    for(let x = 0; x < sizeX; x++){
        // cloneNode(true) allows us to have multiple of the same element be appended
        row.appendChild(block.cloneNode(true));
    }
    
    for(let y = 0; y < sizeY; y++){
        grid.appendChild(row.cloneNode(true));
    }
}

function clearGrid(){
    grid.replaceChildren();
    row.replaceChildren();
}


sizeY = 8;
sizeX = 8;

buildGrid(sizeX, sizeY);