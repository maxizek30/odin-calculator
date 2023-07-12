let num1;
let operationInProgress;
let num2;
let operation;
const display = document.querySelector('.display');
const calcButtons = document.querySelectorAll('.calcButton');
resetValues();
calcButtons.forEach((item) => {
    item.addEventListener('click', buttonPressed)
});

//flow 


function buttonPressed(e) {
    switch(e.target.dataset.type) {
        case "num":
            if (operationInProgress === true) {
                num2 = num2 + "" + e.target.id;
            }
            else {
                num1 = num1 + "" + e.target.id;
            }
            updateDisplay();
            break;
        case "operation":
            if (num1 === "" || !operation === "") {
                //do nothing
            }
            else {
                operationInProgress = true;
                operation = e.target.id;
                updateDisplay();
            }
            break;
        case "equals":
            num1 = operate();
            let temp = num1;
            resetValues();
            num1 = temp;
            updateDisplay();
            break;
        case "clear":
            resetValues();
            updateDisplay();
            break;
    }

}
function updateDisplay() {
    console.log(num1 + " " + operation + " " + num2);
}

function operate() {
    let a = parseInt(num1);
    let b = parseInt(num2);
    switch (operation) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/": 
            return divide(a, b);
    }
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
function resetValues() {
    num1 = "";
    num2 = "";
    operation = ""; 
    operationInProgress = "false";
}