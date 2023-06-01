const amountDue = document.getElementById('amount-due');
const tip = document.getElementById('tip');
const split = document.getElementById('split');
const submit = document.querySelector('.submit');
const tipTotal = document.querySelector('.tip-total')
const total = document.querySelector('.total');
const splitTotal = document.querySelector('.split-total');
const splitOutput = document.querySelector('.split-output');


submit.addEventListener('click', tipFunction);

function tipFunction() {
    let tipPercent = tip.value * 0.01;
    let tipBalance = Math.floor((tipPercent * amountDue.value) * 100) / 100;
    let grandTotal = tipBalance + parseFloat(amountDue.value);
    let splitNumber = split.value;
    let splitAmount = (grandTotal / splitNumber);
    let splitPerPerson = splitAmount.toFixed(2);

    tipTotal.innerHTML = `$${tipBalance}`;
    total.innerHTML = `$${grandTotal}`;
    splitTotal.innerHTML = `$${splitPerPerson}`;

    let remainder = (grandTotal - (splitPerPerson * splitNumber)).toFixed(2);
    let adjustedPrice = (parseFloat(remainder) + parseFloat(splitPerPerson)).toFixed(2);

    if (remainder > 0) {
        splitOutput.innerHTML = `**One person needs to add an additional $${remainder}, for a total of $${adjustedPrice}!**`
    } else {
        splitOutput.innerHTML = "";
    }

}
