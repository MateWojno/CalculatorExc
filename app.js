let displayValue = '';

function updateDisplay(value) {
    displayValue += value;
    document.getElementById('calculatorDisplay').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('calculatorDisplay').innerText = displayValue;
}

function calculateResult() {
    displayValue = eval(displayValue);
    document.getElementById('calculatorDisplay').innerText = displayValue;
}