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
            return "Rock";
            break;
        case 1:
            return "Scissors";
            break;
        default:
            return "Paper";
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
    return prompt("Please type either 'Rock', 'Paper', or 'Scissors' then press OK.");
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