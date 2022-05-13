let grid = document.querySelectorAll('.box'); // Grab grid elements
let gridArray = [   // Grid representing gamestate
    0,1,2,
    3,4,5,
    6,7,8
];

grid.forEach((box) => {
    box.addEventListener('click', () => {
        box.style.backgroundColor = 'rgb(77, 169, 169)';
    })
})

let gridPlacement = generateRandom();
placeNumbers();

function placeNumbers() {   // Place numbers randomly on grid
    for (let i = 0; i < gridPlacement.length; i++) {
        let numberedBox = document.getElementById(`${gridPlacement[i]}`);
        numberedBox.innerText = `${i + 1}`;
    }
}


function generateRandom() { // Generate random array to place numbers on grid
    let randomArray = [];
    for (let i = 0; i < Math.floor(gridArray.length/4); i++) {
        let randomNumber = Math.floor(Math.random() * gridArray.length);
        
        while (randomArray.includes(randomNumber) === true) {
            randomNumber = Math.floor(Math.random() * gridArray.length);
        }
        randomArray.push(randomNumber);
    }
    return randomArray;
}
