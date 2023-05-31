const first = document.querySelector('.first');
const second = document.querySelector('.second');
const higher = document.querySelector('.higher');
const lower = document.querySelector('.lower');
const generate = document.querySelector('.generate');
const reset = document.querySelector('.reset');
const correct = document.querySelector('.correct');
const incorrect = document.querySelector('.incorrect');
let isHigherToggled = false;
let isLowerToggled = false;

generate.addEventListener('click', getSecond);
reset.addEventListener('click', resetPage);

function toggleButtonSelection(buttonNumber) {
    if (buttonNumber === 1) {
        higher.classList.add('selected-button');
        lower.classList.remove('selected-button');
        isHigherToggled = true;
        isLowerToggled = false;
    } else if (buttonNumber === 2) {
        lower.classList.add('selected-button');
        higher.classList.remove('selected-button');
        isLowerToggled = true;
        isHigherToggled = false;
    }
}

function getFirst() {
    const random = Math.floor(Math.random() * 100) + 1;
    first.innerHTML = random;
}

function getSecond() {
    const random = Math.floor(Math.random() * 100) + 1;

    if (isLowerToggled === false && isHigherToggled === false) {
        alert("Please select either 'Greater' or 'Less' below");
    } else { 
        second.innerHTML = random;
        resultText();
    }
}

function resetPage() {
    getFirst();
    second.innerHTML = "";
    correct.innerHTML = '';
    incorrect.innerHTML = '';
    higher.classList.remove('selected-button');
    lower.classList.remove('selected-button');
    isHigherToggled = false;
    isLowerToggled = false;
}

function resultText() {
    if (parseInt(second.innerHTML) > parseInt(first.innerHTML) && isHigherToggled === true) {
        correct.innerHTML = `Correct! ${second.innerHTML} is greater than ${first.innerHTML}`;
        incorrect.innerHTML = '';
    } else if (parseInt(second.innerHTML) > parseInt(first.innerHTML) && isLowerToggled === true) {
        incorrect.innerHTML = `Incorrect, ${second.innerHTML} is greater than ${first.innerHTML}`;
        correct.innerHTML = '';
    } else if (parseInt(second.innerHTML) < parseInt(first.innerHTML) && isLowerToggled === true) {
        incorrect.innerHTML = '';
        correct.innerHTML = `Correct! ${second.innerHTML} is less than ${first.innerHTML}`;
    } else if (parseInt(second.innerHTML) < parseInt(first.innerHTML) && isHigherToggled === true) {
        incorrect.innerHTML = `Incorrect, ${second.innerHTML} is less than ${first.innerHTML}`;
        correct.innerHTML = '';
    }
}

getFirst();
