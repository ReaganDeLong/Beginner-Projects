const input = document.querySelector('.input-text');
const btn = document.querySelector('.button');
const vowel = document.querySelector('.vowel');
const consonant = document.querySelector('.consonant');
const space = document.querySelector('.spaces');

btn.addEventListener('click', superFunction);
input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        btn.click();
    }
});

function superFunction() {
    let vowelCount = 0;
    let consonantCount = 0;
    let spaceCount = 0;
    let phrase = input.value;
    for (let i = 0; i < phrase.length; i++) {
        let letter = phrase[i];
        if (letter.match(/[aeiou]/ig)) {
            vowelCount++;
        } else if (letter.match(/[bcdfghjklmnpqrstvwxyz]/ig)) {
            consonantCount++;
        } else if (letter.match(/\s/g)) {
            spaceCount++;
        }
        vowel.innerHTML = `"${phrase}" has ${vowelCount} vowel(s).`;
        consonant.innerHTML = `"${phrase}" has ${consonantCount} consonant(s).`;
        space.innerHTML = `"${phrase}"x has ${spaceCount} space(s).`
    }
    input.value = "";
}