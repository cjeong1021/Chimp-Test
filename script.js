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