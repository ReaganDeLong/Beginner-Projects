const count = document.querySelector('.count');
const buttons = document.querySelector('.button-container');

const happy1 = document.getElementById('happy-1');
const happy2 = document.getElementById('happy-2');
const happy3 = document.getElementById('happy-3');
const sad1 = document.getElementById('sad-1');
const sad2 = document.getElementById('sad-2');
const sad3 = document.getElementById('sad-3');
const neutral = document.getElementById('neutral');

buttons.addEventListener('click', counterFunction);

function counterFunction(e) {
    if (e.target.classList.contains('add')) {
        count.innerHTML++;
    }
    if (e.target.classList.contains('subtract')) {
        count.innerHTML--;
    }
    if (e.target.classList.contains('reset')) {
        count.innerHTML = 0;
        neutralFunction();
    }
    setColor();
    samFunction();
    setRange();
}

function setRange() {
    if (count.innerHTML > 10) {
        count.innerHTML = 10;
    } else if (count.innerHTML < -10) {
        count.innerHTML = -10;
    }
}

function setColor() {
    if (count.innerHTML > 3 && count.innerHTML < 8) {
        count.style.color = "lightgreen";
    } else if (count.innerHTML >= 8) {
        count.style.color = "green";
    } else if (count.innerHTML < -3 && count.innerHTML > -8) {
        count.style.color = "orange";
    } else if (count.innerHTML <= -8) {
        count.style.color = "red";
    } else {
        count.style.color = "black";
    }
}

function samFunction() {
    if (count.innerHTML >= 8) {
        happy1.style.display = "none";
        happy2.style.display = "none";
        happy3.style.display = "block";
        sad1.style.display = "none";
        sad2.style.display = "none";
        sad3.style.display = "none";
        neutral.style.display = "none";
    } else if (count.innerHTML > 3 && count.innerHTML < 8) {
        happy1.style.display = "none";
        happy2.style.display = "block";
        happy3.style.display = "none";
        sad1.style.display = "none";
        sad2.style.display = "none";
        sad3.style.display = "none";
        neutral.style.display = "none";
    } else if (count.innerHTML > 0 && count.innerHTML < 4) {
        happy1.style.display = "block";
        happy2.style.display = "none";
        happy3.style.display = "none";
        sad1.style.display = "none";
        sad2.style.display = "none";
        sad3.style.display = "none";
        neutral.style.display = "none";
    } else if (count.innerHTML < 0 && count.innerHTML >= -3) {
        happy1.style.display = "none";
        happy2.style.display = "none";
        happy3.style.display = "none";
        sad1.style.display = "block";
        sad2.style.display = "none";
        sad3.style.display = "none";
        neutral.style.display = "none";
    } else if (count.innerHTML < -3 && count.innerHTML > -8) {
        happy1.style.display = "none";
        happy2.style.display = "none";
        happy3.style.display = "none";
        sad1.style.display = "none";
        sad2.style.display = "block";
        sad3.style.display = "none";
        neutral.style.display = "none";
    } else if (count.innerHTML <= -8) {
        happy1.style.display = "none";
        happy2.style.display = "none";
        happy3.style.display = "none";
        sad1.style.display = "none";
        sad2.style.display = "none";
        sad3.style.display = "block";
        neutral.style.display = "none";
    } else {
        happy1.style.display = "none";
        happy2.style.display = "none";
        happy3.style.display = "none";
        sad1.style.display = "none";
        sad2.style.display = "none";
        sad3.style.display = "none";
        neutral.style.display = "block";
    }
}

function neutralFunction() {
    happy1.style.display = "none";
    happy2.style.display = "none";
    happy3.style.display = "none";
    sad1.style.display = "none";
    sad2.style.display = "none";
    sad3.style.display = "none";
    neutral.style.display = "block";

}