// Grid representing gamestate
let gridArray = [   
    '00','01','02',
    '10','11','12',
    '20','21','22'
];

// Difficulty variable (difficulty = numbers generated)
let difficulty = 2;

// Score Tracking variable
let score = 0;

// Player Lives
let lives = 3;

// Grab div that will contain boxes
let gridContainer = document.querySelector('.grid');


// Create divs
expandBoard();

// Grab html elements
let grid = document.querySelectorAll('.box'); 
let scoreHTML = document.querySelector('#score');
let livesHTML = document.querySelector('#lives');

//Setup board
let gridPlacement = generateRandom(); 

let clicks = 0;
placeNumbers();

grid.forEach((box) => {
    box.addEventListener('click', checkClick)
})

//Checks if box is clicked in correct order. Changes color on correct, alerts on incorrect. Removes eventListers after click or after game ends. Proceeds to next level on correct answer.
function checkClick(e) { 
    grid.forEach((box) => {
        box.innerText = ""
    })
    
    e.target.removeEventListener('click', checkClick)
    
    if (e.target.id === `${gridPlacement[clicks]}`) {
        e.target.style.backgroundColor = 'rgb(77, 169, 169)';
        clicks++;
    } else {
        lives--;
        livesHTML.innerText = lives;
        if (lives < 0) {
            alert(`You Lose. Score: ${score}`)
            gameReset();
        } else {
            alert('Try Again')
            boardReset();
        }
    }
    

    if (clicks === gridPlacement.length) {
        console.log("you win");
        score++;
        scoreHTML.innerText = score;
        grid.forEach((box) => {
            box.removeEventListener('click', checkClick)
        })
        nextLevel();
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

// Expand board for next level based on difficulty variable
function expandBoard() {
    // Clear existing grid in HTML
    gridContainer.innerHTML = "";

    // If difficulty is multiple of 4, add one row and column to grid
    if (difficulty % 4 === 0) {
        for (let i = 0; i < Math.sqrt(gridArray.length) + 1; i++) {
            for (let j = 0; j < Math.sqrt(gridArray.length) + 1; j++) {
                let newBox = document.createElement('div');
                newBox.classList.add("box");
                newBox.id = `${i}${j}`;
                gridContainer.appendChild(newBox);
                console.log('bigger grid');
            }
        } 
        // Else, keep grid the same
    } else {
        for (let i = 0; i < Math.sqrt(gridArray.length); i++) {
            for (let j = 0; j < Math.sqrt(gridArray.length); j++) {
                let newBox = document.createElement('div');
                newBox.classList.add("box");
                newBox.id = `${i}${j}`;
                gridContainer.appendChild(newBox);
                console.log("same grid");
    }}
}

// Rebuild gridArray with new grid
gridArray = [];
let boxId = document.querySelectorAll('.box');
boxId.forEach((box) => {
    gridArray.push(box.id);
})

// Holds template for css grid
let gridTemplate = [];
gridContainer.style.gridTemplateRows = "";
gridContainer.style.gridTemplateColumns = "";

// gridTemplate to have the correct grid dimensions
for (let x = 0; x < Math.sqrt(gridArray.length); x++) {
    gridTemplate.push('80px');
}
console.log(gridTemplate);

// Change css grid to match grid dimensions
for (let z = 0; z < gridTemplate.length; z++) {
    gridContainer.style.gridTemplateRows += " 80px";
    gridContainer.style.gridTemplateColumns += " 80px";
}
}

// Reset board for next level
function nextLevel() {
    clicks = 0;
    difficulty++;
    expandBoard();
    grid = document.querySelectorAll('.box');
    gridPlacement = generateRandom();
    placeNumbers();
    grid.forEach((box) => {
        box.style.backgroundColor = "darkslategray"
        box.addEventListener('click', checkClick)
    })
}

// Reset board after incorrect answer
function boardReset() {
    clicks = 0;
    gridPlacement = generateRandom();
    placeNumbers();
    grid.forEach((box) => {
        box.style.backgroundColor = "darkslategray"
        box.addEventListener('click', checkClick)
    })
}

// Reset Game and reset variables
function gameReset() {
    score = 0;
    scoreHTML.innerText = score;
    lives = 3;
    livesHTML.innerText = lives;
    clicks = 0;
    difficulty = 2;
    gridArray = [   
        '00','01','02',
        '10','11','12',
        '20','21','22'
    ];
    expandBoard();
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
    for (let i = 0; i < difficulty; i++) {
        let randomNumberRow = Math.floor(Math.random() * Math.sqrt(gridArray.length));
        for (let j = 0; j < difficulty; j++) {
            let randomNumberColumn = Math.floor(Math.random() * Math.sqrt(gridArray.length));
        
        while (randomArray.includes(`${randomNumberRow}${randomNumberColumn}`) === true) {
            randomNumberRow = Math.floor(Math.random() * Math.sqrt(gridArray.length));
            randomNumberColumn = Math.floor(Math.random() * Math.sqrt(gridArray.length));

        }
        randomArray.push(`${randomNumberRow}${randomNumberColumn}`);
    }
    console.log(randomArray);
    return randomArray;
}}
