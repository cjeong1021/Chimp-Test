// Grab html elements
let grid = document.querySelectorAll('.box'); 
let scoreHTML = document.querySelector('#score')

// Grid representing gamestate
let gridArray = [   
    0,1,2,
    3,4,5,
    6,7,8
];

// Score Tracking variable
let score = 0;


let gridPlacement = generateRandom(); //setup board
let clicks = 0;
placeNumbers();

grid.forEach((box) => {
    box.addEventListener('click', checkClick)
})

//Checks if box is clicked in correct order. Changes color on correct, alerts on incorrect. Removes eventListers after click or after game ends.
function checkClick(e) { 
    grid.forEach((box) => {
        box.innerText = ""
    })
    
    e.target.removeEventListener('click', checkClick)
    
    if (e.target.id === `${gridPlacement[clicks]}`) {
        e.target.style.backgroundColor = 'rgb(77, 169, 169)';
        clicks++;
    } else {
        gameReset()
        alert("you lose")
    }
    

    if (clicks === gridPlacement.length) {
        console.log("you win");
        score++;
        scoreHTML.innerText = score;
        grid.forEach((box) => {
            box.removeEventListener('click', checkClick)
        })
    }

    
}

// Place numbers randomly on grid
function placeNumbers() {   
    for (let i = 0; i < gridPlacement.length; i++) {
        console.log(i);
        let numberedBox = document.getElementById(`${gridPlacement[i]}`);
        numberedBox.innerText = `${i + 1}`;
    }
}

// Reset Game and reset variables
function gameReset() {
    score = 0;
    clicks = 0;
    gridPlacement = generateRandom();
    placeNumbers();
    grid.forEach((box) => {
        box.style.backgroundColor = "darkslategray"
        box.addEventListener('click', checkClick)
    })
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
    console.log(randomArray);
    return randomArray;
}
