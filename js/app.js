console.log('Rock Paper Scissors Game is on!');

// Cache elements
const scoreBoard_div = document.querySelector('.score-board');
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');

const result_h1 = document.getElementById('result');

const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');

// Set hands
let hands = {
  r: 'Rock',
  p: 'Paper',
  s: 'Scissors',
};

// Initialize the scores
let userScore = 0;
let compScore = 0;

const smUser = '(user)'.fontcolor('green').fontsize(3).sub();
const smComp = '(comp)'.fontcolor('orange').fontsize(3).sub();

function getCompHand() {
  const hands = ['r', 'p', 's'];
  const choice = Math.floor(Math.random() * 3);

  return hands[choice];
}

function win(user, comp) {
  const glow = document.getElementById(user);

  userScore_span.innerText = ++userScore;
  result_h1.innerHTML = `${hands[user]}${smUser} beats ${hands[comp]}${smComp}. You win!`;

  glow.classList.add('green-glow');
  setTimeout(() => glow.classList.remove('green-glow'), 1000);
}

function lose(user, comp) {
  const glow = document.getElementById(user);

  compScore_span.innerText = ++compScore;
  result_h1.innerHTML = `${hands[comp]}${smComp} beats ${hands[user]}${smUser}. You lose!`;

  glow.classList.add('red-glow');
  setTimeout(() => glow.classList.remove('red-glow'), 1000);
}

function draw(hand) {
  const glow = document.getElementById(hand);

  result_h1.innerHTML = `${hands[hand]} equals ${hands[hand]}. It's a draw.`;

  glow.classList.add('gray-glow');
  setTimeout(() => glow.classList.remove('gray-glow'), 1000);
}

function game(userHand) {
  const compHand = getCompHand();

  switch (userHand + compHand) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userHand, compHand);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userHand, compHand);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userHand);
      break;
  }
}

// Main
function main() {
  rock.addEventListener('click', () => game('r'));
  paper.addEventListener('click', () => game('p'));
  scissors.addEventListener('click', () => game('s'));
}

main();
