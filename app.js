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
        console.log("dupa1");
        // split it to 2 segments:
        //  - 1/ num1;
        //      - 2/ operator;
        //          parse strings to floats;
        //      if '=' is pressed store num2 and calc result;
        // split string before the operator, 
        //  operator and after operator
        //  and assign it to variables
        // return displayValue;
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
            console.log(firstNum); // got first num;
            return;
        }
    console.log('dupa2');
}

function calcResult(num1, operator, num2) {
    // parse firstNum, secondNum to float 
    // perform the appropriate operations
    // use switch 
};

function clearDisplay() {
    firstNum = '';
    operator = '';
    secondNum = '';
    console.log(firstNum, operator, secondNum);
    return display.textContent = '';
};

function keyboardController() {
    // handle keystrokes
};


