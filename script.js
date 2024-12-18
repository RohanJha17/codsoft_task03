var typed = new Typed(".text", {
    strings: ["Calculator!"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

const display = document.getElementById("display");

function appendValue(value) {
  const lastChar = display.value.slice(-1);
  if (isOperator(value) && isOperator(lastChar)) {
    display.value = display.value.slice(0, -1) + value;
  } else {
    display.value += value;
  }
}

function isOperator(char) {
  return ['+', '-', '*', '/', '%'].includes(char);
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let expression = display.value;
     // Handle percentage calculations
    expression = expression.replace(/(\d+)%/g, "($1 / 100)");
    if (expression === "" || isOperator(expression.slice(-1))) {
      alert("Invalid input");
      return;
    }
    display.value = eval(expression);
  } catch (error) {
    alert("Error in calculation. Please check the input.");
    clearDisplay();
  }
}
