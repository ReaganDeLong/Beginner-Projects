const btn = document.querySelector('.check');
const result = document.querySelector('.result');
const input = document.querySelector('.input-text');
const yesList = document.querySelector('.yes-results');
const noList = document.querySelector('.no-results');

btn.addEventListener('click', palindromeChecker);

input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        btn.click();
    }
});

const uniqueItems = [];

function addYes() {
    const value = input.value;
    if (!uniqueItems.includes(value)) {
        let li = document.createElement('li');
        li.innerHTML = value;
        yesList.appendChild(li);
        uniqueItems.push(value);
    }
}

function addNo() {
    const value = input.value;
    if (!uniqueItems.includes(value)) {
        let li = document.createElement('li');
        li.innerHTML = value;
        noList.appendChild(li);
        uniqueItems.push(value);
    }
}

function palindromeChecker() {
    const word = input.value;
    if (word === '') {
        alert("Please enter characters into the input field");
    } else {
        var len = word.length;
        var start = word.substring(0, Math.floor(len / 2)).toLowerCase();
        var end = word.substring(len - Math.floor(len / 2)).toLowerCase();
        var flip = [...end].reverse().join("");
        if (start === flip) {
            result.innerHTML = `${word} is a palindrome`;
            addYes();

        } else {
            result.innerHTML = `${word} is NOT a palindrome`;
            addNo();
        }
    }
    input.value = '';
}