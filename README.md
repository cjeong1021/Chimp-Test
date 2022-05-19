#### Chimp Test

The Chimp Test is a memory game where the user must memorize a sequence of numbers on a grid and click them in the correct order. As the user progresses, the sequence and the grid will get larger, making it more difficult to memorize the whole sequence. 

![Image 1](/screenshots/image1.png "Start Game")
![Image 2](/screenshots/image2.png "Harder Level")

### Technologies Used

- HTML
- CSS
- Javascript
- Canvas
- Anime JS Library

### Installation instructions

Simply clone the repo and the app should be able to run from the index.html in the browser. 

### User Stories

Potential users that might use this app are those that want to pass the time or have a friendly competition with friends. The game can be played for as long as a user wants and is quickly restarted. The app keeps track of score so users can have small competition with friends to see who can get the highest score.

### Wireframes

The wireframes for this app were quite simple, since the user interaction is basically related to the game. The most important aspects to wireframe were the play grid, header and other important information (lives, score, etc.) 

![Wireframe 1](/screenshots/wireframe1.png "Start Game")
![Wireframe 2](/screenshots/wireframe2.png "Harder Level")
![Wireframe 3](/screenshots/wireframe3.png "Harder Level after click")


### Major Hurdles

The biggest hurdles were getting the eventlisteners to work consistently and to make the grid bigger as the game progressed. The MVP started out as a simple 3x3 grid that made it easy to keep track of all the event listeners and functions that needed to run on user interaction. Once the grid began to increase in size, this became unmanageable.

The way this issue was solved was to automate the creation of the grid from the very beginning, so that as levels progressed, the function that created the grid and added event listeners could make a bigger grid by changing some variables (difficulty, gridArray variables). 

### Credits

Credits to Leo Rodriguez and Gregorio Moreta for all their help for this project.

Full credit for the app animations goes to Alex Zaworski. 
[Animation](https://codepen.io/alexzaworski/pen/mEZvrG?editors=1010)
