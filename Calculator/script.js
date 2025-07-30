const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;
  const validKeys = "0123456789+-*/().";
  
  if (validKeys.includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    clearDisplay();
  }
});







