function appendToDisplay(value) {
  if (value === '+' || value === '-' || value === '*' || value === '/') {
    const displayValue = document.getElementById('display').value;
    const lastChar = displayValue.charAt(displayValue.length - 1);
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
      document.getElementById('display').value = displayValue.slice(0, -1) + value;
    } else {
      document.getElementById('display').value += value;
    }
  } else {
    document.getElementById('display').value += value;
  }
}
function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
function clearDisplay() {
  document.getElementById('display').value = '';
}
