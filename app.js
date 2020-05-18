const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

let userScore = 0;
let computerScore = 0;
const smallUserWord = 'user'.fontsize(3).sub();
const smallCompWord = 'comp'.fontsize(3).sub();

function getUserChoiceDiv(userChoice){
    return document.getElementById(userChoice);
}

function convertToWord(letter){
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors';
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
    getUserChoiceDiv(userChoice).classList.add('green-glow');
    setTimeout(() => getUserChoiceDiv(userChoice).classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} losses to ${convertToWord(computerChoice)}${smallCompWord}. You Lose`;
    getUserChoiceDiv(userChoice).classList.add('red-glow');
    setTimeout(() => getUserChoiceDiv(userChoice).classList.remove('red-glow'), 500);

}

function tie(userChoice, computerChoice){
    result_div.innerHTML = 'Tie';
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => getUserChoiceDiv(userChoice).classList.remove('gray-glow'), 500);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case 'rs':
        case 'sp':
        case 'pr':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            tie(userChoice, computerChoice);
            break;
    }
}


function getComputerChoice() {
    const options = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}



function main() {
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click',() => game('p'));
    scissors_div.addEventListener('click', () => game('s'));

}

main();
