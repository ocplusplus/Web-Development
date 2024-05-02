document.addEventListener("DOMContentLoaded", function () {
    const guessForm = document.getElementById("guessForm");
    const guessInput = document.getElementById("guessInput");
    const submitBtn = document.getElementById("submitBtn");
    const gameContainer = document.getElementById("game-container");

    let guessCount = 0; // Added variable to track the number of guesses

    guessInput.addEventListener("input", function () {
        guessInput.value = guessInput.value.replace(/[^0-9]/g, '').substring(0, 4);
        submitBtn.disabled = guessInput.value.length !== 4;
    });

    function generateRandomNumber() {
        return Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    }

    const randomNumber = generateRandomNumber().toString();
    console.log("Initial Random Number:", randomNumber);

    function compareGuess() {
        guessCount++;

        const guess = guessInput.value;
        const correctDigits = countCorrectDigits(guess);
        const incorrectDigits = countIncorrectDigits(guess);

        addResultRow(guess, correctDigits, incorrectDigits);

        if (correctDigits === 4) {
            const message = `Well done! The correct answer is ${randomNumber}.`;
            alert(message);
            submitBtn.disabled = true;
            guessInput.disabled = true;
        } else if (guessCount >= 10) {
            alert("Game Over!");
            submitBtn.disabled = true;
            guessInput.disabled = true;
        } else {
            guessInput.value = '';
            guessInput.focus();
        }
    }

    function countCorrectDigits(guess) {
        let count = 0;
        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === randomNumber[i]) {
                count++;
            }
        }
        return count;
    }

    function countIncorrectDigits(guess) {
        let correctPlacements = Array(guess.length).fill(false);
        let incorrectDigitsCount = 0;

        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === randomNumber[i]) {
                correctPlacements[i] = "M";
            }
        }

        for (let i = 0; i < guess.length; i++) {
            if (correctPlacements[i] != "M") {
                for (let j = 0; j < guess.length; j++) {
                    if (guess[i] === randomNumber[j] && (correctPlacements[j] != "F") && (correctPlacements[j] != "M")) {
                        incorrectDigitsCount++;
                        correctPlacements[j] = "F";
                        break;
                    }
                }
            }
        }
        return incorrectDigitsCount;
    }

    function addResultRow(guess, correctDigits, incorrectDigits) {
        const row = document.createElement("div");
        row.classList.add("result-row");
        row.innerHTML = `
            <div>${guess}</div>
            <div>${correctDigits}</div>
            <div>${incorrectDigits}</div>
        `;
        gameContainer.appendChild(row);
    }

    guessInput.focus();

    guessForm.addEventListener("submit", function (event) {
        event.preventDefault();
        compareGuess();
    });

    guessInput.addEventListener("input", function () {
        submitBtn.disabled = guessInput.value.length !== 4;
    });
});
