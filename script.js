const numberInput = document.getElementById('numberInput');
const output = document.getElementById('output');

numberInput.addEventListener('input', () => {
    const number = parseInt(numberInput.value);

     if (isNaN(number)) {
        output.textContent = "";
        return;
    } 

    if (number < 0) {
        output.textContent = "Enter a positive value";
    } else if (number % 2 === 0) {
        const nextEvens = [number + 2, number + 4, number + 6];
        output.textContent = `Next 3 even numbers: ${nextEvens.join(', ')}`;
    } else {
        const nextOdds = [number + 2, number + 4, number + 6];
        output.textContent = `Next 3 odd numbers: ${nextOdds.join(', ')}`;
    }
});