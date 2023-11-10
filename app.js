let firstNum = '';
let operator = '';
let secondNum = '';

const display = document.querySelector(".display");


// Check if the last character is one of the operators
function updateDisplay(input) {
    if (input === '*' ||
        input === '/' ||
        input === '-' ||
        input === '+' 
    ) {
        
        // append operator only once
        // split string before the operator, 
        //  operator and after operator
        //  and assign it to variables
    }
       
    display.textContent += input;
    var displayValue = display.textContent;
    return displayValue;
};

function calcResult(num1, operator, num2) {
    // parse firstNum, secondNum to float 
    // perform the appropriate operations
    // use switch 
};

function clearDisplay() {
    return display.textContent = '';
};

function keyboardController() {
    // handle keystrokes
};


