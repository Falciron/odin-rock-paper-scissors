/**
 * This game will be played against the computer. Its choice will be randomly selected between "rock", "paper", and "scissors".
 * To facilitate this, let's make a function that takes no inputs and returns one of the three strings.
 * 
 * WHEN THIS FUNCTION IS CALLED
 * GET A NUMBER AT RANDOM BETWEEN 0 AND 2
 * MATCH THAT NUMBER TO ROCK, PAPER, and SCISSORS
 * RETURN THAT WORD
 */

function getComputerChoice(){
    const randomChoiceNumber = Math.floor(3 * Math.random());
    switch (randomChoiceNumber){
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