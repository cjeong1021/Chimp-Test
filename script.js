// Grab grid elements
let grid = document.querySelectorAll('.box'); 

// Grid representing gamestate
let gridArray = [   
    0,1,2,
    3,4,5,
    6,7,8
];

// Score Tracking variable
let score = 0;

document.body.addEventListener('click', () => {
    grid.forEach((box) => {
        box.innerText = "";
    })
})

let gridPlacement = generateRandom(); //setup board
let clicks = 0;
placeNumbers();

grid.forEach((box) => {
    box.addEventListener('click', checkClick)
    if (clicks > 0) {
        box.innerText = '';
    }
})

//Checks if box is clicked in correct order. Changes color on correct, alerts on incorrect
function checkClick(e) { 
    if (e.target.id == gridPlacement[clicks]) {
    e.target.style.backgroundColor = 'rgb(77, 169, 169)';
    } else {
        alert("you lose")
    }
    clicks++;
    e.target.removeEventListener('click', checkClick)
    if (clicks === gridPlacement.length) {
        console.log("you win");
        score++;
    }
}

// Place numbers randomly on grid
function placeNumbers() {   
    for (let i = 0; i < gridPlacement.length; i++) {
        let numberedBox = document.getElementById(`${gridPlacement[i]}`);
        numberedBox.innerText = `${i + 1}`;
    }
}

// Generate random array to place numbers on grid
function generateRandom() { 
    let randomArray = [];
    for (let i = 0; i < Math.floor(gridArray.length/3); i++) {
        let randomNumber = Math.floor(Math.random() * gridArray.length);
        
        while (randomArray.includes(randomNumber) === true) {
            randomNumber = Math.floor(Math.random() * gridArray.length);
        }
        randomArray.push(randomNumber);
    }
    return randomArray;
}
