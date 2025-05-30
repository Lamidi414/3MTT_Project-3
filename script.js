let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

document.addEventListener('keydown', function (event) {
  const key = event.key;
  
  if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter' || key === '=') {
    calculateResult();
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}
// Toggle dark mode