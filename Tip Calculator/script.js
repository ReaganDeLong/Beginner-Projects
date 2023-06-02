const amountDue = document.getElementById('amount-due');
const tip = document.getElementById('tip');
const split = document.getElementById('split');
const submit = document.querySelector('.submit');
const tipTotal = document.querySelector('.tip-total')
const total = document.querySelector('.total');
const splitTotal = document.querySelector('.split-total');
const splitOutput = document.querySelector('.split-output');
const error1 = document.querySelector('.error1')
const error2 = document.querySelector('.error2')
const error3 = document.querySelector('.error3')

submit.addEventListener('click', tipFunction);

function tipFunction() {
    tipTotal.innerHTML = "$0";
    total.innerHTML = "$0";
    splitTotal.innerHTML = "$0";
    error1.style.display = "none";
    error2.style.display = "none";
    error3.style.display = "none";

    if (amountDue.value <= 0) {
        error1.style.display = "block";
    } if (tip.value < 0) {
        error2.style.display = "block";
    } if (split.value < 1) {
        error3.style.display = "block";
    } else {

    let tipPercent = tip.value * 0.01;
    let tipBalance = Math.floor((tipPercent * amountDue.value) * 100) / 100;
    let grandTotal = tipBalance + parseFloat(amountDue.value);
    let splitNumber = split.value;
    let splitAmount = (grandTotal / splitNumber);
    let splitPerPerson = splitAmount.toFixed(2);

    if (isNaN(tipBalance)) {
        tipBalance = 0.00;}
    if (isNaN(grandTotal)) {
        grandTotal = 0.00;}
    if (isNaN(splitPerPerson)) {
        splitPerPerson = 0.00;}

    tipTotal.innerHTML = `$${tipBalance.toFixed(2)}`;
    total.innerHTML = `$${grandTotal.toFixed(2)}`;
    splitTotal.innerHTML = `$${splitPerPerson}`;

    let remainder = (grandTotal - (splitPerPerson * splitNumber)).toFixed(2);
    let adjustedPrice = (parseFloat(remainder) + parseFloat(splitPerPerson)).toFixed(2);

    if (remainder > 0) {
        splitOutput.innerHTML = `**One person needs to add an additional $${remainder}, for a total of $${adjustedPrice}!**`
    } else {
        splitOutput.innerHTML = "";
    }
}
};
