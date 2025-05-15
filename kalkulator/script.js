let currentInput = '';
let operation = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number.toString();
  updateDisplay();
}

function operation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = '';
}

function updateDisplay() {
  document.getElementById('result').value = currentInput || '0';
}

function clearResult() {
  currentInput = '';
  previousInput = '';
  operation = '';
  updateDisplay();
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert('Cannot divide by zero');
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operation = '';
  previousInput = '';
  updateDisplay();
}
