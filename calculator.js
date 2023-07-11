let num1;
let num2
let operation;
let displayValue;
const display = document.querySelector('.display');
const calcButtons = document.querySelectorAll('.calcButton');
calcButtons.forEach((item) => {
    item.addEventListener('click', button)
});

//flow 

function buttonPressed(e) {
    switch(e.target.id) {
        case clear:
            num1 = "o";
            num2 = "o";

    }
}
function updateDisplay() {
    display.innerHTML = num1 + " " + operation + " " + num2;
}

function operate(num1, num2) {
    return null;
}
//operations
function add (a, b) {
    return a + b;
}
function subtract (a, b) {
    return a - b;
}
function multiply (a, b) {
    return a * b;
}
function divide (a, b) {
    return a / b;
}
