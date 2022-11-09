class Calculator {
  constructor(previousOperands, currentOperands) {
    this.previousOperands = previousOperands;
    this.currentOperands = currentOperands;
    this.clear();
  }

  clear() {
    this.current = "";
    this.previous = "";
    this.operation = undefined;
  }
  delete() {
    this.current = this.current.toString().slice(0, -1);
  }
  appendNumber(number) {
    if (number === "." && this.current.includes(".")) return;
    this.current = this.current.toString() + number.toString();
  }
  chooseOperation(operation) {
    if (this.current === "") return;
    if (this.previous !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previous = this.current;
    this.current = "";
  }
  compute() {
    let computation;
    var prev = parseFloat(this.previous);
    var curr = parseFloat(this.current);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (this.operation) {
      case "+":
        computation = prev + curr;
        break;
      case "-":
        computation = prev - curr;
        break;
      case "*":
        computation = prev * curr;
        break;
      case "/":
        computation = prev / curr;
        break;
    }
    this.current = computation;
    this.previous = "";
    this.operation = undefined;
  }
  updateDisplay() {
    this.currentOperands.innerText = this.current;
    this.previousOperands.innerText = this.previous;
  }
}

var numberBtn = document.querySelectorAll("#number");
var operationBtn = document.querySelectorAll("#operation");
var equalsBtn = document.querySelector("#equals");
var resetBtn = document.querySelector("#reset");
var deleteBtn = document.querySelector("#del");
var currentOperands = document.querySelector("#current-operand");
var previousOperands = document.querySelector("#previous-operand");
var calculator = new Calculator(previousOperands, currentOperands);

var calculator = new Calculator(previousOperands, currentOperands);

numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
operationBtn.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});
equalsBtn.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});
resetBtn.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});
deleteBtn.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
