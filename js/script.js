/**
 * Determines the computer's hand selection using random number generation.
 * @returns {"rock"|"paper"|"scissors"} The computer's choice of hand, represented as a string.
 */
function getComputerChoice() {
    const randomChoiceNumber = Math.floor(3 * Math.random());
    switch (randomChoiceNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

/**
 * Obtains the player's hand selection using a visual prompt.
 * @returns {string | null} The player's choice of hand, represented as a string, or null, if the player cancels the prompt.
 */
function getHumanChoice() {
    return prompt("Please type either 'rock', 'paper', or 'scissors' then press OK.");
}

/**
 * Facilitates a game of Rock, Paper, Scissors consisting of five rounds, calculates the winner/tie, then displays the final results.
 */
function playGame() {
    // Keep track of both players' running scores across multiple rounds.
    let humanScore = 0;
    let computerScore = 0;

    /**
     * Facilitates a single round of Rock, Paper, Scissors, calculates the winner/tie, announces the result, then updates the scores.
     * The game of Rock, Paper, Scissors uses the following logic to determine a winner:
     * Rock wins vs. Scissors, Scissors wins vs. Paper, and Paper wins vs. Rock
     * @param {"rock" | "paper" | "scissors"} humanChoice 
     * @param {"rock" | "paper" | "scissors"} computerChoice 
     */
    const playRound = (humanChoice, computerChoice) => {
        humanChoice = String(humanChoice).toLowerCase();
        let roundResult;

        switch (humanChoice) {
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

        switch (roundResult) {
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

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    let resultString;
    if (humanScore > computerScore) {
        resultString = "Congratulations, you won the match!";
    } else if (computerScore > humanScore) {
        resultString = "Sadly, the computer won the match.";
    } else {
        resultString = "The match has ended in a tie!";
    }

    console.log(resultString);
    alert(resultString);
}

// Run the game on page load.
playGame();