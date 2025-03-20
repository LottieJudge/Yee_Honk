## Yee Honk 

A cowboy-themed duck game where users interact with a moving cowboy hat using their mouse clicks, built using Jquery and Redux. The game lets users toggle the movement of the cowboy hat based on the state of the game.
Features

The cowboy hat moves from left to right across the screen, continuously bouncing back and forth.
The animation can be paused or resumed by clicking anywhere on the screen.

Have a go, Cowgirl - Yee Honk Demo: https://cactusballs.github.io/Yee-Honk-2.0/](https://lottiejudge.github.io/Yee-Honk-2.0/

## How It Works

Animation – The cowboy hat moves left and right using jQuery animations.
State Management – The isPaused state controls whether the animation is paused or playing, managed by Redux.
Mouse Click Interaction – Clicking anywhere on the screen toggles the animation's pause/play state.
Tech Stack

## Tech Stack
HTML: Structure and semantics for the page.
CSS: Styling and layout using custom styles (stylesheet.css).
JavaScrip: Main programming language for functionality.
React: To build the interactive interface and manage UI state.
Redux: For managing the game state (paused or playing).
jQuery: Used for handling animations and DOM manipulation.

## Installation

Clone the repository:
git clone git@github.com:lottieJudge/Yee-Honk-2.0.git
Install the dependencies:
npm install
Start the development server:
npm run dev
Open the project in your browser at http://localhost:3000.
The finished site: https://cactusballs.github.io/Yee-Honk-2.0/


### To do 
- [ ] **Add hat placement detection**  
  - [ ] Detect when the cowboy hat overlaps with Yee Honk's head.  
  - [ ] Use position comparison to trigger recognition.  

- [ ] **Trigger celebration on hat placement**  
  - [ ] Create a visual celebration effect.  
  - [ ] Add sound effects for the celebration.  
  - [ ] Display a success animation.  

- [ ] **Implement state for scoring**  
  - [ ] Initialise a score variable in the Redux state.  
  - [ ] Increment the score each time the cowboy hat is placed successfully.  
  - [ ] Display the current score on the screen.  
  - [ ] Save the highest score in local storage.  
