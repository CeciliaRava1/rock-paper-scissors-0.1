// Score board
let userScore = 0;
let compScore = 0;

//DOM variables. To control this elements by Js
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const container_p = document.querySelector('.container-p');
const container_user_message = document.querySelector('.container-user-message');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');


//Obtain computer choice to give it to the 'game' function
function getCompChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

//Functions to define what to do with the game result
function win(userChoice, compChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    container_user_message.innerHTML = `${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)} beats ${compChoice}. You win! 😄`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 400);
}

function lose(userChoice, compChoice){
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    container_user_message.innerHTML = `${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)} loses to ${compChoice}. You lost 😪 `;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 400);
}

function draw(userChoice, compChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    container_user_message.innerHTML = `${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)} equals ${compChoice}. It's a draw 😴`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() {userChoice_div.classList.remove('gray-glow')}, 400);
}

//Control what happen's when user pushes an option button
function game(userChoice){
    const compChoice = getCompChoice();
    switch (userChoice + compChoice){
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, compChoice);
            break;

        case 'scissorsrock':
        case 'rockpaper':
        case 'paperrock':
            lose(userChoice, compChoice);
            break;

        case 'rockrock':
        case 'paperpaper':
        case ' scissorsscissors':
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game('rock');
    })
    paper_div.addEventListener('click', function() {
        game('paper');
    })
    scissors_div.addEventListener('click', function() {
        game('scissors');
    })
}
main();