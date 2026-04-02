/**
 * This game will be played against the computer. Its choice will be randomly selected between "rock", "paper", and "scissors".
 * To facilitate this, let's make a function that takes no inputs and returns one of the three strings.
 * 
 * WHEN THIS FUNCTION IS CALLED
 * GET A NUMBER AT RANDOM BETWEEN 0 AND 2
 * MATCH THAT NUMBER TO ROCK, PAPER, and SCISSORS
 * RETURN THAT WORD
 */

function getComputerChoice() {
    const randomChoiceNumber = Math.floor(3 * Math.random());
    switch (randomChoiceNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        default:
            return "scissors";
    }
}

/**
 * This game will be played by a human. They should be allowed to make their choice manually, using a prompt.
 * Their choices must be limited to the same as those the computer can make.
 * To facilitate this, let's make a function that takes no inputs, renders an input dialog, and returns the selection.
 * 
 * WHEN THIS FUNCTION IS CALLED
 * PRESENT THE USER WITH A VISUAL PROMPT TO ENTER ONE OF THE THREE OPTIONS
 * RETURN THE USER'S WORD
 */

function getHumanChoice() {
    return prompt("Please type either 'rock', 'paper', or 'scissors' then press OK.");
}

/**
 * We'll need to keep track of the players' running scores, across multiple rounds.
 * To facilitate this, let's set up two variables, one for each player.
 * 
 * TRACK COMPUTER SCORE, STARTING AT 0
 * TRACK HUMAN SCORE, STARTING AT 0
 */

let humanScore = 0;
let computerScore = 0;

/**
 * The game of rock, paper, and scissors revolves around a comparison of players' choices.
 * Matching hands results in a tie, while differing hands have to follow this logic:
 * Rock wins vs. Scissors
 * Scissors wins vs. Paper
 * Paper wins vs. Rock
 * 
 * WHEN THIS FUNCTION IS CALLED WITH A COMPUTER CHOICE AND HUMAN CHOICE
 * NORMALIZE THE CAPITALIZATION OF THE HUMAN CHOICE
 * CALCULATE THE OUTCOME OF THE ROUND
 * LOG THE ROUND RESULT IN THE CONSOLE
 * UPDATE THE SCORES IF THE RESULT ISN'T A TIE
 */

function playRound(humanChoice, computerChoice){
    humanChoice = String(humanChoice).toLowerCase();
    let roundResult;

    switch (humanChoice){
        case "rock":
            if (computerChoice === "scissors") roundResult = "humanWin";
            else if (computerChoice === "paper") roundResult = "humanLoss";
            break;

        case "paper":
            if (computerChoice === "rock") roundResult = "humanWin";
            else if (computerChoice === "scissors") roundResult = "humanLoss";
            break;

        case "scissors":
            if (computerChoice === "paper") roundResult = "humanWin";
            else if (computerChoice === "rock") roundResult = "humanLoss";
            break;
    }

    switch (roundResult){
        case "humanWin":
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            break;
        case "humanLoss":
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            break;
        default:
            console.log(`It's a tie! ${humanChoice} ties ${computerChoice}`);
    }
}