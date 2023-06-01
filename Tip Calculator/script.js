const amountDue = document.getElementById('amount-due');
const tip = document.getElementById('tip');
const split = document.getElementById('split');
const submit = document.querySelector('.submit');
const tipTotal = document.querySelector('.tip-total')
const total = document.querySelector('.total');
const splitTotal = document.querySelector('.split-total');

submit.addEventListener('click', tipFunction);

function tipFunction() {
    let tipPercent = tip.value * 0.01;
    let tipBalance = tipPercent * amountDue.value;
    let grandTotal = tipBalance + parseFloat(amountDue.value);
    let splitNumber = split.value;
    let splitAmount = (grandTotal / splitNumber);

    tipTotal.innerHTML = `$${tipBalance}`;
    total.innerHTML = `$${grandTotal}`;
    splitTotal.innerHTML = `$${splitAmount}`;
}
