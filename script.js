const grid = document.getElementById("grid");
const row = document.createElement("div")
const block = document.createElement("div");

row.className = "row";
block.className = "block";
grid.addEventListener("mouseover", (e) => {
    if(e.target.className == "block"){
        e.target.style.backgroundColor = "red";
        console.log(e);
    }
});


const test = document.getElementById("test");
test.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red";
    console.log(e);
});



sizeX = 8;
sizeY = 8;

for(let x = 0; x < sizeX; x++){
    // cloneNode(true) allows us to have multiple of the same element be appended
    row.appendChild(block.cloneNode(true));
}

for(let y = 0; y < sizeY; y++){
    grid.appendChild(row.cloneNode(true));
}

