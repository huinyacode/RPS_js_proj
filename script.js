let a, choice, comp;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const HumanChoice = document.getElementById("player");
const computerChoice = document.getElementById("computer");
const result = document.getElementById("win");
const hu_count = document.getElementById("player_counter");
const co_count = document.getElementById("computer_counter");
function getConmputerChoice() {
    HumanChoice.textContent = choice;
    a = Math.round(Math.random() * 3);
    if (a == 1) {
        comp = "Rock";
    } else if (a == 2) {
        comp = "Paper";
    } else {
        comp = "Scissors";
    }
    computerChoice.textContent = comp;
    winner(choice,comp);
}
function winner(a, b) {
    let conf;
    let res;
    if (a == b) {
        res = "It's a tie. 🤮🤮🤮";
        conf = 0;
    } else if (
        (a == "Rock" && b == "Scissors") ||
        (a == "Paper" && b == "Rock") ||
        (a == "Scissors" && b == "Paper")
    ) {
        res = `🏆 Win, ${a} beats ${b}`;
        conf = 1
    } else {
        res = ` 👎 You, Losser 👆 `
        conf = -1
    }
    result.textContent = res;
    counter(conf);
}

function counter(a) {
    hc = parseInt(hu_count.textContent);
    cc = parseInt(co_count.textContent);
    if (a == 1) {
        hu_count.textContent = hc+1; 
    }else if (a == -1) {
        co_count.textContent = cc+1;
    };

}


rock.addEventListener('click', () => {choice ="Rock"; getConmputerChoice()});
paper.addEventListener('click', () => { choice = "Paper"; getConmputerChoice()});
scissors.addEventListener('click', () => {choice = "Scissors"; getConmputerChoice()});
 