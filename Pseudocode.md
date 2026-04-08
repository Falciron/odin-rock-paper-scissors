*Within the Odin Project's Problem Solving course, we have been taught about the three steps of problem solving: Understanding, planning, and dividing & conquering. The first two stages involve rewriting the problem statement in plain English, then later in pseudocode. I previously had both in my script.js file, but a project member wisely guided me to move them into their own file for readability. Enjoy reading!*

## getComputerChoice()

### Plain English:

This game will be played against the computer. Its choice will be randomly selected between "rock", "paper", and "scissors". To facilitate this, let's make a function that takes no inputs and returns one of the three strings.

### Pseudocode:
```
1. WHEN THIS FUNCTION IS CALLED
2. GET A NUMBER AT RANDOM BETWEEN 0 AND 2
3. MATCH THAT NUMBER TO ROCK, PAPER, and SCISSORS
4. RETURN THAT WORD
```
## getHumanChoice()

### Plain English:

This game will be played by a human. They should be allowed to make their choice manually, using a prompt. Their choices must be limited to the same as those the computer can make. To facilitate this, let's make a function that takes no inputs, renders an input dialog, and returns the selection.

### Pseudocode:
```
1. WHEN THIS FUNCTION IS CALLED
2. PRESENT THE USER WITH A VISUAL PROMPT TO ENTER ONE OF THE THREE OPTIONS
3. RETURN THE USER'S WORD
```
## score variables

### Plain English:

We'll need to keep track of the players' running scores, across multiple rounds. To facilitate this, let's set up two variables, one for each player.

### Pseudocode:
```
1. TRACK COMPUTER SCORE, STARTING AT 0
2. TRACK HUMAN SCORE, STARTING AT 0
```
## playRound()

### Plain English:

The game of rock, paper, and scissors revolves around a comparison of players' choices. Matching hands results in a tie, while differing hands have to follow this logic:
Rock wins vs. Scissors,
Scissors wins vs. Paper,
Paper wins vs. Rock

### Pseudocode:
```
1. WHEN THIS FUNCTION IS CALLED WITH A COMPUTER CHOICE AND HUMAN CHOICE
2. NORMALIZE THE CAPITALIZATION OF THE HUMAN CHOICE
3. CALCULATE THE OUTCOME OF THE ROUND
4. LOG THE ROUND RESULT IN THE CONSOLE
5. UPDATE THE SCORES IF THE RESULT ISN'T A TIE
```
## playGame()

### Plain English:

Ensure a fair match by playing five rounds. To facilitate this, we need a function that takes no inputs, displays the winner (or a tie), then finishes.

### Pseudocode:
```
1. WHEN THIS FUNCTION IS CALLED
2. SET THE SCORES TO ZERO
3. PLAY 5 ROUNDS
    1. INCREMENT THE WINNER'S SCORE (IF NOT A TIE)
4. AT END:
    1. IF THE HUMAN WINS MORE, DECLARE THEM THE WINNER
    2. ELSE IF THE COMPUTER WINS MORE, DECLARE THEM THE WINNER
    3. ELSE DECLARE A TIE
4. FINISH GAME
```