var firstNum = '';
var operator = '';
var secondNum = '';

const display = document.querySelector(".display");


function updateDisplay(input) {
    if ( 
    display.textContent.slice(-1) === '*' ||
    display.textContent.slice(-1) === '/' ||
    display.textContent.slice(-1) === '+' ||
    display.textContent.slice(-1) === '-' 
    ) {
        console.log("dupa");
        // split it to 2 segments:
        //  - 1/ num1;
        //      - 2/ operator;
        //          parse strings to floats;
        //      if '=' is pressed store num2 and calc result;
        // append operator only once
        // split string before the operator, 
        //  operator and after operator
        //  and assign it to variables
    }
       
    display.textContent += input;
    // var displayValue = display.textContent;
    // return displayValue;
};

function calcResult(num1, operator, num2) {
    // parse firstNum, secondNum to float 
    // perform the appropriate operations
    // use switch 
};

function clearDisplay() {
    firstNum = '';
    operator = '';
    secondNum = '';
    return display.textContent = '';
};

function keyboardController() {
    // handle keystrokes
};


