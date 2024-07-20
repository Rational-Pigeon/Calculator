let num1 = "";
let operation;
let num2 = "";
let display = "0";
const keys = document.querySelectorAll(".btn");
const buttons = document.getElementById("calculator");
const displayScreen = document.getElementById("display");
updateDisplay();

function operate(num1, operation, num2) {
    num1 = +num1;
    num2 = +num2;
    switch (operation) {
        case "+":
            return (num1 + num2).toString();
        case "-":
            return (num1 - num2).toString();
        case "×":
            return (num1 * num2).toString();
        case "÷":
            if (num2 === 0) {
                return "୧༼ಠ益ಠ༽୨";
            }
            else {
                return (num1 / num2).toFixed(2).toString();
            }
    }
}

function updateNumbers(event) {
    if (operation) {
        if (num2.length <= 10) {
            num2 += event.target.textContent;
            display = num2;
        }
    }
    else {
        if (num1.length <= 10) {
            num1 += event.target.textContent;
            display = num1;
        }
    }

}

function backspace() {
    if (operation) {
        if (num2) {
            num2 = num2.slice(0, -1);
            display = num2;
        }
        else { return; }
    }
    else {
        if (num1) {
            num1 = num1.slice(0, -1);
            display = num1;
        }
    }
}

function updateDisplay() {
    // fun div by 0 error:
    if (display === "୧༼ಠ益ಠ༽୨") {
        displayScreen.textContent = display;
        return;
    }
    //remove leading zeroes
    display = (+display).toString();
    if (display.length <= 11) {
        displayScreen.textContent = display;
    }
    else
        displayScreen.textContent = "＼（〇_ｏ）／"
}

function clear() {
    num1 = "";
    num2 = "";
    display = "0";
    operation = null;
}

function update(event) {
    if (event.target.classList.contains("num")) {
        updateNumbers(event);
    }

    else if (event.target.classList.contains("op")) {
        if (!operation) {
            operation = event.target.textContent;

            // this nested if, puts the result of previous operation as num1
            if (!num1 && !(display === "0")) {
                num1 = display;
            }
        }
        else {
            display = operate(num1, operation, num2);
            num1 = display;
            operation = event.target.textContent;
            num2 = "";
        }
    }

    else if (event.target.classList.contains("eq")) {
        if (operation) {
            display = operate(num1, operation, num2);
            num1 = "";
            num2 = "";
            operation = null;
        }
        else { return }
    }

    else if (event.target.classList.contains("clear")) {
        clear();
    }

    else if (event.target.classList.contains("backspace")) {
        backspace();
    }

    updateDisplay();
}

buttons.addEventListener("click", update)





// button interactivity
keys.forEach(key => {
    key.addEventListener("click", () => {
        key.style.borderTopColor = "#f6c2f3";
        key.style.borderLeftColor = "#f6c2f3";
        key.style.borderRightWidth = "2px";
        key.style.borderBottomWidth = "2px";

        setTimeout(() => {
            key.style.borderTopColor = "";
            key.style.borderLeftColor = "";
            key.style.borderRightWidth = "";
            key.style.borderBottomWidth = "";
        }, 150)
    });
});
