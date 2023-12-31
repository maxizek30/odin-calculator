let num1;
let operationInProgress;
let num2;
let operation;
let prevOperation;
const display = document.querySelector('.display');
const prevCalc = document.querySelector('.prevCalc');
const calcButtons = document.querySelectorAll('.calcButton');
resetValues();
prevOperation = "";
calcButtons.forEach((item) => {
    item.addEventListener('click', buttonPressed)
});

//flow 


function buttonPressed(e) {
    switch(e.target.dataset.type) {
        case "num":
            if (operationInProgress === true) {
                if (e.target.id == 0 && num2 == "") {
                    //do nothing
                }
                else {
                    num2 = num2 + "" + e.target.id;
                }
                
            }
            else {
                if (e.target.id == 0 && num1 == "") {
                    //do nothing
                }
                else {
                    num1 = num1 + "" + e.target.id;
                }
            }
            updateDisplay();
            break;
        case "operation":
            if (num1 === "") {
                //do nothing
            }
            else if (operation != "" && num2 != "") {
                prevOperation = num1 + " " + operation + " " + num2;
                num1 = operate();
                let temp = num1;
                resetValues();
                num1 = temp;
                operationInProgress = true;
                operation = e.target.id;
                updateDisplay();
            }
            else {
                operationInProgress = true;
                operation = e.target.id;
                updateDisplay();
            }
            break;
        case "equals":
            if (num1 == "" || num2 == "" || operation == "") {
                //do nothing
            }
            else {
                prevOperation = num1 + " " + operation + " " + num2;
                num1 = operate();
                let temp = num1;
                resetValues();
                num1 = temp;
                updateDisplay();
            }
            break;
        case "clear":
            prevOperation = "";
            resetValues();
            updateDisplay();
            break;
    }

}
function updateDisplay() {
    prevCalc.innerHTML = prevOperation;
    
    display.innerHTML = num1 + " " + operation + " " + num2;

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
    let num = a / b ;
    if (num.toString().length > 8) {
        num = num.toFixed(8);
    }
    return num;
}
function resetValues() {
    num1 = "";
    num2 = "";
    operation = ""; 
    operationInProgress = "false";
}
