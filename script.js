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

function generateRandom() { // Generate random array to place numbers on grid
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
