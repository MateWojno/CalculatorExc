var firstNum = '';
var operator = '';
var secondNum = '';

const display = document.querySelector(".display");


function updateDisplay(input) {
    var displayValue = display.textContent;
    if ( 
        display.textContent.slice(-1) === '*' ||
        display.textContent.slice(-1) === '/' ||
        display.textContent.slice(-1) === '+' ||
        display.textContent.slice(-1) === '-' 
    ) {
        //          parse strings to floats;
        //      if '=' is pressed store num2 and calc result;
        return valueSetter(displayValue);
    }
    display.textContent += input;
    return displayValue;
};

function valueSetter(displayValue) {
    if (    
        displayValue.slice(-1) === '*' ||
        displayValue.slice(-1) === '/' ||
        displayValue.slice(-1) === '+' ||
        displayValue.slice(-1) === '-' 
        ) {
            console.log(displayValue);
            firstNumArr = displayValue.split(displayValue.slice(-1));
            firstNum = firstNumArr[0];
            operator = displayValue.slice(-1);
            console.log('operator: ', operator, 'firstNum: ', firstNum);
            return firstNum, operator;
        }
    // set secondNum - how?
}

function calcResult(firstNum, operator, secondNum) {
   console.log(firstNum, "... operator: ", operator, "...second num: ", secondNum);
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


