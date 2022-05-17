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
let restartButton = document.querySelector('.restart');

// Modal Elements
const modal = document.getElementById('modal');
const close = document.getElementById('close');


// Show/Hide modal functions
const openModal = () => {
    modal.style.display = 'block';
}

const closeModal = () => {
    modal.style.display = 'none'
}

close.addEventListener('click', closeModal);
document.body.addEventListener('click', startTimer)

// Restart button resets game board
restartButton.addEventListener('click', gameReset);

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
        if (lives === 0) {
            let scoreResult = document.querySelector('.final-score');
            scoreResult.innerText = score;
            openModal();
            gameReset();
        } else {
            boardReset();
        }
    }
    

    if (clicks === gridPlacement.length) {
        console.log("you win");
        score += Math.max(0, 60 - Math.floor((timer / 1000).toFixed(1))) * 1; //timer based scoring logic
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
    timer = 0;
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
    timer = 0;
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
    timer = 0;
    difficulty = 2;
    gridArray = [   
        '00','01','02',
        '10','11','12',
        '20','21','22'
    ];
    expandBoard();
    grid = document.querySelectorAll('.box');
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

// Timer logic
let running = false;
let timer = 0;
let lastTime = Date.now();
let timeOutput = document.querySelector('#timer');

const tick = () => {
    const now = Date.now();
    const delta = now - lastTime;
    lastTime = now;

    if (running) {
        timer += delta;
        timeOutput.textContent = (timer / 1000).toFixed(1) + 's';
      }

    requestAnimationFrame(tick);
}


function startTimer() {
    running = !running;
    document.body.removeEventListener('click', startTimer)
}
tick();