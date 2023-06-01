const btn = document.querySelector('.copy');
const input = document.querySelector('.input-text');

btn.addEventListener('click', copyFunction);
input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        btn.click();
    }
});

function copyFunction() {
    navigator.clipboard.writeText(input.value);
    btn.innerHTML = "Copied :)";
    setTimeout(() => {
        btn.innerHTML = "Copy";
    }, 2000);
    
    input.value = ""; 
}