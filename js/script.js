/**
 * Facilitates a game of Rock, Paper, Scissors consisting of five rounds, calculates the winner/tie, then displays the final results.
 */
function playGame() {
    // Keep track of both players' running scores across multiple rounds.
    let humanScore = 0;
    let computerScore = 0;

    // Preemptively query the elements that the code will regularly interact with.
    const handButtons = document.querySelectorAll("button");
    const roundResults = document.querySelector("#roundResults");
    const scoreSpan = document.querySelector("#scoreSpan");

    // Start a round by clicking one of the three hand buttons.
    handButtons.forEach(button => button.addEventListener("click", playRound));

    /**
     * Determines the computer's hand selection using random number generation.
     * @returns {"Rock"|"Paper"|"Scissors"} The computer's choice of hand, represented as a string.
     */
    function getComputerChoice() {
        const randomChoiceNumber = Math.floor(3 * Math.random());
        switch (randomChoiceNumber) {
            case 0:
                return "Rock";
            case 1:
                return "Paper";
            default:
                return "Scissors";
        }
    }

    /**
     * Adds a new entry to the list of round results, then updates the scores.
     * @param {string} roundResultText Description of the hands thrown and round result
     */
    function registerRoundResults(roundResultText) {
        const newResult = document.createElement("p");
        newResult.textContent = roundResultText;
        roundResults.prepend(newResult);

        updateScoreDisplay();
    }

    /**
     * Refreshes the player and computer scores so they contain up to date results.
     */
    function updateScoreDisplay() {
        scoreSpan.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    }

    /**
     * Removes the buttons to avoid further rounds being played, then announces the final winner and entices the player to restart.
     * @param {string} gameResultText Details of the game winner and instructions to restart
     */
    function endGame(gameResultText) {
        const scoreLabel = document.querySelector("#scoreLabel");
        const gameResult = document.querySelector("#gameResult");

        handButtons.forEach(button => button.remove());

        gameResult.style.fontWeight = "bold";
        gameResult.textContent = gameResultText;

        scoreLabel.textContent = "Final Score";
    }

    /**
     * Starts a single round of Rock, Paper, Scissors, beginning with the player choice, 
     * then calculates the winner/tie, announces the result, and updates the scores.
     * If either player reaches a score of five points, then the game is concluded.
     * The game of Rock, Paper, Scissors uses the following logic to determine a winner:
     * Rock wins vs. Scissors, Scissors wins vs. Paper, and Paper wins vs. Rock
     * @param {PointerEvent} event A click event from the human player clicking one of the three buttons
     */
    function playRound(event) {
        const computerChoice = getComputerChoice();
        const humanChoice = event.currentTarget.textContent;
        let roundResult;

        switch (humanChoice) {
            case "Rock":
                if (computerChoice === "Scissors") roundResult = "humanWin";
                else if (computerChoice === "Paper") roundResult = "humanLoss";
                break;

            case "Paper":
                if (computerChoice === "Rock") roundResult = "humanWin";
                else if (computerChoice === "Scissors") roundResult = "humanLoss";
                break;

            case "Scissors":
                if (computerChoice === "Paper") roundResult = "humanWin";
                else if (computerChoice === "Rock") roundResult = "humanLoss";
                break;
        }

        switch (roundResult) {
            case "humanWin":
                humanScore++;
                registerRoundResults(`You win! ${humanChoice} beats ${computerChoice.toLowerCase()}`);
                break;
            case "humanLoss":
                computerScore++;
                registerRoundResults(`You lose! ${computerChoice} beats ${humanChoice.toLowerCase()}`);
                break;
            default:
                registerRoundResults(`It's a tie! ${humanChoice} ties ${computerChoice.toLowerCase()}`);
        }

        if (humanScore === 5) {
            endGame("Congratulations, you won the match! Refresh the page for a rematch!");
        } else if (computerScore === 5) {
            endGame("Sadly, the computer won the match. Refresh the page to seek your revenge!");
        }
    }
}

// Run the game on page load.
playGame();